import React, {Component} from 'react';
import Styles from './ColorPanel.css';
import {connect} from 'react-redux';

class ColorPanel extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    updateData=()=>{
        this.forceUpdate();
        console.log(this.props)
    };
    render() {
        return (
            <div className={Styles.ColorPanel}>
                <h2>Door</h2><div  className={Styles.door} style={{background : this.props.house.door}}></div>
                <h2>Roof</h2><div  className={Styles.roof} style={{ borderColor : "transparent transparent "+this.props.house.roof+" transparent"}}></div>
                <h2>Windows</h2>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[0].color}}></div></td>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[1].color}}></div></td>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[2].color}}></div></td>
                        </tr>

                        <tr>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[3].color}}></div></td>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[4].color}}></div></td>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[5].color}}></div></td>
                        </tr>

                        <tr>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[6].color}}></div></td>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[7].color}}></div></td>
                            <td><div className={Styles.box} style={{background :this.props.house.windows[8].color}}></div></td>
                        </tr>

                        </tbody>
                    </table>
                </div><br/><br/>
                <button
                    onClick={this.updateData}
                >REFRESH</button>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        house : state
    }
};
export default connect(mapStateToProps)(ColorPanel);