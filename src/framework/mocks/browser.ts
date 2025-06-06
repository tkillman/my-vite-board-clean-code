import { setupWorker } from 'msw/browser';

import { boardHandler } from '~/src/framework/mocks/handlers/boardHandler.ts';

export const worker = setupWorker(...boardHandler);
