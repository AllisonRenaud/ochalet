import { Input, Form, Button } from 'antd';
import { useState } from 'react/cjs/react.development';
import Logo from '../../components/Logo/Logo';
import PasswordImage from '../../components/PasswordImage/PasswordImage';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  const [mail, setMail] = useState('');

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="forgot-password flex">
      <div className="forgot-password__form w-col-50 flex justify-center items-center">
        <Form layout="vertical" className="form w-col-60" name="forgot-password" onFinish={onSubmitHandler} autoComplete="off">
          <div className="forgot-password__logo flex justify-center">
            <Logo height={60} width={200} />
          </div>
          <div className="forgot-password__title">Mot de passe oublié?</div>
          <div className="forgot-password__description">
            Indiquez l'adresse e-mail associée à votre compte pour générer un nouveau mot de passe.
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
                <Input
                  className="forgot-password"
                  value={mail}
                  onChange={(event) => setMail(event.target.value)}
                  placeholder="Adresse Mail"
                />
              </Form.Item>
            </div>
          </div>
          <div className="form__control">
            <div className="form__button">
              <Button className="btn" type="primary" block htmlType="submit" disabled={!mail}>
                Valider
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <div className="forgot-password__image w-col-50 flex items-center">
        <PasswordImage />
      </div>
    </div>
  );
};

export default ForgotPassword;
