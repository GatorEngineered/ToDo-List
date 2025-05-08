import { useState } from 'react';

type Props = {
    onAdd: (todo: string) => void;
};

function TodoInput({ onAdd }: Props) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim() === '') return;
        onAdd(input);
        setInput('');
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
                style={{ padding: '0.5em', width: '70%' }}
            />
            <button onClick={handleAdd} style={{ padding: '0.5em', marginLeft: '10px' }}>
                Add
            </button>
        </div>
    );
}

export default TodoInput;
