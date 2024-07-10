import { useEffect, useState } from 'react'
import { getPosts, randomUser } from './Api/Api'
import './App.css'
import PostCard from './components/PostCard';
import UserPostcard from './components/UserPostcard';

function App() {
const [data, setData] = useState(null)
const [user, setUser] = useState(null)

  useEffect(() => {
    getPosts().then((posts) => setData(posts) );
  }, []);

  useEffect(()=>{
    randomUser().then((users)=> setUser(users.results[0]))
  },[])

  const refresh = () => {
    randomUser().then((users)=> setUser(users.results[0]))
  }



  return (
      <div className='main' >
        {user && <UserPostcard data={user}/> }
        <button onClick={refresh} >Refresh User</button>
        {(data ? data.map((e) => <PostCard key={e.id} title={e.title} body={e.body}/> ) : <p>No Data found..</p>)}
      </div>
  )
}

export default App;
