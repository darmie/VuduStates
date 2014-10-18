//Vudu Finite State Machine
//Finite state machines are very useful in software development, they are mostly used in Gaming, Networking or applications that rely heavily on events.
//@author Damilare Darmie Akinlaja



var Vudu = (function(){
var vudu;
var returnEval = function (str) {
    return function () { eval(str); }
}
var vuduInstance = function(s){
        this.stateMap = s;
        this.indexes = {};
        this.currentState;
    var initState = function(){
        if (this.stateMap) {
        for (var i = 0; i < this.stateMap.length; i++) {
            this.indexes[this.stateMap[i].name] = i;
            if (this.stateMap[i].initial) {
                this.currentState = this.stateMap[i];
                
            }
        }

        }
    };
    initState();
    var newState;
   var event = function(e){
        if (this.currentState.events[e]) {
            this.currentState = this.stateMap[this.indexes[this.currentState.events[e]]];
            newState = this.currentState.name;
            return this.currentState.action;

        }
    };

    var state = function(){ return newState};

    return {
                        state: state,
                        event: function(e){
                            return event(e);
                        }                      
                    };
}
return { start: function(s){
    var nowState = s;
    if(!vudu){
        vudu = vuduInstance(nowState); 
    }
    return vudu;
    }
}
})();
