import React, { useEffect, useState } from "react";
import "./slider6.css";
// import Carousel from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShoppingCart } from "react-icons/fa";
import {} from "../components/Body/Body.css";
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { MdShoppingCart } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../components/Redux/Action';



function Slider6() {
  const [data, setData] = useState('');
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(true);
  const [proData, setProData] = useState(null);



  const increment = (item, index) => {
    if (item.qty < 10) {
        proData[index].qty += 1
        const updatedData = [...proData]
        setProData(updatedData)
    }
}
const decrement = (item, index) => {
    if (item.qty > 1) {
        proData[index].qty -= 1
        const updatedData = [...proData]
        setProData(updatedData)
    }
}
  useEffect(() => {
    fetchApi();
  }, []);


  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (

    <>
      {/* <div className="slider6Main"> */}
      <div className="crosel6">
        <Slider  {...settings} arrows={true} autoplay={true} swipeToSlide={true} useCSS={{ padding: "40px", backgroundColor: "red" }} >
          {
            proData.length > 0 ? proData.map((item, key) => {
              return (
                <div key={key + 1}>
                 { console.warn("data in side Slider:"+item)}
                                        <Link to={'/productdetail'} state={{ item }}  >
                                            {/* <img src={require('./assets/product1.jpg')} /> */}
                                            <img src={`https://easyapi.serveu.pk/images/${item.Barcode}.jpg`} />
                                        </Link>
                                        <p>{item.Description}</p>
                                        <h6>Rs.{item.UnitRetail}</h6>
                                        <div className='product-cart'>
                                            <div className='product-cart1'>
                                                <div className="qty-main">
                                                    <a className="plus-a" onClick={() => increment(item, key)} >
                                                        <HiPlusSm />
                                                    </a>
                                                    <div className="qty-first">
                                                        <p >{item.qty}</p>
                                                    </div>
                                                    <a className="minas-a" onClick={() => decrement(item, key)} >
                                                        <HiMinusSm />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='product-cart2'>
                                                <button onClick={() => dispatch(AddToCart(item))}>
                                                    <MdShoppingCart />
                                                </button>
                                            </div>
                                        </div>
                                  

                  {/* <ProductsList asd={item.src} value={item.value} title={item.title} /> */}
                </div>
              )
            }
            ) : <p>no results</p>
          }
          {/* <div>
            <img style={{ height: "200px", width: "90%" }} src={pic2} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic3} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic1} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic3} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic2} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic1} />
          </div> */}
        </Slider>

        {/* </div> */}

      {/* </div>
      <div className="crosel6md">
        <Slider {...settings} arrows={true} slidesToShow={3} autoplay={true} swipeToSlide={true} useCSS={{ padding: "40px", backgroundColor: "red" }}  >
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic2} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic3} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic1} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic3} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic2} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic1} />
          </div>
        </Slider> */}

        {/* </div> */}

      </div>

      {/* <div className="crosel6sm">
        <Slider {...settings} arrows={true} slidesToShow={1} autoplay={true} swipeToSlide={true} useCSS={{ padding: "40px", backgroundColor: "red" }}  >
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic2} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic3} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic1} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic3} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic2} />
          </div>
          <div>
            <img style={{ height: "200px", width: "90%" }} src={pic1} />
          </div>
        </Slider>


      </div> */}

    </>


  );




}
export default Slider6;