import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PresentationProvider from "./context/presentation";
import reportWebVitals from './reportWebVitals';
import { editorData } from "./types/example/maxtest";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      {/*<App editor={editorData} />*/}
      <PresentationProvider>
          <App />
      </PresentationProvider>
  </React.StrictMode>,
);
reportWebVitals();
