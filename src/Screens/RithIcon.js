import React, { useEffect, useState } from "react";
import "./RithIcon.css";
import { FaWhatsapp,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { PoductsApi } from '..//components/Redux/Action';
import { BiCaretRight } from 'react-icons/bi'
import { IoIosArrowUp } from 'react-icons/io'


function RithIcon() {

    const hddispatch = useDispatch()
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollY(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>

            {/* <div>
                <div className="right-icon">
                    <Link to={'/productspage'} onClick={(e) => {
                        var dep = "0010";
                        hddispatch(PoductsApi(dep, ''))
                        e.stopPropagation();
                    }} >
                        <img src={`https://metro-online.pk/images/Grocery-Flaouting.png`} />    
                    </Link>
                </div>               
            </div> */}
            {/* <div>
                <div className="right-text">
                    <Link to={'/productspage'} onClick={(e) => {
                        var dep = "0010";
                        hddispatch(PoductsApi(dep, ''))
                        e.stopPropagation();
                    }} >
                           <p> Grocery <BiCaretRight color="white" /> </p>
                    </Link>
                </div>               
            </div> */}
            <div className="waicon">
                <a style={{fontSize:"40px"}}  href="https://api.whatsapp.com/send/?phone=923088557555&text=Welcome&app_absent=0" target={"_blank"} >
                        <img src="whatsapp.png" style={{maxWidth:"25px"}} />
                    </a>
            </div>

            <div className="arrowcon" style={{ display: scrollY > 100 ? 'block' : 'none' }} >
                <IoIosArrowUp className="fa my-float-arrow" height="25px" width="25px" onClick={()=>{
               window.scrollTo(0, 0) }}/>
            </div>
        </>
    );
}
export default RithIcon;