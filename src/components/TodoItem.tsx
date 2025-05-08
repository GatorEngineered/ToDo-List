type Props = {
    text: string;
    index: number;
    onRemove: (index: number) => void;
};

function TodoItem({ text, index, onRemove }: Props) {
    return (
        <li style={{ marginBottom: '0.5em' }}>
            {text}
            <button
                onClick={() => onRemove(index)}
                style={{
                    marginLeft: '1em',
                    color: 'white',
                    backgroundColor: 'red',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '0.2em 0.5em',
                }}
            >
                X
            </button>
        </li>
    );
}

export default TodoItem;
