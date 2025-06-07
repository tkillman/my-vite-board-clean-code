import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ApiPath } from '~/src/framework/api/enumApi';

interface UseMockGuiState {
  isAllOn: boolean;
  mocks: Partial<{ [key in ApiPath]: { isOn: boolean; selectedCase: string } }>;
}

export const useMockGuiState = create<UseMockGuiState>()(
  persist(
    (set) => ({
      isAllOn: false,
      mocks: {
        [ApiPath['POST_api/searchBoardList']]: {
          isOn: false,
          selectedCase: '',
        },
      },
    }),
    {
      name: 'mock-gui-storage', // unique name for the storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
