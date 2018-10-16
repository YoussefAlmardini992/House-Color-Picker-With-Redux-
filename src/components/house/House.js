import React, {Component} from 'react';
import Styles from './House.css';
import Roof from "../roof/Roof";
import Body from "../body/Body";
import { connect }  from 'react-redux';
import {changeWindowColor,changeRoofColor,changeDoorColor } from "../../store/actions";


class House extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount(){

    }
    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    changeWindowColor = (e) => {
        const color = this.getRandomColor();
        e.target.style.background = color;
        this.props.dispatch(changeWindowColor(color , e.target.id));

    };
    changeRoofColor = (e) => {
        const color = this.getRandomColor();
        e.target.style.borderColor = "transparent transparent " + color + " transparent";
        this.props.dispatch(changeRoofColor(color));
    };
    changeDoorColor = (e) => {
        const color = this.getRandomColor();
        e.target.style.background = color;
        this.props.dispatch(changeDoorColor(color));
    };

    render() {
        return (
            <div className={Styles.House}>
                <Roof changeRoofColor={this.changeRoofColor}/>
                <Body
                    changeWindowColor={this.changeWindowColor}
                    changeDoorColor={this.changeDoorColor}
                />
            </div>
        )
    }
}
export default connect()(House);