import React, {useEffect } from "react";
import styled from "styled-components";
import {GlobalStyles} from "../styles/global";

interface AppProps  { backgroundImageSrc: string, renderedCb: () => void };
export const App = ({backgroundImageSrc, renderedCb}: AppProps) => {

    useEffect(() => {
        const myGame = document.getElementsByTagName("iframe")[0];
        function copyToClipboard(text: string) {
            navigator.clipboard.writeText(text).then(() => {
                myGame?.contentWindow?.postMessage("msgDone!", "https://sos7ya.github.io/testBuild/");
                console.log("COPIED");
            })
        }

        renderedCb();
        const copyBtn = document.getElementById("copyBtn");
        const copyInput = document.getElementById("copyInput");

         //TODO Add value from UNITY

        console.log("copyBtn is w8ing");
        window.addEventListener("message", (event) => {
            if(copyInput && copyBtn && event.data?.type === "handleButton"){
                copyInput.setAttribute("value", event.data?.value);
                copyBtn.style.display = "block";
                copyBtn.style.opacity =  "0%";
                console.log("copyBtn is here");
                const valueTxt = copyInput.getAttribute("value");
                copyBtn.addEventListener("click", ()=> {copyToClipboard(valueTxt ? valueTxt : "ERROR");});
            }
            if(copyBtn && event.data === "closeButton"){
                copyBtn.style.display = "none";
                console.log("copyBtn is close");
            }
        })
    }, []);

    return <> <GlobalStyles />
        <Wrapper>
        <Button id="copyBtn">Copy</Button>
            <Iframe id="myGame" src="https://sos7ya.github.io/testBuild/"></Iframe>
            
            <BackgroundImage src={backgroundImageSrc}/>
            <Input id="copyInput"></Input>
        </Wrapper>
        </>
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
    display: block;
`;

const Input = styled.input`
    margin: 0;
    padding: 0;
    display: none;
    top: 0;
`;

const Button = styled.button`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    display: none;
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    left: 0;
    z-index: 100;
`;


