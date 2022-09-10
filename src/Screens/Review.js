import React, { useState } from 'react';
import './TrackMyOrder.css'
import { GiCrossedBones } from 'react-icons/gi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const Review = (props) => {
    const [rating, setRating] = useState([false, false, false, false, false]);

    return (
        <>
            <span className='modal-Background'>
                <div className='review-modal'>
                    <h3 className='track'>Send Review </h3>
                    <button className='cancel-btnn' onClick={() => props.closeModal(false)}> <GiCrossedBones /> </button>


                    <input type='text' placeholder='Your Name' />
                    <input type='email' placeholder='Your Email' />
                    <textarea className='your-review' placeholder='Your Review'></textarea>

                    <p className='your-rating'>Your Rating: <span className='rating-satars' >
                        {
                            rating.map((item, index) => {
                                return (
                                    item ?
                                        <AiFillStar color={'red'} onClick={() => {
                                            rating[index] = !rating[index]
                                            setRating([...rating])
                                        }} /> :
                                        <AiOutlineStar color={'red'} onClick={() => {
                                            rating[index] = !rating[index]
                                            setRating([...rating])
                                        }} />
                                )
                            })
                        }
                    </span> </p>
                    <button className='submit-btn'>Submit</button>




                </div>
            </span>
        </>
    );
};

export default Review;