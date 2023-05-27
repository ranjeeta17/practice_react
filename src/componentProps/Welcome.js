import React ,{Component} from "react";

export default class Welcome extends Component{

    constructor(props){
        super(props)
        this.state = {
            color:'red',
            brand:'audi'
        }

    }

    componentDidMount(){
        // const fetchpromise= fetch("https://jsonplaceholder.typicode.com/todos/1")
        // fetchpromise.then(response=>response.json()).then(people=> <h1>{JSON.stringify(people)}</h1>)
        
        setTimeout()

    }

   

    componentDidUpdate(){

        // this.setState({color:this.state.color,brand:'bmw'})

    }



    render(){
        return(
            <>
            <h1>
                hello {this.state.color}
            </h1>
            <button onClick={()=>{
                this.setState({color:'green'})
            }}>change color</button>
            </> 
        )
    }

}
 