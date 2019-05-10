import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class two extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="two">
        <h1>我是第二个 蒋林芝</h1>
        <Link to="/">回看第一个</Link>
      </div>
    )
  }
}

export default two
