import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    * {
        box-sizing: border-box;
    }

    :root {
        --active-color: #a7b000;
        overscroll-behavior: none;
    }
    
    @keyframes colorChange {
        from {
            filter: hue-rotate(0deg);
        }
        to {
            filter: hue-rotate(360deg);
        }
    }

    html {
        font-family: 'Lato', Arial, Helvetica, sans-serif;
        font-size: 16px;
        overflow-y: scroll;
        text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2) ; 
       -webkit-text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2) ; 
       -moz-text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2) ; 
    }

    body {
        margin: 0;
    }

    .backdrop-blur {
        backdrop-filter: blur(3px);
        min-height: 100vh;
        height: fit-content;
    }
`;

export default GlobalStyle;
