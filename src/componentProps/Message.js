import React ,{Component} from "react";

class Message extends Component{

    constructor(props){
        super(props)
        this.state={
            message:'hello ranjeeta'
        }

    }
     ChangeMessage() {
        this.setState({
            message:'thankyou for subscribing'

        })

        
        
     }
    render(){
        return(
            <>
              <h1>{this.state.message}</h1> 
              <button onClick={()=>this.ChangeMessage()}>subscribe</button> 
            
            </>
        )
    }
}
export default Message