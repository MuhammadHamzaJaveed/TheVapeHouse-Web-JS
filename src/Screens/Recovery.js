import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Signup.css'
import axios from "axios";
import Otpmodal from "./Otpmodal";
import { useNavigate } from "react-router";

const Recovery = () => {
    const [otpmodalopen, setOtpmodalopen] = useState(false)
    const [forgetnumber, setForgetnumber] = useState("")
    const [newpassword, setNewpassword] = useState("")
    
    const navigate1 = useNavigate()

    const forgetApiOtp = () => {
        try {

            axios.post(`${window.sbapi}/api/partyregister/OTPForForgetPassword?mobile=${forgetnumber}&partyType=c`)
                .then((respo) => {

                    if (respo.data.Message === "Success") {
                        alert("hello")
                        setOtpmodalopen(true)
                    }
                    window.otpfoget = respo.data.Data.OTP
                    console.log(window.otpfoget + " =" + respo.data.Data.OTP)
                })
        }
        catch (e) {
            console.log(e)
        }


    }

    const forgetApipassword = () => {
        if (forgetnumber.length < 11) {
            // toastMessage = "Number Is Required"
        }
        else {
            axios.post(`${window.sbapi}/api/partyregister/ForgetPassword?mobileoremail=${forgetnumber}&password=${newpassword}&partyType=c`)
                .then((resp) => {
                    if (resp.data.Message === "Success") {
                        navigate1("/signup")
                        console.log("change password")
                        setForgetnumber("")
                        setNewpassword("")
                    }
                })
        }
    }



    return (

        <>
            <Header />
            <div className="login-signup">
                <div className="login-ac">
                    <div className="login-a">
                        <h1>Account Recovery</h1>
                    </div>
                    <div className="login-b">
                        <div id="getotp">
                            <h3>Please Provide Your Register Mobile Number</h3>
                            <input type='tel' value={forgetnumber} maxLength={11} onChange={(e) => setForgetnumber(e.target.value)} placeholder="Mobile Number" />
                            <div className="login-btn">
                                <button onClick={forgetApiOtp}> RECOVER </button>
                                <span style={{ position: 'relative' }}>
                                    <span className='open-otpmodal' style={{ display: otpmodalopen ? 'flex' : 'none', }}>
                                        <Otpmodal closeOtpmodal={setOtpmodalopen} />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div style={{ display: "none" }} id="geuserdata" >
                            <h3>Please Set New Password</h3>
                            <input type='password' value={newpassword} onChange={(e) => setNewpassword(e.target.value)} placeholder="New Password" />
                            <div className="login-btn">
                                <button onClick={forgetApipassword}> Confirm </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Recovery;