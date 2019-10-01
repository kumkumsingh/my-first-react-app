import React, { Component } from 'react'
export default class LightSwitch extends Component {
    state = { memory: true , activity: 'display something'}

    render() {
        return (<div>
            <p>The light switch is <b>{this.state.memory ? 'on' : 'off'}</b></p>
            <button onClick={this.toggle}>Toggle</button>
            <div>
                <h2> blabla....{this.state.activity}</h2>
            </div>
            <button onClick={this.toggle}>Display</button>
        </div>)
    }
    toggle = () => {
        this.setState({

            memory: !this.state.memory,
            activity: 'This is useless text !!!!'
        })
    }
    // text = () => {
    //     this.setState({
            
            
    //     })
    // }
}