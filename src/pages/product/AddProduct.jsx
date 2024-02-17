import React, { useState } from 'react';
import { Link,Navigate } from 'react-router-dom';

const AddProduct = () => {
    const tokenForLogout = localStorage.getItem('token') ? localStorage.getItem('token') : null; 
    const [formObj,setFormObj] = useState({
        name:'',details:''
    }); 
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
        fetch(base_url+'/testproducts', 
        {
            method:'post', 
            headers:{
                'Authorization': 'Bearer '+ tokenForLogout,
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
        })   
        .then(json => console.log(json))   
        .then(error => console.log(error));  
        <Navigate replace to="/product/list" />;
    };

    return (
        <div style={{'marginLeft':'200px', 'marginRight':'200px'}}>
            <br/>
            <h4>Product Add</h4>
            <Link to="/product/list" >Product List</Link>
            <div id="message"></div>
            <hr />

            <form  onSubmit={formSubmit}>
                <div> 
					<label htmlFor="name" style={{ marginRight: '20px' }}>Name</label>
					<input type="text" onChange={ (e) => getOnChangeData('name',e.target.value)} value={formObj.name} placeholder='Name'/> 
				</div> 
                <br/>
                <div> 
					<label htmlFor="details" style={{ marginRight: '12px' }}>Details</label>
					<input type="text" onChange={ (e) => getOnChangeData('details',e.target.value)} value={formObj.details} placeholder='Details'/> 
				</div> 
                <br/>
				<button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;