import React, { Component, Fragment } from 'react'

class TodoList extends Component {

  // 最优先执行函数
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: []
    }
  }

  render() {
    return (
      // 外层div 替换Fragment 忽略掉
      <Fragment>
        <div>
          <input 
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)} />
          <button>按钮</button>
        </div>
        <ul>
          <li>abc</li>
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
}

export default TodoList