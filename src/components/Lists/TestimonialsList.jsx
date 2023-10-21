import React, { useState, useEffect } from 'react'
// data
import testimonialData from '../../db/testimonial-list.json'
// COMPONENTS
import { TestimonialCard } from '../page-components/TestimonialCard'

export const TestimonialsList = () => {
    /*   const [testimonials, setTestimonials] = useState(testimonialData) */
    const [testimonials, setTestimonials] = useState(() => {
        return JSON.parse(localStorage.getItem('testimonialData'))
    })

    useEffect(() => {
        localStorage.setItem('testimonialData', JSON.stringify(testimonialData))
    }, [testimonials])

    return (
        <>
            {testimonials &&
                testimonials.map((item) => (
                    <TestimonialCard
                        key={item.id}
                        img={item.img}
                        fullName={item.fullName}
                        jobTitle={item.jobTitle}
                        twitterHandler={item.twitterHandle}
                        text={item.text}
                    />
                ))}
        </>
    )
}
