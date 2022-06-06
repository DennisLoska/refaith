import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationItem = styled(Link)`
    color: #fff;
    font-size: 24px;
    text-decoration: none;
    padding: 0 25px;
    margin-top: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

export default NavigationItem;
