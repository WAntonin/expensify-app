import React from 'react'
import { connect } from 'react-redux'
import AuthProviders from './AuthProviders'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { startEmailPasswordLogin, startCreateUserAccount } from '../actions/auth'
import authenticate from './authenticate'

const SignInForm = authenticate(SignIn)
const SignUpForm = authenticate(SignUp)


export class Authenticate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignIn: true
        }
        this.toggleForm = this.toggleForm.bind(this)
    }
    toggleForm = () => {
        this.setState(() => ({
            isSignIn: !this.state.isSignIn
        }))
    }
    render() {
        const { startCreateUserAccount, startEmailPasswordLogin } = this.props
        return (
            // <div className="box-layout">
            //     <div className="box-layout__box">
            //         <h1 className="box-layout__title">Expensify App</h1>
            //         <h2 className="box-layout__subtitle">An application to log your expenses</h2>
            //     </div>
            // </div>
            <div className="box-layout">
                <div className="box-layout__box">
                    <AuthProviders />
                </div>
                {
                    this.state.isSignIn ? (
                        <SignInForm
                            onSubmit={startEmailPasswordLogin}
                            showSignUp={this.toggleForm}
                        />
                    ) : 
                    (
                        <SignUpForm
                            onSubmit={startCreateUserAccount}
                            showSignIn={this.toggleForm}
                        />
                    )
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startCreateUserAccount: (email, password) => dispatch(startCreateUserAccount(email, password)),
    startEmailPasswordLogin: (email, password) => dispatch(startEmailPasswordLogin(email, password))
})

export default connect(undefined, mapDispatchToProps)(Authenticate)