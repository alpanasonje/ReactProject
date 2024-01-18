const StudentList=()=>
{
    const students=[{rno:1, name:"Amit"},{rno:2, name:"Nitin"},{rno:9, name:"Pankaj"},{rno:3, name:"Dhruv"},{rno:6, name:"Manoj"}];
    return(
        
        <ul>
            {
                students.map((stud)=><li key={stud.rno}>RollNo : {stud.rno} Name : <b>{stud.name}</b></li>)
            }
        </ul>


    );

}

export default StudentList;
