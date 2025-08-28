import { useState } from 'react';
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import './App.css';


function App (){
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudar",
      isCompleted: false,
    },
  ]);

  // Função para adicionar uma nova tarefa
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];
    setTodos(newTodos); 
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key = {todo.id} todo = {todo}/>
        ))}
      </div>
        <TodoForm addTodo = {addTodo}/>
    </div>
  );
}
export default App;