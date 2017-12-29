import React from 'react'
import ReduxComponent from './ReduxComponent'

export default (initialState, reducer) => (component) => {
  return class extends ReduxComponent {
    state = initialState

    componentReducer(state, action) {
      return reducer(state, action)
    }

    render() {
      console.log("Component: ", component)
      return component({...this.props, localDispatch: this.localDispatch, state: this.state})
    }
  }
}