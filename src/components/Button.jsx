import React from 'react'

export const Button = ({ classes, text, type, style, onClick, icon }) => {
    const alertMissingHandler = () =>
        window.alert('Add event handler to the button')

    return (
        <>
            <button
                onClick={onClick ? onClick : alertMissingHandler}
                type={type}
                style={style}
                className={`btn ${classes}`}
            >
                <div className="d-flex">
                    {icon}
                    {text ? text : 'Click'}
                </div>
            </button>
        </>
    )
}
