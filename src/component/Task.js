import React from 'react';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.taskNameToId=this.taskNameToId.bind(this);
    }
    taskNameToId(name){
        return `task-${name}`;
      }
    handleClick(e){
          this.props.selectCallback(this.props.name,this.props.testid);
          console.log(this.props.name);
          console.log(this.props.testid);
          e.preventDefault();
        }
    render(){
        return (
            <button
              style={{
                padding: '1rem',
                border: '1px solid #ccc',
                margin: '1rem 1rem 0 1rem' }}
                data-testid={this.taskNameToId(this.props.name)}
                onClick={(e)=>this.handleClick(e)}
            >
              {this.props.name}
            </button>
          );
    }
}

export default Task;