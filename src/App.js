import React from 'react';
import './App.scss';
import Menu from './Menu';
import List from './List';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      joyas:[
        {id:0, calificacion: 4, title: 'Conjunto de joyeria para mujer', image: 'conjunto.jpeg'},
        {id:1, calificacion: 3, title: 'Anillo ajustable en plata ley 925', image: 'anillo.jpeg'},
        {id:2, calificacion: 5, title: 'Collar de opalo para niña en plata ley 925', image: 'collaropalo.jpeg'},
        {id:3, calificacion: 5, title: 'Pulsera para dama en plata', image: 'pulsera.jpeg'},
      ],
      copyJoyas: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  initJoyas(){
    //this.setState({copyJoyas: [...this.state.joyas]});
    this.setState((state,props) => ({
      copyJoyas: [...state.joyas]
    }));
  }

  componentDidMount(){
    this.initJoyas();
  }

  onSearch(query){
    if(query === ''){
      this.setState({copyJoyas: [...this.state.joyas]});
    }else{

      const temp = [...this.state.joyas];
      var res = [];
      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
    
      this.setState({copyJoyas: [...res]});
    }
  }

  addItem(item){
    var temp = [...this.state.joyas];
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);
    this.setState({joyas: [...temp]});
    this.initJoyas();
  }

  remove(id){
    var temp = [...this.state.joyas];
    const res = temp.filter(item => item.id != id);
    this.setState({joyas: [...res]});
    this.initJoyas();
  }

  updateRating(item){
    var temp = [...this.state.joyas];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].calificacion = item.calificacion;

    this.setState({joyas: [...temp]});
    this.initJoyas();
  }

  render(){
    return (
      <div className="app">
        <Menu title="Joyeria111 Cristal        " onsearch={this.onSearch} onadd={this.addItem} />
        <List className="list" items={this.state.copyJoyas} onremove={this.remove} onupdatecalificacion={this.updateRating} />
      </div>
    );
  }
}

export default App;
