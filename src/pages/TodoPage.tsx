import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function TodoPage() {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
        setTodos(prev => [...prev, todo]);
    };

    const removeTodo = (index: number) => {
        setTodos(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            <h1>Todo App 📝</h1>
            <TodoInput onAdd={addTodo} />
            <TodoList todos={todos} onRemove={removeTodo} />
        </>
    );
}

export default TodoPage;
