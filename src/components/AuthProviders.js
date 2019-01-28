import React from 'react'
import { connect } from 'react-redux'
import { startGoogleLogin, startFacebookLogin } from '../actions/auth'

export class AuthProviders extends React.Component {
    render() {
        return (
            <div >
                <button className="button button--login" onClick={this.props.startGoogleLogin}>
                    <img className="button--login__item" src="/images/google_icon.png" />
                    <span>Sign in with Google</span>
                </button>
                <button className="button button--login" onClick={this.props.startFacebookLogin}>
                    <img className="button--login__item" src="/images/facebook_icon.png" />
                    <span>Sign in with Facebook</span>
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
})

export default connect(undefined, mapDispatchToProps)(AuthProviders)