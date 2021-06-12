import React from 'react'
import './TodoItem.css'

function TodoItem({name,done,id}) {
    return (
        <div className="todoItem">
            <p className={done&&'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoItem
