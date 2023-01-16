import { StrictMode } from 'react';
import { createRoot } from 'react-dom';

import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
