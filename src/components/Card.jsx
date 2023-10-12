import React from 'react'
import { Button } from './Button'

export const Card = ({
    title,
    text,
    children,
    icon_1,
    icon_2,
    icon_3,
    btnIcon,
    startEvent,
    cardHeader = true,
    cardFooter = true,
    cardBody = true,
}) => {
    return (
        <>
            <div className="card" style={{ maxWidth: 400 }}>
                {cardHeader && (
                    <div className="card-header">
                        {icon_1} {icon_2} {icon_3}
                    </div>
                )}
                <div className="card-body">
                    <h3 className="card-title">
                        {text ? text : 'Card Title Here'}
                    </h3>
                    <p className="card-text">{text}</p>
                </div>
                {cardFooter && (
                    <div className="card-footer">
                        <Button
                            classes={'btn-secondary'}
                            text="Start Learning"
                            icon={btnIcon}
                            onClick={startEvent}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
