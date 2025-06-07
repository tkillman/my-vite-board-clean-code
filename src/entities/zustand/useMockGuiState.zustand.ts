import { produce } from 'immer';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ApiPath, isApiPath } from '~/src/framework/api/enumApi';

interface UseMockGuiState {
  isAllOn: boolean;
  mocks: Partial<{
    [key in ApiPath]: { isOn: boolean; selectedCase: 'default' | string };
  }>;
  onChangeSelectCase: (
    apiPath: string,
    selectedCase: 'default' | string
  ) => void;
}

export const useMockGuiState = create<UseMockGuiState>()(
  persist(
    (set) => ({
      isAllOn: false,
      mocks: {
        [ApiPath['POST_api/searchBoardList']]: {
          isOn: true,
          selectedCase: 'default',
        },
      },
      onChangeSelectCase: (
        apiPath: string,
        selectedCase: 'default' | string
      ) => {
        set((state) => {
          return produce(state, (draft) => {
            if (isApiPath(apiPath)) {
              draft.mocks[apiPath] ??= { isOn: false, selectedCase: 'default' };
              draft.mocks[apiPath]!.selectedCase = selectedCase;
            }
          });
        });
      },
    }),
    {
      name: 'mock-gui-storage', // unique name for the storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
