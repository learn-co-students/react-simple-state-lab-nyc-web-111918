import React, { Component } from 'react';

class Cell extends Component {
  constructor(prop){
    super(prop)
    this.state = {
      color: prop.value
    }

  }
  handleClick = (event) => {
    console.log(event)
    this.setState({color: "#333"})
  }

  render() {
    return (
      <div
        className="cell" 
        onClick={this.handleClick}
        style={{backgroundColor: this.state.color}} >
      </div>
    )
  }


}

export default Cell;
