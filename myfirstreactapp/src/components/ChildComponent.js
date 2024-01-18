import { Component } from "react";

class ChildComponent extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(<div>Child Component : {this.props.name}</div>)
    }
    componentDidMount()
    {
        console.log("Child Component Mounted....")
    }
}

export default ChildComponent;