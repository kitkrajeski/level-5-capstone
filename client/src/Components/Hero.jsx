import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Hero() {
    const loc = useLocation();


    const getImgSrc = () => {
        // look at url params, return the corresponding class name fo rthat image
        if(loc.pathname === '/houses') return 'houses--background'
        return 'default--background'
    }

    return (
        <div className={`hero ${getImgSrc()}`}>
        </div>
    )
}

export default Hero