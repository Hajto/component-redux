import React, { Component } from 'react'

export default class ReduxComponent extends Component {
  constructor(props){
    super(props)
  }

  localDispatch = (action) => {
    this.setState(this.componentReducer(this.state, action))
  }

  componentReducer() {
    throw new Error('You have to implement the reducer first');
  }
}