import React from 'react';

class Cell extends React.Component {

constructor(props) {
  super(props)
  // console.log(props);
  this.state = {
    color: this.props.value
  }
}
onClickColor = e => {
  console.log(this.state.color, 'props', this.props.value);
  this.setState({
    color: '#333'
  }, () => console.log(this.state.color, 'props:', this.props.value) )
}

render() {
  // console.log(this.props);
  return (
    <div onClick={this.onClickColor} className="cell" style={{backgroundColor: this.state.color }}>

    </div>
  )// end of return
}



}

export default Cell;
