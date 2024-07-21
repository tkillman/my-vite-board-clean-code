import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
//import BoardView from './ui/pages/board/boardView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import MasterLayout from './ui/layout/masterLayout';
import { RoutePath } from './entities/route.domain';

const LazyBoardListView = React.lazy(
  () => import('./ui/pages/board/boardListView')
);
const LazyBoardView = React.lazy(() => import('./ui/pages/board/boardView'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <HashRouter>
          <Routes>
            <Route path={RoutePath.MAIN} element={<MasterLayout />}>
              <Route index element={<LazyBoardListView />} />
              <Route path={RoutePath.DETAIL} element={<LazyBoardView />} />
            </Route>
          </Routes>
        </HashRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
