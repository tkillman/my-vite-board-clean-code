import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './footerView';
import HeaderView from './headerView';

import { boardOptions } from '~/src/framework/mocks/datas/boardMockDatas';

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
      <select>
        {boardOptions.map((r) => {
          return (
            <option key={r.label} value={r.label}>
              {r.label}
            </option>
          );
        })}
      </select>
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
