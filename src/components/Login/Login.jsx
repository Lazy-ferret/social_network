import React from 'react'
import { Field, Form } from 'react-final-form'
import { composeValidators, maxLengthCreator, requiredField } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControl'


const LoginForm = (props) => {

    return (
        <Form
            initialValues={{
                login: '',
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
                            name={'login'}
                            validate={composeValidators(requiredField, maxLengthCreator(10))}
                            placeholder={'Login'} />
                    </div>
                    <div>
                        <Field component={Input}
                            name={'password'}
                            validate={composeValidators(requiredField, maxLengthCreator(10))}
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
        console.log('formData', formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>

    )
}

export default Login