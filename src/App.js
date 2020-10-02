import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import 'semantic-ui-css/semantic.min.css'
// import './App.css';

import BaseRouter from './routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
