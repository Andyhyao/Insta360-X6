import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used only at build time (scripts/prerender.mjs) to pre-render the page's HTML.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
