import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

const LoginPage = () => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>An application to log your expenses</p>
        </div>
        <LoginForm />
        <Link className="box-layout__box" to="/signup">
            <p>If you don't have an account you can sign up here.</p>
        </Link>
    </div>
)

export default LoginPage