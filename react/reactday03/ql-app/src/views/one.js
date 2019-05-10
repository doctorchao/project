import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class one extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="one">
        <h1>我是第一个 周青蓉</h1>
        <Link to="/two">看第二个</Link>
      </div>
    )
  }
}

export default one
