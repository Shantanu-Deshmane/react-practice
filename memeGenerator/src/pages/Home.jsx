import React, { useEffect, useState } from 'react'
import { GetMemesData } from "../api/MemesData";
import Card from '../components/Card'

function Home() {
    const [memesData, setMemesData] = useState([])
    useEffect(() => {
      GetMemesData().then((memes) => setMemesData(memes.data.memes))
    }, [])

  return (
    <div className='flex flex-wrap justify-evenly '>
        {
          memesData.map((data) => (
            <Card  image ={data.url} title={data.name}/>
          ))
        }
    </div>
  )
}

export default Home