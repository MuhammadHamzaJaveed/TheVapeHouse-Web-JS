import React from 'react'
import "./ElementVape.css";

const Banner = () => {
  return (
    <div className=" headingtopbar dektop">
                <ul className="welcometext">
                    <li><p><marquee  scrolldelay="200"><b>Free Shipping</b> on all orders above Rs. 3,000 &nbsp; &nbsp;&nbsp; Coming Soon: <b>Chishtian Branch</b></marquee></p></li>
                    
                </ul>
                <ul className="tophedersocials">
                    
                    <li class="socialicon"><a target="_blank" href="#"><i class="fa fa-map-marker">&nbsp;</i>Store Near Me</a></li>&nbsp;&nbsp;
                    <li class="socialicon"><a target="_blank" href="tel:+923006800812"><img src="telephone.png" className='icons'/>&nbsp;(0300 6800 812)</a></li>&nbsp;&nbsp;
                    <li class="socialicon"><a target="_blank" href="https://www.facebook.com/vapehouse.pk/"><img src="facebook.png" className='icons'/></a></li>
                    <li class="socialicon"><a target="_blank" href="https://www.instagram.com/invites/contact/?i=tt3bt41t2hlh&amp;utm_content=47kggkv"><img src="instagram.png" className='icons'/></a></li>
                    <li class="socialicon"><a target="_blank" href="#"><img src="youtube.png" className='icons'/></a></li>
                    <li class="socialicon"><a target="_blank" href="#"><img src="whatsapp.png" className='icons'/></a></li>
                    
                </ul>               
            </div>
  )
}

export default Banner