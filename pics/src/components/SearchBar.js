import React from 'react';



class SearchBar extends React.Component{
        state ={term:''};
   
        onFormSubmit = (event) => {
            event.preventDefault();
            
            this.props.onSubmit(this.state.term)    // The arrow function binds the "this" 
            // to avoid running to errors



        }



    render(){
        return(
            <div className="ui segment ">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Image Search</label>
                    <input value={this.state.term} 
                    onChange={(e)=>this.setState({term: e.target.value})} 
                    className="field magic-icon" type="text" placeholder="Enter Your Search Here"/>

                   
                </form>
            </div>
        )
    }
};




export default SearchBar;