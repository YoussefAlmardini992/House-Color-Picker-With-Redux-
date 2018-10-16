import React , { Component }from 'react';
import Styles from './Window.css';


class Window extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className={Styles.Window} onClick={this.props.click} id={this.props.id}>

            </div>
        )
    }
}

export default Window;