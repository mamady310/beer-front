import React, { Component } from 'react';
import BrewList from '../components/BrewList'
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://breweries-back.herokuapp.com/')
      .then(response=> response.json())
      .then(users => {this.setState({ beers: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { beers, searchfield } = this.state;
    const filteredBeers = beers.filter(drinks =>{
      return drinks.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !beers.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Virginia Breweries</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          
            <BrewList beers={filteredBeers} />
        
        </div>
      );
  }
}

export default App;