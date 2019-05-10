import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    handleChange = (num) =>{
        this.props.change(num)
    }
    
  render() {
        const arr = this.props.arr
        const arr1 = arr.filter(item =>{
            return item.isDone
        })
        var num = 0
        arr.map(item =>{
            if (!item.isDone){
                num++
            }
        })
    return (
      <div className="todo-footer">
        <span>剩余 {num} 项</span>
        <div className="footer-btn">
            <button onClick={() =>{
                this.handleChange(1)
            }}>所有项</button>
            <button onClick={() =>{
                this.handleChange(2)
            }}>未完成</button>
            <button onClick={() =>{
                this.handleChange(3)
            }}>已完成</button>
        </div>
        <div>
            {arr1.length == 0 ? null : <button onClick={this.props.remove}>清除已完成</button>}
        </div>
      </div>
    )
  }
}

export default index
