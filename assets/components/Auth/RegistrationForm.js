import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Divider, Form, Label, Input, Button, Icon, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class RegistrationForm extends React.Component {
    state = {
        email: null,
        errorMessage: null,
        password: null,
    }

    static propTypes = {
        firebase: PropTypes.object.isRequired,
    }

    setEmail = event => this.setState({email: event.target.value})
    setPassword = event => this.setState({password: event.target.value})

    validateForm = () => {
        const {email, password} = this.state
        if (!_.trim(email).length && !_.trim(email).length) {
            this.setState({errorMessage: 'Please provide email & password'})
            return false
        }
        if (!_.trim(email).length || !this.validateEmail(_.trim(email))) {
            this.setState({errorMessage: 'Please provide valid email'})
            return false
        }
        if (_.trim(password).length < 6) {
            this.setState({errorMessage: 'Password must contain at least 6 characters'})
            return false
        }
        this.setState({errorMessage: null})
        return true
    }

    validateEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    register = () => {
        const {email, password, firstName, lastName} = this.state
        const {firebase} = this.props
        if (this.validateForm()) {
            firebase.createUser({email: email, password: password}).then(data => {
                console.log(data)
            }).catch(error => {
                console.log(error)
                this.setState({errorMessage: error.message})
            })
        }
    }

    render() {
        const {errorMessage} = this.state
        const {loginWithGoogle, loginWithFB} = this.props
        return (
            <div className="auth-container text-center pt-4">
                <Form className="auth-form">
                    {
                        errorMessage ?
                        <Message color='red'>{errorMessage}</Message>
                        : ''
                    }
                    <Form.Field inline>
                        <label className="text-left">Email</label>
                        <input onChange={this.setEmail} type='text'/>
                    </Form.Field>
                    <Form.Field inline>
                        <label className="text-left">Password (6 or more characters)</label>
                        <input onChange={this.setPassword} type='password'/>
                    </Form.Field>
                    <RaisedButton onClick={this.register} primary label="Join" fullWidth={true} />
                    <Divider />
                    <Form.Field inline>
                        <Button onClick={loginWithGoogle} color='google plus'>
                            <Icon name='google plus' /> Join with Google
                        </Button>
                    </Form.Field>
                    <Form.Field inline>
                        <Button onClick={loginWithFB} color='facebook'>
                            <Icon name='facebook' /> Join with Facebook
                        </Button>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}