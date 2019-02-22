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
          onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>按钮</button>
        </div>
        <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <div>
                  {/*
                    <li key={index} onClick={this.handleBtnDelete.bind(this, index)}>{item}</li>
                  */}
                  <TodoItem content={item}
                   index={index}
                    deleteItem={this.handleBtnDelete.bind(this)}/>
                  </div>
                )
              })
            }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }

  handleBtnDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }
}

export default TodoList