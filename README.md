VuduStates
==========

Vudu is a simple finite state machine to be used in event driven applications or for game character behavior AI in HTML5 games. 


How to use:
============

1. put 
``<script src="/path/to/VuduStateMachine.js"></script>`` at the header of your html page.
2. Create a state structure that will work with Vudu. 
    example: A simple behavior states for a zombie. 
```
var states = [
    {
        'name': 'idle',
            'initial': true,
        'events': {
            'walkTowardPrey': 'walk',
                'closerToPrey': 'attack', // switch to attack state when prey is close
        }
    },

    {
        'name': 'attack',
            'events': {
            'isWounded': 'scream',
                'zeroHealth': 'die'
        }
    },

    {
        'name': 'scream',
            'events': {
            'closerToPrey': 'attack',
                'zeroHealth': 'die'
        }
    }, 
    {
        'name': 'walk',
            'events': {
            'closerToPrey': 'attack',
                'walk_away': 'walk',
                'isWounded': 'scream',
                'zeroHealth': 'die'
        }
    },

    {
        'name': 'die',
            'events': {
            'removeZombie': 'clear', //clear zombie from scene
        }
    },

    {
        'name': 'clear'
         
    }

];

```
3. initialize the state <br />
``var zombie = Vudu.start(states);  //the initial state would be set to a Zombie idle state``

4. Run an event that have been declared in ``states`` <br/>
    ``zombie.event('closerToPrey');`` <br />
this event will swicth the current state  from 'idle' to 'attack'
 
5. You confirm which state is running in your javascript console with: <br />
``zombie.state();`` 
this will return the name of the current state, so you can use it in your conditionals

Very easy, right?
