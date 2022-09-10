import React, { useEffect } from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import DeliveryInfo from './Screens/DeliveryInfo';
import TermsConditions from './Screens/TermsCoditions';
import Signup from './Screens/Signup';
import ProductDetail from './Screens/ProductDetail';
import ViewCart from './Screens/ViewCart';
import ProductsPage from './Screens/ProductsPage';
import Checkout from './Screens/Checkout';
import Loginform from './components/Header/Loginform';
import Recovery from './Screens/Recovery';
import TrackMyOrder from './Screens/TrackMyOrder';
import Review from './Screens/Review';
import Viewcartitem from './Screens/Viewcartitem';
import Orderhistory from './Screens/Orderhistory';
import { useDispatch } from 'react-redux';
import { DepartmentApi, fetchApi, PoductsApi } from './components/Redux/Action';
import { store } from './components/Redux/Store';
import { Provider } from 'react-redux';
import RithIcon from './Screens/RithIcon';
import Banner from './components/Header/Banner';
import Modal from './components/Header/Modal';


const RootComponent = () => {
    useEffect(()=>{
      },[]);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(DepartmentApi())
        dispatch(fetchApi())
        dispatch(PoductsApi())
} ,[])
    return (
        <Provider store={store}>
     
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path="aboutus" element={<AboutUs />} />
                <Route exact path="contactus" element={<ContactUs />} />
                <Route exact path="privacypolicy" element={<PrivacyPolicy />} />
                <Route exact path="termcondition" element={<TermsConditions />} />
                <Route exact path="deliveryinfo" element={<DeliveryInfo />} />
                <Route exact path="signup" element={<Signup />} />
                <Route exact path="viewcart" element={<ViewCart />} />
                <Route exact path="viewcartitems" element={<Viewcartitem />} />
                <Route exact path="checkout" element={<Checkout />} />
                <Route exact path="loginform" element={<Loginform />} />
                <Route exact path="recovery" element={<Recovery />} />
                <Route exact path="trackmyorder" element={<TrackMyOrder />} />
                <Route exact path="productdetail" element={<ProductDetail />} />
                <Route exact path="productspage" element={<ProductsPage />} />
                <Route exact path="productreview" element={<Review />} />
                <Route exact path="orderhistory" element={<Orderhistory />} />
                <Route exact path="righticon" element={<RithIcon />} />
                
            </Routes>
    
         </Provider>
    )
}
  // "homepage": "https://sbrec.serveu.pk",
//   "homepage": "https://sbrec.sbstorefsd.com",


export default RootComponent

