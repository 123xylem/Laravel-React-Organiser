import { TodoForm } from '@/components/todo-form';
import TodoList from '@/components/todo-list';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [hideCompleted, setHideCompleted] = useState(false);

    function handleToggleTodo(id: number) {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    }

    function toggleCompleted() {
        setHideCompleted(!hideCompleted);
    }

    function handleDeleteTodo(id: number) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    return (
        <>
            <Head title="Todos">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <h1>Todos</h1>
            <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
                <TodoForm setTodos={setTodos} />
                <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} hideCompleted={hideCompleted} handleToggleTodo={handleToggleTodo} />
                <button className="mt-4 cursor-pointer text-blue-600 hover:text-blue-700" onClick={toggleCompleted}>
                    {hideCompleted ? 'Show Completed' : 'Hide Completed'}
                </button>
            </div>
        </>
    );
}
