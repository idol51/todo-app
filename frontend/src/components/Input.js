import React, { useState } from 'react'
import axios from 'axios'

export default function Input({getTodos}) {
    const [ action, setAction ] = useState('');

    const handleAddTodo = async () => {
        try {
            const data = await axios.post('/api/todos', { action: action });

            console.log(data);
            getTodos();
        }
        catch (err) {
            console.log(err);
        }
        setAction('');
    }

  return (
    <div>
      <input type='text' value={action} onChange={(e) => {console.log(e.target.value); setAction(e.target.value)}} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}
