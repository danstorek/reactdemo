import React, { useEffect, useState } from "react";
import { TodoItem as TodoItemType } from "../types";
import { AddTodoItem } from "./AddTodoItem";
import { useTodoList } from "./hooks/useTodoList";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  items: TodoItemType[];
};

export const TodoList: React.FC<TodoListProps> = ({ items: itemsProps }) => {
  const {items, nextId,deleteItem , addItem, pageIndex, goLeft, goRight} = useTodoList({ items: itemsProps })
  const [searchValue, setSearch] = useState("");

  const searchFunction = () => {
  
  };
  
  return (
    <div>
      <div>
       <button onClick={searchFunction}>Search</button>
      </div>
      <div>
        <button onClick={goLeft} disabled={!goLeft}>&lt;</button>
        {pageIndex+1}
        <button onClick={goRight} disabled={!goRight}>&gt;</button>
        
      </div>
      {items.map((item) => (
        <TodoItem key={item.id} {...item} deleteItem={deleteItem} />
      ))}

      <AddTodoItem addItem={addItem} nextId={nextId} />

      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};

export const FilteredTodoList: React.FC<TodoListProps> = ({ items: itemsProps }) => {
  const {items, nextId,deleteItem , addItem, pageIndex, goLeft, goRight} = useTodoList({ items: itemsProps });

  const [searchValue, setSearch] = useState("");
  
  let filtered = items;

  if(searchValue != ""){
    filtered = items.filter(t=>t.title.includes(searchValue));
  };

  return (
    <div>
      <div>
        <button onClick={goLeft} disabled={!goLeft}>&lt;</button>
        {pageIndex+1}
        <button onClick={goRight} disabled={!goRight}>&gt;</button>
        
      </div>
      <div>
      <input value={searchValue} onChange={(e) => setSearch(e.target.value)} />
      {filtered.map((item) => (
        <TodoItem key={item.id} {...item} deleteItem={deleteItem} />
      ))}
      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(props, null, 2)}</pre> */}</div>
      <AddTodoItem addItem={addItem} nextId={nextId} />
    </div>
  );
};