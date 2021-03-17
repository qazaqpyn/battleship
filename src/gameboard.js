const Ship = require('./ship')

const GameBoard = () => {
    const types = [1,2,3,3,5];
    //TODO:
    // create different spots for enemy and for yourself
    // algorithm for correctly placing ships
    //testing
    let ships = [];
    let missedCoordinates = [];

    const placeShip = (id,coordinates)=>{
        const ship = Ship(coordinates);
        ships.push(Ship(coordinates));
    }
    
    const getShips = () =>{
        return ships;
    }

    const receiveAttack = (coordinate) => {
        const hit = (element) => element.hit(coordinate);
        ships.some(hit) ? true : missedCoordinates.push(coordinate)
        
    }

    const areSunk = () => {
        const sunk = (ship) => ship.isSunk();
        return ships.every(sunk);
    }

    return {placeShip, getShips, receiveAttack, areSunk, missedCoordinates};
}

module.exports = GameBoard;