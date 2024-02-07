// import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// import { login } from '../../redux/actions/auth';

// const Login = () => {

//     const messagebackend = useSelector((state) => (state.authReducer.message));

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);



//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);

//         if(!email || !password){
//             toast.error('Please fill all the fields');
//             setLoading(false);
//             return false;   
//         }
//         console.log(email, password);
//         dispatch(login({email,password},navigate));    

//         // setLoading(false);

//         if(!loading && messagebackend){
//             setLoading(true);
//             setTimeout(() => {
//                 toast.error(messagebackend);
//             }, 1000); // Wait for 1 second
//         }
//         setLoading(false);
//     }

//     // useEffect(() => {
//     //     if (!loading && messagebackend) {
//     //         toast.error(messagebackend);
//     //     }
//     // },[messagebackend,loading])




//     return (

//         <div className='container mt-4' style={{ marginLeft: '25%' }}>
//             <form >
//                 {/* {messagebackend ? (
//                     <div className='alert alert-info w-50' >
//                         {messagebackend} 
//                     </div>
//                 ) : (<></>)} */}
//                 <div className="form-row ">
//                     <div className="form-group col-md-6">
//                         <label htmlFor="inputEmail4">Email</label>
//                         <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="inputEmail4" placeholder="Enter email" />
//                     </div>
//                 </div>
//                 <div className='form-row'>
//                     <div className="form-group col-md-6">
//                         <label htmlFor="inputPassword4">Password</label>
//                         <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} id="inputPassword4" placeholder="Enter password" />
//                     </div>
//                 </div>
//                 <button className='btn btn-primary w-50' type='submit'  onClick={handleSubmit}  > {loading ? "Loading ... " : "Login"}  </button>
//                 <ToastContainer />
//             </form>
//         </div>
//     )
// }

// export default Login



/* New Login Design */

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import {
    Flex,
    Img,
    Button,
    Grid,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Unstop from '../../assets/img/Unstop.svg';
import { signup } from '../../redux/actions/auth';
import './InputLabelAnimation.css';
import Carousel from './Carousel';

const Login = () => {
    const messagebackend = useSelector((state) => state.authReducer.message);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (messagebackend) {
            toast.error(messagebackend);
        }
    }, [messagebackend]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(signup({ firstName, lastName, email, password }));
        }
    };

    const validate = () => {
        if (!firstName || !lastName || !email || !password) {
            toast.error('Please fill all the fields');
            return false;
        }
        if (firstName.length < 2) {
            toast.error('First Name should be at least 2 characters long');
            return false;
        }
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters long');
            return false;
        }
        if (!email.includes('@')) {
            toast.error('Please enter a valid email');
            return false;
        }
        return true;
    };

    return (
        <div
            className="signup"
            borderRadius="0px 30px 0px 30px"
            style={{
                height: 'auto',
                marginTop: '1vw',
                marginBottom: '1vw',
            }}
        >
            <Flex
                alignContent={'center'}
                justifyContent={'center'}
                className="signup-center-box"
            >
                <div className='curousel_box'>
                    <Carousel />
                </div>
                <Flex
                    className='box-form'
                    direction="column"
                    align="center"
                    justify="center"
                // width={{ base: '50%', md: '50%',lg:"100%" }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="form-signup"
                        style={{
                            width: '100%',
                            padding: '1rem',
                        }}
                    >
                        <Img
                            className='LogoImg'
                            src={Unstop}
                            alt="unstopablePhoto"
                        />
                        <div
                            style={{
                                marginLeft: '1%',
                                marginBottom: '1rem',
                            }}
                            className="text"
                        >
                            <h6 style={{ marginLeft: '2%', fontSize: "12px" }}>
                                Hi, Unstoppable
                            </h6>
                            <h3 style={{ fontSize: "18px" }}>👋 Welcome Back to Unstop!</h3>
                        </div>
                        <br />
                        <Button
                            variant="outline"
                            borderColor="#ff7f6eff"
                            color="#000"
                            size="lg"
                            fontSize="15px"
                            p={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                            w={{ base: '100%', md: 'auto' }} // Full width on small screens, auto width on medium and larger screens
                            mb={{ base: '0.5rem', md: 0 }} // Add bottom margin on small screens
                        >
                            <FcGoogle className='googleicon' />
                            Continue with Google
                        </Button>

                        <div className='form-fields'>
                            <div class="input-field">
                                <input
                                    style={{ width: '100%' }}
                                    type="text"
                                    required
                                    spellCheck="false"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label>Email</label>
                            </div>


                            <div class="input-field">
                                <input
                                    type="text"
                                    required
                                    spellCheck="false"
                                    autoComplete="off"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    style={{ width: '48% !important' }}
                                />
                                <label>Password</label>
                            </div>
                        </div>
                        <Button
                            mt={4}
                            style={{
                                backgroundColor: '#ff7f6eff',
                                color: 'white',
                                width: '100%',
                                // width: '48vw',
                            }}
                            type="submit"
                            size="lg"
                        >
                            Sign In
                        </Button>
                        <br />
                        Don't have an account?{' '}
                        <NavLink
                            style={{
                                color: '#0000f2ff',
                                textDecoration: 'none',
                            }}
                            to="/signup"
                        >
                            Signup
                        </NavLink>
                    </form>
                </Flex>
            </Flex>
        </div >
    );
};

export default Login;

