import React, { useEffect, useState } from 'react';
import './Orderhistory.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Scrollbars } from 'react-custom-scrollbars-2';
import axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";





const Orderhistory = (props) => {



    const [allprodetail, setAllprodetail] = useState()

    // const [prodocno, setProdocno] = useState()


   
    const Corderhis = () => {
        console.log("Hellloo" + window.orderhistery)
        axios.get(`${window.sbapi}/api/SaleOrder/SaleOrderData?PartyCode=${window.orderhistery}&BusinessId=0000000001`)
            .then((respp) => {
                if (respp.data.Message === "Success") {
                    setAllprodetail(respp.data.Data)
                }
                else {
                    console.log("Order Historey Fail to Load");
                }
            })
            .catch((errr) => {
                console.log("Error: ", errr);
            })
    }

    useEffect(() => {
        Corderhis()
    }, [])



    return (
        
        <>

            <Header />


            <div style={{ backgroundColor: '#f4eddd', autoHeightMin: "0", autoHeightMax: "600px", padding: "30px 20% 30px 20%" }}>
                <h1 style={{ textAlign: 'center', marginBottom: "30px" }}> Order History </h1>

                {/* <Scrollbars padding={20} autoHeight autoHeightMin={0} autoHeightMax={500} > */}

                {

                    allprodetail?.map((iteem, key) => {

                        return (
                            <div class="tabs" id={iteem.DocNo} onClick={() => {
                              
                                axios.get(`${window.sbapi}/api/Sale/SaleByCode?DocNo=${iteem.DocNo}`)
                                    .then((resspp) => {
                                        
                                        if (resspp.data.Message === "Success") {
                                            const pro=resspp.data.Data.DocumentDetail
                                            allprodetail[key].products=pro
                                            setAllprodetail([...allprodetail])
                                        }
                                        else {
                                            console.log("Order Historey Fail to Load");
                                        }
                                    })
                                    .catch((errr) => {
                                        console.log("Error: ", errr);
                                    })
                            }}>
                                <div class="tab">
                                    <input className='order-input' type="checkbox" id={key} />
                                    <label class="tab-label" for={key} >
                                        <div className='left-div'>
                                            <p style={{ fontSize: "14px" }}>
                                                OrderNo: {iteem.DocNo}

                                            </p>
                                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                                                Placed On: {iteem.DocDate}
                                            </p>
                                        </div>
                                        <div className='center-dev1'>
                                            <p style={{ fontSize: "14px" }}>
                                                OrderStatus: {iteem.OrderStatus}
                                            </p>
                                        </div>
                                        <div className='center-div2'>
                                            <p style={{ fontSize: "14px" }}>
                                                SaleType: {iteem.SaleType}
                                            </p>
                                        </div>
                                        {/* <div className='right-div'>
                                <button className='right-button' style={{ padding: "5px 10px", borderRadius: "20px", cursor: 'pointer' }}>Re-Order</button>
                            </div> */}

                                    </label>

                                    <div class="tab-content" >
                                        <div className="container">
                                            <ul>
                                                <li className="product" ><p> Product </p></li>
                                                <li className="price" > Price</li>
                                                <li className="quantity"  > Quantity</li>
                                                <li className="sabtotal" > Subtotal</li>
                                                <li className="empty" > </li>
                                            </ul>
                                        </div>
                                        <div className="main-viewcart-product"  >
                                            <Scrollbars className="sacrollbar" autoHeight autoHeightMin={0} autoHeightMax={300}>

                                                {

                                                    iteem?.products?.map((item ) => {

                                                        return (
                                                            <div className="viewcart-product">
                                                                <div className="product-sec1">
                                                                    <img className="cartimage2" src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg` } />
                                                                </div>
                                                                <div className="product-sec2">
                                                                    <p>
                                                                        {item.Description}
                                                                        {/* Almond Special Per 250GM */}
                                                                    </p>
                                                                </div>
                                                                <div className="product-sec3">
                                                                    <p>Rs.
                                                                        {item.UnitRetail}
                                                                        {/* 750 */}
                                                                    </p>
                                                                </div>
                                                                <div className=" pro-sec456">
                                                                    <div className="product-sec4">
                                                                        <div className='product-cart1'>
                                                                            <div className="qty-main">
                                                                                {/* <a className="plus-a" onClick={() => increment(item)} > */}
                                                                                {/* <HiPlusSm /> */}
                                                                                {/* </a> */}
                                                                                <div className="qty-first">
                                                                                    <p >
                                                                                        {item.Qty}

                                                                                    </p>
                                                                                </div>
                                                                                {/* <a className="minas-a" onClick={() => decrement(item)} > */}
                                                                                {/* <HiMinusSm /> */}
                                                                                {/* </a> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-sec5"> <p>
                                                                        {item.UnitRetail * item.Qty}
                                                                    </p></div>
                                                                    <div className="product-sec6" > <p style={{ backgroundColor: "white" }}>
                                                                    </p> </div>
                                                                </div>
                                                                <hr></hr>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Scrollbars>
                                        </div>
                                        <div className="container2">
                                            <ul>
                                                {/* <li className="btn1" >
                                                      <Link to={'/'}> <button  ><p> <IoMdArrowDropleft />COUNTINUE SHOPPING  </p></button></Link>
                                                         </li>
                                                           <li className="btn1" >
                                                              <button  ><p onClick={() => dispatch(ClearCart())}>  CLEAR CART  </p></button>
                                                               </li> */}

                                                <li className="total" >  Total: Rs.{iteem.Amount}</li>
                                                {/* <li className="btn2">
                                                                   <Link to={'/checkout'}><button ><p> CHECKOUT<IoMdArrowDropright /> </p></button></Link>
                                                                   </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* </Scrollbars> */}
            </div>
            <Footer />
        </>
    );
}

export default Orderhistory;