import { useState } from "react";
import Axios  from "axios";
const AddPlacement=()=>
{
    const [Placement, setPlacement]=useState({id:0, name:"", qualification:"", college:"", year:0})
   
    const submitHandler=(e)=>
    {
        e.preventDefault();    
        console.log(Placement);
        Axios.post(`http://localhost:8081/placements`,Placement)
        .then((res)=>{console.log("Placement data added...")})
        .catch((err)=>{console.log("Error...")})
    }
    const textChange=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setPlacement((values)=>({...values, [name]:value}))
        
    }
    return(
        <><h1>Placement Entry Form</h1>
        <form onSubmit={submitHandler}>
            <label>Id : </label>
            <input type="number" name="id" value={Placement.id} onChange={textChange}/>
            <br/>
            <label>Name : </label>
            <input type="text" name="name" value={Placement.name} onChange={textChange}/>
            <br/>
            <label>Qualification : </label>
            <input type="text" name="qualification" value={Placement.qualification} onChange={textChange}/>
            <br/>
            <label>College : </label>
            <input type="text" name="college" value={Placement.college} onChange={textChange}/>
            <br/>
            <label>Year : </label>
            <input type="number" name="year" value={Placement.year} onChange={textChange}/>
            <br/><br/>
            <button type="submit">Add Placement</button>
        </form></>
 );
}

export default AddPlacement;