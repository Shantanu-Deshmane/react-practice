import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Heading from './components/Heading.jsx'
import List from './components/List.jsx'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='mt-20 px-4 py-6 rounded-lg bg-pink-300'>
    <Heading/>
    <Counter/>
    <List task="Code"/>
    <List task="eat"/>
    <List task="sleep"/>
    <List task="repeat"/>
    <List/>
    <Button/>
    </div>
  </React.StrictMode>,
)
