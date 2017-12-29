Redux Component
=========================

# Installation

```
npm install --save component-redux
```

## How does it work?

This package tries to replicates `Redux` behaviour for smart components. Having everything in central store can be usefull but you shouldn't store them everything. This library wraps default `React's` function `setState/1`.

## Example usage

For stateless componenets there is provided `connectState(initialState, reducer)(Component)` function.

```javascript
import React, { Component } from 'react';
import { connectState } from 'component-redux'

const reducer = (state, action) => {
  switch(action.type){
    case 'ADDONE': return {...state, counter: state.counter + 1}
    default: return state
  }
}

const initialState = {counter: 0}

const app = ({localDispatch, state}) => (<div>
  {state.counter}
  <button onClick={() => {localDispatch({type: 'ADDONE'})}}> Przycisk </button>
</div>)

export default connectState(initialState, reducer)(app);

```
