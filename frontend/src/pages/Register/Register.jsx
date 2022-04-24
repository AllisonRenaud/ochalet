import './Register.scss';
import { useState } from 'react/cjs/react.development';
import { Button, Input, Form, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import RegisterImage from '../../components/RegisterImage/RegisterImage';
import { registerAction } from '../../store/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');
  const isConnected = useSelector((state) => state.auth.isConnected);

  const onSubmitHandler = (values) => {
    const newValues = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      role: values.role
    };
    dispatch(registerAction(newValues));
  };

  useEffect(() => {
    if (isConnected && token) {
      navigate('/dashboard/bookings');
    }
  }, [isConnected, token]);

  return (
    <div className="register">
      <div className="register__container flex items-center">
        <div className="register__form w-col-50 flex justify-center">
          <Form layout="vertical" className="form w-col-60" name="register" onFinish={onSubmitHandler} autoComplete="off">
            <div className="register__logo flex justify-center">
              <Logo height={60} width={200} />
            </div>
            <div className="register__title">S'inscrire</div>
            <div className="form__control">
              <div className="form__radio">
                <Form.Item
                  name="role"
                  required={false}
                  label="Je suis"
                  rules={[
                    {
                      required: true,
                      message: 'Sélectionnez une option'
                    }
                  ]}>
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="client">Vacancier</Radio.Button>
                    <Radio.Button value="seller">Propriétaire</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>

            <div className="form__control">
              <div className="form__input">
                <Form.Item
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre nom de famille'
                    }
                  ]}>
                  <Input placeholder="Nom" />
                </Form.Item>
              </div>
            </div>

            <div className="form__control">
              <div className="form__input">
                <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre prénom'
                    }
                  ]}>
                  <Input placeholder="Prénom" />
                </Form.Item>
              </div>
            </div>

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
                  <Input placeholder="Adresse Mail" />
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
                      message: 'Renseignez un mot de passe'
                    }
                  ]}>
                  <Input.Password
                    className="register-password"
                    placeholder="Mot de Passe"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
                <Form.Item
                  name="confirm_password"
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'Confirmez le mot de passe'
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error('Les deux mots de passe doivent être identiques'));
                      }
                    })
                  ]}>
                  <Input.Password
                    className="register-password"
                    placeholder="Confirmez votre Mot de Passe"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="form__control">
              <div className="form__button">
                <Button className="btn" type="primary" block htmlType="submit">
                  Valider
                </Button>
              </div>
            </div>
            <div className="form__no-account flex justify-center">
              Déjà inscrit·e?
              <Link to="/login">
                <div className="form__register">Se connecter</div>
              </Link>
            </div>
          </Form>
        </div>
        <div className="register__image w-col-50 flex items-center">
          <RegisterImage />
        </div>
      </div>
    </div>
  );
};

export default Register;
