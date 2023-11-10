import React, {useEffect } from "react";
import styled from "styled-components";
import {GlobalStyles} from "../styles/global";

interface AppProps  { backgroundImageSrc: string, renderedCb: () => void };
export const App = ({backgroundImageSrc, renderedCb}: AppProps) => {
    useEffect(() => {
        renderedCb();
    }, []);

    return <><GlobalStyles />
        <Wrapper>
            <Iframe id="myGame" src="https://village.dodopizza.com/"></Iframe>
            <BackgroundImage src={backgroundImageSrc}/>
        </Wrapper>
    </>;
};



const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0;
`;

const BackgroundImage = styled.img`
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;




const Iframe = styled.iframe`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    border: none;
`;


