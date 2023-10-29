import React from 'react';
import TodoPage from "../todo-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "../register-form";
import LoginForm from "../login-form";
import HomePage from "../home-page";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="register" element={<RegisterForm/>}/>
                <Route path="login" element={<LoginForm/>}/>
                <Route path="todo" element={<TodoPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;