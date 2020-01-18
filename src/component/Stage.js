import React from 'react';

import Task from './Task';

//const Stage = ({ name, stageId, tasks }) => {
  class Stage extends React.Component{
      
      render(){
        return (
            <div
              data-testid={`stage-${this.props.stageId}`}
              style={{
                flexGrow: 1,
                margin: '1rem',
                paddingBottom: '1rem',
                background: '#fafafa',
              }}>
              <h2>{this.props.name} {this.props.stageId}</h2>
              <div>
                {this.props.tasks.map(task => (
                  <Task
                    key={task.name}
                    name={task.name}
                    testid={this.props.stageId}
                    selectCallback={this.props.selectCallback}
                  />
                ))}
              </div>
            </div>
          );
      }
};
export default Stage;