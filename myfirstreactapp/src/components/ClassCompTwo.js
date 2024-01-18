import { Component } from "react";

class ClassCompTwo extends Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }
    increment=()=>
    {
        console.log("Button Clicked...")
        this.setState({count:this.state.count+1});
    }
    render()
    {
        return(
            <div>
                <p>Count = {this.state.count}</p>
                <button onClick={this.increment}>Click Here</button>
            </div>
        );
    }
}

export default ClassCompTwo;