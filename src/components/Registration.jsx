import React, { useRef, useState } from 'react';
import {useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Registration = () => {
    const base_url = import.meta.env.VITE_REACT_APP_API_URL;
    //const [formObjectData,setFormObjectData] = useState({});
    
    const errorMessage = useRef("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessages, setErrorMessages] = useState("");

    //form validation
    const {register,handleSubmit,watch,formState:{errors},} = useForm();
    //form submit
    const onSubmit = async (data) => {
        //console.log(data);

        //api call with async - await [without .then] 
            let response =  await fetch(`${base_url}/register`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json", }
            });
            const jsonResponse = await response.json();
            //console.log(jsonResponse);  

            if(jsonResponse.success == true){
                setSuccessMessage('Registration Successful');
                //errorMessage.current.innerHTML = jsonResponse.message + "<h3> Registration successfully</h3>";
            }
            if(jsonResponse.success == false){
                setErrorMessages(jsonResponse.errors);
                console.log(errorMessages);
                //console.log(jsonResponse.errors); //
                //console.log(jsonResponse.errors.email);//array - email
                //console.log(jsonResponse.errors.email[0]);//string final result
                let html = '<h5>Error messages</h5>';
                for(let value in jsonResponse.errors){
                    //console.log(jsonResponse.errors[value]);//array
                    //console.log(jsonResponse.errors[value][0]);//single string value
                    html += `
                    <ul>
                        <li>${jsonResponse.errors[value][0]}
                        </li>
                    </ul>
                    `;
                }
                errorMessage.current.innerHTML = html;
            } 
            
        
        /* api call with .then 
            fetch(`${base_url}/register`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json", }
            }).then(response => {
                console.log(response.json());
            })
            .then(error => {
                console.log(error);
            })
        */
            
        /* axios api call with awit
            let axiosResponse = await axios.post(`${base_url}/register`, {
                //can't send dynamic field
                name:'hasan',
                email:'ha@gmail.com',
                password : '123456@',
                password_confirmation : '123456@',
            });
            //if we don't use await
            //.then((response) => {
                //console.log(response);
                //console.log(response.data);
            //});
            console.log( axiosResponse.data);
        */
        
        //Mutation
        //await submitMutation(data);
    };

    //Mutation
    /* 
        const { mutateAsync: submitMutation } = useMutation({
            mutationFn: (data) => fetch(`${base_url}/register`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json", }
            }).then(response => {
                console.log(response.json());
            }).then(error => {
                console.log(error);
            })
        }); 
    */

    return (
        <div style={{'marginLeft':'200px', 'marginRight':'200px'}}>
            <br/>
            <h4>Registration</h4>
            
            <hr />
            <div ref={errorMessage} style={{ color:"red" }}>
                {
                    successMessage && <h4>{successMessage}</h4>
                }
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div> 
					<label htmlFor="name" style={{ marginRight : "90px" }}>Name</label>
					<input {...register("name",{required:'This field is required',minLength:{value:5,message:'Min value 5'},maxLength:{value:10,message:'Max value 10'}})} type="text"  placeholder='Name'/> 
                    <br/>
                    {errors.name && <span style={{ color:'red' }}>{errors.name?.message}</span>}
				</div> 
                <br/>
                <div> 
					<label htmlFor="email" style={{ marginRight : "90px" }}>Email</label>
					<input {...register("email", {required:' required',pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})} type="text" placeholder='Email'/> 
                    <br/>
                    {errors.email?.type == 'pattern' && <span style={{ color:'red' }}>Invalid Email</span>}
                    {errors.email?.type == 'required' && <span style={{ color:'red' }}>{errors.email?.message}</span>}
				</div> 
                <br/>
                <div> 
					<label htmlFor="age" style={{ marginRight : "100px" }}>Age</label>
					<input {...register("age", {required:'Age is required', min: {value:18,message:'Min age is 18'}, max:{value:50,message:'max value 50'} })} type="number" placeholder='Age'/> 
                    <br/>
                    {errors.age && <span style={{ color:'red' }}>{errors.age?.message}</span>}
				</div> 
                <br/>
                <div> 
					<label htmlFor="gender" style={{ marginRight : "80px" }}>Gender</label>
                    <select {...register("gender",({required:'please select this field'}))}>
                        <option value="">Select One</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <br/>
                    {errors.gender && <span style={{ color:'red' }}>{errors.gender?.message}</span>}
                </div>
                <br/>

				<div> 
					<label htmlFor="password" style={{ marginRight : "70px" }}>Password</label>
					<input {...register("password", { required:'this field is required',pattern:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} type="text" placeholder='Password'/> 
                    <br/>
                    {errors.password && <span style={{ color:'red' }}>password contain must be at least min 8 letter with a symbol, upper and lower case letters and a number. , with </span>}
				</div> 
                <br/> 
                <div> 
					<label htmlFor="passw" style={{ marginRight : "10px" }}>Confirm Password</label>
					<input  {...register("password_confirmation", { required: 'This field is required',validate: data => {
                        if(watch('password')!== data){
                            return 'Password not match';
                        }
                    } })}  type="text"  placeholder='Confirm Password'/>
                    <br/>
                    {errors.password_confirmation && <span style={{ color:'red' }}>{errors.password_confirmation?.message}</span>}
				</div> 
                <br/> 
                <div> 
					<label htmlFor="tc" style={{ marginRight : "10px" }}>Agree all terms & condition</label>
					<input  {...register("t_c", { required: 'This field is required'})}  type="checkbox" />
                    <br/>
                    {errors.t_c && <span style={{ color:'red' }}>{errors.t_c?.message}</span>}
				</div>
                <br/>
                <div> 
					<label htmlFor="usertype" style={{ marginRight : "10px" }}>User Type</label>
					<input name='utype' {...register("utype", { required: 'This field is required'})}  type="radio" />Customer
                    <input name='utype' {...register("utype", { required: 'This field is required'})}  type="radio" />Supplier
                    <br/>
                    {errors.utype && <span style={{ color:'red' }}>{errors.utype?.message}</span>}
				</div>
                <br/>  
				<button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Registration;