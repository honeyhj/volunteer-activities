import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const VolunteerRegister = () => {
    const {key}=useParams();
    const [selectedActivity,setSelectedActivity]=useState({});
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5500/allActivity/'+key)
        .then(res=>res.json())
        .then(data=>setSelectedActivity(data))
    },[])
    const allData ={...selectedActivity,...loggedInUser}
    return (
        <div className="form">
            <h2>register as a volunteer</h2>
            <form action="http://localhost:5500/registerActivity" method="POST" >
                <input type="text" name="name" value={allData.name} placeholder="full name"/>
                <input type="text" name="email" value={allData.email} placeholder="email"/>
                <input type="text" name="title" value={allData.title} placeholder="title"/>
                <input type="text" name="date" placeholder="Date"/>
                <input type="text" name="description" placeholder="Description"/>
                <input type="submit" value="Register" className="submit"/>
            </form>
        </div>
    );
}

export default VolunteerRegister;