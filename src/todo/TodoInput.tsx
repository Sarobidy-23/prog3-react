import React, { useState } from 'react'

interface Props {
    insert: (name: string)=>void
}

function TodoInput(props: Props) {
    const {insert} = props;
    const [todoName, setTodoName] = useState<string>("")

    return (
        <input type="text"
            className='input-new_todo'
            placeholder='new todo name'
            value={todoName}
            onChange={(e)=>{setTodoName(e.target.value);}}
            onKeyDown={(e)=>{e.key ==='Enter' && insert(todoName)}}/>
    )
}

export default TodoInput
