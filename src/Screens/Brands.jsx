import React from 'react'
import Slider from 'react-slick'
  const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {

                    slidesToShow: 2,
                },
            },
        ],
    }



const Brands = () => {
  return (
    <>
                    <div className="container-fluid px-5" >
                    <div className='container mt-5'>
           <div className="row  ">
                <div className="col-md-5 px-5 ">
                    <div className="Line "></div>
                </div>
                <div className="col-md-2">
                    <h1 className="text-center arrival">Brands</h1>
                </div>
                <div className="col-md-5 px-5">
                <div className="Line "></div>

                </div>
            </div>
           </div>
    
   
    <div className="col-md-12 col-sm-12 col-xs-12 feature-seating">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center  ">
            <Slider {...settings}>
                <a  className='px-5'>
                    <img className="zoom-eff" alt="BLVK" src="brands/1.jpg"/>
                </a>
                <a  className='px-5'>
                    <img className="zoom-eff" alt="VGOD" src="brands/2.jpg"/>
                </a>
                <a  className='px-5'>
                    <img className="zoom-eff" alt="POP" src="brands/3.jpg"/>
                </a>
                <a  className='px-5'>
                    <img className="zoom-eff" alt="ZENITH" src="brands/4.jpg"/>
                </a>
                <a  className='px-5'>
                    <img className="zoom-eff" alt="NASTY" src="brands/5.jpg"/>
                </a>
                <a  className='px-5'>
                    <img className="zoom-eff" alt="SAD BOY" src="brands/6.jpg"/>
                </a>
                </Slider>
            </div>
           
          
            
        </div>

    </div>
    
    
    

</div>
    </>
  )
}

export default Brands
