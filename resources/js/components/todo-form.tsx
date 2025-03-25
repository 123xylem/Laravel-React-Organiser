import { Todo } from '@/pages/todos';
import { useState } from 'react';

export function TodoForm({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) {
    const [inputValue, setInputValue] = useState('');
    function createTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!inputValue.trim()) return;

        setTodos((prev) => [
            ...prev,
            {
                id: Date.now(),
                title: inputValue,
                completed: false,
            },
        ]);
        setInputValue('');
    }

    return (
        <div className="mx-auto max-w-md rounded-lg p-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Todo List</h2>
            <form onSubmit={createTodo} className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo"
                    className={`flex-1 rounded-md border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                />
                <button
                    className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    );
}
