import { Button, Input, Form, Alert } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../components/Logo/Logo';
import { loginAction } from '../../store/actions/authActions';
import LoginImage from '../../components/LoginImage/LoginImage';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isConnected = useSelector((store) => store.auth.isConnected);
  const authError = useSelector((store) => store.auth.error);

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (values) => {
    dispatch(loginAction(values));

    if (isConnected) {
      navigate('/');
    }
  };

  return (
    <div className="login ">
      <div className="login__container flex items-center">
        <div className="login__image w-col-50 flex items-center">
          <LoginImage />
        </div>
        <div className="login__form w-col-50 flex justify-center">
          <Form layout="vertical" className="form w-col-60" name="login" onFinish={onSubmitHandler} autoComplete="off">
            <div className="login__logo flex justify-center">
              <Logo height={60} width={200} />
            </div>

            {authError && (
              <Alert
                message="Echec de la connexion"
                description="Votre email et/ou votre mot de passe sont incorrectes"
                type="error"
                showIcon
              />
            )}

            <div className="login__title">Se connecter</div>
            <div className="form__control">
              <div className="form__input">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez une adresse mail valide'
                    },
                    {
                      type: 'email',
                      message: 'Renseignez une adresse mail valide'
                    }
                  ]}>
                  <Input
                    className="login-mail"
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                    placeholder="Adresse Mail"
                  />
                </Form.Item>
              </div>
            </div>

            <div className="form__control">
              <div className="form__input">
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre mot de passe'
                    }
                  ]}>
                  <Input.Password
                    className="login-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Mot de Passe"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
              </div>
            </div>
            <Link to="/forgot-password">
              <div className="form__forgot-password flex justify-end">Mot de passe oublié?</div>
            </Link>
            <div className="form__control ">
              <div className="form__button">
                <Button className="btn" type="primary" block htmlType="submit" disabled={!mail || !password}>
                  Valider
                </Button>
              </div>
            </div>
            <div className="form__no-account flex justify-center">
              Pas encore de compte?
              <Link to="/register">
                <div className="form__register">S'inscrire</div>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
