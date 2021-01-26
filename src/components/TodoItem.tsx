import React from 'react';
import { TodoItem as TodoItemType } from '../types';
import { H1 } from './atomic/H1';

type TodoItemProps = TodoItemType;

export const TodoItem: React.FC<TodoItemProps> = ({id, title, description}) => {
    return (
    <div className="todoItem">
    <div>
        <H1>{title} <sup>#{id}</sup></H1>
        <hr/>
        <div>
            {description}
        </div>
    </div>

        {/* <pre style={{textAlign: "left"}}>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
    );
}