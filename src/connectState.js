import React from 'react'
import ReduxComponent from './ReduxComponent'

export default (initialState, reducer) => (component) => {
  return class extends ReduxComponent {
    state = initialState

    render() {
      return React.cloneElement(component, {...this.props, localDispatch: this.localDispatch})
    }
  }
}