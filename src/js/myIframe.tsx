import React, { useEffect, useState } from "react";
import GameCenterApi from "@inappstory/game-center-api";
import styled from "styled-components";

const MyIframe = () => {

    const config = GameCenterApi.gameLaunchConfig;
    const userConfig = config.clientConfig;
    const strConfig = JSON.stringify(userConfig);
    const myGame = document.getElementById("myGame") as HTMLIFrameElement;
    const myURL = `https://village.dodopizza.com/#`;

    const [hash, setHash] = useState(0);
    
    const divideString = (str: string, chunkSize: number): string[] => {
        if (str.length <= chunkSize) {
            return [str];
        }

        const chunk = str.slice(0, chunkSize);
        const remaining = str.slice(chunkSize);
        return [chunk, ...divideString(remaining, chunkSize)];
    };

    const zalupa =() =>{
        const OURTimer = setInterval(() => {
                setHash(hash => {
                    if(hash < stack.length-1){
                        console.log(stack[hash]);
                        return hash+1;
                    }else{
                        clearInterval(OURTimer);
                        return hash;
                }});
        }, 200);
    }

    const stack = divideString(strConfig, 1500);
    console.log(stack);
    useEffect(() => {
        zalupa();
    }, []);

    return (
        <><Iframe name="myGame" id="myGame" src={myURL + stack[hash]}></Iframe></>
    )
}


const Iframe = styled.iframe`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    border: none;
    display: block;
`;

export default MyIframe;
