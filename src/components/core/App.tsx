import { Provider } from 'react-redux';
import { store } from '../../logics/general/store';
import { ThemeProvider } from '@emotion/react';
import { muiThemeConfig } from '../../styles/mui/muiThemeConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/tailwind/index.css';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiThemeConfig}>
        <Router />
        <ToastContainer autoClose={5000} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
