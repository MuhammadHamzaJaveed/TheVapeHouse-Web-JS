import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/Body/Body.css';
import { MdShoppingCart } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../components/Redux/Action';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Promotion = ({ proData, setProData }) => {



    const [prodata, setProdata] = useState();


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {

                    slidesToShow: 2,
                },
            },
        ],
    }

    const dispatch = useDispatch()
    const [loader, setLoader] = useState(true);


  
  




    useEffect(() => {
        axios.get(`https://easyapi.thevapehouse.pk/api/Product/PromoandNewArrivalProducts?BusinessId=0000000001`)
            .then((repss) => {
                if (repss.data.Message === 'Success') {
                    let apidata = repss.data.Data.PromoProducts
                    
                    setProdata(apidata)
                  
                }
                else {
                    alert("error")
                }
            })
       
    }, [setProdata])






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

<div className='container mt-5'>
           <div className="row  ">
                <div className="col-md-4 ">
                    <div className="Line "></div>
                </div>
                <div className="col-md-4">
                    <h1 className="text-center arrival">Promotions</h1>
                </div>
                <div className="col-md-4">
                <div className="Line px-5"></div>

                </div>
            </div>
           </div>



        

            <Slider  {...settings} className="mx-5 px-5 mb-5">

            {
                    

                        prodata?.map((item, index) => {
                            return (
                                    <div className='product-main-body' >
                                <div className='product_container1'  >
                                   {
                                       item.PromoPercentage ?
                                       <span className='discount-offers'>  {item.PromoPercentage}% OFF</span> :
                                       ""
                                   }
                                    <Link to={'/productdetail'} state={{ item }} onClick={() => { window.scrollTo(0, 0) }}>
                                        <img src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`}  />
                                    </Link>

                                    <p style={{fontSize:"12px"}}>{item.Description}</p>

                                    <span className='cr-price'>Rs.&nbsp;{item.UnitRetail}</span>
                                    <div className='product-cart'>
                                        <div className='product-cart1'>
                                            {/* <div className="qty-main">
                                                    <a className="plus-a" onClick={() => increment(item, index)} >
                                                        <HiPlusSm />
                                                    </a>
                                                    <div className="qty-first">
                                                        <p >{item.qty}</p>
                                                    </div>
                                                    <a className="minas-a" onClick={() => decrement(item, index)} >
                                                        <HiMinusSm />
                                                    </a>
                                                </div> */}
                                        </div>
                                        <div className='product-cart2'>
                                            <button onClick={() => {
                                                dispatch(AddToCart(item))
                                                toast.success('  Product Added Successfully', {
                                                    position: "top-center",
                                                    autoClose: 1000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                })
                                            }}>
                                                <MdShoppingCart />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>

                            )
                        }) 

                }
            </Slider> 
        </>
    );
};


export default Promotion;