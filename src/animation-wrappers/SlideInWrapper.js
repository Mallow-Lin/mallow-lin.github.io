import React from 'react'

const SlideInWrapper = (props) => {
    const fromTopLeft = (props.direction === "right" || props.direction === "bottom") ? false : true
    const isHorizontal = (props.direction === "top" || props.direction === "bottom") ? false : true

    return (
        <div className={`${props.className} ${props.isInView ? `translate-${isHorizontal ? "x" : "y"}-0 opacity-100` : `${fromTopLeft ? "-" : ""}translate-${isHorizontal ? "x" : "y"}-full opacity-0`} ${props.duration ? `duration-${props.duration}` : "duration-1000"}`}>
            {props.children}
        </div>
    )
}

export default SlideInWrapper