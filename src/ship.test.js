const Ship = require('./ship');

test('working lenght function',()=>{
    const one = Ship([
        {
        coordinate: 12,
        hit: false
        },
        {coordinate: 24,
        hit: false
        }
    ]);
    expect(one.getLength()).toBe(2);
});

test('function hit works fine',()=>{
    const one = Ship([
        {
        coordinate: 12,
        hit: false
        },
        {coordinate: 24,
        hit: false
        }
    ]);
    expect(one.hit(12)).toBe(true);
});

test('function hitting nothing',()=>{
    const one = Ship([
        {
        coordinate: 12,
        hit: false
        },
        {coordinate: 24,
        hit: false
        }
    ]);
    expect(one.hit(34)).toBe(false);
});

test('isSunk with all hitted',()=>{
    const one = Ship([
        {
        coordinate: 12,
        hit: true
        },
        {coordinate: 24,
        hit: true
        }
    ]);
    expect(one.isSunk()).toBe(true);
});

test('isSunk with all hitted',()=>{
    const one = Ship([
        {
        coordinate: 12,
        hit: true
        },
        {coordinate: 24,
        hit: false
        }
    ]);
    expect(one.isSunk()).toBe(false);
});
