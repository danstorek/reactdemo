import React from "react";
import "./H1.css";

export const H1 : React.FC = (props) =>{
    return <h1 className="header1">{props.children}</h1>
};