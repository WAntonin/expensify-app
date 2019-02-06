import React from 'react'
import isEmail from 'validator/lib/isEmail'
import { connect } from 'react-redux'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: props.userId ? props.userId.userName : '',
            email: props.userId ? props.userId.email : '',
            password: props.userId ? props.userId.password : '',
            passwordConfrimation: props.userId ? props.userId.passwordConfirmation : '',
            error: props.userId ? props.userId.error : ''
        }
    }
    onUserNameChange = (e) => {
        const userName = e.target.value
        this.setState(() => ({ userName }))
    }
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }
    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }
    onPasswordConfirmationChange = (e) => {
        const passwordConfirmation = e.target.value
        this.setState(() => ({ passwordConfirmation }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        const isValidPassword = this.state.password.length > 0
            && this.state.password === this.state.passwordConfrimation
        if (!isEmail(this.state.email) && !isValidPassword) {
            this.setState(() => ({ error: 'Invalid password or email' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    render() {
        const isPasswordConfirmed = this.state.password !== '' && this.state.password === this.state.passwordConfrimation
        const isInvalid = this.state.userName === ''
            || !isEmail(this.state.email)
            || this.state.email === ''
            || this.state.password === ''
            || this.state.password !== this.state.passwordConfirmation
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        className="text-input"
                        type="text"
                        value={this.state.userName}
                        name="userName"
                        onChange={this.onUserNameChange}
                        placeholder="User name"
                        autoComplete="on"
                    />
                    <input
                        className="text-input"
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.onEmailChange}
                        placeholder="Email"
                        autoComplete="on"
                    />
                    <input
                        className="text-input"
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.onPasswordChange}
                        placeholder="Password"
                        autoComplete="on"
                    />
                    <input
                        className="text-input"
                        type="password"
                        value={this.state.passwordconfirmation}
                        name="passwordConfirmation"
                        onChange={this.onPasswordConfirmationChange}
                        placeholder="Password confirmation"
                        autoComplete="on"
                    />
                    <button className="button" disabled={isInvalid} type="submit">Sign Up</button>
                </form>
        )
    }
}