import { useEffect, useState } from 'react'
import { getPosts } from './Api/Api'
import './App.css'
import PostCard from './components/PostCard';

function App() {
const [data, setData] = useState(null)

  useEffect(() => {
    getPosts().then((posts) => setData(posts) );
  }, []);

  return (
      <div>
        {data ? data.map((e) => <PostCard key={e.id} title={e.title} body={e.body}/> ) : <p>No Data found..</p>}
      </div>
  )
}

export default App;
