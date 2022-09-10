import React ,{useEffect, useState}from 'react';
import './Viewcartitem.css';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SetQty, RemoveItem } from "../components/Redux/Action";
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { FaTrashAlt } from 'react-icons/fa';

function    Viewcartitem() {
  

    
    const cartItems = useSelector(state => state.Reducer)
    
 
    const dispatch = useDispatch()
    const lengthItem = cartItems.length

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
    useEffect(()=>{
        localStorage.setItem("myCart",JSON.stringify(cartItems));
},[cartItems]);
    return (

        <>
            <div className='main_cart'>
                <div className='display_products'>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={200} style={{ position: 'relative' }}>
                        {
                            cartItems   .length == 0 ? 
                            <div><p>Cart Is Empty</p></div>
                            :
                            cartItems?.map((item) => {
                                return (
                                    <div className="viewcart-product">
                                        <div className="product-sec1">
                                            <img className='cartimage' src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`} />
                                        </div>

                                        <div className='descrepation-sec'>
                                            <div className="product-sec2">
                                                <p>{item.Description}</p>
                                            </div>

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
                    </Scrollbars>
                </div>

                <div className='des_sabtotal'>
                    <p className='show_lengthitems'> ({lengthItem})x Item's selected </p>
                    <div className='sabtotal_mini_cart'>
                        <div className='sabtotal_text' >
                            <p> SABTOTAL:</p>
                        </div>
                        <div className='sabtotal_rs'>
                            <p> Rs.{total}</p>
                        </div>
                    </div>
                </div>
                <div className='cart_battns'>
                    <div className='cart_battns1' >
                        
                            {/* <Link  to={'/'} > <button>  View Cart  </button></Link> */}
                            
                            <Link to={'/viewcart'}> <button style={{fontSize:"18px"}}>  View Cart  </button></Link>
                        
                    </div>
                    <div className='cart_battns1'>
                        <Link to={'/checkout'}><button style={{fontSize:"18px"}}>Checkout<IoMdArrowDropright /></button></Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Viewcartitem;