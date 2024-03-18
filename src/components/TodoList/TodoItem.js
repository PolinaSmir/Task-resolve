function TodoItem(props) {
  return (
    <li>
      {props.text}
      <button
        onClick={() => {
          props.delCallback();
        }}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
