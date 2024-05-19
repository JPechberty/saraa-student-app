import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './App.css'
//import {MockUpInterface} from "./MockUpInterface.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      {/*<MockUpInterface />*/}
  </React.StrictMode>,
)
