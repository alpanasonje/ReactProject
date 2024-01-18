import { useState } from "react";

const Counter=()=>
{
    const [count, setCount]=useState(100);
    const [student, setStudent]=useState({rno:0, name:"", per:0.0})

    const increment=()=>
    {
        setCount(count+1)
        setStudent({rno:10, name:"Meet", per:78})
    }
    
    return(<div><p>{count}</p>
    
    <p>RollNo : {student.rno}  Name : {student.name} Percentage : {student.per}</p>

    <button onClick={increment}>Click Here</button>
    </div>);

}


export default Counter;