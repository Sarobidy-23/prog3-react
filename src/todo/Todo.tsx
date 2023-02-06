import React, { useState } from 'react';
import './todo.css';
import Item from './Item';
import { todoElement } from '../utils/typeUtils';
import TodoInput from './TodoInput';

function App() {
  const [todo, setTodo] = useState<todoElement[]>([]);

  const switchTodo = (index:number) => {
    let updatedTodo = todo;
    updatedTodo[index].isDone = true
    setTodo([...updatedTodo])
  }

  const insert = (name:string) => {
    let newTodo: todoElement = {name: name, isDone: false};
    setTodo([...todo,newTodo])
  }
 
  return (
    <>
      <div className='flex-container'>
        <TodoInput insert={insert}/>
        <div className='table-container'>
          <div className='todo-container'>
            <label className='todo-label'>TODO</label>
            <section className='todo-element'>
              {todo.length >0 && todo.map((element: todoElement, idx:number)=>(
                (!element.isDone && <Item key={idx} element={element} index={idx} onCheck={switchTodo}/>)
              ))}
            </section>
          </div>
          <div className='done-container'>
            <label className='done-label'>DONE</label>
            <section className='done-element'>
              {todo.length >0 && todo.map((element: todoElement, idx: number)=>(
                    (element.isDone && <Item key={idx} element={element} index={idx} onCheck={switchTodo}/>)
                ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
