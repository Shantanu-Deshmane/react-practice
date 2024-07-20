import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Email from './components/Email.jsx';
import Phone from './components/Phone.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}>
          <Route path='email' element={ <Email/> }/>
          <Route path='phone' element={ <Phone/> }/>
        </Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
