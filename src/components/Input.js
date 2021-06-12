import React,{useState} from 'react'
import './Input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addToDo=()=>{
        console.log(`addToDo! ${input}`)
        dispatch(saveTodo({
            item:input,
            done:false,
            id:Date.now() 
        }))
    }

    return (
        <div className="input">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}></input>
            <button className="add-btn" onClick={addToDo}>Add</button>
        </div>
    )
}

export default Input