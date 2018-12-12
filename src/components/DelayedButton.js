import React, {Component} from 'react'

class DelayedButton extends Component {
  handleClick = (event) => {
    event.persist()
    setTimeout(()=>{
        this.props.onDelayedClick(event)
      },this.props.delay
    )
    // setTimeout(this.props.onDelayedClick(event),this.props.delay)
  }
  render(){
    return(
      // <button onClick={(event)=>this.handleClick}>Click</button>
      <button onClick={this.handleClick}>Click</button>
    )
  }
}

export default DelayedButton
