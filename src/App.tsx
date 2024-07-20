import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './ui/pages/board/board';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Board} />
      </Routes>
    </HashRouter>
  );
};

export default App;
