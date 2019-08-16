import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    border: 2px solid #313d4b;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 12px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 1rem;
    margin-bottom: 3rem;
`

const TruckCard = (props) => {
    return (
        <Card>
            <div>image here</div>
            <div>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </Card>
    )
}

export default TruckCard
