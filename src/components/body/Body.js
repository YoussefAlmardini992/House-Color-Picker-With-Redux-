import React, {Component} from 'react';
import Styles from './Body.css';
import Window from "../window/Window";
import Door from "../door/Door";


class Body extends Component {
    constructor(props) {
        super(props);
        this.line = 0 ;
    }

    createWindowsLine = () => {
        this.line ++;
        const line = this.line;
        return (
            <div className={Styles.WindowsLine}>
                <Window click={this.props.changeWindowColor}
                        id={"Line : (" + line + ") - Window (" + 1 + ")"}/>
                <Window click={this.props.changeWindowColor}
                        id={"Line : (" + line + ") - Window (" + 2 + ")"}/>
                <Window click={this.props.changeWindowColor}
                        id={"Line : (" + line + ") - Window (" + 3 + ")"}/>
            </div>
        )

    };

    render() {
        return (
            <div className={Styles.Body}>
                {this.createWindowsLine()}
                {this.createWindowsLine()}
                {this.createWindowsLine()}
                <Door click={this.props.changeDoorColor}/>
            </div>
        )
    }
}

export default Body;