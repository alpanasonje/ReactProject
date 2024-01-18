import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ComponentLifeCycle extends Component
{
    render()
    {
        return(
        <ChildComponent name="react"/>);
    }
    componentDidMount()
    {
        console.log("Component is Mounted....")
    }


}

export default ComponentLifeCycle;