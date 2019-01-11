import React from 'react';
import styled from 'styled-components';

function Review(props) {
    const Container = styled.div`
        padding: 5px 15px;
        cursor: pointer;
    `;

    const Title = styled.p`
        font-weight: ${props.active ? 700 : 400};
        margin: 0;
    `;
    
    const Summary = styled.p`
        margin-top: 5px;
        margin-bottom: 15px;
    `

    return (
        <Container onClick={(e) => props.handleClick(e, props.id)}>
            <Title>{props.displayTitle}</Title>
            {props.active && <Summary>{props.summary}</Summary>}
        </Container>
    );
}

export default Review;