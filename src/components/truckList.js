import React from 'react'
import styled from 'styled-components'
import TruckCard from './truckCard'


const TruckContainer = styled.div`
    max-height: 80vh;
    overflow-x: scroll;
`


const TruckList = () => {
    return (
        <TruckContainer>
            <TruckCard name="Pepe" description="awesome" />

            <TruckCard name="Pepe" description="awesome" />

            <TruckCard name="Pepe" description="awesome" />

            <TruckCard name="Pepe" description="awesome" />

            <TruckCard name="Pepe" description="awesome" />

            <TruckCard name="Pepe" description="awesome" />

            <TruckCard name="Pepe" description="awesome" />

            <TruckCard name="Pepe" description="awesome" />
        </TruckContainer>
    )
}

export default TruckList
