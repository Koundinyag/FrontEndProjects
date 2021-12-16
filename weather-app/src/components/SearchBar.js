import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location:''
        };
    }

    onInputChange(e){
        this.setState({
            location:e.target.value
        });
    }

    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        const location = this.state.location
        return(
        <div>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
            <button type='submit'>
                Search
            </button>
            <input id='search' name='search' value={location} onChange={e => this.onInputChange(e)}>

            </input>
        </form>
        </div>)
    
}
}

export default SearchBar