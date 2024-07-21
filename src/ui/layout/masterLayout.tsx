import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import React from 'react';
import useNotifyService from '../../application/services/impl/notifyServiceImpl';
import { NotifyService } from '../../application/services/notifyService.types';

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
