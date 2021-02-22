import { useEffect, useState } from "react";
import { TodoListProps, TodoItem as TodoItemType} from "../../types";


export const useTodoList = (props: TodoListProps, pageSize = 10) => {
    const {items : itemsProps} = props
    const [items, setItems] = useState(itemsProps);
    const [nextId, setNextId] = useState(itemsProps.length);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
      setItems(itemsProps);
    }, [itemsProps]);
  
    const deleteItem = (id: number) => {
      setItems(items.filter((x) => x.id !== id));
    };
  
    const addItem = (newItem: TodoItemType) => {
      setItems([...items, newItem]);
      setNextId((prevId) => prevId + 1);
    };
    
    const pageItems = items.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
  const GoLeft_Internal = () =>{
      setPageIndex(pageIndex-1);
  };
  const GoRight_Internal = () => {
      setPageIndex(pageIndex+1);
  };
    const goLeft = pageIndex > 0 ? GoLeft_Internal : undefined;
    const goRight = pageIndex < 19 ? GoRight_Internal : undefined;

    const res = {
      items: pageItems,
      nextId,
      deleteItem,
      addItem,
      pageIndex,
      goLeft : goLeft,
      goRight : goRight
    }
   // return [items,nextId,deleteItem,addItem] as const;
    return res;
  }