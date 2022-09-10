import React, { useState,useEffect } from 'react'
import './Footer.css';
import { BiMap } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
import { MdOutgoingMail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { PoductsApi, ChangeName } from '../Redux/Action';
import Viewcartitem from '../../Screens/Viewcartitem';
import { useSelector, useDispatch } from 'react-redux';


import TrackMyOrder from '../../Screens/TrackMyOrder';
import Orderhistory, { Corderhis } from '../../Screens/Orderhistory';

const Footer = () => {

    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const [searchPro, setSearchPro] = useState("")
    const cartItems = useSelector(state => state.Reducer)
    const DepartmentData = useSelector(state => state.ReducerDepData)
    const lengthItem = cartItems.length
  
    const [X, setX] = useState(false)
    const [toggleLogin, setToggleLogin] = useState(false)
    const [opencart, setOpencart] = useState(false)
    const [depData, setDepData] = useState(null);
    const [ depHading, setDepHading ] = useState();
    const [ sabdepHading, setSabdepHading ] = useState();
    
  
    
    
  
    useEffect(() => {
      if (DepartmentData !== 'abc') {
        const updatedData = DepartmentData.map((item) => {
          item.isShown = false;
          return { ...item }
        })
        setDepData(updatedData)
      }
    }, [DepartmentData])
  
    // const sbapi = "https://easyapi.sbstorefsd.com"
    //vapeapi.vaperepublic.pk
  
  
 
  

  


    return (
        <>


             <section className='footer-bgimg'>
                <div className='main-footer'>


                    <div>
                        <img src='footer.png' className='footlogo'/>
                        <p >Follow Us</p>

                        <ul className="marginleft">
                            <li className="socialicons"><a target="_blank" href="https://www.facebook.com/vapehouse.pk/"><img src="facebook.png" className='ico'/></a></li>
                            <li className="socialicons"><a target="_blank" href="https://www.instagram.com/invites/contact/?i=tt3bt41t2hlh&amp;utm_content=47kggkv"><img className='ico' src="instagram.png"/></a></li>
                            <li className="socialicons"><a target="_blank" href="#"><img src="youtube.png" className='ico'/></a></li>
                            <li className="socialicons"><a target="_blank" href="#"><img src="whatsapp.png" className='ico'/></a></li>
                            


                        </ul>

                    </div>
                    <div>
                        <h3> QUICK LINKS </h3>
                            <ul className='QuickLinks'>
                                <li>                {
          depData?.map((item, index) => {
            return (
              <Link  to={'/productspage'} 
               
                // onClick={() => {
                //   var dep = depData[index].value = item.DepartmentCode;
                //   var gep =  depData[index].value = item.GroupCode;
                //   //alert(gep)
                // }
                // }
                onClick={(e) => {
                  var data = depData[index].value = item.DepartmentName;
                  dispatch(ChangeName(data))
                  var deptt = depData[index].value = item.DepartmentName;
                  var dep = depData[index].value = item.DepartmentCode;
                  dispatch(PoductsApi(dep, ''))
                  e.stopPropagation();
                
                 
                  // if(dep.Data == null){
                  //   return("product Is Not Available")
                  //   // setDepData("Product Is Not Available")
                  // }
                  // alert(window.ghadding)
                  { window.scrollTo(0, 0) } }}>
                <p>{item.DepartmentName}</p>
                <span style={{ position: 'absolute' }} className='sab_menu'>
                  {
                    item.Groups.map((it) => {
                      return (
                        item.isShown ?
                          <Link to={'/productspage'}  onClick={(e) => {
                            var data1 = depData[index].value = item.DepartmentName;
                            var depsab = depData[index].value = it.GroupName;
                            var data =  data1 +" >> "+depsab
                            dispatch(ChangeName(data))
                            var dep = depData[index].value = item.DepartmentCode;
                            var grup = depData[index].value = it.GroupCode;
                            dispatch(PoductsApi(dep, grup));
                            e.stopPropagation();
                            // if(grup.Data == null){
                            //   return(<p>product Is Not Available</p>)
                            // }
                            // alert(window.sabhadding)
                          }} >
                            <p>{it.GroupName}</p>
                          </Link>
                          : null
                      )
                    })
                  }
                </span>
              </Link>
              
            )
          })
        }</li>
                            </ul>               
        
                    </div>

                    <div>
                        <h3> INFORMATION </h3>
                        <ul >
                            <li>
                                <Link to={'/aboutus'} onClick={() => { window.scrollTo(0, 0) }}>About Us</Link>
                            </li>
                            <li>
                                <Link to={'/contactus'} onClick={() => { window.scrollTo(0, 0) }}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={'/privacypolicy'} onClick={() => { window.scrollTo(0, 0) }}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={'/termcondition'} onClick={() => { window.scrollTo(0, 0) }}>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to={'/deliveryinfo'} onClick={() => { window.scrollTo(0, 0) }}>Delivery Information</Link>
                            </li>
                        </ul>

                    </div>
                    

                    {/* <div>
                        <h3> RESOURCES </h3>
                        <ul >
                            <span className='social' >
                                <a href='https://www.facebook.com/sbstorefsd/' target="_blank">
                                    <FaFacebook className='facebook' />
                                </a>
                                <a href='https://instagram.com/sbstore_fsd?igshid=YmMyMTA2M2Y=' target="_blank">
                                    <FaInstagram className='instagram' />
                                </a>
                                <a href='#' target="_blank">
                                    <FaYoutube className='youtube' />
                                </a>
                            </span>
                        </ul>
                        <span className='social' >
                            <a href='https://apps.apple.com/pk/app/' target="_blank">
                                <img src={`	https://metro-online.pk/images/appstore.png`} />
                            </a>
                            <a href='https://play.google.com/store/apps/' target="_blank">
                                <img src={`https://metro-online.pk/images/googleplay.png?1`} />
                            </a>
                        </span>
                    </div> */}
                    <div>
                        <h3> QUICK LINKS </h3>
                        <ul >
                            <li>
                                <Link to={'/viewcart'} onClick={() => { window.scrollTo(0, 0) }}   > View Cart</Link>
                            </li>
                            <li>
                                <p className='track-myorder' onClick={() => setOpenModal(!openModal)}>
                                    Track My Order
                                </p>
                                <span style={{ position: 'relative' }} >

                                    <span className='open-ordertrack' style={{ display: openModal ? 'flex' : 'none', }}  >
                                        <TrackMyOrder closeModal={setOpenModal} />
                                    </span>
                                </span>
                            </li>
                            <li>
                                <Link to={'/checkout'} onClick={() => { window.scrollTo(0, 0) }}> Checkout</Link>
                            </li>
                            <li>
                                <Link to={'/orderhistory'} target='_blank' > Order History </Link>
                            </li>

                        </ul>
                    </div>



                </div>
                <div className='information'>
                    <h1 className='text-light text-center'>Vape House – Purveyors of Fine Electronic Cigarettes and Supplies
</h1>               <p className="px-5 paragraph">Vape House Company is the leading store of electronic cigarettes and vape accessories in Pakistan. Distinguished as the pioneering supplier of vaporizers, we offer a vast assortment of vape juices of both salt nic e-liquids and freebase e-liquids at our stores and online. Moreover, we exclusively deal in top-quality vape products at discounted prices and unparalleled customer services. So, shop from a variety of e-cigarette hardware like tanks, kits, mods, pod systems, chargers and batteries with us, completely hassle-free!</p>
                </div>
                
                <div className='copy-rights'>
                    <p>
                          © 2022 All Rights Reserved - Powered by
                        <a href='https://www.softvalley.com.pk/' target='_blank'> Softvalley</a>  
                    </p>
                </div>

            </section> 
        </>
    )
}

export default Footer;