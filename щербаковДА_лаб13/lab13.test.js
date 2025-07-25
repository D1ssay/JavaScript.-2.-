const { gcd } = require('./lab13.js')

test('gcd',()=>{
    expect(gcd(1071, 462)).toBe(21);
})
