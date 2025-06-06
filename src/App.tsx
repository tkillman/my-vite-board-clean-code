import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
//import BoardView from './ui/pages/board/boardView';
import { RecoilRoot } from 'recoil';

import { RoutePath } from './entities/route.domain';
import MasterLayout from './ui/views/layout/masterLayout';

import { worker } from '~/src/framework/mocks/browser';

const LazyMainPage = React.lazy(() => import('~/pages/mainPage'));
const LazyBoardCreatePage = React.lazy(() => import('~/pages/boardCreatePage'));
const LazyBoardDetailPage = React.lazy(() => import('~/pages/boardDetailPage'));
const LazyAdPage = React.lazy(() => import('~/pages/adPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const elements: Partial<Record<RoutePath, React.ReactNode>> = {
  [RoutePath.MAIN]: <LazyMainPage />,
  [RoutePath.BOARD_CREATE]: <LazyBoardCreatePage />,
  [RoutePath.BOARD_DETAIL]: <LazyBoardDetailPage />,
  [RoutePath.BOARD_UPDATE]: <LazyBoardCreatePage />,
};

const App = () => {
  const mockYn = localStorage.getItem('mockYn');
  if (mockYn === 'Y') {
    // If you are using MSW for mocking, uncomment the following line
    worker.start();
  }
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <HashRouter>
          <Routes>
            <Route
              path={RoutePath.AD}
              element={
                <Suspense>
                  <LazyAdPage />
                </Suspense>
              }
            ></Route>
            <Route element={<MasterLayout />}>
              {Object.entries(RoutePath).map(([key, value]) => {
                return (
                  <Route
                    key={key}
                    path={value}
                    element={
                      <Suspense>{elements[value as RoutePath]}</Suspense>
                    }
                  />
                );
              })}
            </Route>
          </Routes>
        </HashRouter>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
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
