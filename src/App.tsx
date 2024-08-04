import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { PropsWithChildren } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
//import BoardView from './ui/pages/board/boardView';
import { RecoilRoot } from 'recoil';

import { RoutePath } from './entities/route.domain';
import MasterLayout from './ui/layout/masterLayout';

const LazyBoardListPage = React.lazy(
  () => import('./ui/pages/board/boardListPage')
);
const LazyBoardCreatePage = React.lazy(
  () => import('./ui/pages/board/boardCreatePage')
);
const LazyBoardDetailPage = React.lazy(
  () => import('./ui/pages/board/boardDetailPage')
);

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
      {routePath === RoutePath.MAIN && <LazyBoardListPage />}
      {routePath === RoutePath.BOARD_CREATE && <LazyBoardCreatePage />}
      {routePath === RoutePath.BOARD_DETAIL && <LazyBoardDetailPage />}
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
                path={RoutePath.BOARD_CREATE}
                element={targetElement(RoutePath.BOARD_CREATE)}
              />
              <Route
                path={RoutePath.BOARD_DETAIL}
                element={targetElement(RoutePath.BOARD_DETAIL)}
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
