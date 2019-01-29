import React, { Component } from 'react';
import Cell from './Cell'
import Data from './data'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell {...val} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
Matrix.defaultProps = {
  values: [
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00']
  ]
}
