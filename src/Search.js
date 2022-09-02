import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

class Search extends React.Component{

    constructor(props){
        super(props);

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(e){
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(e.target.value);
    }

    render(){
        return(
            <input type="text" onChange={this.onChangeEvent} placeholder="Busca +5000 joyas" />   
        );
    }
}

export default Search;