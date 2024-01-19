import React, { Component } from 'react';  
  
class Ex2 extends React.Component {  
    constructor(props) {  
    super(props);  
  
    this.callRefInput = null;  
  
    this.setInputRef = element => {  
      this.callRefInput = element;  
    };  
  
    this.focusRefInput = () => {  
      //Focus the input using the raw DOM API  
      if (this.callRefInput) this.callRefInput.focus();  
    };  
  }  
  
  componentDidMount() {  
    //autofocus of the input on mount  
    this.focusRefInput();  
  }  
  
  render() {  
    return (  
      <div>  
    <h2>Callback Refs Example</h2>  
        <input  
          type="text"  
          ref={this.setInputRef}  
        />  
        <input  
          type="button"  
          value="Focus input text"  
          onClick={this.focusRefInput}  
        />  
      </div>  
    );  
  }  
}  
export default Ex2;  