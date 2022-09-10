import React, { useEffect, useState } from 'react';
import './Body.css';
import { MdChatBubbleOutline, MdShoppingCart } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../Redux/Action';
// import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PoductsApi } from '../Redux/Action';
import ProductsPage from '../../Screens/ProductsPage';











function Allapiproduct(props) {
        

    

    const hddispatch = useDispatch()

    const allproductapi = useSelector(state => state.ReducerAllProducts)
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(true);
    const [proData, setProData] = useState();
    let [counter, setCounter] = useState(1);

    const increment = (item, index) => {
        if (item.qty < 10) {
            proData[index].qty += 1
            const updatedData = [...proData]
            setProData(updatedData)
        }
    }
    const decrement = (item, index) => {
        if (item.qty > 1) {
            proData[index].qty -= 1
            const updatedData = [...proData]
            setProData(updatedData)
        }
    }
   
    useEffect(() => {

        const DEP = localStorage.getItem("MYData")

    //     const Code= DEP.map((item)=>{
    //       const DEpart= item.DepartmentCode;
    //       const GRoup= item.GroupCode
    //             console.log(DEpart)
    //             console.log(GRoup)
    //     })
    // DEP.forEach(element => {
    //   const DepC=  element.DepartmentCode;
    //   const GRC=element.GroupCode;
    //   console.warn(DepC,"and",GRC)
            
    //     });

        if (allproductapi != 'abc') {
            setProData(allproductapi)
            // localStorage.setItem("DEP",JSON.stringify(allproductapi))
        }


    }, [allproductapi])

    // useEffect(() => {
    //     loadpro()
    // }, [])
    // function loadpro() {
    //     counter += 1
    //     setCounter(counter)
    //     console.log(counter)
    //     window.viewmore = counter * 12
    //     console.log(window.viewmore)
    //     setCounter(1)


    // }
  
   
    


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
            

            <div className='product-main-body' >
        
            
                {
                    proData ?

                       proData?.map((item, index) => {
                            return (
                                
                      
                               
                                <div className='product_container1' >
                                    
                                    {
                                        item.PromoPercentage ?
                                            <span className='discount-offers'>  {item.PromoPercentage}% OFF</span> : ""
                                            
                                    }
                                    <Link to={'/productdetail'} state={{ item }} onClick={() => { window.scrollTo(0, 0) }}>
                                        <img src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`} />
                                    </Link>

                                    <p style={{fontSize:"18px"}}>{item.Description}</p>

                                    <span className='cr-price'>Rs.&nbsp;{item.UnitRetail}</span>
                                    <div className='product-cart'>
                                        {/* <div className='product-cart1'>
                                            <div className="qty-main">
                                                <a className="plus-a" onClick={() => increment(item, index)} >
                                                    <HiPlusSm />
                                                </a>
                                                <div className="qty-first">
                                                    <p >{item.qty}</p>
                                                </div>
                                                <a className="minas-a" onClick={() => decrement(item, index)} >
                                                    <HiMinusSm />
                                                </a>
                                            </div>
                                        </div> */}
                                        <div className='product-cart2'>
                                            <button onClick={() => {
                                                dispatch(AddToCart(item))
                                                toast.success(' Product Added Successfully ', {
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



                            )
                        }) :
                        < ClipLoader color={'red'} loading={true} size={100} />

                }
            
            </div>
            
            {/* <div className='product-main'>

                    <button  style={{ backgroundColor: "red", padding: "10px 50px" }}
                    onClick={() => {
                        counter += 1
                        setCounter(counter)
                        console.log(counter)
                        let viewmore = counter * 12
                        window.slicepart = proData.slice(0, viewmore)
                        console.log( window.slicepart)
                    }}
                    >View More</button>
            </div> */}
        </>
    );
}


export default Allapiproduct;

