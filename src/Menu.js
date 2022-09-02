import React, { Fragment } from 'react';
import './Menu.css';
import Search from './Search';
import PanelAdd from './PanelAdd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons"
import {faGem} from "@fortawesome/free-solid-svg-icons"

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {newItemPanel: false};

        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    add(){
     this.setState({newItemPanel: true});   
    }

    onCancel(){
        this.setState({newItemPanel: false});   
    }


    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        <FontAwesomeIcon icon={faGem} />
                        {"   "+ this.props.title}
                    </div>
                    <div className="search" >
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">    Añadir nuevo producto</button>
                    </div>
                    <div className="userActions">
                        <div className="carritoDeCompras" style={{fontSize:"1.5em",color:"white"}}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <div className="Login" style={{fontSize:"1.5em",color:"white"}}>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </div>
                    </div>
                </div>
                {(this.state.newItemPanel)?
                 <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
                 : 
                 ''
                 }
            </div>
        );
    }
}

export default Menu;