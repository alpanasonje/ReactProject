const NameList=()=>
{
    const names=["Amit", "sumit", "Ajay", "Vijay"];
    return(<ul>
        {
        names.map((name, index)=> <li key={index}>{index} : {name}</li>)
        }
    </ul>

    );

}


export default NameList;
