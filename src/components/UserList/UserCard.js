// В компоненті UserCard потрібно реалізувати логіку відмальування одного єдиного користувача
// Оцей один єдиний користувач спускається в компоненту UserCard через пропси від батьківської компоненти UserList

import React from "react";
import "./style.css";
import PropTypes from "prop-types";

class UserCard extends React.Component {
  render() {
    const {
      user: {
        name: { first: firstName, last: lastName },
        email,
        picture: { large: imgSrc },
      },
    } = this.props;
    return (
      <article className="card-wrapper">
        <img src={imgSrc} alt={`${firstName} ${lastName}`} className="user-img" />
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{email}</p>
      </article>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,

    email: PropTypes.string.isRequired,

    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserCard;

// Задача 2
// В компоненті UserList передбачити можливість відмалювання карток для багатьох юзерів
// https://randomuser.me/api/?results=100
