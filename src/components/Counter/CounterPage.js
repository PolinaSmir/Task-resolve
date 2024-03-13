import React from "react";
import Counter from "./Counter";

class CounterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMount: true
        }
    }

    clickHandler() {
        this.setState({
            isMount: false
        })
    }

    render() {
        return (
            <>
                <button onClick={() => {this.clickHandler()}}>Unmount Counter</button>
                {this.state.isMount ? <Counter /> : null}
            </>
        )
    }
}

export default CounterPage;