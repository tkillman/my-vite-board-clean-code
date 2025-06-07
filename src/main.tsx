import ReactDOM from 'react-dom/client';

import App from './App.tsx';
//import './index.css';

const onOffWorker = async () => {
  const mockGuiStorage = localStorage.getItem('mock-gui-storage');

  if (!mockGuiStorage) {
    return;
  }

  const isAllOn = JSON.parse(mockGuiStorage)?.isAllOn;

  if (isAllOn === 'true') {
    // If you are using MSW for mocking, uncomment the following line
    const { worker } = await import('../src/framework/mocks/browser.ts');
    return worker.start();
  }
};

onOffWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
