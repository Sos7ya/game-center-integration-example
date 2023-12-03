import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameCenterApi from "@inappstory/game-center-api";

type ModalWindowProps = {
    isVisible: boolean;
    close: () => void;
};

const ModalWindow = ({ isVisible = false, close }: ModalWindowProps) => {


    return (
        isVisible ? (
            <Modaldiv>
                <Holder>
                    <MyH2>выйти из игры?</MyH2>
                    <BtnHolder>
                        <ModalButtonsExit onClick={() => GameCenterApi.closeGameReader()}>Выйти</ModalButtonsExit>
                        <ModalButtonsStay onClick={() => close()}>Остаться</ModalButtonsStay>
                    </BtnHolder>
                </Holder>
            </Modaldiv>
        ) :
            null)

}

export default ModalWindow;

const MyH2 = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ED8233;
    font-family: "DodoRoundedBlack-Expanded";
    font-style: normal;
    font-weight: 900;
    font-size: 93px;

    @media (max-width: 1400px) {
        font-size: 6vw;
    }
`

const Modaldiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.7);
`

const Holder = styled.div`
    padding: 20px;
    border: 1px solid #A89B85;
    border-radius: 94px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 90px;
    background-color: #FDF5E7;
    width: 1150px;
    height: 600px;

    @media (max-width: 1400px) {
        width: 80vw;
        height: 40vw;
        border-radius: 5vw;
        gap: 5vw;
    }
    
`

const BtnHolder = styled.div`
    display: flex;
    flex-direction: row;
    gap: 138px;

    @media (max-width: 1400px) {
        gap: 11vw;
    }
`

const ModalButtonsExit = styled.button`
    padding: 10px;
    border: 3px solid #C65908;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    width: 366px;
    border-radius: 45px;
    background: #ED8233;
    color: white;
    font-family: "DodoRounded_v2-Bold";
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0em;
    text-align: center;

    @media (max-width: 1400px) {
        height: 9vw;
        width: 25vw;
        font-size: 4vw;
        border-radius: 3vw;
    }
`

const ModalButtonsStay = styled.button`
    padding: 10px;
    border: 3px solid #6A9E14;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    width: 366px;
    border-radius: 45px;
    background: #9ACC49;
    color: white;
    font-family: "DodoRounded_v2-Bold";
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0em;
    text-align: center;

    @media (max-width: 1400px) {
        height: 9vw;
        width: 25vw;
        font-size: 4vw;
        border-radius: 3vw;
    }

`