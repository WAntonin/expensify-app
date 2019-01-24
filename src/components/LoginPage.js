import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { startEmailPasswordLogin } from '../actions/auth'
import { connect } from 'react-redux'
import AuthProviders from './AuthProviders';

export class LoginPage extends React.Component {
    onSubmit = (props) => {
        this.props.startEmailPasswordLogin(props.email, props.password)
    }
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify App</h1>
                    <p>An application to log your expenses</p>
                </div>
                <div className="box-layout__box">
                    <AuthProviders />
                    <h3>OR</h3>
                    <LoginForm onSubmit={this.onSubmit} />
                </div>
                <Link className="box-layout__box box-layout__box--link" to="/signup">
                    <p>If you don't have an account you can sign up here.</p>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.email,
    password: state.password
})

const mapDispatchToProps = (dispatch) => ({
    startEmailPasswordLogin: (email, password) => dispatch(startEmailPasswordLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)