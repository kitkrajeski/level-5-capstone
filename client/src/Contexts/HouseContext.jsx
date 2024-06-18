import {createContext, useContext, useState} from 'react'
import axios from 'axios'

const HouseContext = createContext()

const useHouseApi = () => {
    const [house, setHouse] = useState('');

    const getRandomHouse = async () => {
        try {
            const response = await axios.get(`/api/houses`);
            const randomInt = Math.floor(Math.random() * (response.data.length));
            setHouse(response.data[randomInt]);
        } catch (error) {
            console.error('error fetching data:', error);
        }
        
        // GET
        // fetch(`https://anapioficeandfire.com/api/houses/${randomInt}`)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok')
        //         }
        //         return response.json()
        //     })
        //     .then(data => {
        //         setHouse(data)
        //     })
        //     .catch(error => console.error('Error fetching data', error))
        // update state
    }

    return {
        house,
        getRandomHouse
    }
}

function HouseContextProvider(props) {
    const houseApi = useHouseApi()
    return (
        <HouseContext.Provider value={houseApi}>
            {props.children}
        </HouseContext.Provider>
    )
}

// const useHouseContext = useContext(HouseContext)

export {HouseContext, HouseContextProvider}