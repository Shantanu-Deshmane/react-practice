import React, { useState, createRef } from 'react'
import { useSearchParams } from "react-router-dom";
import { Text } from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

function Edit() {
    const [params] = useSearchParams()
    const [count, setCount] = useState(0)
    
    const memeRef = createRef();

    const AddText = () => {
        setCount(count+1)
    }

    return (
        <>
            <div style={{border:'2px solid black'}} ref={memeRef} className=' meme w-[800px] mx-10'>
                <img className='w-[500px] ' src={params.get('url')} alt="" />
                <div className='ml-10'>
                    {
                        Array(count).fill(0).map(e => <Text/>)
                    }
                </div>
                </div>
            <button onClick={AddText} className='bg-blue-600 px-6 mt-4 py-1 rounded-sm ml-10 text-white'>Add Text</button>
            <button onClick={(e)=>exportComponentAsJPEG(memeRef)} className='bg-green-600 px-6 mt-4 py-1 rounded-sm ml-10 text-white'>Save</button>
        </>
    )
}

export default Edit