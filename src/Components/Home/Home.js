import React, {Fragment, useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../App.css'
import logo from '../../logos/Group 1329.png'
const Home = () => {
    const [allActivity,setAllActivity]=useState([]);
    useEffect(()=>{
        fetch('https://arcane-peak-48991.herokuapp.com/allActivity')
        .then(res=>res.json())
        .then(data=>setAllActivity(data))
    });
    return (
        <Fragment>
            <section id="home">
                <div className="tie">
                    <div className="nav">
                        <div className="logo">
                            <img src={logo} alt="logo" style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>Home</li>
                                <li>Donation</li>
                                <li>Events</li>
                                <li className="register">Register</li>
                                <li className="admin"><a href="https://arcane-peak-48991.herokuapp.com/" >admin</a></li>
                            </ul>
                        </div>
                    </div>
                    <h1>I grow by helping people in need</h1>
                    <div className="src-box">
                        <input type="text" name="search" placeholder="search"/>
                        <span>search</span>
                    </div>
                    <div id="container">
                        {
                            allActivity.map((item,index)=><div className="item" key={index}>
                                <div className="img-container">
                                    <img src="" alt=""/>
                                </div>
                                <div className="title">
                                <Link to={`/volunteerRegister/${item.key}`} className="link">
                                <h3>{item.title}</h3>
                                </Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;