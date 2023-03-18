import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
/* import { UserContext } from "../../components/App"; */

import imgLogo from "../../assets/images/logo.png";

export function LoginPage() {
    /* const { userImage, setUserImage, dailyProgress, setDailyProgress } = React.useContext(UserContext); */
    const [form, setForm] = React.useState({ email: "", password: "" });

    function userLogin(event) {
        event.preventDefault();
        console.log({ form });
    }

    function handleForm(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <Container>
            <h1>
                <img src={imgLogo} alt="TrackIt logo" />
            </h1>
            <form onSubmit={userLogin}>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={handleForm}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="senha"
                    value={form.password}
                    onChange={handleForm}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 70px 35px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: auto;
    }

    form {
        width: 300px;
        margin-top: 35px;
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            height: 45px;
            margin-bottom: 6px;
            padding: 10px;
            background-color: #FFFFFF;
            font-weight: 400;
            font-size: 20px;
            color: #AFAFAF;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            outline: none;

            &::placeholder {
                color: #D4D4D4;
                opacity: 1;
            }
        }

        button {
            width: 100%;
            height: 45px;
            background-color: #52B6FF;
            font-weight: 400;
            font-size: 20px;
            color: #FFFFFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    p {
        margin-top: 25px;
        font-weight: 400px;
        font-size: 14px;
        color: #52B6FF;
        text-align: center;
    }

    a {
        text-decoration: underline;
        text-decoration-color: #52B6FF;
    }
`;