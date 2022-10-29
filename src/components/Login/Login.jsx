import React from 'react'
import { Field, Form } from 'react-final-form'


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
                        <Field component={'input'} name={'login'} placeholder={'Login'} />
                    </div>
                    <div>
                        <Field component={'input'} name={'password'} placeholder={'Password'} />
                    </div>
                    <div>
                        <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
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