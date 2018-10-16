import React, {Component} from 'react';
import Styles from './Roof.css';


class Roof extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={Styles.Roof} onClick={this.props.changeRoofColor}>

            </div>
        )
    }
}

export default Roof;