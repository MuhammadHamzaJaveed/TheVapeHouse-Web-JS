import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './ProductDetail.css'
import Review from "./Review";
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { MdFavoriteBorder } from 'react-icons/md';
import { TiSocialFacebook } from 'react-icons/ti';
import { RiInstagramLine } from 'react-icons/ri';
import { AiFillStar, AiOutlineStar, AiOutlineWhatsApp } from 'react-icons/ai';
import Apiproduct from "../components/Body/Apiproduct";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, SetQty, PoductsApi } from "../components/Redux/Action";
import { Link } from "react-router-dom";
import Allapiproduct from "../components/Body/Allapiproduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {

    const [openModal, setOpenModal] = useState(false)
    const cartItems = useSelector(state => state.Reducer)
    const DepartmentData = useSelector(state => state.ReducerDepData)
    const [depData, setDepData] = useState(null);
    const dispatch = useDispatch()
    const item = useLocation().state.item;


    

    const increment = (item) => {
        if (item.qty < 10) {
            item.qty += 1
            dispatch(SetQty({ ...item }))
        }
    }

    const decrement = (item) => {
        if (item.qty > 1) {
            item.qty -= 1
            dispatch(SetQty({ ...item }))
        }
    }

    useEffect(() => {
        if (DepartmentData !== 'abc') {
            const updatedData = DepartmentData.map((item) => {
                item.isShown = false;
                return { ...item }
            })
            setDepData(updatedData)
        }
    }, [DepartmentData])

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
            <div className='p-detail'>
            


                <div className="p-picture">
                    <img src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`} alt={item.Description} />
                </div>


                <div className="p-disc">
                    <h2>{item.Description}</h2>
                    

                    <h3>
                        Rs. {item.UnitRetail}
                        <del className="oldPrice">Rs.0</del>
                    </h3>
                    {/* <h4 className="product-name">-</h4> */}
                    <h4 className="cart-size"> Unit Size: 1 </h4>
                    {/* <div class="p-detai" id="p_000106" onclick="SelectVaration('000106', 'UWELL CALIBURN KOKO PRIME POD KIT', '5500.00', 'http://ar.thevapehouse.pk/images/ProductImages/000106.jpg', '1000')">
                                    <div class="p-img"><img src="http://ar.thevapehouse.pk/images/ProductImages/000106.jpg" onerror="this.src = 'https://res.cloudinary.com/vape-house/image/upload/v1645450581/vapehouse/Logo/DefaultImage_bwi7vc.jpg';"/></div>
                                    <div class="p-vdetail">Gray</div>

                                </div> */}

                    <div className="qty">
                        <div>
                            <p>QTY:</p>
                        </div>
                        <div className="qty-main">
                            <a className="plus-a" onClick={() => increment(item)} >
                                <HiPlusSm />
                            </a>
                            <div className="qty-first">
                                <p >{item.qty}</p>
                            </div>
                            <a className="minas-a" onClick={() => decrement(item)} >
                                <HiMinusSm />
                            </a>

                        </div>
                        <div className="btn">
                            <button onClick={() => {dispatch(AddToCart(item))
                                 toast.success(' Your Order Is Successfuly Completed', {
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                })
                            }}>
                                <p> ADD TO CART </p></button>
                        </div>
                    </div>

                    <h4 className="cart-size"> SKU: {item.Barcode} </h4>

                    <div className="review">
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <AiOutlineStar />
                        <a href="#" >
                            &nbsp; &nbsp; Add your review
                        </a>
                    </div>
                    <div className="favorite">
                        <MdFavoriteBorder />
                        <a href="#" >
                            &nbsp; ADD TO FAVOURITE
                        </a>
                    </div>
                    <h4 className="category"> CATEGORY:
                        <Link to={"/productspage"}
                            onClick={(e) => {
                                var dep = depData.value = item.DepartmentCode;
                                dispatch(PoductsApi(dep, ''))
                                e.stopPropagation();
                            }}
                        >
                            &nbsp; {item.DepartmentName}
                        </Link>
                        <Link to={'/productspage'} onClick={(e) => {
                            var dep = depData.value = item.DepartmentCode;
                            var grup = depData.value = item.GroupCode;
                            dispatch(PoductsApi(dep, grup));
                            e.stopPropagation();
                        }}
                        >
                            &nbsp; {item.GroupName}
                        </Link>
                    </h4>

                    <h4 className="share">SHARE:

                    <a href='https://www.facebook.com/' target="_blank">
                            &nbsp; <TiSocialFacebook />
                        </a>
                        <a href='https://instagram.com/' target="_blank">
                            &nbsp; <RiInstagramLine />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=923088557555&text=Welcome&app_absent=0" target="_blank">
                            &nbsp; <AiOutlineWhatsApp />
                        </a>
                    </h4>

                    <div className="btn1">

                        <button className="reviews-btns" onClick={"#"}><p> PRODUCT DESCRIPTION </p></button>

                        <div  >
                            <p onClick={() => setOpenModal(!openModal)}><button className="reviews-btns2"><p> REVIEWS </p></button> </p>
                            <span style={{ position: 'relative' }} >

                                <span className='open-review ' style={{ display: openModal ? 'flex' : 'none', }}  >
                                    <Review closeModal={setOpenModal} onClick={() => setOpenModal(false)} />
                                </span>
                            </span>
                        </div>
                    </div>


                </div>


            </div>

            <div className="related-product">
                <h1>RELATED PODUCTS</h1>
            </div>
            <div >
                
                <Allapiproduct />
            </div>



            <Footer />
        </>


    )
}

export default ProductDetail;