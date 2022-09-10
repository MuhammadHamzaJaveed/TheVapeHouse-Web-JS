import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Axios from "axios";
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsCheckLg } from 'react-icons/bs';
import { ClearCart } from "../components/Redux/Action";
import { useNavigate } from 'react-router-dom';
import Orderhistory from "./Orderhistory";
import Getlocation from "./Getlocation";
import { BsChevronRight } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';
import { MdOutgoingMail} from 'react-icons/md';
import { AiFillHome} from 'react-icons/ai';
import { RiTimerFill} from 'react-icons/ri';
import { SiGooglemaps} from 'react-icons/si';


const Checkout = () => {

    const cartItems = useSelector(state => state.Reducer)
    const dispatch = useDispatch()
    const lengthItem = cartItems.length
    const [ordernumber, setOrdernumber] = useState(null)
    const navigate = useNavigate();
    const [orderhistory, setOrderhistory] = useState()

    const [getlocation1, setGetlocation1] = useState(false)

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [date, setDate] = useState("")
    const [delivery, setDelivery] = useState("")
    const [deliveryaddress, setDeliveryaddress] = useState("")
    const [checkboxx, setCheckboxx] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    // 2022-12-01T00:00:00"
    
        // var showdate = new Date();
        // let hrs = showdate.getHours();  
        // let mint = showdate.getMinutes();
        // let secn = showdate.getSeconds();
        // let min = mint < 10 ? `0${mint}` : mint;
        // const currTime = hrs > 12 ? `0${hrs - 12}:${min}:${secn} PM` : `${hrs}:${min}:${secn} AM`;
        // var displaydate = showdate.getFullYear()+'/'+(showdate.getMonth()+1)+'/'+showdate.getDate()+ '  '+currTime;
        // console.log(" hello date"+ " " +date)


    const checkoutapi = () => {

        let flag = true;
        let toastMessage = null;
        let latitude =  window.latitude  
        let longitude = window.longitude
        
     

        if (name.length < 3) {
            toastMessage = "Name Is Required"
        }
        else if (number.length < 11) {
            toastMessage = "Number Is Required"
        }
        else if (email.length < 0) {
        }
        else if (adress.length < 1) {
            toastMessage = "Adress Is Required"
        }
        
        else if (date.length <= 1) {    
            toastMessage = "Date Is Required"
        }
        else if (delivery.length < 0) {

        }
        else if (checkboxx == false) {
            toastMessage = "Please Accepted Terms & Condidtions"
        }

        else {
            flag = false;
            const sendData = cartItems.reduce((arry, item) => {
                arry.push({
                    Barcode: item.Barcode,
                    Qty: item.qty,
                    UnitCost: item.UnitCost,
                    UnitRetail: item.UnitRetail,
                    Amount: item.qty * item.UnitRetail,
                    ProductImage: `${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`
                })
                return arry;
            }, [])

            // http://admin.sbstorefsd.com/images/ProductImages/
            Axios.post(`${window.sbapi}/Sale/CheckoutEcom`,
                {

                    "DocType": "2",
                    "DocDate": date,
                    "SaleType": "WebStore",
                    "PartyMobile": number,
                    "PartyName": name,
                    "PartyAddress": adress,
                    "PartyCity": "0001",
                    "PartyEmail": email,
                    "TotalDiscountAmount": 0,
                    "TotalAmount": 10,
                    "UserId": "0000000001",
                    "BusinessId": "0000000001",
                    "Description": delivery,
                    "Longitude": longitude,
                    "Latitude":  latitude,
                    "DeliveryAddress": deliveryaddress,
                    "DocumentDetail": sendData,
                    
                    // "DocumentDetail": [
                    //     {
                    //         "Barcode": "000002",
                    //         "Description": "Test Product",
                    //         "qty": 1,
                    //         "FreeQty": 0.00,
                    //         "UnitCost": 700.00,
                    //         "UnitRetail": 780.00,
                    //         "Discount": 100.00,
                    //         "HsCode": "",
                    //         "HsPercentage": 0.00,
                    //         "GstAmount": 0.00,
                    //         "Amount": 680.00,
                    //         "ProductImage": "https://png.pngtree.com/png-clipart/20190225/ourmid/pngtree-cleaning-products-on-transparent-background-png-image_704295.jpg"
                    //     }
                    // ]
                }
            )
                .then((resp) => {
                    if (resp.data.Message == 'Success') {
                        toast.success(' Your Order Is Successfuly Completed', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setOrderhistory(sendData)
                        dispatch(ClearCart());
                        setTimeout(() => {
                            // alert(' Your Order Is Successfuly Completed')
                            navigate('/')
                        }, 2000);
                    }
                    else {
                        console.log('Fail')
                    }
                }).catch((er) => {
                    console.log('er', er)
                })

        }
        if (flag) {
            toast.warn(toastMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        <Orderhistory state={{ props: orderhistory }} />
    }


    let total = 0;
    cartItems.map((item) => {
        total = total + (item.UnitRetail * item.qty);
    })



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

            <div className="all-checkout">

                <div className="forms">
                    <div className="forms-a">
                        <h1>SHIPPING INFORMATION</h1>
                    </div>
                    <form className="forms-b" onSubmit={handleSubmit} >
                        <div className="form-input">
                            <span className="inpute-icons" ><FaUserTie size={20} /></span>
                            <input type='text' required value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                        </div>
                        <div className="form-input">
                            <span className="inpute-icons" ><IoMdCall size={20} /></span>
                            <input maxLength={11} type='tel' value={number} onChange={e => setNumber(e.target.value)} placeholder="Number" />
                        </div>
                        <div className="form-input">
                            <span className="inpute-icons" ><MdOutgoingMail size={20} /></span>
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
                        </div>
                        <div className="form-input">
                            <span className="inpute-icons" ><AiFillHome size={20} /></span>
                            <input type='text' value={adress} onChange={e => setAdress(e.target.value)} placeholder="Address" />
                        </div>
                        <div className="form-input">
                            <span className="inpute-icons" ><RiTimerFill size={20} /></span>
                            <input type={"datetime-local"} value={date}  onChange={e => setDate(e.target.value)} placeholder="" />
                        </div>
                        <div className="form-input">
                            <span className="inpute-icons" ><SiGooglemaps size={20} /></span>
                            <input type="text" value={window.sendaddress} onChange={e => setDeliveryaddress(e.target.value)} onClick={() => setGetlocation1(!getlocation1)} placeholder="Get Location" style={{cursor:"pointer"}} />
                            <span style={{ position: "absolute", top: "50", right: "10px", cursor:"pointer" }}><BsChevronRight size={20} /></span>

                            <span className='mapstyle1'  >
                                <span className='mapstyle' style={{ display: getlocation1 ? 'flex' : 'none' }}  >
                                    <Getlocation closeMap={setGetlocation1} />
                                </span>
                            </span>
                        </div>


                        <textarea value={delivery} onChange={e => setDelivery(e.target.value)} placeholder="Delivery Note" />

                    </form>
                </div>
                <div className="order-review">
                    <div className="forms-a">
                        <h1>ORDER REVIEW</h1>
                    </div>
                    <div className="forms-c">
                        <div className="pro">
                            <div className="pro1 ">

                                <span className="left-div"> PRODUCT </span>
                                <span className="right-div"> PRICE </span>
                            </div>

                            <div className="pro2">
                                <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={200} style={{ position: 'relative' }}>
                                    <div style={{ padding: 20, paddingBottom: 0 }}>
                                        {
                                            cartItems.map((item) => {
                                                return (
                                                    <div className="pro2_inner">
                                                        <span className="left-div"> ({item.qty})x {item.Description}</span>
                                                        <span className="right-div"> Rs.{item.UnitRetail * item.qty} </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Scrollbars>

                                <div className="pro2_inner" style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
                                    <span className="left-div">Delivery Charges</span>
                                    <span className="right-div">Rs. 0</span>
                                </div>
                                <div className="pro2_inner" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <span className="left-div">Discount</span>
                                    <span className="right-div">Rs. 0</span>
                                </div>
                            </div>

                            <div className="pro3">
                                <span className="left-div"> TOTAL </span>
                                <span className="right-div"> Rs.<span style={{ fontSize: 24 }}>{total}</span></span>
                            </div>

                        </div>
                        <div className="text">
                            <a onClick={() => setCheckboxx(!checkboxx)} style={{
                                display: 'flex', justifyContent: "center",
                                alignItems: "center", height: 15, width: 15, border: "1px solid black", backgroundColor: checkboxx ? '#038eff' : 'white', marginRight: 10
                            }}>
                                <BsCheckLg color="white" />
                            </a>
                            <p>I've read and accept the <Link className="checkboclinks" to={'/termcondition'}>Terms Conditions</Link>&nbsp;and&nbsp;
                                <Link className="checkboclinks" to={'/privacypolicy'}>Privacy Policy</Link></p>
                        </div>
                        <div className="place-order">

                            <button onClick={checkoutapi}>
                                <p style={{fontSize:"13px",marginTop:"7px"}} > PLACE ORDER </p></button>
                        </div>
                        <div className="btns2">
                            <div className="cart-btn">
                                <Link to={'/viewcart'}> <button ><p> VIEW CART </p></button></Link>
                            </div>
                            <div className="shop-btn">
                                <Link to={'/'}><button ><p> CONTIUNE SHOPPIND </p></button> </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Checkout;