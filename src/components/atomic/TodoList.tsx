import React from 'react';
import { TodoItem } from '../../types';

type ToDoListProps = {
    items: TodoItem[];
}

export const TodoList : React.FC<ToDoListProps> = (props) =>{
    return <div>{JSON.stringify(props)}</div>;
}