import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './ViewCart.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SetQty, RemoveItem, ClearCart } from "../components/Redux/Action";
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

const ViewCart = () => {

    const cartItems = useSelector(state => state.Reducer)
    const dispatch = useDispatch()

    let total = 0;
    cartItems.map((item) => {
        total = total + (item.UnitRetail * item.qty);
    })

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


    return (

        <>
            <Header />
            <div className="main">
                <div className="second-main">
                    <div className="conatiiner">
                        <ul>
                            <li className="product" ><p> Product </p></li>
                            <li className="price" > Price</li>
                            <li className="quantity"  > Quantity</li>
                            <li className="sabtotal" > Subtotal</li>
                            <li className="empty" > </li>
                        </ul>
                    </div>

                    <div className="main-viewcart-product">
                        <Scrollbars className="sacrollbar" autoHeight autoHeightMin={0} autoHeightMax={300}>
                            {
                                cartItems?.map((item) => {
                                    return (
                                        <div className="viewcart-product">
                                            <div className="product-sec1">
                                                <img className="cartimage2" src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`} />
                                            </div>
                                            <div className="product-sec2">
                                                <p>{item.Description}</p>
                                            </div>
                                            <div className="product-sec3">
                                                <p>Rs.{item.UnitRetail}</p>
                                            </div>
                                            <div className=" pro-sec456">
                                                <div className="product-sec4">
                                                    <div className='product-cart1'>
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
                                                    </div>
                                                </div>
                                                <div className="product-sec5"> <p>Rs.{item.UnitRetail * item.qty}</p></div>
                                                <div className="product-sec6"> <p onClick={() => dispatch(RemoveItem(item))}> <FaTrashAlt /> </p> </div>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    )
                                })
                            }
                        </Scrollbars>
                    </div>

                    <div className="main-viewcart-product  main-viewcart-product1">
                        {
                            cartItems?.map((item) => {
                                return (
                                    <div className="viewcart-product">
                                        <div className="product-sec1">
                                            <img className="cartimage1" src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`} />
                                        </div>
                                        <div className="product-sec2">
                                            <p>{item.Description}</p>
                                        </div>
                                        <div className="product-sec3">
                                            <p>Rs.{item.UnitRetail}</p>
                                        </div>
                                        <div className=" pro-sec456">
                                            <div className="product-sec4">
                                                <div className='product-cart1'>
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
                                                </div>
                                            </div>
                                            <div className="product-sec5"> <p>Rs.{item.UnitRetail * item.qty}</p></div>
                                            <div className="product-sec6"> <p onClick={() => dispatch(RemoveItem(item))}> <FaTrashAlt /> </p> </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="conatiiner2">
                        <ul>
                            <li className="btn1" >
                                <Link to={'/'}> <button  ><p style={{fontSize:"13px",marginTop:"7px"}}> <IoMdArrowDropleft />COUNNUE SHOPPING  </p></button></Link>
                            </li>
                            <li className="btn1" >
                                <button  ><p onClick={() => dispatch(ClearCart())} style={{fontSize:"13px",marginTop:"7px"}} >  CLEAR CART  </p></button>
                            </li>

                            <li className="total" >  Total: Rs.{total}</li>
                            <li className="btn2">
                                <Link to={'/checkout'}><button ><p style={{fontSize:"13px",marginTop:"7px"}}> CHECKOUT<IoMdArrowDropright /> </p></button></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="conatiiner3">
                        <ul>
                            <li className="btn3" >
                                <Link to={'/'}> <button  ><p style={{fontSize:"14px"}}>  COUNTINUE SHOPPING </p></button></Link>
                            </li>
                            <li className="btn4" >
                                <Link to={'/checkout'}><button ><p> CHECKOUT  </p> </button></Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default ViewCart;