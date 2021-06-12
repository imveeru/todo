import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem'
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'


function App() {

  const todoList =useSelector(selectTodoList)

  return (
    <div className="App">
      <div className="app_container">
        <h1>ToDo App</h1>
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
        <Input/>
      </div>
    </div>
  );
}

export default App;
