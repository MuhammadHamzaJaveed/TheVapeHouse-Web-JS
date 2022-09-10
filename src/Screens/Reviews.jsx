import React from 'react'
import CarouselSlider from './CarouselSlider'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <>
        <div className="container reviewz">
        <div className="row py-5 mx-5">
          <div className='col-md-4'>
          <div className="d-flex flex-column justify-content-between text-center my-3">
  <div className="p-2 ">
<h1>
<img src='google.png'  style={{maxWidth:"100px"}}/>

</h1>
  </div>
  <div className="p-2"><b>Good</b></div>
  <div className="p-2"><b>Based on 299 Reviews</b></div>
</div>
          
            
          </div>
          <div className='col-md-8 justify-content-center'>
            <ReviewSlider />
          </div>
        </div>

        </div>
    </>
  )
}

export default Reviews
