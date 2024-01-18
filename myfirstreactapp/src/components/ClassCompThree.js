import { Component } from "react";

class ClassCompThree extends Component
{
    constructor(props)
    {
        super(props)
        this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler()
    {
        console.log("Button Clicked....")
    }
    render()
    {
        return(
            <button onClick={this.clickHandler}>Click Here</button>
        );
    }
}

export default ClassCompThree;