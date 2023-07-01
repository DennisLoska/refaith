import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigationItem = styled.span`
    a {
        color: #fff;
        font-size: 24px;
        text-decoration: none;
        padding: 0 25px;
        margin-top: 10px;
        text-decoration: ${props => (props.navId === props.activePage ? 'underline' : 'none')};
    
        &:hover {
            text-decoration: underline;
        }
    }
`;

const NavigationItem = ({ navId, to, children }) => {
    // highlight current page in menu
    const activePage = window.location.hash.replace('#/', '');
    return (
        <StyledNavigationItem activePage={activePage} navId={navId}>
            <Link to={to}>{children}</Link>
        </StyledNavigationItem>
    );
};

export default NavigationItem;
