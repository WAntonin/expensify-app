import React from 'react'

function SignIn({ onChange, onSubmit, showSignUp }) {
    console.log('SignIn', { onChange, onSubmit, showSignUp })
    const isInvalid = false
    return (
        <div>
            <div className="box-layout__box">
                <h2>SignIn</h2>
                <form className="form" onSubmit={onSubmit}>
                    <input
                        className="text-input"
                        type="email"
                        name="email"
                        onChange={onChange}
                        placeholder="email"
                        autoComplete="on"
                    />
                    <input
                        className="text-input"
                        type="password"
                        name="password"
                        onChange={onChange}
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
            </div>
            <a onClick={showSignUp}>
                <div
                    id="go-to-signup"
                    className="box-layout__box box-layout__box--link"
                >
                    Don't have an account yet? Signup here.
                </div>
            </a>

        </div>

    )
}

export default SignIn