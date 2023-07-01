import styled from 'styled-components';

const Backdrop = styled.div`
    background: linear-gradient(45deg, var(--active-color) 20%, transparent 100%) no-repeat;
    ${(props) => {
        if (props.coverImage) {
            return `
          background-image: url(${props.coverImage});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
      `;
        }
    }}
    ${({ animation }) => animation && 'animation: colorChange 20s alternate infinite;'}
    min-height: 100%;
    height: fit-content;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

export default Backdrop;
