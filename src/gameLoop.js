const GameBoard = require('./gameboard');

//do game loop in the react part with page and etc. think about 
// components and how to implenetnt them in there

function playGame () {
    const game = GameBoard();
    placingPlayerShips();
    game.switchTurn();
    placeEnemyShips();
    game.switchTurn();
    while(!game.areSunk) {
        game.receiveAttack()
    }
}

function placingPlayerShips() {
    // for(let i = 0; i < 5; i++){} make loop for inputs later

    game.placeShip(0,[
        {
            coordinate: 8,
            hit: false
        },
        {
             coordinate: 5,
             hit: false
        },
        {
            coordinate:3,
            hit: false
        }
    ]);
    game.placeShip(0,[
        {
            coordinate: 18,
            hit: false
        },
        {
             coordinate: 15,
             hit: false
        },
        {
            coordinate:13,
            hit: false
        }
    ]);
    game.placeShip(0,[
        {
            coordinate: 28,
            hit: false
        },
        {
             coordinate: 25,
             hit: false
        },
        {
            coordinate:23,
            hit: false
        }
    ]);

}

function placeEnemyShips() {
    game.placeShip(0,[
        {
            coordinate: 8,
            hit: false
        },
        {
             coordinate: 5,
             hit: false
        },
        {
            coordinate:3,
            hit: false
        }
    ]);
    game.placeShip(0,[
        {
            coordinate: 18,
            hit: false
        },
        {
             coordinate: 15,
             hit: false
        },
        {
            coordinate:13,
            hit: false
        }
    ]);
    game.placeShip(0,[
        {
            coordinate: 28,
            hit: false
        },
        {
             coordinate: 25,
             hit: false
        },
        {
            coordinate:23,
            hit: false
        }
    ]);
}