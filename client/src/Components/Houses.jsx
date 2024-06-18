import React, { useEffect, useContext } from 'react'
import { HouseContext } from '../Contexts/HouseContext'

function Houses() {
    // const {house, getRandomHouse} = useHouseContext()
    const {house, getRandomHouse} = useContext(HouseContext)
    useEffect(() => {
        getRandomHouse()
        console.log(house)
    },[])
    const handleGetRandomHouse = () => {
        getRandomHouse()
    }

    // if(!house) return (
    //     <div>Loading House...</div>
    // )
    return (
        <div className='houses--background'>
            <button onClick={handleGetRandomHouse}>Get New</button>
            <h1>{house.name}</h1>
            <h1>{house.region}</h1>
            <h2>{house.words}</h2>
            <img src={house.crest} />
        </div>
    )
}

export default Houses