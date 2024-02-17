import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const base_url = import.meta.env.VITE_REACT_APP_API_URL;
    const tokenForLogout = localStorage.getItem('token') ? localStorage.getItem('token') : null; 
    useEffect(() =>{
        try{
            fetch(base_url+"/logout",{
                method:'POST',
                headers:{
                    'Authorization': 'Bearer '+ tokenForLogout,
                    'Content-Type' : 'application/json'
                },
                //body: JSON.stringify(credentials)
            }).then(res => res.json())
            .then(json => {
                //console.log(json)
                if(json.success == true){
                    localStorage.removeItem("token");
                }
            } )
            .then(error => console.log(error));
        }catch(error){
            console.log(error);
        }  
    },[]);   

    //document.getElementById('message').innerHTML = "Loged out successful";
        
    <Navigate replace to="/" />;
    
    return (
        <div>
            <div id="message"></div>
        </div>
    );
};

export default Logout;