// Import the React and the ReactDom Libraries

import React from 'react';
import ReactDOM from 'react-dom';


// Create a React Component


const App = () => {
const newButton = {text:'Click Me'}    
    return (
        <div>
  <label className="label" htmlFor="name"> Enter Name</label>
     <input  type="text" id="name" />
    <button style={{backgroundColor:"red", color:"white"}}>{newButton.text}</button>
</div>
    );
}

// Take the components and Show it on the Screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


