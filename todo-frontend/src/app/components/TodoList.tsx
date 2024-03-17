
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('/api/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    return (
        <div>
            <h1>TODO List</h1>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
