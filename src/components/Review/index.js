import React from 'react';
import styled from 'styled-components';

function Review(props) {
    const Item = styled.div`
        padding: 5px 15px;
        cursor: pointer;
        font-weight: ${props.active ? 700 : 400};
    `;

    return (
        <Item onClick={(e) => props.handleClick(e, props.id)}>{props.displayTitle}</Item>
    );
}

export default Review;