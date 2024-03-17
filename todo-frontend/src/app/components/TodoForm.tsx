
import React, { useState } from 'react';
import axios from 'axios';

const TodoForm: React.FC = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('/api/todos', { title })
            .then(response => {
                console.log('Todo created:', response.data);
                setTitle('');
            })
            .catch(error => console.error('Error creating todo:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter todo title"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
