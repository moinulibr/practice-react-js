import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const logintoken = localStorage.getItem('token') ? localStorage.getItem('token') : null; 
    return (
        <div style={{ 'marginLeft':'30px' }}>
            <ul>
                <li>
                    <NavLink className={({ isActive, isPending }) =>
                    isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }} to="/"> Home </NavLink>
                </li>
                <li>
                    {
                        logintoken ? 
                        <NavLink className={({ isActive, isPending }) =>
                        isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }}  to="/logout"> Logout </NavLink>  
                        :
                        <NavLink className={({ isActive, isPending }) =>
                        isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }} to="/login"> Login </NavLink> 
                    }
                </li>
                
                { 
                    logintoken == null && 
                    <NavLink className={({ isActive, isPending }) =>
                    isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }}  to="/registration"> <li> Registration </li></NavLink>
                }
                
                {/* <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }}  to="/about-us"> About Us </NavLink>
                </li>
                <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }}  to="/contact-us"> Contact Us </NavLink>
                </li> */}

                <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }}  to="/todo"> Todo </NavLink>
                </li>

                {
                    logintoken && 
                    <NavLink className={({ isActive, isPending }) =>
                    isPending ? "inactiveMenu" : isActive ? "activeMenu" : "" } style={{ textDecoration:'none' }}  to="/product/list"><li> Product </li></NavLink>  
                }
                
            </ul>
        </div>
    );
};

export default Navbar;