import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import { startPasswordReset } from '../actions/auth'

export class RetrievePasswordPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: props.userId ? props.userId.email : '',
            error: props.userId ? props.userId.error : ''
        }
    }
    onEmailChange = (e) => {
        console.log(e.target.value)
        const email = e.target.value
        this.setState(() => ({ email }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (isEmail(this.state.email)) {
            this.props.startPasswordReset(this.state.email).catch((error) => {
                this.setState({ error: error.code })
            })
            console.log(this.state.error)
        }
    }
    render() {
        const isInvalid = !isEmail(this.state.email)
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <form className="form" onSubmit={this.onSubmit}>
                        <input
                            className="text-input"
                            type="email"
                            value={this.state.email}
                            name="email"
                            onChange={this.onEmailChange}
                            placeholder="email"
                            autoComplete="on"
                        />
                        {
                            this.state.error === 'auth/user-not-found'
                            && <p className="form__error">Invalid Email</p>
                        }
                        <button className="button" disabled={isInvalid} type="submit">Reset my password</button>
                        <Link to="/">Back to Sign In page</Link>
                    </form>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => ({
//     email: state.email
// })
const mapDispatchToProps = (dispatch) => ({
    startPasswordReset: (email) => dispatch(startPasswordReset(email))
})

export default connect(undefined, mapDispatchToProps)(RetrievePasswordPage)