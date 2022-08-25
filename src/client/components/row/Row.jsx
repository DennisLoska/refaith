import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    width: 100%;
    ${(props) => {
    if (props.horizontalAlignment != null) {
      return `justify-content: ${props.horizontalAlignment};`;
    }
    if (props.direction != null) {
      return `flex-direction: ${props.direction};`;
    }
    if (props.verticalAlignment != null) {
      return `align-items: ${props.verticalAlignment};`;
    }
  }}
`;

const Row = (props) => {
  const { children } = props;
  return (
    <StyledRow {...props}>{children}</StyledRow>
  );
};

export default Row;
