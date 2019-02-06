import React from 'react'
import { connect } from 'react-redux'

export default (props) => {
    const { onInputChange, onSubmit, showSignUp } = props
    return (
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
                autoComplete="on"
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
                Sign In
            </button>
        </form>
    )
}