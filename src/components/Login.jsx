import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [formObj,setFormObj] = useState(
        {
            email : "", password : "" 
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
        //console.log(formObj);
        const base_url = import.meta.env.VITE_REACT_APP_API_URL;
        let credentials = formObj;// {email:'admin@gmail.com',password:'12345678'};
        fetch(base_url+'/login', 
        {
            method:'post', 
            headers:{
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            //console.log(data);
            localStorage.setItem('token',data.token);
            //console.log(data.message);
        })   
        .then(json => console.log(json))   
        .then(error => console.log(error));  
        //console.log(localStorage.getItem('token'));
        return <Navigate to="/" />;
    }
    return (
        <div style={{'marginLeft':'200px', 'marginRight':'200px'}}>
            <br/>
            <h4>Login</h4>
            <div id="message"></div>
            <hr />
            <form  onSubmit={formSubmit}>
                <div> 
					<label htmlFor="email" style={{ marginRight : '30px' }}>Email</label>
					<input type="text" onChange={ (e) => getOnChangeData('email',e.target.value)} value={formObj.email} placeholder='Email'/> 
				</div> 
                <br/>
				<div> 
					<label htmlFor="passw" style={{ marginRight : '5px' }}>Password</label>
					<input type="text" onChange={ (e) => getOnChangeData('password',e.target.value)} value={formObj.password} placeholder='Password'/> 
				</div> 
                <br/> 
				<button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;