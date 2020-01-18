import React from 'react';

class Controls extends React.Component {
  /*constructor(props){
    super(props);
    this.state={
    forward:false,
    back:false
    }
  }*/
  handleForward(e){
      e.preventDefault();
    /*this.setState({
        forward:!(this.state.forward)
    })
    console.log(this.state.forward);*/
    this.props.movef();
  }
  handleBack(e){
    e.preventDefault();
    /*this.setState({
        back:!(this.state.back)
    });
    console.log(this.state.back);*/
    this.props.moveb();
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
            value={this.props.task}
            data-testid="selected-task-field"
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={this.props.id===0 || this.props.task===''}
            data-testid="move-back-btn"
            name="back"
            onClick={(e)=>this.handleBack(e)}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={this.props.id===3 || this.props.task===''}
            data-testid="move-forward-btn"
            name="forward"
            onClick={(e)=>this.handleForward(e)}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;