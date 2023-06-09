import React from 'react';

import GlobalStyle from "../assets/styles/GlobalStyle";
import ResetStyle from "../assets/styles/ResetStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HabitsPage } from "../pages/HabitsPage/HabitsPage";
import { HistoryPage } from "../pages/HistoryPage/HistoryPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { TodayPage } from "../pages/TodayPage/TodayPage";

export const UserContext = React.createContext();

export function App() {
    const [userImage, setUserImage] = React.useState(undefined);
    const [dailyProgress, setDailyProgress] = React.useState(0);
    const [token, setToken] = React.useState(undefined);

    return (
        <>
            <ResetStyle />
            <GlobalStyle />

            <UserContext.Provider 
                value={{ userImage, setUserImage, dailyProgress, setDailyProgress, token, setToken }}>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/cadastro" element={<SignUpPage />} />
                        <Route path="/habitos" element={<HabitsPage />} />
                        <Route path="/historico" element={<HistoryPage />} />
                        <Route path="/hoje" element={<TodayPage />} />
                    </Routes>
                </BrowserRouter>

            </UserContext.Provider>
        </>
    );
}