import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { FetchTodo } from "./redux/Slice/ToDoSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.todo)
  console.log(state)

  if(state.isLoading ){
    return <h1>Loading....</h1>
  }

  return (
    <>
      <button onClick={e => dispatch(FetchTodo())}>Fetch ToDos</button>

      {
        state.data?.map((data) =>(
          <div>
            
            <p><span>{data.id}. </span>{data.title}</p>
          </div>
        ) )
      }
    </>
  )
}

export default App
