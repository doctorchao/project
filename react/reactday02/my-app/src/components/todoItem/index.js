import React, { Component } from 'react'

class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = this.props.item
  }
  
  handleChange = (e) =>{
    // let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    // console.log(value)
    // let item = {
    //     ...this.props.item,
    //     [e.target.name]: value
    // }
    // this.props.change(this.props.index, item)  这样可以同时使用change修改了
    this.props.change(this.props.index)
  }
  handleDouble = () =>{
    this.setState({
        ...this.state,
        isEdit: true
    }, () =>{
        this.refs.editor.focus()
        this.refs.editor.value = this.props.item.text
    }) 
  }
  handleBlur = (e) =>{
    this.setState({
        ...this.state,
        text: e.target.value,
        isEdit: false
    })
    this.props.change(this.props.index,e.target.value)
  }
  remove = () =>{
      this.props.remove(this.props.index)
  }
  render() {
    const _this = this
    const {item, index} = this.props
    function isEdit(){
        if(!_this.state.isEdit){
            return (
                <div className="todo-item-body">
                    <input type="checkbox" name="isDone" onChange={_this.handleChange} />
                    <span className={item.isDone ? 'isDone' : ''}
                        onDoubleClick={_this.handleDouble}>{item.text}</span>
                    <button onClick={_this.remove}>删除todo</button>
                </div>
            )
        } else {
            return (
                <div className="todo-item-editor">
                    <input type="text" ref="editor" name="text" onBlur={_this.handleBlur} />
                </div>
            )
        }
    }
    return (
      <li className="todo-item">
        {isEdit()}
      </li>
    )
  }
}

export default index
