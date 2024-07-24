import React, { PropsWithChildren } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
//import BoardView from './ui/pages/board/boardView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import MasterLayout from './ui/layout/masterLayout';
import { RoutePath } from './entities/route.domain';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const LazyBoardListView = React.lazy(
  () => import('./ui/pages/board/boardListView')
);
const LazyBoardView = React.lazy(() => import('./ui/pages/board/boardView'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const targetElement = (routePath: RoutePath) => {
  return (
    <React.Suspense fallback={<div>로딩중</div>}>
      {routePath === RoutePath.MAIN && <LazyBoardListView />}
      {routePath === RoutePath.DETAIL && <LazyBoardView />}
    </React.Suspense>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <HashRouter>
          <Routes>
            <Route path={RoutePath.MAIN} element={<MasterLayout />}>
              <Route index element={targetElement(RoutePath.MAIN)} />
              <Route
                path={RoutePath.DETAIL}
                element={targetElement(RoutePath.DETAIL)}
              />
            </Route>
          </Routes>
        </HashRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
