import React from 'react'
import { Field, Form } from 'react-final-form'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { requiredField } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControl'
import { login } from './../../redux/authReducer'


const LoginForm = (props) => {

    return (
        <Form
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            onSubmit={props.onSubmit}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component={Input}
                            name={'email'}
                            validate={requiredField}
                            placeholder={'Email'} />
                    </div>
                    <div>
                        <Field component={Input}
                            name={'password'}
                            type={'password'}
                            validate={requiredField}
                            placeholder={'Password'} />
                    </div>
                    <div>
                        <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            )}
        </Form>
    )
}


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to='/profile'
        replace={true}
        />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)