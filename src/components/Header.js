import React from "react";
import styled from "styled-components";

import { UserContext } from "./App"

export function Header() {
    const { userImage } = React.useContext(UserContext);

    return (
        <Container data-test="header">
            <h1>TrackIt</h1>
            <img src={userImage} alt="Profile" />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px 18px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0px;
    left: 0px;

    h1 {
        font-family: 'Playball', cursive;
        font-weight: 400px;
        font-size: 40px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;