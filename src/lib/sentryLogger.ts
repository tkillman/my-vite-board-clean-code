import * as Sentry from '@sentry/react';
import axios from 'axios';

export const sentryLogger = (error: Error) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      Sentry.withScope((scope) => {
        scope.setTag('type', 'response exist');
        Sentry.captureException(error);
      });
    } else if (error.request) {
      Sentry.withScope((scope) => {
        scope.setTag('type', 'request exist, no response');
        Sentry.captureException(error);
      });
    }
  } else {
    Sentry.withScope((scope) => {
      scope.setTag('type', 'no axios error');
      Sentry.captureException(error);
    });
  }
};
