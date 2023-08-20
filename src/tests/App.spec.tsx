import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../logics/general/store';
import { BrowserRouter } from 'react-router-dom';
import Main from '../components/pages/Main';

window.scrollTo = jest.fn();

describe('render main page of Star Wars', () => {
  it('should render main correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>,
    );
  });
});
