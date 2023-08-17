import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
