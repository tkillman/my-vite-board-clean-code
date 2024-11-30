import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './footerView';
import Header from './headerView';

const LazyNotifyPT = React.lazy(() => import('~/presenters/notify/notifyPT'));

interface IProps {}

const MasterLayout: React.FC<IProps> = () => {
  return (
    <div>
      <Header />
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
