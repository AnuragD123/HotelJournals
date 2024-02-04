// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Navigate, useLinkClickHandler, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { signup } from '../../redux/actions/auth';


// // const notify = () => toast.error('Some Error is there ');



// const Signup = () => {

//     const messagebackend = useSelector((state) => (state.authReducer.message));
//     console.log("I am from signup "+ messagebackend);
    
//     const [firstName, SetFirstName] = useState('');
//     const [lastName, SetLastName] = useState('');
//     const [user_type, SetUserType] = useState(''); // [candidate, recruiter, organizer]
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [country_code, setCountryCode] = useState('');
//     const [phone_no, setPhone_no] = useState('');



//     const dispatch = useDispatch();
//     const navigate = useNavigate();



//     const handleSubmit = (e) => {
//         e.preventDefault();

//         //  Validation 
//         if (!firstName || !lastName || !email || !password || !confirmPassword || !country_code || !phone_no || !user_type) {
//             toast.error('Please fill all the fields');
//             return false;
//         }else if(firstName.length < 2){
//             toast.error('First Name should be atleast 2 characters long');
//             return false;
//         }
//         else if (password.length < 6) {
//             toast.error('Password should be atleast 6 characters long');
//             return false;
//         }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
//             toast.error('Please enter a valid email');
//             return false;
//         }

//         dispatch(signup({
//             firstName, lastName, user_type , email,  password,
//             confirmPassword, country_code, phone_no
//         }, navigate));

//         console.log(user_type, firstName, lastName, email, password, confirmPassword, country_code, phone_no)

//         if(messagebackend){
//             toast.error(messagebackend);
//         }else{
//             toast.success('User Registered Successfully');
//         }

//     }

//     //validate all the fields
//     // const validate = () => {
//     //     if(messagebackend){
//     //         toast.error(messagebackend);
//     //         return false;
//     //     }else{
//     //         if (!firstName || !lastName || !email || !password) {
//     //             toast.error('Please fill all the fields');
//     //             return false;
//     //         }else if(firstName.length < 2){
//     //             toast.error('First Name should be atleast 2 characters long');
//     //             return false;
//     //         }
//     //         else if (password.length < 6) {
//     //             toast.error('Password should be atleast 6 characters long');
//     //             return false;
//     //         }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
//     //             toast.error('Please enter a valid email');
//     //             return false;
//     //         }
//     //         return true;
//     //     }   
//     // }

//     // useEffect(() => {
//     //     if (messagebackend) {
//     //         toast.error(messagebackend);
//     //     }
//     // }, [messagebackend]);

//     return (
//         <div className='container pt-5'>
//             <form>

//                 {/*   */}
//                 {
//                     // messagebackend ? (
//                     //    toast.error(messagebackend)
//                     // ) : (<></>)
//                 }
//                 <div className='form-row'>
//                     <div className='form-group col-md-6'>
//                         <label htmlFor="create_account_as"> Create account as </label>
//                         <select className='ml-2' onChange={(e) => { SetUserType(e.target.value) }}>
//                             <option value="select"> Select Option</option>
//                             <option value="candidate">Candidate</option>
//                             <option value="recruiter">Recruiter</option>
//                             <option value="organizer">Organizer</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-group col-md-6">
//                         <label htmlFor="firstName">First Name</label>
//                         <input type="text" className="form-control" name='firstName' id="inputFname" placeholder="First Name" autoComplete='off' onChange={(e) => { SetFirstName(e.target.value) }} />
//                     </div>
//                     <div className="form-group col-md-6">
//                         <label htmlFor="lastName">Last Name</label>
//                         <input type="text" className="form-control" name='lastName' id="inputLname" placeholder="Last Name" onChange={(e) => { SetLastName(e.target.value) }} />
//                     </div>
//                 </div>

//                 {/*  */}

//                 <div className="form-row">
//                     <div className="form-group col-md-6">
//                         <label htmlFor="inputEmail4">Email</label>
//                         <input type="email" className="form-control" name='email' id="inputEmail4" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-group col-md-6">
//                         <label htmlFor="inputPassword4">Password</label>
//                         <input type="password" className="form-control" name='password' id="inputPassword4" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
//                     </div>
//                     <div className="form-group col-md-6">
//                         <label htmlFor="inputPassword4"> Confirm Password</label>
//                         <input type="password" className="form-control" name='password' id="inputPassword4" placeholder="Password" onChange={(e) => { setConfirmPassword(e.target.value) }} />
//                     </div>
//                 </div>
//                 <div className='form-group'>
//                     <div className='form-group col-md-6'>
//                         <label htmlFor="countryCode"> Country Code </label>
//                         <input type="text" className="form-control"  placeholder="Country Code" onChange={(e) => { setCountryCode(e.target.value) }} />
//                     </div>
//                     <div className='form-group col-md-6'>
//                         <label htmlFor="phone_no"> Phone Number </label>
//                         <input type="text" className="form-control"  placeholder="Phone Number" onChange={(e) => { setPhone_no(e.target.value) }} />
//                     </div>
//                 </div>
//                 <button type="submit" onClick={handleSubmit}  className="btn btn-primary w-100 mt-2 mb-2">Sign Up</button>
//                 <ToastContainer />
//             </form>
//         </div>
//     )
// }

// export default Signup





/* new signup */


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

const Signup = () => {
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
                <Carousel />
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
                            style={{ height: '3rem', margin: '1.2rem' }}
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
                            <h6 style={{ marginLeft: '2%' }}>
                                Ready to Be Unstopable!
                            </h6>
                            <h3>👋 Create an account</h3>
                            <h5 style={{ marginLeft: '2%' }}> 
                                Create account as a
                            </h5>
                        </div>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            flexDirection={{ base: 'row', md: 'row' }} // Stack on small screens, align horizontally on medium and larger screens
                            gap={{ base: '1rem', md: '1.5rem' }} // Adjust spacing between buttons
                            mt={{ base: '1rem', md: 0 }} // Add top margin on small screens
                        >
                            <Button
                                variant="outline"
                                borderColor="#ff7f6eff"
                                color="#000"
                                size="lg"
                                p={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                                w={{ base: '100%', md: 'auto' }} // Full width on small screens, auto width on medium and larger screens
                                mb={{ base: '1rem', md: 0 }} // Add bottom margin on small screens
                            >
                                Candidate
                            </Button>
                            <Button
                                variant="outline"
                                borderColor="#ff7f6eff"
                                p={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                                color="#000"
                                size="lg"
                                w={{ base: '100%', md: 'auto' }}
                                mb={{ base: '1rem', md: 0 }}
                            >
                                Recruiter
                            </Button>
                            <Button
                                variant="outline"
                                borderColor="#ff7f6eff"
                                p={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                                color="#000"
                                size="lg"
                                w={{ base: '100%', md: 'auto' }}
                                mb={{ base: '1rem', md: 0 }}
                            >
                                Organiser
                            </Button>
                        </Flex>
                        <br />
                        <br />
                        <div className='form-fields'>
                            <Flex className='name-container'>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />
                                    <label>First Name</label>
                                </div>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                    <label>Last Name</label>
                                </div>
                            </Flex>
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
                                    style={{ width: '100%' }}

                                    type="text"
                                    required
                                    spellCheck="false"
                                    autoComplete="off"
                                />
                                <label>User Name</label>
                            </div>
                            <div class="input-field">
                                <input
                                    style={{ width: '100%' }}
                                    type="text"
                                    required
                                    spellCheck="false"
                                    autoComplete="off"
                                />
                                <label>Phone</label>
                            </div>
                            <Flex style={{width:'100%'}} className='password-container'>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        style={{width:'48% !important'}}
                                    />
                                    <label>Password</label>
                                </div>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        style={{width:'48% !important'}}
                                    />
                                    <label>Confirm Password</label>
                                </div>
                            </Flex>
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
                            Sign Up
                        </Button>
                        <br />
                        Already have an account?{' '}
                        <NavLink
                            style={{
                                color: '#0000f2ff',
                                textDecoration: 'none',
                            }}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </form>
                </Flex>
            </Flex>
        </div>
    );
};

export default Signup;

