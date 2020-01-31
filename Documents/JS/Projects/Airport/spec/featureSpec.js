'use strict'
describe('Feature Test:', function(){
let airport;
let plane;
beforeEach(function(){
    plane = new Plane();
    airport = new airport();
});
it('describe planes that they are alowed to land at an airport',function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
});
});