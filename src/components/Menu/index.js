import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
    display: flex;
`;

const Item = styled(NavLink)`
    padding: 15px;

    &.active {
        font-weight: 700;
    }

    &, &:hover, &:active {
        text-decoration: unset;
        color: unset;
    }
`;

function Menu() {
    return (
        <Container>
            <Item exact to="/">Browse</Item>
            <Item exact to="/search">Search</Item>
        </Container>
    )
}

export default Menu;