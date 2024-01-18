import React from "react";
class ClassCompOne extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log(this.props.name);        
    }
    render()
    {
        return(
            <h2>Hello {this.props.name}</h2>
        );
    }
}

export default ClassCompOne;