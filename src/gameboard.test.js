const GameBoard = require('./gameboard');
const Ship = require('./ship');

test('placing ship and get list of ships works fine',()=>{
    const one = GameBoard();
    one.placeShip(0,[
        {
            coordinate: 12,
            hit: false
        },
        {
             coordinate: 13,
             hit: false
        },
        {
            coordinate:15,
            hit: false
        }
    ])
    expect(one.getShips().length).toBe(1);
})