VuduStates
==========

Vudu is a simple finite state machine to be used in event driven applications or in HTML5 games AI. 


How to use:
============

1. put 
``<script src="/path/to/VuduStateMachine.js"></script>`` at the header of your html page.
2. Create a state structure that will work with Vudu. 
    example: A simple behavior states for a zombie. 
```
var states = {
    {
        'name':'idle',
        'initial': true,
        'action': playAnimation("idle"), //play the idle animation
        'events': {
                    'walkTowardPrey': 'walk',
                    'closerToPrey': 'attack', // switch to attack state when prey is close
                }
    },
        
    {
        'name':'attack',
        'action': playAnimation("attack"),
        'events': {
                    'isWounded': 'scream',
                    'zeroHealth': 'die'
                }
    },
    
    {
        'name':'scream',
        'action': playAnimation("scream"),
        'events': {
                    'closerToPrey': 'attack',
                    'zeroHealth': 'die'
                }
    },
    {
        'name':'walk',
        'action': playAnimation("walk"),
        'events': {
                    'closerToPrey': 'attack',
                    'walk_away': 'walk',
                    'isWounded': 'scream',
                    'zeroHealth': 'die'
                }
    },
    
    {
        'name':'die',
        'action': playAnimation("die"),
        'events': {
                    'removeZombie': 'clear', //clear zombie from scene
                }
    }
    {
        'name':'clear',
        'action': clear()
    }
    
}
```
3. initialize the state <br />
``Vudu.initState(states);  //the initial state should be a Zombie idle animation``

4. Run an event that have been declared in ``states`` <br/>
    ``Vudu.event('closerToPrey');`` <br />
this event will swicth to the attack state and run the playAnimation('attack') function only when the current state is either idle, walk or scream

5. You confirm which state is running in your javascript console with: <br />
``Vudu.log();``

Very easy, right?
