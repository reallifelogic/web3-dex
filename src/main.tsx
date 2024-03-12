import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'evergreen-ui';
import { store } from './redux/store';
import { theme } from './styles/theme';
import './styles.scss';

import AppNavigator from './routes/AppNavigator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider value={theme}>
        <BrowserRouter>
          <AppNavigator />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
