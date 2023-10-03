import React, { useState } from "react";
import auth from "./script"
import "./css/login.css";
import Button from 'react-bootstrap/Button';

function Login() {
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const email = evt.target.email.value;
        const senha = evt.target.senha.value;

        // Verifique a autenticação usando a função authenticate
        const isAuth = auth(email, senha);

        if (isAuth) {
            localStorage.setItem("userLog", "1");
            setErrorMsg("Usuário Validado!");
            console.log("Usuário Validado!");

            setTimeout(function () {
                window.location.href = "/";
            }, 1000);
        } else {
            setErrorMsg("Email ou senha incorretos");
            console.log("Email ou senha incorretos");
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form method="post" class="login-form" onSubmit={handleSubmit}>
                {errorMsg && <div className="errorMsg">{errorMsg}</div>}
                <label className="labelLogin" for="email">
                    Email
                    <input id="email" class="login-form-content" type="email" name="emailc" autocomplete="on" required></input>
                </label>
                <label className="labelLogin" for="senha">Password
                    <input id="senha" class="login-form-content" type="password" name="senha" required></input>
                </label>
                <Button variant="primary" type="submit">
                    Fazer login
                </Button>
            </form>
        </div>
    )
}

export default Login