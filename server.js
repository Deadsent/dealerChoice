const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require('sequelize');
const { STRING, INTEGER, ENUM } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-react-redux')



app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const Planets = sequelize.define('planet', {
    name:{
    type: STRING,
    allowNull: false
}, 
})

const syncDB = async ()=> {
    try {
        await sequelize.sync({force:true});

        await Planets.create({name: 'Earth'})
        await Planets.create({name: 'Venus'})
        await Planets.create({name: 'Mercury'})
        await Planets.create({name: 'Mars'})
    } catch (error) {
        console.log(error)
    }

}

const startUp = async () => {
    try {
    console.log("Connecting to db...")
        await syncDB()
    console.log("Connected")
    
    
    
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));   
    } catch (error) {
        throw error
    }

}

startUp()

app.get('/api/planets', async(req, res, next) =>{
    try {
    const planets = await Planets.findAll()
    console.log(planets)
    res.send(planets)
    } catch (error) {
        console.log(error)
    }
})
