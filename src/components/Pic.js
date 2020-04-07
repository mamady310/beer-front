import React, { Component } from 'react'

class Pics extends Component {
    constructor() {
      super()
      this.state = {
        pictures: [],
      }
    }
    componentDidMount() {

        fetch('https://pixabay.com/api/?key=15938355-8e95eefd12fc19425634020ee&q=beer')
        .then(res => res.json())
        .then(res => {
          this.setState({pictures: [...this.state.catArray, res.webformatURL]})
      
          console.log(res)
        
          })

        // fetch('https://pixabay.com/api/?key=15938355-8e95eefd12fc19425634020ee&q=beer')
        // .then(res => res.json())
        // .then(res => {this.setState({pictures: res})
        // })
        }

  
    render() {
        
     
    
      return (
          <div>
              
          </div>
        );
    }
  }
  
  export default Pics;