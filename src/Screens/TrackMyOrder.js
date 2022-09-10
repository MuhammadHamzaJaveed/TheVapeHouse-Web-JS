import React, { useState } from 'react';
import './TrackMyOrder.css'
import { GiCrossedBones } from 'react-icons/gi';
import axios from 'axios';

const TrackMyOrder = (props) => {


    const [orderstatus, setOrderstatus] = useState("")
    const [orderstatus1, setOrderstatus1] = useState("")


    const Myorderstatus = () => {
        // console.log("hello") 
        axios.get(`${window.sbapi}//api/SaleOrder/GetSaleOrderStatus?DocNo=IN${orderstatus}&BusinessId=0000000001`)
            .then((Response) => {
                // console.log("hello")
                if (Response.data.Message === "Success") {
                    setOrderstatus1(Response.data.Data.OrderStatus)
                    setOrderstatus("")
                }
                else {
                    console.log("Please Enter Right Number")
                }
            })
            .catch((error) =>{
                alert("Error:" + error)
            })

    }

    window.onclick = (e) => {
        const back = document.getElementById('back')
        const cross = document.getElementById('cross')
        if (e.target === back || e.target === cross) {
            props.closeModal(false)
        }
        else {
            // props.closeModal(true)
        }
    }
    return (
        <>
            <span id='back' className='modal-Background'>
                <div className='track-order'>
                    <h3 className='track'>Track Your Order </h3>
                    <button className='cancel-btnn' > <GiCrossedBones id='cross' />  </button>
                    <input type='text' value={orderstatus} onChange={(e) => setOrderstatus(e.target.value)} placeholder='Order Number' />
                    <button className='submit-btn' onClick={Myorderstatus}>Submit</button>
                    <p className='order-status'> Your Order Status: <span style={{fontSize:"18px", fontWeight:"bold", color:"red" }}>{orderstatus1} </span> </p>

                </div>
            </span>
        </>
    );
};

export default TrackMyOrder;