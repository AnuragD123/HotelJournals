import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
// import './Navbar.css'

import NavCSS from './Navbar.module.css'
import logo from '../../assets/img/logo.png'
import { setCurrentUser } from '../../redux/actions/CurrentUser'

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // dispatch({type:'FETCH_ALL_USERS'})
    // dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));

    var User = useSelector((state) => (state.currentuserReducer));  // Profile Data of the user
    console.log(User);
    // var User = "Hi";
    // var state = useSelector(state => state);
    // console.log("hello \n")
    // console.log(state);


    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
        dispatch(setCurrentUser(null));
    }

    useEffect(() => {

        const token = User?.token;
        if (token) {
            const decodeToken = decode(token);

            if (decodeToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch])


    // console.log("From Navbar: "+ User);

    return (
        // <div>
        //     <nav className={`navbar navbar-expand-lg navbar-light ${NavCSS.navbar_all_components}`}  >
        //         <a className="navbar-brand" href="#"> <img src={logo} height={54} width={72} alt="" />  </a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/' className={NavCSS.header_nav_links} >
        //                             Home
        //                         </NavLink>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/jobs' className={NavCSS.header_nav_links} >
        //                             Jobs
        //                         </NavLink>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/courses' className={NavCSS.header_nav_links} >
        //                             Courses
        //                         </NavLink>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/admin/courses' className={NavCSS.header_nav_links} >
        //                             Add new Course
        //                         </NavLink>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/journals' className={NavCSS.header_nav_links} >
        //                             Journals
        //                         </NavLink>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/about' className={NavCSS.header_nav_links} >
        //                             About me
        //                         </NavLink>
        //                     </div>
        //                 </li>

        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/tips' className={NavCSS.header_nav_links} >
        //                             Tips
        //                         </NavLink>
        //                     </div>
        //                 </li>


        //                 <li className="nav-item active">
        //                     <div className='nav-link' >
        //                         <NavLink to='/dashboard' className={NavCSS.header_nav_links} >
        //                            Admin Panel
        //                         </NavLink>
        //                     </div>
        //                 </li>
        //             </ul>
        //         </div>
        //         {/* <button className='btn btn-dark '> */}
        //         {
        //             (!User) ?
        //                     <>
        //                         <div className='nav-link' >
        //                             <NavLink to='/login' className={NavCSS.header_nav_links} >
        //                                 Login
        //                             </NavLink>
        //                         </div>

        //                         <div className='nav-link' >
        //                             <NavLink to='/signUp' className={NavCSS.header_nav_links} >
        //                                 SignUp
        //                             </NavLink>
        //                         </div>
        //                     </> :
        //                 (<>

        //                     <div className='nav-link' >
        //                         <button onClick={handleLogout} className='btn btn-danger' >
        //                             Logout
        //                         </button>
        //                     <Link to={`/profile/${User?.result?._id}`} style={{color:"white",textDecoration:"none",paddingLeft:'5px'}}> Hola  {User?.result?.fname}  </Link> &nbsp;
        //                     </div>
        //                 </>)
        //         }
        //     </nav>
        // </div>
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light ${NavCSS.navbar_all_components}`}>
                <Link className="navbar-brand" to="/">
                    <img src={logo} height={54} width={72} alt="" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/jobs' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active}>
                                Jobs
                            </NavLink>
                        </li>
                        {/* Add other navigation links similarly */}
                        <li className="nav-item">
                            
                                <NavLink to='/courses' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active} >
                                    Courses
                                </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            
                                <NavLink to='/admin/courses' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active} >
                                    Add new Course
                                </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            
                                <NavLink to='/journals' className={`nav-link ${NavCSS.header_nav_links}`}  activeClassName={NavCSS.active}>
                                    Journals
                                </NavLink>
                        
                        </li>
                        <li className="nav-item">
                    
                                <NavLink to='/about' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active} >
                                    About me
                                </NavLink>
                            
                        </li>

                        <li className="nav-item">
                          
                                <NavLink to='/tips' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active} >
                                    Tips
                                </NavLink>
                       
                        </li>


                        <li className="nav-item">
                           
                                <NavLink to='/dashboard' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active} >
                                    Admin Panel
                                </NavLink>
                       
                        </li>
                    </ul>
                    {(!User) ? (
                        <>
                            <div className='nav-link'>
                                <NavLink to='/login' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active}>
                                    Login
                                </NavLink>
                            </div>

                            <div className='nav-link'>
                                <NavLink to='/signUp' className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active}>
                                    SignUp
                                </NavLink>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='nav-link'>
                                <button onClick={handleLogout} className='btn btn-danger'>
                                    Logout
                                </button>
                                <Link to={`/profile/${User?.result?._id}`} className={`nav-link ${NavCSS.header_nav_links}`} activeClassName={NavCSS.active}>
                                    Hola {User?.result?.fname}
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
