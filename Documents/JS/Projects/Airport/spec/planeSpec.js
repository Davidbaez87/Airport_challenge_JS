'use stric';

describe('Plane',function(){
    let plane;
    beforeEach(function(){
      plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding']);
    });
    it('can land at an airport', function(){
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
      //why is ok in JS to refer to non-existing property of an object, compare to Ruby that can check the object exist  with ".respond_to". 
      // I understand that 'undefined' is actually a data type in Javascript, but why denied to be undefined? can it just not be '.toBeDefined'
      // if what I'm looking is to the plane to land
    });
  });