import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { FetchUserData } from "./redux/UserDataSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userData)
  console.log(state);

  if (state.isLoading) {
    return <h1>LOADING....</h1>
  }

  return (
    <>
      <div>
        <button onClick={e => dispatch(FetchUserData())}>Get User</button>

        {
          state.data?.map((e) => (
            <div key={e.id}>
              <p><b>UserName: </b>{e.name}</p>
              <p>{e.email}</p>
              <p>{e.phone}</p>
              <p>{e.company.name}</p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default App
