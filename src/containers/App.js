import React, { Component } from 'react';
import '../containers/App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      beer: []
      // searchfield: '',
    }
  }
 
  componentDidMount() {
    fetch('https://breweries-back.herokuapp.com/')
      .then(response=> response.json())
      .then(users => {this.setState({ beer: users})});
      
  }

render () {
 
return (
  <div>

  </div>


      

  
     );
  }
}  

export default App;
