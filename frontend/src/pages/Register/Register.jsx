import './Register.scss';
import { useState } from 'react/cjs/react.development';
import { Button, Input, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import RegisterImage from '../../components/RegisterImage/RegisterImage';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  // TODO: isFormValid
  // TODO: Function for get all useState if all is a string with 1 or plus letters pass true

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="register">
      <div className="register__container flex items-center">
        <div className="register__form w-col-50 flex justify-center">
          <Form layout="vertical" className="form w-col-60" name="register" onFinish={onSubmitHandler} autoComplete="off">
            <div className="login__logo flex justify-center">
              <Logo height={60} width={200} />
            </div>
            <div className="register__title">S'inscrire</div>
            <div className="form__control">
              <div className="form__input">
                <Form.Item
                  name="first name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre nom de famille'
                    }
                  ]}>
                  <Input value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Nom" />
                </Form.Item>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre prénom'
                    }
                  ]}>
                  <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Prénom" />
                </Form.Item>
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
                  <Input value={mail} onChange={(event) => setMail(event.target.value)} placeholder="Adresse Mail" />
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Mot de Passe"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
                <Form.Item
                  name="confirm password"
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Confirmez votre Mot de Passe"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="form__control">
              <div className="form__button">
                <Button
                  className="btn"
                  type="primary"
                  block
                  htmlType="submit"
                  disabled={!firstName || !name || !mail || !password}>
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
