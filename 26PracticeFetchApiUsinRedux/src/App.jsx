import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { FetchUserData } from "./redux/UserDataSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userData)
  console.log(state);

  if(state.isLoading){
    return <h1>LOADING....</h1>
  }

  return (
    <>
      <div>
        <button onClick={e => dispatch(FetchUserData())}>Get User</button>

      </div>
    </>
  )
}

export default App
