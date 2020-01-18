import React from 'react';
import Stage from './Stage';
class Board extends React.Component{
    render(){
    return (
        <div>
        <h1>Kanban board</h1>
        <div style={{
        display: 'flex',
            }}>
        {this.props.stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={this.props.stagesNames[idx]}
            name={this.props.stagesNames[idx]}
            tasks={tasks}
            selectCallback={this.props.selectCallback}
          />
            ))}
        </div>
        </div>
        );
    }
}

export default Board;