import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
  return(
    <>
      <h2>Custom App !</h2>
    </>
  )
}

const customElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click here'
)
ReactDOM.createRoot(document.getElementById('root'))
.render(

    <App/>
)
