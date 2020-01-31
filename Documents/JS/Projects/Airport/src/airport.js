'use strict';

class Airport{
    constructor(){
        this._hangar =[]
    }
    planes(){
        return this._hangar;
    }
    clearForLanding(plane){
        this._hangar.push(plane);
    }
    clearForTakeOff(plane){
        this._hangar = [];
    }
    // clearForTakeOff(plane){
    //     this._hangar.not.push(plane);
    // }
};