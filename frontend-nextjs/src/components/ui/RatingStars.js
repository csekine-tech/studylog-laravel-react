import React from 'react'
import ReactStars from 'react-stars'

const RatingStars = ({ rate, color1, color2, edit, onChange }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100px' }}>
                <ReactStars
                    count={4}
                    onChange={onChange}
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
