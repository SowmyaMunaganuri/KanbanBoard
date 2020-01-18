import React, { Component } from 'react';
import './App.css';

import Controls from './component/Controls';
import Board from './component/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      taskselected:'',
      taskstage:''
    };
    this.selectCallback=this.selectCallback.bind(this);
    this.movef=this.movef.bind(this);
    this.moveb=this.moveb.bind(this);
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }
  selectCallback(name,id){
    console.log("Selected task was: "+name)
    this.setState({
      taskselected:name,
      taskstage:id
    });
  }
  movef(){
    console.log('Move forward');
  }
  moveb(){
    console.log('Move back')
  }

  render() {
    const { tasks } = this.state;
    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls 
        task={this.state.taskselected}
        id={this.state.taskstage}
        movef={this.movef}
        moveb={this.moveb}/>
        <Board
        
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          selectCallback={this.selectCallback}
        />
      </div>
    );
  }
}

export default App;