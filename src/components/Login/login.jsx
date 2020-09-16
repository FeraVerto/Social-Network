import React from 'react';
import s from './../common/FormsControls/FormsControls.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const LoginForm = ({handleSubmit, error}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'}
                    type={'password'}
                    name={'password'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field type="checkbox"
                    name={'rememberMe'}
                    component={Input} />
                Запомнить меня
            </div>
            {error && <div className={s.formSummaryError}> {  error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);