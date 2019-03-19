import React, { Component } from 'react'
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoListAnt extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 订阅store store改变
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleButtonClick={this.handleButtonClick}
      handleItemDelete={this.handleItemDelete}
      />
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange () {
    this.setState(store.getState());
  }

  handleButtonClick () {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete (index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoListAnt
