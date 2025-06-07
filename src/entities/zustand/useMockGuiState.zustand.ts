import { produce } from 'immer';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ApiPath } from '~/src/framework/api/enumApi';

interface UseMockGuiState {
  isAllOn: boolean;
  mocks: Partial<{
    [key in ApiPath]: { isOn: boolean; selectedCase: 'default' | string };
  }>;
  onChangeSelectCase: (
    apiPath: ApiPath,
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
        apiPath: ApiPath,
        selectedCase: 'default' | string
      ) => {
        set((state) => {
          return produce(state, (draft) => {
            if (!draft.mocks[apiPath]) {
              draft.mocks[apiPath] = { isOn: false, selectedCase: 'default' };
            }
            draft.mocks[apiPath].selectedCase = selectedCase;
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
