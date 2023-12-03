import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/global";
import GameCenterApi from "@inappstory/game-center-api";
import MyIframe from "./myIframe";
import ModalWindow from "./modal";

interface AppProps { backgroundImageSrc: string, renderedCb: () => void };

let stateOfModal = false;
export const App = ({ backgroundImageSrc, renderedCb }: AppProps) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const copyBtn = document.getElementById("copyBtn");
        const copyInput = document.getElementById("copyInput");
        const myGame = document.getElementById("myGame") as HTMLIFrameElement;

        myGame.addEventListener("blur", (event) => {
            myGame?.contentWindow?.postMessage("onBlur", "*");
        })
        myGame.addEventListener("focus", (event) => {
            myGame?.contentWindow?.postMessage("onFocus", "*");
        })

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            myGame?.contentWindow?.postMessage("msgDone!", "*");
            console.log("COPIED");
        })
    }
        //TODO Add value from UNITY
        console.log("copyBtn is w8ing");
        console.log(copyBtn, copyInput, myGame);
        window.addEventListener("message", (event) => {
            console.log(event.data);
            if (event.data?.type === "handleButton") {
                copyInput!.setAttribute("value", event.data?.value);
                copyBtn!.style.display = "block";
                copyBtn!.style.opacity = "50%";
                console.log("COPYBUTTON is here");
                const valueTxt = copyInput!.getAttribute("value");
                copyBtn!.addEventListener("click", () => { copyToClipboard(valueTxt ? valueTxt : "ERROR"); });
            }
            if (event.data === "closeButton") {
                copyBtn!.style.display = "none";
                console.log("copyBtn is close");
            }
            if(event.data === "closeGameRider"){
                GameCenterApi.closeGameReader();
            }
            if(event.data.type === "openURL"){
                const url = event.data?.url;
                GameCenterApi.openUrl({url: url, closeGameReader: true});
            }
        })

        renderedCb();
    }, []);

    return <> <GlobalStyles />
        <Wrapper>
            <Input id="copyInput"></Input>
            <Button id="copyBtn">Copy</Button>
            <ExitButton id="exitBtn" onClick={() => setShowModal(!showModal) }><MyImage src="https://village.dodopizza.com/dodo-village/v1.0.5/bundle/img/Exit.png" alt="Exit"></MyImage></ExitButton>
            <ModalWindow isVisible={showModal} close={() => setShowModal(false)} />
            <MyIframe />
            <PreloderFont>xxx<FontPreload>xxx</FontPreload></PreloderFont>
            <BackgroundImage src={backgroundImageSrc} />
        </Wrapper>
    </>
};

const FontPreload = styled.span`
    font-family: "DodoRoundedBlack-Expanded";
    opacity: 0%;
    position: absolute;
    top: -100px;
`;

const PreloderFont = styled.div`
    font-family: "DodoRounded_v2-Bold";
    opacity: 0%;
    position: absolute;
    top: -100px;
`

const MyImage = styled.img`
    background: none;
    height: 100%;
    width: 100%;
`

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
    width: 25%;
    height: 20%;
    bottom: 5%;
    left: 40%;
    z-index: 100;
`;

const ExitButton = styled.button`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    position: absolute;
    z-index: 100;
    top: 70px;
    right: 70px;
    border: none;
    background: none;
    cursor: pointer;
    width: 170px;
    height: 170px;

    @media (max-width: 1400px) {
        width: 6vw;
        height: 6vw;
        top: 6%;
        right: 6%;
    }
    `