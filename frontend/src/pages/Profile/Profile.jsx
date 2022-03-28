import './Profile.scss';
import { useState } from 'react/cjs/react.development';
import { Button, Input, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="container flex">
      <div className="profile__sidebar flex flex-col w-col-30">
        <div className="sidebar-item">
          <Link to="/dashboard">Offres</Link>
        </div>
        <div className="sidebar-item">
          <Link to="/users">Utilisateurs</Link>
        </div>
      </div>

      <div className="profile__container w-col-70">
        <div className="profile__title flex justify-center">Mes informations</div>

        <div className="profile__form flex justify-center">
          <Form layout="vertical" className="form w-col-60" name="profile" onFinish={onSubmitHandler} autoComplete="off">
            <div className="form__control">
              <div className="form__input">
                <Form.Item
                  name="first-name"
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

                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre numéro de téléphone'
                    }
                  ]}>
                  <Input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Téléphone" />
                </Form.Item>

                <Form.Item
                  name="street-number"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre numéro de rue'
                    }
                  ]}>
                  <Input
                    value={streetNumber}
                    onChange={(event) => setStreetNumber(event.target.value)}
                    placeholder="Numéro de Rue"
                  />
                </Form.Item>

                <Form.Item
                  name="street-name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez le nom de votre rue'
                    }
                  ]}>
                  <Input value={streetName} onChange={(event) => setStreetName(event.target.value)} placeholder="Rue" />
                </Form.Item>

                <Form.Item
                  name="zip-code"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre code postal'
                    }
                  ]}>
                  <Input value={zipCode} onChange={(event) => setZipCode(event.target.value)} placeholder="Code Postal" />
                </Form.Item>

                <Form.Item
                  name="city-name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre ville'
                    }
                  ]}>
                  <Input value={cityName} onChange={(event) => setCityName(event.target.value)} placeholder="Ville" />
                </Form.Item>

                <Form.Item
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre pays'
                    }
                  ]}>
                  <Input value={country} onChange={(event) => setCountry(event.target.value)} placeholder="Pays" />
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
                    className="profile-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Nouveau Mot de Passe"
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
                    className="profile-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Confirmez Nouveau Mot de Passe"
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
                  disabled={
                    !firstName ||
                    !name ||
                    !mail ||
                    !phone ||
                    !streetNumber ||
                    !streetName ||
                    !zipCode ||
                    !cityName ||
                    !country ||
                    !password
                  }>
                  Valider
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
