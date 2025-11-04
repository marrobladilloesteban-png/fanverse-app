import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import "./firebase"; // inicializa Firebase por efecto secundario
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,
  

)
