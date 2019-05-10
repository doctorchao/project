import React, { Component } from 'react'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }
  handleChange = (e) =>{
    const value = e.target.value
    this.setState({
      text: value
    })
  }
  handleKey = (e) =>{
    const text = this.state.text
    if (e.keyCode == 13){
      this.props.addItem(text)
      this.setState({
        text: ''
      })
    }
  }
  render() {
    const text = this.state.text
    return (
      <div className="todo-header">
        <input type="text" placeholder="记录你想干的事" value={text} onChange={this.handleChange}
          onKeyDown={
            this.handleKey
          } />
      </div>
    )
  }
}

export default Header
