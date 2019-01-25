import React from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import AuthProviders from './AuthProviders'
import { startCreateUserAccount } from '../actions/auth'

export class SignUpPage extends React.Component {
    onSubmit = ({ email, password }) => {
        this.props.startCreateUserAccount(email, password)
    }
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <AuthProviders />
                    <h3>OR</h3>
                    <SignUpForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    email: state.email,
    password: state.password
})

const mapDispatchToProps = (dispatch) => ({
    startCreateUserAccount: (email, password) => dispatch(startCreateUserAccount(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)