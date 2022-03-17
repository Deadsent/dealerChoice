import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios'
import Header from './Header';
import Worlds from './Worlds';


const root = document.querySelector('#root')

class App extends React.Component {

    render(){
        return(
            <div>
            <Header />
            <Worlds />
            </div>
        )
    }
}

reactDOM.render(<App />, root);