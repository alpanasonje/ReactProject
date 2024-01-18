import { Component } from "react";

class ClassCompFour extends Component
{
    clickHandler()
    {
        console.log("Button Clicked.....")
    }
    render()
    {
        return(
            <button onClick={()=>this.clickHandler()}>Click Here</button>
        );
    }
}

export default ClassCompFour;