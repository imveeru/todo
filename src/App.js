import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem'

const todoList = [
  {
    item:'todo',
    done:false,
    id:465465464
  },{
    item:'todo2',
    done:false,
    id:465465464
  }
]

function App() {
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
