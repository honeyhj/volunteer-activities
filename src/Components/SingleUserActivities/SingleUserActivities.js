import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import '../../App.css'
const SingleUserActivities = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    
    const [singleUser,setSingleUser]=useState([]);
    useEffect(()=>{
        fetch('https://arcane-peak-48991.herokuapp.com/singleUserActivities?email=' + loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setSingleUser(data))
    },[])
    const handleCancel =(id)=>{
        fetch(`https://arcane-peak-48991.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    }
    return (
        <div className="activity">
            {
                singleUser.map((item,index)=><div key={index} className="wrapper">
                    <div></div>
                    <div className="content">
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.date}</p>
                        </div>
                        <button onClick={()=>handleCancel(item._id)}>Cancel</button>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default SingleUserActivities;