import './App.css'
import Count from './components/Count'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={e => dispatch({type: "INCREMENT"})}>Increament</button>
      <Count/>
      <button onClick={e => dispatch({type: "DECREMENT"})}>Decreament</button>
    </>
  )
}

export default App
