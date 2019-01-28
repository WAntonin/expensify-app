import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { startEmailPasswordLogin } from '../actions/auth'
import { connect } from 'react-redux'
import AuthProviders from './AuthProviders';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }
    }
    onSubmit = ({ email, password }) => {
        this.props.startEmailPasswordLogin(email, password).catch((error) => {
            this.setState({ error })
        })
    }
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify App</h1>
                    <h2 className="box-layout__subtitle">An application to log your expenses</h2>
                </div>
                <div className="box-layout__box">
                    <AuthProviders />
                    <h3>OR</h3>
                    <LoginForm onSubmit={this.onSubmit} />
                    {
                        this.state.error.code === 'auth/user-not-found' 
                        && <p className="form__error">Invalid email.</p>
                    }
                    {
                        this.state.error.code === 'auth/wrong-password' 
                        && <p className="form__error"><Link to="/retrievepassword">Forgot your password?</Link></p>
                    }
                </div>
                <Link className="box-layout__box box-layout__box--link" to="/signup">
                    <p className="box-layout__message">If you don't have an account you can sign up here.</p>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.email,
    password: state.password,
})

const mapDispatchToProps = (dispatch) => ({
    startEmailPasswordLogin: (email, password) => dispatch(startEmailPasswordLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)