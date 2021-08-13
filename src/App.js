import React, { Component } from 'react';
import {CardList} from './components/card-list/component.card-list';
import { SearchBox } from './components/search-box/component.search-box.jsx';

import './App.css';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}));
  }
  
  handleChange = (e) => {
    this.setState({ searchField:e.target.value })
  }
  
  render(){
    const { monsters, searchField } = this.state;  
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return(
      <div className="App">
        <h1 className='monster-font'>Monsters Rolodex</h1>
        <SearchBox 
            placeholder='search monsters'
            handleChange={this.handleChange}
        />
        <CardList monsters= {filterMonsters}/>
    </div>
    )
  }
}
export default App;
