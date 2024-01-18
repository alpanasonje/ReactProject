import { useState } from "react";

const MyForm = ()=>
{

    const [name, setName]=useState("")
    const f=()=>
    {
        alert("Hi")
    }
    const submitHandler=(e)=>
    {
        e.preventDefault();
        f();
        console.log("Form Submitted..")
    }
    return(
    <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" name="sname" value={name} onChange={(e)=>{console.log(e.target.name);setName(e.target.value)}}/>
        <button type="submit">Submit</button>
    </form>
    );

}

export default MyForm;