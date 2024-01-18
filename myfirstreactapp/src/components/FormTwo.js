import { useState } from "react";

const FormTwo=()=>
{
    const [nums, setNums]=useState({num1:10, num2:20})
   
    const submitHandler=(e)=>
    {
        e.preventDefault();    
        console.log(parseInt(nums.num1)+parseInt(nums.num2))
    }
    const numberChange=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setNums((values)=>({...values, [name]:value}))
        
    }
    return(
        <><h1>Addition</h1>
        <form onSubmit={submitHandler}>
            <label>First Number : </label>
            <input type="number" name="num1" value={nums.num1} onChange={numberChange}/>
            <label>Second Number : </label>
            <input type="number" name="num2" value={nums.num2} onChange={numberChange}/>
            <button type="submit">Add</button>
        </form></>
 );
}

export default FormTwo;