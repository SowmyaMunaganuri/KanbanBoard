import React, { Component } from 'react';
//import {name,data-testid} from './Task.js';
class Controls extends Component {
  constructor(props){
    super(props);
    this.state={
    current:this.props.currentvalue
    }
  }

  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            value={this.state.current}
            data-testid="selected-task-field"
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled
            data-testid="move-back-btn"
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled
            data-testid="move-forward-btn"
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;