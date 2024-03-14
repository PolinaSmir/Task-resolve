import React from "react";
import styles from "./TodoFormStyle.module.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: "",
      isInputValid: true,
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    if (value.includes("*")) {
      this.setState({
        isInputValid: false,
      });
    } else {
      this.setState({
        [name]: value,
        isInputValid: true,
      });
    }
  };

  submitHandler = (event) => {
    const {
      props: { sendData },
      state: { taskText },
    } = this;

    event.preventDefault();

    sendData(taskText);

    this.setState({
      taskText: "",
    });
  };

  render() {
    const { taskText } = this.state;
    const { isInputValid } = this.state;

    const className = cx({
      [styles.input]: true,
      [styles["invalid-input"]]: !isInputValid,
    });

    return (
      <form onSubmit={this.submitHandler} className={styles.container}>
        <input className={className} type="text" value={taskText} name="taskText" onChange={this.changeHandler} />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;

// тут также проблема с ключами и ещё есть  проблема с текстом

function cx(objectClassNames) {
  // const cort = Object.entries(objectClassNames);
  // const filteredArray = cort.filter(([className, condition]) => condition);
  // const mapArray = filteredArray.map(([className, condition]) => className);
  // return mapArray.join(" ");

  /* Сокращаем \/  */

  return Object.entries(objectClassNames)
    .filter(([className, condition]) => condition)
    .map(([className, condition]) => className)
    .join(" ");
}
