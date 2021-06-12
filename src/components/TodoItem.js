import React from 'react'
import './TodoItem.css'
import {useDispatch} from 'react-redux'
import {setCheck} from '../features/todoSlice'

import Checkbox from '@material-ui/core/Checkbox'

function TodoItem({name,done,id}) {

    const dispatch=useDispatch()

    const handleCheck=()=>{
        dispatch(setCheck(id))
    }

    return (
        <div className={done?"todoItem done":"todoItem"}>
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p onClick={handleCheck} className={done?'todoItem--done':null}>{name}</p>
        </div>
    )
}

export default TodoItem
