import React from 'react';
import './Item.css';

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            calificacion: 1,
            stars: []
        }

        this.onremove = this.onremove.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            calificacion: parseInt(this.props.calificacion),
            stars: Array(parseInt(this.props.calificacion)).fill(1)
        });
    }

    onremove(e){
        console.log(this.props.id);
        this.props.onremove(this.props.id);
    }

    onChangeRating(e){
        const calificacion = parseInt(e.target.value)
        this.setState({
            calificacion: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        this.props.onupdatecalificacion({id: this.state.id, title: this.state.title, image: this.state.image, calificacion: calificacion});
    }

    render(){
        return(
            <div className="item">
                <div className="image"><img src={'img/' + this.state.image} width="100%" /></div>
                <div className="title">{this.state.title}</div>
                <div className="calificacion">
                    <p>
                    {this.state.stars.map(x =>
                        <img src='img/star.png' width='32' />
                    )}
                    </p>
                    Calificación: 
                    <select value={this.state.calificacion} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onremove}>Eliminar</button>
                </div>
            </div>
        );
    }

}

export default Item;