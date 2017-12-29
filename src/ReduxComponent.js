import React, { Component } from 'react'

export default class ReduxComponent extends Component {
  localDispatch = (action) => {
    this.setState(this.componentReducer(this.state, action))
  }

  componentReducer() {
    throw new Error('You have to implement the reducer first');
  }
}