import React from "react";

class Aloha extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // 1. Створити змінну стейту (за аналогією з лампочкою)
            isGreeting: true
        }
    }

    // 2. Зробити обробник події кліку на h1 (за аналогією з лампочкою)

    clickHandler() {
        this.setState({
            isGreeting: !this.state.isGreeting
        });
    }

    // тут можуть бути якісь обробники подій

    render() {
        // 3. В залежності від значення стейту, вирахувати що за текст ви показуєте (за аналогією з лампочкою)

        const greetingText = this.state.isGreeting ? 'Hello' : 'Bye';

        return <h1 onClick={() => {this.clickHandler()}}>{greetingText} {this.props.firstName} {this.props.lastName}</h1>
        // P.S. Не забудьте підписати h1 на обробник кліку, розроблений у п.2
    }
}

export default Aloha;

/*

Доробити компоненту таким чином, щоб за натиснення на h1 текст "Hello" змінювався на "Bye"

*/