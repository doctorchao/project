import React, { Component }  from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import './index.scss'
import Todo from './components/todoItem'
import Footer from './components/footer'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      arr: [],
      status: 1
    }
  }
  changestatus = (status) =>{
    this.setState({
      status
    })
  }
  removeDone =() =>{
    let newArr = this.state.arr.filter(item =>{
      return !item.isDone
    })
    this.setState({
      arr: newArr
    }, ()=>{
      console.log(this.state.arr)
    })
  }
  removeOne = (index) =>{
    let array = [...this.state.arr]
    array.splice(index, 1)
    this.setState({
      arr: array
    })
  }
  add =(text) =>{
    console.log(text)
    let arr1 = [...this.state.arr]
    arr1.push({
      text,
      isEdit: false,
      isDone: false
    })
    this.setState({
      arr: arr1
    })
  }
  changeItem = (index, text) =>{
    let arr2 = [...this.state.arr]
    if(text){
      arr2[index].text = text
      this.setState({
        arr: arr2
      })
    }else{
      arr2[index].isDone = !arr2[index].isDone
      this.setState({
        arr: arr2
      })
    }
  }
  render (){
    let arr = this.state.arr
    let status = this.state.status
    return (
      <div className="App">
        <h1 style={{textAlign:'center'}}>todoList</h1>

        <div className="todo-container">
          <Header addItem={this.add}></Header>
          <ul className="todo-box">
            {
              arr.map((item, index) =>{
                if (status === 1){
                  return <Todo item={item} index={index} key={index}
                    remove={this.removeOne} change={this.changeItem}/>
                } else if (status === 2){
                  if (!item.isDone){
                    return <Todo item={item} index={index} key={index}
                      remove={this.removeOne} change={this.changeItem}/>
                  } else{
                    return null
                  }
                } else if (status === 3){
                  if (item.isDone){
                    return <Todo item={item} index={index} key={index}
                      remove={this.removeOne} change={this.changeItem}/>
                  } else{
                    return null
                  }
                }
                
              })
            }
          </ul>
          <Footer change ={this.changestatus} arr={arr} remove ={this.removeDone}></Footer>
        </div>
      </div>
    )
  }
}

export default App;
