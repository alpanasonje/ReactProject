import React from "react";
class Ex1 extends React.Component {  
    constructor(props) {  
      super(props);  
      this.callRef = React.createRef();  
      this.addingRefInput = this.addingRefInput.bind(this);  
    }  
     
    addingRefInput() {  
      this.callRef.current.focus();  
    }  
     
    render() {  
      return (  
        <div>  
          <h2>Adding Ref to DOM element</h2>  
          <input  
            type="text"  
            ref={this.callRef} />  
          <input  
            type="button"  
            value="Add text input"  
            onClick={this.addingRefInput}  
          />  
        </div>  
      );  
    }  
  }  
  export default Ex1;