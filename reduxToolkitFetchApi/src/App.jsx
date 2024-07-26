import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { FetchPosts } from "./redux/slice/PostsSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.post)
  console.log(state)
  if (state.isLoading
    ) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div>
        <button onClick={e => dispatch(FetchPosts())}>Get Posts</button>
        
          <table border={1} align='center' style={{marginTop:"50px"}}>
           <tbody>
           <tr>
              <th>UserId</th>
              <th>Title</th>
              <th>body</th>
            </tr>
           {
              state.data && state.data.map((e) => (
              <tr key={e.id}>
                <td>{e.userId}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
              </tr>
              ))
           }
           </tbody>
          </table>
        
      </div>
    </>
  )
}

export default App
