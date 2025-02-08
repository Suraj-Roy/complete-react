import { useState } from 'react'
import AddTodo from './custom-components/AddTodo'
import TodoList from './custom-components/TodoList'
import { Todo } from './types/todo';

const App = () => {
  //const todo = [{id:1, text:"complete typescript in two hours"},{id:2, text:"complete typescript in six hours"}]
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodoHandler = (text : string) => {
    const id = Math.random();
    setTodo([...todo, {id:id,title:text}]);
  }

  const removeTodoHandler = (todoId : number) => {
    const newTodo = todo.filter(item => item.id != todoId);
    setTodo(newTodo);
  }

  return (
    <main  className="max-w-6xl mx-auto my-10 px-5 md:px-0">
      <AddTodo onAddTodo = {addTodoHandler}/>
      <TodoList items={todo} onRemoveTodo={removeTodoHandler} />
    </main>

  )
}

export default App