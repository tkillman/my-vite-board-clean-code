import * as Sentry from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
//import BoardView from './ui/pages/board/boardView';
import { RecoilRoot } from 'recoil';

import { RoutePath } from './entities/route.domain';
import MasterLayout from './ui/component/masterLayout/masterLayout';

const LazyMainPage = React.lazy(() => import('~/pages/mainPage'));
const LazyBoardCreatePage = React.lazy(() => import('~/pages/board_create'));
const LazyBoardDetailPage = React.lazy(() => import('~/pages/board_detail'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const targetElement = (routePath: RoutePath) => {
  return (
    <React.Suspense fallback={<div>로딩중</div>}>
      {routePath === RoutePath.MAIN && <LazyMainPage />}
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

// Sentry.init({
//   dsn: 'https://3258429933038159eb72865056efeb88@o4508155676459008.ingest.us.sentry.io/4508341954412544',
//   // integrations: [
//   //   Sentry.browserTracingIntegration(),
//   //   // Sentry.browserApiErrorsIntegration({
//   //   //   setTimeout: true,
//   //   //   setInterval: true,
//   //   //   requestAnimationFrame: true,
//   //   //   XMLHttpRequest: true,
//   //   //   eventTarget: true,
//   //   // }),
//   //   // Sentry.breadcrumbsIntegration({
//   //   //   console: true,
//   //   //   dom: true,
//   //   //   fetch: true,
//   //   //   history: true,
//   //   //   xhr: true,
//   //   // }),
//   //   Sentry.httpClientIntegration(),
//   // ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for tracing.
//   tracesSampleRate: 1.0,
// });
