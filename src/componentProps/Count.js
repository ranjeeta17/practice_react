import React, { Component } from 'react'

export default class Count extends Component {
 
    constructor(){
        super()
        this.state={
            count:0
        }
        
    }

    Increment(){
        this.setState((previoustate)=>({count:previoustate.count+1})
            ,()=>{console.log(this.state.count)})
    }

    Incrementfive(){
        this.Increment()
        this.Increment()

    }


  render() {
    return (
      <>
      <h1>Count: {this.state.count}</h1>
      <button onClick={()=>this.Incrementfive()}>click me</button>
      </>
    )
  }
}
