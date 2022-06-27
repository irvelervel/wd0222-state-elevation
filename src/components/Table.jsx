import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: undefined, // can be undefined, 'First', 'Second' or 'Third'
  // }

  // now Table is getting this.props.changeSelected (which is a function)
  // capable of changing that state of the parent! (App.jsx)

  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')
  // the 'selected' css class changes the text color to red

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('First')}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('Second')}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('Third')}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          App's state is {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
