const base_url = import.meta.env.VITE_REACT_APP_API_URL;
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

//note 
//export default is required, but only single time use default..  

export default async function  productApiHandling () {
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
    return false;
}

export function test(s){
    return s * 3;
} 
//export default productApiHandling;