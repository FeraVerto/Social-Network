import React from 'react';
import s from './../common/FormsControls/FormsControls.module.css';
import { reduxForm, Field } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={s.formSummaryError}> {error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);