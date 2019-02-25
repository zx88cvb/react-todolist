import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

  // 最优先执行函数
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleBtnDelete = this.handleBtnDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        {
          //外层div 替换Fragment 忽略掉
        }
        <div>
          <input 
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>按钮</button>
        </div>
        <ul>
            {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem content={item}
         index={index}
         key={index}
          deleteItem={this.handleBtnDelete}/>
      )
    });
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // });
  }

  handleBtnDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    });
  }
}

export default TodoList