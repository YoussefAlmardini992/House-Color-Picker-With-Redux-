import React, {Component} from 'react';
import './App.css';
import House from "./components/house/House";
import ColorPanel from "./components/color-panel/ColorPanel";
import store from './store/store';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <h1>Click on house's parts to <br/>
                        change the color , then click <br/>
                        refresh to get <br/>
                    colors data from redux</h1>
                    <ColorPanel/>
                    <House/>
                </div>
            </Provider>
        );
    }
}
export default App;
