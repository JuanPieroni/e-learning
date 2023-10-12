import React from 'react'
import { Button } from './Button'

export const Modal = ({ title, text, loginEvent, cancelEvent }) => {
    return (
        <>
            <div className="modal">
                Modal
                <div className="modal-content fadeIn-2ms">
                    <h1 className="mb-1">{title}</h1>
                    <p className="mb-1">
                        {text ? text : 'Modal content goes Here!'}
                    </p>
                    <div className="d-flex space-between">
                        <Button
                            classes={'btn-primary '}
                            text={'login'}
                            onClick={loginEvent}
                        />
                        <Button text={'Close'} onClick={cancelEvent} />
                    </div>
                </div>
            </div>
        </>
    )
}
