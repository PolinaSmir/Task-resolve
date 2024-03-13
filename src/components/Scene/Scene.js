import React from "react";
import Toggler from "./Toggler";
import Indicator from "./Indicator";
import "./style.css";

class Scene extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLight: true
        }
    }

    toggleScene() {
        this.setState({
            isLight: !this.state.isLight
        });
    }


    render() {
        const { isLight } = this.state;
        return (
            <div className={isLight ? "scene-on" : "scene-off"}>
                <Toggler changeParentState={() => {this.toggleScene()}} buttonText={isLight ? 'Off' : 'On'} />
                <Indicator text={isLight ? 'Light is on' : 'Light is off'} />
            </div>
        )
    }
}

export default Scene;


/*

Parent -> Child - props
Child -> Parent - callback pattern
Child -> Child (Siblings) - Parent

*/