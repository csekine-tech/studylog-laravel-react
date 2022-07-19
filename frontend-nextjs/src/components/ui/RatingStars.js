import React from 'react'
import ReactStars from 'react-stars'

const RatingStars = ({ rate, color1, color2, edit }) => {
    const ratingChanged = newRating => {
        //save DB
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100px' }}>
                <ReactStars
                    count={4}
                    onChange={ratingChanged}
                    size={24}
                    color1={color1}
                    color2={color2}
                    edit={edit}
                    half={false}
                    value={rate ? rate : 0}
                />
            </div>
        </div>
    )
}
export default RatingStars
