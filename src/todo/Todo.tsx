import React, { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

export type todoElement = {
  name: string,
  isDone: boolean
}

function App() {
  const [todo, setTodo] = useState<todoElement[]>([]);
  const [todoName, setTodoName] = useState<string>("")

  const handle = (index:number) => {
    let change = todo[index];
    change.isDone = true;
    let newTodo = todo;
    newTodo[index] = change
    setTodo([...newTodo])
  }

  const insert = (name:string) => {
    let newTodo: todoElement = {name: name, isDone: false};
    setTodo([...todo,newTodo])
  }
 
  return (
    <>
      <div className='flex'>
        <input type="text"
            className='input-new_todo'
            placeholder='new name'
            onChange={(e)=>setTodoName(e.target.value)}
            onKeyDown={(e)=>{e.key ==='Enter' && insert(todoName)}}/>
        <div>
          <h1>TODO</h1>
          <ul>
            {todo.length >0 && todo.map((element: todoElement, idx:number)=>(
              <>
                {element.isDone === false &&
                <li> 
                  {element.name}
                  <input type="checkbox" onClick={()=>handle(idx)}/>
                </li>}
              </>
            ))}
          </ul>
        </div>
        <div>
          <h1>DONE</h1>
          <ul>
            {todo.length >0 && todo.map((element: todoElement, idx: number)=>(
                <>
                  {element.isDone && 
                    <li>
                      {element.name}
                    </li>}
                </>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
