import React from 'react'

const SlideInWrapper = (props) => {
    const isNeg = (props.direction === "right" || props.direction === "bottom") ? "" : "-"
    const xOrY = (props.direction === "top" || props.direction === "bottom") ? "y" : "x"
    const inViewPosition = `translate-${xOrY}-0`
    const outViewPosition = isNeg + inViewPosition.replace("0", "full")
    const animationDuration = props.duration ? `duration-${props.duration}` : "duration-1000"

    return (
        <div
            className={`
            ${props.className}
            ${props.isInView ? `${inViewPosition} opacity-100` : `${outViewPosition} opacity-0`}
            ${animationDuration}
            `}
        >
            {props.children}
        </div>
    )
}

export default SlideInWrapper