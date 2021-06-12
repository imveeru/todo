import React,{useState} from 'react'
import './Input.css'

const Input = () => {

    const [input, setInput] = useState('')

    const addToDo=()=>{

    }

    return (
        <div className="input">
            <input className="add-ip" type="text" value={input} placeholder="Add your task here..." onChange={e=>setInput(e.target.v)}></input>
            <button className="add-btn" onClick={addToDo}>Add</button>
        </div>
    )
}

export default Input