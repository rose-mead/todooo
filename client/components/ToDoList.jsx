import React from "react";

function ToDoList(props) {
  return (
      <>
    <input id="toggle-all" className="toggle-all" type="checkbox"/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" checked="" />
          <label>Taste JavaScript</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
    </>
  );
}

export default ToDoList;
