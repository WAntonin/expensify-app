import react from 'react'
import { connect } from 'react-redux'

const SignIn = (props) => {
    const {onChange, onSubmit} = props
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