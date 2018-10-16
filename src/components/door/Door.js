import React , { Component }from 'react';
import Styles from './Door.css';


class Door extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className={Styles.Door} onClick={this.props.click}>

            </div>
        )
    }
}

export default Door;