import React from 'react'
import { connect } from 'react-redux'
import { startGoogleLogin, startFacebookLogin } from '../actions/auth'

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>An application to log your expenses</p>
            <button className="button button--login" onClick={startGoogleLogin}>
                <img className="button--login__item" src="/images/google_icon.png" />
                <span>Login with Google</span>
            </button>
            <button className="button button--login" onClick={startFacebookLogin}>
                <img className="button--login__item" src="/images/facebook_icon.png" />
                <span>Login with Facebook</span>
            </button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)