import { type } from "os";
import React, { useEffect, useState } from "react";
import "./Counter.css"

type CounterProps = {
    initialValue: number;
}

type btnState = 'normal' | 'warning';

export const Counter : React.FC<CounterProps> = ({initialValue}) => {
    const [count, setCount] = useState<number>(initialValue);
    const [state, setState] = useState<btnState>("normal");

    const handleClick = ()=>{
        setCount(count-1);
        if(count===3){
            setState('warning');
        }
    }

    useEffect(()=>{
        console.log('volal se useEffect',document.body.offsetWidth);
        const handleIt = setTimeout(()=>{
            console.log('time has run');
            document.body.style.zoom = "3";
        },3000);

        return ()=>{
            console.log('uklizim timeout',handleIt);
            clearTimeout(handleIt);
        };

    },[count,state]);

    return <button className={`${state}Btn`} type="button" onClick={handleClick}>{count}</button>;
};