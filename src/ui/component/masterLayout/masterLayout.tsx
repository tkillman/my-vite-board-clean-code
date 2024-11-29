import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../footer/footerView';
import Header from '../header/headerView';

const LazyNotifyView = React.lazy(() => import('../notify/notifyView'));

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
        <LazyNotifyView />
      </React.Suspense>
    </div>
  );
};

export default MasterLayout;
