// web dom manupulated by 2,3 line code libraries
import React from 'react';// react core foundational library for all references
import ReactDOM from 'react-dom/client'; // implement on web of react

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>{/* //iske bina bhi chaljata h */} 
    <App />{/* //custom tags bana parhe h */}
  </React.StrictMode>
);


