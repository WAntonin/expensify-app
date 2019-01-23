import React from 'react'
import isEmail from 'validator/lib/isEmail'
import { connect } from 'react-redux'

export class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: '',
            passwordConfrimation:'',
            error:''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const isPasswordConfirmed = this.state.password !== '' && this.state.password === this.state.passwordConfrimation
        const isInvalid = this.state.userName === ''
                            && isEmail(this.state.email)
                            && this.state.email === ''
                            && this.state.password === ''
                            && this.state.password !== this.state.passwordConfirmation
        return (
            <div>
                <button className="button button--login" onClick={this.props.startGoogleLogin}>
                    <img className="button--login__item" src="/images/google_icon.png" />
                    <span>Sign up with Google</span>
                </button>
                <button className="button button--login" onClick={this.props.startFacebookLogin}>
                    <img className="button--login__item" src="/images/facebook_icon.png" />
                    <span>Sign up with Facebook</span>
                </button>
                <h3>OR</h3>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.userName}
                        name="userName"
                        onChange={this.onChange}
                        placeholder="User name"
                        autoComplete="on"
                    />
                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.onChange}
                        placeholder="Email"
                        autoComplete="on"
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.onChange}
                        placeholder="Password"
                        autoComplete="on"
                    />
                    <input
                        type="password"
                        value={this.state.passwordconfirmation}
                        name="passwordConfirmation"
                        onChange={this.onChange}
                        placeholder="Password confirmation"
                        autoComplete="on"
                    />
                    {isPasswordConfirmed ? (
                        <span>Password confirmed.</span>
                    ) : (
                        <span>Passwords are not matching.</span>
                    )}
                    <button disabled={isInvalid} type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}