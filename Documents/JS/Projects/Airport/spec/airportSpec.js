'use strict';

describe('Airport', function(){
    let airport;
    let plane;
    beforeEach(function(){
        airport = new Airport;
        plane = jasmine.createSpy('plane',['land']);
    });
        it('check the airport starts with no planes', function(){
expect(airport.planes()).toEqual([ ]);
    });
    it('can clear lines for landing', function(){
        airport.clearForLanding(plane);
        expect(airport.planes()).toEqual([plane]);
        });
});