import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    padding: ${props => (props.padding ? props.padding : '25px 10%')};
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        padding: 50px 0;
    }

    .viewmode-switch {
        position: absolute;
        top: 0px;
        right: 0px;
        margin: 25px;

        --line: #505162;
        --dot: #F7F8FF;
        --circle: #9EA0BE;
        --duration: .3s;
        --text: #9EA0BE;
        cursor: pointer;
        input {
            display: none;
            & + div {
                position: relative;
                &:before,
                &:after {
                    --s: 1;
                    content: '';
                    position: absolute;
                    height: 4px;
                    top: 10px;
                    width: 24px;
                    background: var(--line);
                    transform: scaleX(var(--s));
                    transition: transform var(--duration) ease;
                }
                &:before {
                    --s: 0;
                    left: 0;
                    transform-origin: 0 50%;
                    border-radius: 2px 0 0 2px;
                }
                &:after {
                    left: 28px;
                    transform-origin: 100% 50%;
                    border-radius: 0 2px 2px 0;
                }
                span {
                    padding-left: 56px;
                    line-height: 24px;
                    color: var(--text);
                    &:before {
                        --x: 0;
                        --b: var(--circle);
                        --s: 4px;
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        box-shadow: inset 0 0 0 var(--s) var(--b); 
                        transform: translateX(var(--x));
                        transition: box-shadow var(--duration) ease, transform var(--duration) ease;
                    }
                    &:not(:empty) {
                        padding-left: 64px;
                    }
                }
            }
            &:checked {
                & + div {
                    &:before {
                        --s: 1;
                    }
                    &:after {
                        --s: 0;
                    }
                    span {
                        &:before {
                            --x: 28px;
                            --s: 12px;
                            --b: var(--dot);
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 1024px) {
            display: none;
        }
    }

`;

export default Card;
