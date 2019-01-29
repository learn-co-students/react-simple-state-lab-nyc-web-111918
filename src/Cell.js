import React, { Component } from 'react';
// import pattern1 from './data.js'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (<div
      onClick={this.changeColor}
      className="cell"
      style={{backgroundColor: this.state.color}}
      >
      </div>
    )
  }
}
