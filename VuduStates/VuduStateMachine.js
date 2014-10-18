//Vudu Finite State Machine
//Finite state machines are very useful in software development, they are mostly used in Gaming, Networking or applications that rely heavily on events.
//@author Damilare Darmie Akinlaja



	var Vudu = (function(){

		this.stateMap;
		this.indexes = {};

		this.initState = function(states){
			this.stateMap = states;
		}
		if(stateMap){
			for(var i = 0; i<this.stateMap.length; i++){
				this.indexes[this.stateMap[i].name] = i; 
				if(this.stateMap[i].initial){
					this.currentState = this.stateMap[i];
				}
			}

		}

		this.event = function(e){
			if(this.currentState.events[e]){
				this.currentState = this.stateMap[this.indexes[this.currentState.events[e]]];
				return this.currentState.action(), Vudu.log();

			}
		}	

		this.log = function(){
			console.log("Executing State "+this.currentState.name);
		}

	})();
