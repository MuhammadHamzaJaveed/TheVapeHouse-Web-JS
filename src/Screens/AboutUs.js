import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Common.css';
import Maps from "./Maps";

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="aboutus">
                <img src="aboutus.jpg" alt='About Us' className="px-5" />
                <div className="card mb-3 mx-5">
  <div className="row g-0 " id="SecRow">
    <div className="col-md-4">
      
    </div>
    <div className="col-md-8 text-light">
      <div className="card-body">
        <h1 className="card-title">Welcome to The Vape House!</h1>
        <p className="card-text">As one of the leading online retailers since 2010,
         The Vape House proudly purveys the best in third-party, e-liquids,
          Hardware and accessories. You will also find a huge assortment of
           e-liquids from popular brands like Nasty Juice and Dinner Lady,
            along with our own phenomenally successful lines of 
            Double Drip and Vapouriz Premium liquids. 
            With flavours ranging from tobacco to menthol, 
            fruits and desserts and everything in between, 
            there’s something to satisfy all tastes at Vapestore. Our specialist knowledge
             and dedication to excellence will help to enhance every aspect of your vaping
              experience, and each product has been carefully chosen by vapers, for vapers.
               We source directly from the manufacturer and offer unrivalled customer 
               service, allowing you to shop with complete confidence every step of the way.</p>
        <p className="card-text"><small className="text-muted ms-5">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

            </div>
            <Maps/>
            <Footer />
        </>
    )
}

export default AboutUs;