import React from 'react'
// import { render } from 'react-dom'
// import App from './App'




export default class card extends React.Component() {
    constructor(props){
        super(props);
        this.state ={
            name: props.name,    
            activity: props.activity
        }
    }
    render () {
        
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <h2>activity: {this.state.activity}</h2>
            </div>
        
        )
     };
}
