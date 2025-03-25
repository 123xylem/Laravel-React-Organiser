import { Todo } from '@/pages/todos';
export default function TodoList({
    todos,
    hideCompleted,
    handleToggleTodo,
    handleDeleteTodo,
}: {
    todos: Todo[];
    hideCompleted: boolean;
    handleToggleTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
}) {
    return (
        <>
            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`flex items-center rounded-md bg-gray-50 p-3 transition-colors hover:bg-gray-100 ${hideCompleted && todo.completed ? 'hidden' : ''}`}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                            className={`h-5 w-5 rounded text-black text-blue-600 focus:ring-blue-500`}
                        />
                        <p className={`ml-3 ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{todo.title}</p>
                        <button className="ml-auto cursor-pointer rounded bg-red-500 p-2 py-1 text-white" onClick={() => handleDeleteTodo(todo.id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length === 0 && <p className="text-center text-gray-500 italic">No todos yet. Add some!</p>}
        </>
    );
}
