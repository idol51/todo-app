import React from 'react'

const ListTodo = ({ todos, deleteTodo}) => {
    console.log(todos);
  return (
    <ul>
        { todos && todos.length > 0 ? (
            todos.map((todo) => {
                return (
                    <li key={todo._id} onClick={() => deleteTodo(todo._id)}>
                        {todo.action}
                    </li>
                );
            })
        ) : (
            <li>No Todo(s) Left</li>
        )}
    </ul>
  )
}

export default ListTodo
