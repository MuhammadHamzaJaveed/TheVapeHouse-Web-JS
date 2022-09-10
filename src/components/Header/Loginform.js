import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Loginform.css'
import { GiCrossedBones } from 'react-icons/gi';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginform = (props) => {

    const [loginname1, setLoginame1] = useState("")
    const [loginpassword1, setLoginpassword1] = useState("")

    const loginApiA = () => {

        axios.get(`${window.sbapi}/api/Account/Login?username=${loginname1}&password=${loginpassword1}`).then((repss) => {
            if (repss.data.Message === 'Success') {
                
                toast.success(' You are Successfully Login', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoginame1("")
                setLoginpassword1("")
            }
            else{
                alert("Pleas Check Your Username & Password")
            }
        })
    }


    // window.onclick = (e) => {
    //     const loginback = document.getElementById('loginback')
    //     const logincross = document.getElementById('logincross')
    //     if (e.target === loginback || e.target === logincross || e.target == null) {
    //         props.setToggleLogin(false)
    //     }
    //     else {
    //         // props.closeModal(true)
    //     }
    // }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="colored"
                pauseOnFocusLoss
                draggable 
                pauseOnHover />
           
                <span id='loginback' >
                <div className='login-form' >
                    <button className='cancel-btn' onClick={() => props.setToggleLogin(false)} > <GiCrossedBones id='logincross' /> </button>
                    <p className='Welcome'>Welcome! Have you shopped before?</p>
                    <input type='email'  value={loginname1} onChange={e => setLoginame1(e.target.value)} placeholder="User Name / E-mail " style={{fontSize:"14px" ,height:"100px"}} />
                    <input type='password' value={loginpassword1} onChange={e => setLoginpassword1(e.target.value)} placeholder='Password' style={{fontSize:"14px"}}/>
                    <button className='login-btn' onClick={loginApiA} style={{fontSize:"14px"}}>LOGIN</button>
                    <p>
                        <Link to={'/recovery'} className='forget' style={{marginBottom:"0px"}} > Forget Password? </Link>
                    </p>
                    <p className='register-here' style={{marginTop:"0px",color:"white",fontSize:"14px"}}>Don't Have An Account?
                        <Link to={'/signup'} className='register-link'  > Register Here!  </Link>
                    </p>
                </div>
            </span>
        </>
    );
};

export default Loginform;