import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Signup.css'
// import { BsCheckLg } from 'react-icons/bs';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Otpmodal from "./Otpmodal";
import { Link } from "react-router-dom";


const Signup = () => {


    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [otpmodalopen, setOtpmodalopen] = useState(false)
    const [loginname, setLoginame] = useState("")
    const [loginpassword, setLoginpassword] = useState("")

    // const [username, setUsername] = useState("")
    const [newname, setNewname] = useState("")


    const setCooki = (cname, cvalue, cexp) => {
        const hour = new Date();
        hour.setTime(hour.getTime() + (cexp * 60 * 60 * 1000));
        let expire = "expires =" + hour.toUTCString();
        document.cookie = cname + "=" + cvalue + "ue;" + expire + ";path=/";
    }
    const  getCooki = (cookiname) => {
        let cname = cookiname + "=";
        let csplit = document.cookie.split(';');
        for (let i = 0; i < csplit.length; i++) {
            let c = csplit[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }

    const loginApi = () => {

        axios.get(`${window.sbapi}/api/partyregister/PartyLogin?mobileoremail=${loginname}&password=${loginpassword}&partyType=c`).then((rep) => {
            if (rep.data.Message === 'Success') {
                window.orderhistery = rep.data.Data.PartyCode
                
                toast.success(' You are Successfully Login', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoginame("")
                setLoginpassword("")
                setCooki(loginname, rep.data.Data.PartyName, 1)
                console.log(getCooki(loginname))
                // setLoginame(getCooki(loginname))
                setNewname(getCooki(loginname))
                window.accountname = loginname
                if (getCooki(loginname)!='') {
                    document.getElementById('accountname').style.display = "none"
                    document.getElementById('accountnamedisplay').style.display = "flex"
                    document.getElementById('accountnamedisplay').style.onChange ="false"
                }
                else {
                    document.getElementById('accountname').style.display = "flex"
                    document.getElementById('accountnamedisplay').style.display = "none"
                }
            }
            else {
                alert("Pleas Check Your Username & Password ")
            }
        })
    }

    const getotp = () => {
        axios.post(`${window.sbapi}/api/partyregister/OTPForRegister?mobile=${number}&partyType=c`)
            .then((res) => {
                if (res.data.Message === "Success") {
                    setOtpmodalopen(true)
                }
                window.otpphone = res.data.Data.OTP
            })
    }

    const signupApi = () => {

        // console.log(number)
        let flag = true;
        let toastMessage = null;

        if (name.length < 3) {
            toastMessage = "Name Is Required"
        }
        else if (number.length < 11) {
            toastMessage = "Number Is Required"
        }
        else if (email.length < 0) {
            toastMessage = "Email Is Required"
        }
        else if (password.length < 5) {
            toastMessage = "Password Is Required"
        }
        else {
            axios.post(`${window.sbapi}/api/partyregister/SavePartySignUp`,
                {
                    "PartyName": name,
                    "Mobile": number,
                    "Email": email,
                    "PartyAddress": " ",
                    "Password": password,
                    "PartyType": "c",
                    "UserId": "0000000001",
                    "BusinessId": "0000000001"
                }).then((response) => {
                    
                    if (response.data.Message === 'Success') {
                        toast.success('You Are Successfully Register', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setName("")
                        setEmail("")
                        setNumber("")
                        setPassword("")
                        // console.log(response.data.Message)
                    } else {
                        console.log('Fail')
                    }
                }).catch((er) => {
                    console.log('er', er)
                })
        }
        if (flag) {
            toast.warn(toastMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (

        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="colored"
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Header />

            <div className="login-signup">

                <div className="login-ac">
                    <div className="login-a">
                        <h1>Login Your Account</h1>
                    </div>
                    <div className="login-b">

                        <h3>Login Information</h3>
                        <input type='text' value={loginname} onChange={e => setLoginame(e.target.value)} placeholder="E-mail / Mobile Number" />
                        <input type='password' value={loginpassword} onChange={e => setLoginpassword(e.target.value)} placeholder="Password" />
                        <Link to="/recovery"><p className="forget1">Forget Password?</p></Link>
                    </div>

                    <div className="login-btn">
                        <button onClick={loginApi}> Login </button>
                    </div>
                </div>

                <div className="signup-ac">
                    <div className="forms-a">
                        <h1>Create An Account</h1>
                    </div>
                    <div className="forms-b">
                        <h3>Personal Information</h3>
                        <div className="get-otp" id="getotp" >
                            <input maxLength={11} type='tel' value={number} onChange={e => setNumber(e.target.value)} placeholder="Mobile Number" />
                            <div>
                                <div className="btn">
                                    <button onClick={getotp}>Get Otp</button>
                                </div>
                                <span style={{ position: 'relative' }}>
                                    <span className='open-otpmodal' style={{ display: otpmodalopen ? 'flex' : 'none', }}>
                                        <Otpmodal closeOtpmodal={setOtpmodalopen} />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="getuserdata" id="geuserdata">
                            <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder="User Name" />
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
                            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                            <p className=" news-letters"> Sign up for news letters? </p>
                            <div>
                                <div className="btn" >
                                    <button onClick={signupApi} > Register </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Signup;