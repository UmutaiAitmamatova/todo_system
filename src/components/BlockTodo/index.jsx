import React from 'react'
import TodoItem from '../TodoItem'

function BlockTodo ({ admin, getAllTodo, todoList }) {
  return (
    <div>
    {todoList && todoList.length > 0 ? todoList.map((data, index) => {
        return <TodoItem
            key={index}
            data={data}
            getAllTodo={getAllTodo}
            admin={admin}
        />
    })
        : <p>not todo</p>}
</div>
  )
}

export default BlockTodo 