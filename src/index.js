//React is the library for us to write JSX code
import React from 'react';
//React-dom is the library that gets the JSX code and inserts it in the DOM.
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = ""

//App is a class
const App = function(){
    
    //The function returns JSX that is later compiled into vanilla JS
    return (
    <div>
        Welcome to React!
        <div>
            {/*This creates an instance of the component SearcBar */}
            <SearchBar/>
        </div>
    </div>);
}

//<App></App> = <App/> is the JSX term for an instance of the class App. The instance of the 
//class is what is gonna be inserted into the DOM.
ReactDOM.render(<App/>, document.querySelector('.container'))
