const Ship = require('./ship')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const GameBoard = () => {
    const types = [1,2,3,3,5];
    //TODO:
    // gaming loop

    let playerTurn = true;

    let enemy = {
        ships:[],
        missedCoordinates: []
    }

    let player = {
        ships: [],
        missedCoordinates: []
    }

    let missedCoordinates = player.missedCoordinates

    const placeShip = (id,coordinates)=>{
        playerTurn
            ?player.ships.push(Ship(coordinates))
            :enemy.ships.push(Ship(coordinates));
    }
    
    const getShips = () =>{
        return playerTurn
            ?player.ships
            :enemy.ships
    }

    const isMissedCoordinates = (coordinate)=>{
        return playerTurn
            ?player.missedCoordinates.includes(coordinate)
            :enemy.missedCoordinates.includes(coordinate)
    }

    const EnemyAttack = () => {
        let coordinate = getRandomInt(15);
        while(isMissedCoordinates(coordinate)){
            coordinate = getRandomInt(15);
        }
        receiveAttack(coordinate)
    }

    const receiveAttack = (coordinate) => {
        const hit = (element) => element.hit(coordinate);
        playerTurn
            ?(player.ships.some(hit) ? true : player.missedCoordinates.push(coordinate))
            :(enemy.ships.some(hit) ? true : enemy.missedCoordinates.push(coordinate))
        playerTurn=!playerTurn;
    }

    const enemyInfo = ()=>{
        return enemy
    }

    const areSunk = () => {
        const sunk = (ship) => ship.isSunk();
        return playerTurn
            ?player.ships.every(sunk)
            :enemy.ships.every(sunk)
    }

    return {placeShip, getShips, receiveAttack, areSunk, missedCoordinates, EnemyAttack,enemyInfo};
}

module.exports = GameBoard;