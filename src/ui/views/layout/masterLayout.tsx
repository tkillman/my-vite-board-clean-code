import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './footerView';
import HeaderView from './headerView';

import { useMockGuiState } from '~/src/entities/zustand/useMockGuiState.zustand';
import { Apies, ApiPath } from '~/src/framework/api/enumApi';
import { cases } from '~/src/framework/mocks/handlers/case';

const LazyNotifyPT = React.lazy(() => import('~/presenters/notify/notifyPT'));

interface IProps {}

const MasterLayout: React.FC<IProps> = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  useEffect(() => {
    const mockYn = localStorage.getItem('mockYn');
    if (mockYn === 'Y') {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }, []);

  const mocks = useMockGuiState.getState().mocks;

  const onChangeSelectCase = useMockGuiState(
    (state) => state.onChangeSelectCase
  );

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          if (isOn) {
            localStorage.setItem('mockYn', 'N');
          } else {
            localStorage.setItem('mockYn', 'Y');
          }
          window.location.reload();
        }}
      >
        목 키고 끄기 {localStorage.getItem('mockYn')}
      </button>
      <div className="flex flex-col gap-2">
        {Object.entries(cases).map(([apiPath, caseObj]) => {
          return (
            <div key={apiPath}>
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <strong>{Apies[apiPath].method}</strong>
                  <strong>{apiPath}</strong>
                </div>
                <select
                  onChange={(e) => {
                    const selectedCase = e.target.value;
                    onChangeSelectCase(apiPath as ApiPath, selectedCase);
                    window.location.reload();
                  }}
                  value={mocks[apiPath as ApiPath]?.selectedCase || 'default'}
                >
                  {Object.keys(caseObj).map((caseKey, index) => {
                    const caseInfo = caseObj[caseKey];
                    return (
                      <option key={index} value={caseKey}>
                        {caseInfo.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <span>{Apies[apiPath].detail}</span>
              </div>
            </div>
          );
        })}
      </div>
      <HeaderView />
      <main>
        <Outlet />
      </main>
      <Footer />
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyNotifyPT />
      </React.Suspense>
    </div>
  );
};

export default MasterLayout;
