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
import MasterLayout from './ui/layout/masterLayout';

const LazyBoardListPage = React.lazy(() => import('~/pages/boardListPage'));
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

// Sentry.init({
//   dsn: 'https://345f2dd5c885e5d2e30d42fffb490b69@o4508155676459008.ingest.us.sentry.io/4508155677769728',
//   integrations: [
//     // See docs for support of different versions of variation of react router
//     // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect,
//       useLocation,
//       useNavigationType,
//       createRoutesFromChildren,
//       matchRoutes,
//     }),
//     Sentry.replayIntegration(),
//   ],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for tracing.
//   tracesSampleRate: 1.0,

//   // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
//   tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

//   // Capture Replay for 10% of all sessions,
//   // plus for 100% of sessions with an error
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });
