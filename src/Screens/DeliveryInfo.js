import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Common.css';

const DeliveryInfo = () => {
    return (
        <>
            <Header />
            <div className="mainhadding">
                <ul>
                <h1>Delivery Information</h1>
                <li>
                Q1: What are the days and timings for delivery?<br></br>
                A: We provide delivery in all seven days of the week.
                </li>
                <li>
                Q2: What are the delivery charges?<br></br>
                A: Delivery is free within city area of Faisalabad.
                </li>
                <li>
                Q3: What about other hidden costs (sales taxes etc)?<br></br>
                A: There are no extra taxes or hidden cost. The prices mentioned on the website are the final prices.
                </li>
                <li>
                Q4: What happens if you’re late?<br></br>
                A: We assure you that we will try our best to deliver on time. However, if we will be running late due to LockDown, unavoidable circumstances like vehicle breakdown or traffic, our customer service team will get in touch with you and let you know promptly.
                </li>
                <li>
                Q5: Can I change my delivery Time?<br></br>
                A: Yes, your delivery date and time can be changed by contacting our customer service team on +92 308 855 7 555 or emailing us at sales@sbstorefsd.com.
                </li>
                <li>
                Q6: Who will deliver my order?<br></br>
                A: Within Faisalabad we opened for swift delivery mechanism as in uber, careem, bikeya. We offer COD for Faisalabad.
                </li>

                </ul>
            </div>
            <Footer />
        </>
    )
}

export default DeliveryInfo;