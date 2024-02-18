import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const base_url = import.meta.env.VITE_REACT_APP_API_URL;
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
    const getProductLists = async () => {
        try{
            const fatchProduct =  await fetch(`${base_url}/testproducts`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const products = await fatchProduct.json();
            if(products.success === true){
                //console.log(products.data);      
                return products.data; 
            }
        }catch(error){
            console.log('error- '+ error);
        }
    };
    //getProductLists(); //[when i use state to set data, then its render infinity] its a problem

    //Queries
    const productList = useQuery({ queryKey: ['products'], queryFn: getProductLists })
    //console.log(productList);//all useQuery response
    //console.log(productList.data);//get targeted data

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
                    productList.data?.length > 0 ?
                        (
                            productList.data?.map( (value,index) => {
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

export default ProductList;