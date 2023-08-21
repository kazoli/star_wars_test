import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../logics/general/store';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Main from '../components/pages/Main';
import NotFound from '../components/pages/NotFound';

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

  it('should render the NotFound component and return to main page after clicking the back link', () => {
    const invalidRoute = '/invalid';
    // set history to an invalid page
    const history = createMemoryHistory({ initialEntries: [invalidRoute] });
    // render the NotFound component
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <NotFound></NotFound>
      </Router>,
    );
    // expect to get the invalid route
    expect(history.location.pathname).toBe(invalidRoute);
    // expect NotFound page was loaded and on it the go back to main page link can be clicked
    fireEvent.click(getByText('Go back to main page'));
    // expect to return to the main page
    expect(history.location.pathname).toBe('/');
  });
});
