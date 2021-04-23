import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokegame from './Pokegame';

class App extends Component {
    render(){
        return (
        <Pokegame />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))