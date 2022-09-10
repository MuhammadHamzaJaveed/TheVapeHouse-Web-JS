import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Googlemap1, Googlemap2,Googlemap3 } from "./Googlemap.js";
import './Common.css'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [company, setCompany] = useState("")
    const [Subject, setSubject] = useState("")
    const [Message, setMessage] = useState("")

    const contactusApi = () => {

        axios.post(`${window.sbapi}/api/Contactus`,
            {
                "Firstname": firstname,
                "Lastname": lastname,
                "Email": email,
                "Mobile": mobile,
                "Company": company,
                "Subject": Subject,
                "Message": Message
            })
            .then((respon) => {
                if (respon.data.Message === "Success") {
                    toast.success(' Your Order Is Successfuly Completed', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setFirstname("")
                    setLastname("")
                    setEmail("")
                    setMobile("")
                    setCompany("")
                    setSubject("")
                    setMessage("")

                }
                else {
                    console.log('Fail')
                }
            }).catch((er) => {
                console.log('er', er)
            })
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
            <div className="row mx-1">
            <img src="contactus.jpg" alt="contactus"/>
        </div>
            <div style={{ background: "#f4eddd", padding: "30px"}}>
                <div className="alldata">

                    <div className="forms">
                        <div className="forms-a">
                            <h1>We Love To Hear From You</h1>
                        </div>
                        <form className="forms-b">
                            <input type='text' value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="First Name" />
                            <input type='text' value={lastname} onChange={e => setLastname(e.target.value)} placeholder="Last Name" />
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Your Email" />
                            <input maxLength={11} value={mobile} onChange={e => setMobile(e.target.value)} type='tel' placeholder="Mobile No e.g 03000000000" />
                            <input type='text' value={company} onChange={e => setCompany(e.target.value)} placeholder="Your Company:" />
                            <input type='text' value={Subject} onChange={e => setSubject(e.target.value)} placeholder="Subject:" />
                            <textarea value={Message} onChange={e => setMessage(e.target.value)} placeholder="Message" />

                        </form>
                        <div className="btn">
                            <button onClick={contactusApi}> Submit </button>
                        </div>
                    </div>
                    
                        <div className="info">
                            <h1>Our Outlets Addresses</h1>
                            <h2>Lahore:</h2>
                            <p>Shop # 144, E-Block-L, Model Town, Lahore Contact: 0300 6800 812</p>
                            <p>Email: vapehouse2022@gmail.com</p>  
                            <p>Phone: +92 300 6800 812</p>

    

                            <h2>Multan:</h2>
                            <p>Shop # 15, Saleem Mall Near Factory, Multan
                                    Contact: 0300 6800 812</p>
                               
                                <h2>Sahiwal:</h2> 
                                <p>Girls College Road, Fateh Sher Colony, Sahiwal
                                Contact: 0300 6800 812</p>   
                            
                            <h2>Chishtian:</h2>
                            <p>Melad chowk, College Rd, Chishtian, 62350, Pakistan</p>  
                            <p>Contact: 0300 6800 812</p>  

                           
                            
                        </div>
                    
                </div>
                <div className="google-map">
                    <div className="google-map1" >
                        <Googlemap1 />
                    </div>
                    <div className="google-map2" >
                        <Googlemap2 />
                    </div>
                    <div className="google-map2" >
                        <Googlemap3 />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs;