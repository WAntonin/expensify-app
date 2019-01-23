import React from 'react'
import isEmail from 'validator/lib/isEmail'
import { startEmailPasswordLogin, startGoogleLogin, startFacebookLogin } from '../actions/auth'
import { connect } from 'react-redux';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!isEmail(this.state.email) || this.state.password.length < 6) {
            this.setState(() => ({ error: 'Invalid password or email' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.startEmailPasswordLogin(this.state.email, this.state.password)
        }
    }
    render() {
        const isInvalid = this.state.password === '' || this.state.email === ''
        return (
            <div className="box-layout__box">
                <button className="button button--login" onClick={this.props.startGoogleLogin}>
                    <img className="button--login__item" src="/images/google_icon.png" />
                    <span>Sign in with Google</span>
                </button>
                <button className="button button--login" onClick={this.props.startFacebookLogin}>
                    <img className="button--login__item" src="/images/facebook_icon.png" />
                    <span>Sign in with Facebook</span>
                </button>
                <h3>OR</h3>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.onChange}
                        placeholder="email"
                        autoComplete="on"
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.onChange}
                        placeholder="password (6 char. min.)"

                        autoComplete="on"
                    />
                    <button disabled={isInvalid} type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startEmailPasswordLogin: (email, password) => dispatch(startEmailPasswordLogin(email, password))
})

export default connect(undefined, mapDispatchToProps)(LoginForm)