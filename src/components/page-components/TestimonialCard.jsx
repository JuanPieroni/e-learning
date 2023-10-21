import React, { useState } from 'react'
import { BsStar, BsStarFill, BsTwitter } from 'react-icons/bs'

export const TestimonialCard = ({
    img,
    fullName = 'Full Name',
    jobTitle = 'Job Title',
    twitterHandler = 'Twitter nadle',
    text = ' text',
    ratingStars,
}) => {
    const [rating, setRating] = useState(ratingStars)

    return (
        <>
            <div className="card testimonial in-view">
                <div className="card-header">
                    <div className={`card-img ${img}`}></div>
                    <div className="card-body">
                        <h3 className="card-title">{fullName}</h3>
                        <p className="card-text">{jobTitle}</p>
                        <div>
                            <BsTwitter size={'1.5rem'} />
                            {twitterHandler}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer d-flex">
                    {[...Array(5)].map((start, index) => {
                       
                        const ratingValue = index + 1
                      
                        return (
                            <label
                                htmlFor="rating"
                                key={index}
                                onClick={() => setRating(ratingValue)} 
                                style={{
                                    cursor: 'pointer',
                                    color: 'gold',
                                    fontSize: '1.5rem',
                                }}
                            >
                                <input
                                    type="radio"
                                    value={ratingValue}
                                    style={{ display: 'none' }}
                                />
                                
                                {ratingValue <= rating ? (
                                    <BsStarFill className="mr-1" />
                                ) : (
                                    <BsStar className="mr-1" />
                                )}
                           
                            </label>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
