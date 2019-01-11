import React from 'react';
import styled from 'styled-components'

const Review = styled.div`
    padding: 5px 15px;
`;

function Menu(props) {
    return (
        <Review>{props.displayTitle}</Review>
    )
}

export default Menu;