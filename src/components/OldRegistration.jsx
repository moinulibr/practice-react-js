import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const OldRegistration = () => {
    const [formObj,setFormObj] = useState(
        {
            name:"",email : "", password : "", password_confirmation:''
        }
    );
    const getOnChangeData = (property,value) => {
        setFormObj(previousObje => ({
            ...previousObje,
            [property] : value
        }));
    };
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formObj);
        const base_url = import.meta.env.VITE_REACT_APP_API_URL;
        //let credentials = formObj;// {email:'admin@gmail.com',password:'12345678'};
        fetch(base_url+'/register', 
        {
            method:'POST', 
            headers:{
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formObj)
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            //console.log(data.message);
            document.getElementById('message').innerHTML = "Registration successful";
        })   
        .then(json => console.log(json))   
        .then(error => console.log(error));  
        //console.log(localStorage.getItem('token'));
        
    
        <Navigate replace to="/" />;
    }
    return (
        <div style={{'marginLeft':'200px', 'marginRight':'200px'}}>
            <br/>
            <h4>Registration</h4>
                <div id="message"></div>
            <hr />

            <form  onSubmit={formSubmit}>
                <div> 
					<label htmlFor="name" style={{ marginRight : "90px" }}>Name</label>
					<input type="text" onChange={ (e) => getOnChangeData('name',e.target.value)} value={formObj.name} placeholder='Name'/> 
				</div> 
                <br/>
                <div> 
					<label htmlFor="email" style={{ marginRight : "90px" }}>Email</label>
					<input type="text" onChange={ (e) => getOnChangeData('email',e.target.value)} value={formObj.email} placeholder='Email'/> 
				</div> 
                <br/>
				<div> 
					<label htmlFor="passw"  style={{ marginRight : "70px" }}>Password</label>
					<input type="text" onChange={ (e) => getOnChangeData('password',e.target.value)} value={formObj.password} placeholder='Password'/> 
				</div> 
                <br/> 
                <div> 
					<label htmlFor="passw" style={{ marginRight : "10px" }}>Confirm Password</label>
					<input type="text" onChange={ (e) => getOnChangeData('password_confirmation',e.target.value)} value={formObj.password_confirmation} placeholder='Confirm Password'/> 
				</div> 
                <br/> 
				<button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Registration;