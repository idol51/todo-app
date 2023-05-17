import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Input from './Input'
import ListTodo from './ListTodo'

export default function Todo() {
    const [ todos, setTodos ] = useState([]);

    const getTodos = async () => {
        try {
            const data = await axios.get('/api/todos');
            console.log(data);
            setTodos(data.data);
        }
        catch (err) {
            console.log(err);
        }
    } 

    const deleteTodo = async (id) => {
        try {
            const data = await axios.delete(`/api/todos/${id}`);

            console.log(data);
            getTodos();
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <div>
      <h1>My Todo(s)</h1>
      <Input getTodos={getTodos} />
      <ListTodo todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}
