import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm/TodoForm";
import styles from "./TodoListStyle.module.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        { id: 1, text: "go to party" },
        { id: 2, text: "meet friends" },
        { id: 3, text: "have a walk" },
      ],
    };
  }

  removeTask(taskIDtoRemove) {
    const { todoList } = this.state;

    const filteredArray = todoList.filter((task) => task.id !== taskIDtoRemove);

    this.setState({
      todoList: filteredArray,
    });
  }

  formHandler = (text) => {
    const { todoList } = this.state;

    const newObj = {
      id: todoList.length + 1,
      text,
    };

    const newArr = [...todoList, newObj];

    this.setState({
      todoList: newArr,
    });
  };

  renderLi() {
    const { todoList } = this.state;

    return todoList.map((task) => <TodoItem key={task.id} text={task.text} delCallback={() => this.removeTask(task.id)} />);
  }

  render() {
    return (
      <>
        <h1>TODO LIST</h1>

        <TodoForm submitHandler={this.formHandler} sendData={this.formHandler} />

        <ul className={styles.container}>{this.renderLi()}</ul>
      </>
    );
  }
}
export default TodoList;

/*

TodoList - компонента в якій відбувається управління списком задач і рендериться сам список задач

Зробити компоненту TodoForm, яка буде представляти собою форму
Там буде 1 інпут - текст таски
І кнопка, яка буде додавати таску до списку у батьківській компоненті TodoList

TodoList - батьківська компонента
TodoForm - дочірня компонента

*/
