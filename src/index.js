import React from "react";
import ReactDOM from "react-dom/client";
import AlohaDashboard from "./components/AlohaDashboard/AlohaDashboard";
import TodoList from "./components/TodoList/TodoList";
import Scene from "./components/Scene/Scene";
import Counter from "./components/Counter/Counter";
import CounterPage from "./components/Counter/CounterPage";
import UserList from "./components/UserList/UserList";
import App from "./components/App/App";
import SignInForm from "./components/SignInForm/SignInForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);
