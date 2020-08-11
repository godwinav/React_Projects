import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';




class App extends React.Component{

    state ={ images:[]}; // Intitialize state to an empty array if you epects objects or arrays


   onSearchSubmit =  async (term) => { // Including async makes it easier to get response from API request'
        // Axios, takes two parameters
 const response =  await unsplash.get('https://api.unsplash.com/search/photos', {    // Iclude 'await' in front of Axio 
        params: { query: term}, // A prams must be included
       
    })
  //  console.log(response.data.results) // Console. log to see the response.
        this.setState({images:response.data.results}) // Set the State to the intialized state
    }




    render(){ // You MUST always include render function
    return(
        <div className="ui container" style={{marginTop:"10px"}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
             <ImageList images={this.state.images}/> 
        </div> // Using props to show the images found in the ImageList Div.
    )
   }
};



export default App;