import React from 'react';
import s from './Login.module.sass';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import validators from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { authType } from '../../redux/auth-reducer';
import authActions from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { AppDispatch } from '../../redux/redux-store';
import { Button } from '../common/Button/Button';

const Login: React.FC<mapStateToPropsType & mapDispatchToPropsType> = (
  props
) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginTC(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div className={s.login}>
      <h1 className={s.h1}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

type mapDispatchToPropsType = {
  loginTC: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: boolean
  ) => void;
};

type mapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: authType): mapStateToPropsType => {
  return {
    isAuth: state.userData?.isAuth,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => ({
  loginTC: (email, password, rememberMe, captcha) =>
    dispatch(authActions.loginTC({ email, password, rememberMe, captcha })),
});

export default connect<
  mapStateToPropsType,
  mapDispatchToPropsType,
  {},
  authType
>(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: boolean;
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({
  handleSubmit,
  error,
}) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          placeholder={'Login'}
          name={'email'}
          validate={[validators.requiredField]}
          className={s.item}
        />
      </div>
      <div>
        <Field
          component={Input}
          placeholder={'Password'}
          name={'password'}
          validate={[validators.requiredField]}
          type={'password'}
          className={s.item}
        />
      </div>

      <div>
        <Field
          component={Input}
          type={'checkbox'}
          name={'rememberMe'}
          className={s.item}
        />
        remember me
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <Button style={s.button_login}>Login</Button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm);
