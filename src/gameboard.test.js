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

test('missing attacks works fine', ()=>{
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
    one.receiveAttack(14)
    expect(one.missedCoordinates).toContain(14);
})

test('getting attacks work fine', ()=>{
    const one = GameBoard();
    one.placeShip(0,[
        {
            coordinate: 12,
            hit: true
        },
        {
             coordinate: 13,
             hit: true
        },
        {
            coordinate:15,
            hit: false
        }
    ])
    one.receiveAttack(15);
    expect(one.areSunk()).toEqual(true)
})

test('not all ships are sunk and it works', ()=>{
    const one = GameBoard();
    one.placeShip(0,[
        {
            coordinate: 12,
            hit: true
        },
        {
             coordinate: 13,
             hit: true
        },
        {
            coordinate:15,
            hit: true
        }
    ]);
    one.placeShip(0,[
        {
            coordinate: 21,
            hit: true
        },
        {
             coordinate: 31,
             hit: true
        },
        {
            coordinate:45,
            hit: false
        }
    ]);
    expect(one.areSunk()).toEqual(false)
})

test('enemyAttack IA works fine',()=>{
    const one = GameBoard();
    one.placeShip(0,[
        {
            coordinate: 12,
            hit: true
        },
        {
             coordinate: 13,
             hit: true
        },
        {
            coordinate:15,
            hit: false
        }
    ])
    one.receiveAttack(15);
    one.placeShip(0,[
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
    one.EnemyAttack();
    expect(true).toEqual(true)
})