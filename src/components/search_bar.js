//If we don't have it in here, Babel will not be able to transpile
//the <input/> into React.createElement('input').
//Remember JSX is from React.
import React, {Component} from 'react';

class SearchBar extends Component {
    //remember that in JSX, <input></input>=<input/>
    constructor(props){
        super(props);
        this.state = { term: ''}
    }
    render(){
        return (
        <div>
            <input 
            /*The line below is what is called controlled state.
                This is an answer to what I had tried doing on another
                exercise. Instead of reading the last event and setting it
                to be the state, we set the state to be the last event.
                This may be confusing, but imagine the user is typing an array
                and makes a mistake when typing it and continue typing it till
                its finish.
            */
            value = {this.state.term}
            onChange={ e => this.setState({term: e.target.value})}/>
            State Value : {this.state.term}
        </div>
        );
        }
    /*
    Every time the state is updated, we then have the function render() re-run,
    which makes the App component to be re-run and the DOM to be updated through
    a re-run of the reactDOM
    */

    /* return <input onChange={ e => console.log(e.target.value)} 
        Whenever this happens, I could use a handler as well. 
        So, onChange, onClick and all of that are tracked by the browser.
        They send us that information , if I ask, through an event object.
        I can create a function to handle that object then.
        I could've used in here onChange={this.onInputChange} and create
        an onInputChange() function down below or above the return of the component.
    */
}


//This makes the component available for use in other files.
//This needs to be explicitly stated because of the JS siload.
export default SearchBar;
