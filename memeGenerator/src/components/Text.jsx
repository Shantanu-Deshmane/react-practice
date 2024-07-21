import React, {useState} from "react";
import Draggable from 'react-draggable';

export function Text() {
const [editText, setEditText] = useState(false)
const [value, setValue] = useState("Double click to edit")

  return (
    <Draggable>
        {
            editText ? (
                <input onDoubleClick={(e) => setEditText(false)} value={value} onChange={(e) => setValue(e.target.value)} />
            ):(

                <h1 onDoubleClick={(e) => setEditText(true)} className="text-2xl font-semibold" >{value}</h1>
            )
        }
    </Draggable>
  )
}

