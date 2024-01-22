import Axios from 'axios';

import { Component } from 'react';

class GetAllPlacements extends Component
{
    constructor(props)
    {
        super(props)
        this.state={placements:[]}
    }
    componentDidMount()
    {
        Axios.get(`http://localhost:8081/placements`)
            .then((res)=>{console.log(res.data);
                this.setState({placements:res.data});
        })
        .catch((err)=>{console.log(err);})
    }
    render()
    {
        return(
            <><h1>Placement Details</h1>
            
            {this.state.placements.length>0?
            this.state.placements.map((p)=>
            <table border="5" height="50" width="500">
                <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.college}</td>
                <td>{p.qualification}</td>
                <td>{p.year}</td>
                </tr>
            </table>
            ):<h1>No Placement Data Available</h1>}
            </>
        );
    }
}

export default GetAllPlacements;