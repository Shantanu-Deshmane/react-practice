import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from './components/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider value={{name:'Shantanu', id:101, address:'Karad'}}>
      <App />
    </Provider>
  </React.StrictMode>,
)
