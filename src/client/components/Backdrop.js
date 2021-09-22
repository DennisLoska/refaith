import styled from 'styled-components';

const Backdrop = styled.div`
  background: linear-gradient(45deg, var(--active-color) 20%, transparent 100%) no-repeat;
  animation: colorChange 20s alternate infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export default Backdrop;
