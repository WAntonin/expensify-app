import React from 'react'

function authenticate(WrappedComponent) {
    class Authenticate extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                email: '',
                password: ''
            }
            this.onInputChange = this.onInputChange.bind(this);
            this.submit = this.submit.bind(this)
        }

        onInputChange(e) {
            e.preventDefault()
            const inputName = e.target.name 
            const inputValue = e.target.value 
            this.setState({ [inputName]: inputValue })
        }

        submit() {
            this.props.onSubmit(this.state.email, this.state.password)
        }
        render() {
            const { onSubmit, onInputChange, ...otherProps } = this.props
            return (
                <WrappedComponent
                onChange={this.onInputChange}
                onSubmit={this.submit}
                {...otherProps}
                />)
        }
    }
    return Authenticate
}

export default authenticate