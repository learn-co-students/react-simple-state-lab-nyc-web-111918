import React, { Component } from 'react';
import UUID from 'uuid'
import Cell from './Cell'




export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <div key={UUID()} className="cell"><Cell key={UUID()} value={val}/></div>) // replace me and render a cell component instead!

  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div key={UUID()} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    console.log('data')
    //console.log('matrix props',this.props)
    console.log(this.pattern1)
    return (
      <div id="matrix">
        {this.genMatrix()}

      </div>
    )
  }
}

Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}
