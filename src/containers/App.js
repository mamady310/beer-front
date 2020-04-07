import React, { Component } from 'react';
import BrewList from '../components/BrewList'
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      pics: [],
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
    const filteredBeers = beers.filter(beers =>{
      return beers.city.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    
    return !beers.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className="title">Virginia Breweries</h1>
          <h2 className="sub">Directory of Breweries in Virginia</h2>
          <h3>Search By City</h3>
          <SearchBox searchChange={this.onSearchChange}/>
             <div className="container">
               <div className="cards">
               <BrewList beers={filteredBeers} />
               </div>
            </div>
        <div>
          <footer></footer>
        </div>
        </div>
      );
  }
}

export default App;