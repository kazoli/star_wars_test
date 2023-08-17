import { Provider } from 'react-redux';
import { store } from '../../logics/general/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/index.css';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer autoClose={5000} />
    </Provider>
  );
}

export default App;
