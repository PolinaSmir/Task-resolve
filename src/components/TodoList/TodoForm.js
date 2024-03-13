import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.submitFn()}>
      <input type="text" placeholder="Put in task"></input>
      <button>Add Task</button>
    </form>
  );
}

export default TodoForm;
