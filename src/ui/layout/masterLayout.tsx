import { Outlet } from 'react-router-dom';
import Footer from './footerView';
import Header from './headerView';
import React from 'react';

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
