import React, { Component } from 'react'
import List from './Stage'
export default class Main extends Component{
    render(){
    return (
        <div>
            <List/>
            <h3> THIS IS THE SPACE FOR LIST OF TASKS!</h3>
        </div>
    );
    }
}