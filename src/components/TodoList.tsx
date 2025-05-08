import TodoItem from '../components/TodoItem';

type Props = {
    todos: string[];
    onRemove: (index: number) => void;
};

function TodoList({ todos, onRemove }: Props) {
    return (
        <ul style={{ marginTop: '1.5em' }}>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} index={index} onRemove={onRemove} />
            ))}
        </ul>
    );
}

export default TodoList;
