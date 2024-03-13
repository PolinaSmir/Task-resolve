// В компоненті UserCard потрібно реалізувати логіку відмальування одного єдиного користувача
// Оцей один єдиний користувач спускається в компоненту UserCard через пропси від батьківської компоненти UserList


import './style.css';

function UserCard(props) {
    const {user: { name: { first: firstName, last: lastName }, email, picture: { large: imgSrc } }} = props;

    return (
        <article className='card-wrapper'>
            <img src={imgSrc} alt={`${firstName} ${lastName}`} className='user-img' />
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </article>
    )
}

export default UserCard;

// Задача 2
// В компоненті UserList передбачити можливість відмалювання карток для багатьох юзерів
// https://randomuser.me/api/?results=100