import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    console.log('before up', props)
    const { onInputChange, onSubmit, showSignIn } = props
    console.log('signIn', props)

    const isInvalid = false
    return (
        <div>
            <div className="box-layout__box">
                <h2>Sign up</h2>
                <form className="form" onSubmit={onSubmit}>
                    <input
                        className="text-input"
                        type="email"
                        name="email"
                        onChange={onInputChange}
                        placeholder="email"
                        autoComplete="on"
                    />
                    <input
                        className="text-input"
                        type="password"
                        name="password"
                        onChange={onInputChange}
                        placeholder="password (6 char. min.)"
                    />
                    <input
                        className="text-input"
                        type="password"
                        name="passwordConfirmation"
                        onChange={onInputChange}
                        placeholder="password (6 char. min.)"
                        autoComplete="on"
                    />
                    <button
                        type="submit"
                        disabled={isInvalid}
                        className="button"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <a onClick={showSignIn}>
                <div
                    to=""
                    id="go-to-signin"

                    className="box-layout__box box-layout__box--link"
                >
                    Already have an account? Sign in here.
            </div>
            </a>

        </div>

    )
}