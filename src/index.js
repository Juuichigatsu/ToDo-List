import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import TodoList from "./todolist";
var destination = document.getElementById("container");
ReactDOM.render( 
    <div> 
        <TodoList/>
    </div>,
    destination
);   