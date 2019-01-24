import React from 'react'
import isEmail from 'validator/lib/isEmail'


export default class LoginForm extends React.Component {
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
            this.setState(() => ({ error: 'please provide a valid email and/or password' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    render() {
        const isInvalid = this.state.password === '' || this.state.email === ''
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        className="text-input"
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.onChange}
                        placeholder="email"
                        autoComplete="on"
                    />
                    <input
                        className="text-input"
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.onChange}
                        placeholder="password (6 char. min.)"
                        autoComplete="on"
                    />
                    {this.state.error && <p className="form_error">{this.state.error}</p>}
                    <button className="button" disabled={isInvalid} type="submit">Sign In</button>
                </form>
        )
    }
}