import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'}  component={'input'} />
                Запомнить меня
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}



export default Login;