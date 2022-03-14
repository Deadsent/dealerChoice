import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios'

const root = document.querySelector('#root')

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            planets: [],
        }
        this.create = this.create.bind(this)
    }

    async create() {
        const planet = (await axios.post('/api/planets'))
        this.state.planets.push(planet)
        this.setState({planets})
    }
}

reactDOM.render(<App />, root);