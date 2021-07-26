import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;

    .Main {
        flex: 2;
        background-color: var(--bluelight);
        text-align: center;

        h3 {
            display: none;
        }

        img {
            width: 110px;
            margin: 7vh 0 4vh 0;
        }

        input, span, button {
            display: block;
        }

        label {
            display: none;
        }

        input {
            width: 270px;
            height: 50px;
            margin: 1vh auto;
            padding-left: 12px;
            color: var(--blue);
            background-color: transparent;
            border: 2px solid var(--blue);
            border-radius: 15px;
            font-size: 16px;

            &::placeholder {
                color: rgba(0,20,41,.5);
            }
        }

        button{
            margin: 5vh auto;
            font-size: 20px;
        }

        span {
            display: block;
            color: var(--blue);
            font-size: 1rem;
            margin-bottom: 7vh;

            a {
                font-size: 18px;
                color: var(--orange);
                padding: 4px;
            }
        }
    }

    .Cover {
        display: none;
    }

    @media (min-width: 1024px) {
        .Main {
            h3 {
                display: block;
                font-size: 38px;
                margin: 15vh 0 12vh;
            }

            img {
                display: none;
            }
        }

        .Cover {
            display: block;
            flex: 1.5;
            text-align: center;

            .Illustrations {
                img {
                    position: absolute;
                    width: 20vw;
                    top: 25vh;
                    right: 2vw;
                }
                img + img {
                    width: 35vw;
                    top: 45vh;
                    right: 12vw;
                    transform: scaleX(-1);
                }
            }
        }
    }

    @media (min-width: 1200px) {
        .Cover {
            .Illustrations {
                img {
                    position: absolute;
                    width: 25vw;
                    top: 22vh;
                    right: 2vw;
                }
                img + img {
                    width: 28vw;
                    top: 30vh;
                    right: 18vw;
                }
            }
        }
    }
`;