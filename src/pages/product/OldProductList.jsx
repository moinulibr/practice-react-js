import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const OldProductList = () => {
    const base_url = import.meta.env.VITE_REACT_APP_API_URL;
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
    let productLists = [];
    const [productList,setProductList] = useState([]);

    const getProducts = fetch(`${base_url}/testproducts`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        })
        .then((res) => res.json())
        .then((res) => {
            //console.log('in');
            //console.log(res.data);
            setProductList(res.data);
            return res.data;
        });
      // Queries
    //const productList = useQuery({ queryKey: ['products'], queryFn: getProducts })
    console.log('here');
    console.log(productList);
    

    
        /* try{
            const response = fetch(base_url+"/testproducts",{
                headers:{
                    'Authorization': 'Bearer '+ token,
                    'Content-Type' : 'application/json'
                },
            }).then(res => res.json())
            .then(json => {
                console.log(json)
                if(json.success == true){
                    return setProductList(json.data);
                }
            } )
            .then(error => console.log(error));
        }catch(error){
            console.log(error);
        }  */    
    
    console.log('final');
    console.log(productList.length);

    return (
        <div style={{'marginLeft':'200px', 'marginRight':'200px'}}>
            <br/>
            <h4>Product List</h4>
            <Link to="/product/add" >Add Product</Link>
            <hr />

            <table style={{ 'border':'1px solid gray' }}>
                <thead>
                <tr>
                    <td style={{ 'border':'1px solid gray' }}>Product Name</td>
                    <td style={{ 'border':'1px solid gray' }}>Product Details</td>
                    <td style={{ 'border':'1px solid gray' }}>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    productList.length > 0 ?
                        (
                            productList.map( (value,index) => {
                                return (<tr key={index}>
                                    <td style={{ 'border':'1px solid gray' }}>{value['name']}</td>
                                    <td style={{ 'border':'1px solid gray' }}>{value['details']}</td>
                                    <td style={{ 'border':'1px solid gray' }}>action</td>
                                </tr>)
                            })
                        ) 
                    : (<tr></tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default OldProductList;