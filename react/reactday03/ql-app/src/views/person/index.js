import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class person extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="person">
        <h1>当前路由ID：{this.props.match.params.id}</h1>
      </div>
    )
  }
  componentWillMount(){
    console.log(this.props)
  }
}

export default person
