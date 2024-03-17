
import React from 'react';
import { Todo } from '../types';

interface Props {
    todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.title}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default TodoItem;
