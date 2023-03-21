import './main.scss';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './common/store';
import App from './components/app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
