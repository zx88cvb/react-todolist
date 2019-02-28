import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content === this.props.content) {
      return false;
    }
    return true;
  }

  render() {
    const {test, content} = this.props;
    return(
      <li onClick={this.handleClick}>
        {test} - {content}
      </li>
    );
  }

  handleClick() {
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'default value'
}

export default TodoItem;