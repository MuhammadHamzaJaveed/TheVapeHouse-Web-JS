import React from 'react'
import Slider from 'react-slick'
import ReviewData from "./ReviewData"
import { Scrollbars } from 'react-custom-scrollbars-2';
import './Common.css'

const settings = {
  dots: false,
  infinite: true,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  // responsive: [
    
  //     {
  //         breakpoint: 1400,
  //         settings: {
  //             slidesToShow: 1,
  //         },
  //     },
  //     {
  //         breakpoint: 1280,
  //         settings: {
  //             slidesToShow: 4,
  //         },
  //     },
  //     {
  //         breakpoint: 1024,
  //         settings: {

  //             slidesToShow: 4,
  //         },
  //     },
  //     {
  //         breakpoint: 768,
  //         settings: {
  //             slidesToShow: 3,
  //         },
  //     },
     
  // ],
}

const ReviewSlider = () => {
  return (
    <>
 
<Slider {...settings}>

{
          ReviewData.map((item) => {
            const{img,name,Text,Date}=item
            return(
              <>
              <div class="card mb-3 mx-1 px-1 border-1  justify-content-center" style={{width:"295px"}}>
  <div class="row g-0">
    
    <div class="col-md-12 justify-content-center">
      <div class="card-body">
      <div className='row justify-content-center'>
      <div class="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
        <div className='col-md-8' ><h6 class="card-text">{name}</h6>
        <div>{Date}</div>
        <i class="fa fa-star" aria-hidden="true" style={{color:"#fddf00"}}></i>
        <i class="fa fa-star" aria-hidden="true" style={{color:"#fddf00"}} ></i>
        <i class="fa fa-star" aria-hidden="true" style={{color:"#fddf00"}}></i>
        <i class="fa fa-star" aria-hidden="true" style={{color:"#fddf00"}}></i>
        <i class="fa fa-star" aria-hidden="true" style={{color:"#fddf00"}}></i>
        </div>
      </div>
      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={50}>

        <p class="textt">{Text}</p>
        </Scrollbars>
      </div>
    </div>
  </div>
</div>
      </>
            )
          })
        
        }
        </Slider>
          
  
    </>
  )
}

export default ReviewSlider
