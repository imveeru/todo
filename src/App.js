import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem'
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

document.title="ToDo App"

function App() {

  const todoList =useSelector(selectTodoList)
  console.log(todoList.length)
  return (
    <div className="App">
      <div className="app_container">
        <h1>📝ToDo App</h1>
        <Input/>  
        {todoList.length===0?<p>Add some tasks...</p>:<hr style={{width:"40%", opacity:"0.25"}}/>}
          <div className="app_todoContainer">
              {
                todoList.map(items=>
                  <TodoItem
                    name={items.item} 
                    done={items.done}
                    id={items.id}
                  />
                )
              }
          </div>
      </div>
    </div>
  );
}

export default App;
