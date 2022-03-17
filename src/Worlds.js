import React from 'react';
import axios from 'axios';

class Worlds extends React.Component {
    constructor(){
        super()
        this.state = {
        planets: []
        }
    }

    async componentDidMount(){
        const {data} = await axios.get('/api/planets')
        console.log(data)
        this.setState({planets: data})
    }

    render(){
        const planets = this.state.planets
        console.log(planets, 'state log')
        return( 
            
                <ul>
            {planets.map((planet) =>{
        return (
        
            <li key= {planet.id}>{planet.name}</li>
            )
            
        } )}
        </ul>
 )
}
}

export default Worlds