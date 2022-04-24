import './UpdateProfile.scss';
import { useEffect, useState } from 'react/cjs/react.development';
import { Button, Input, Form, Alert } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction, updateProfileAction } from '../../store/actions/userActions';

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.profile);

  const [isSending, setIsSending] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const isLoadingUser = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(getProfileAction());
  }, []);

  const onSubmitHandler = (values) => {
    delete values.new_password;
    dispatch(updateProfileAction(values));

    setIsSending(true);
  };

  useEffect(() => {
    if (isSending && !isLoadingUser) {
      setShowMessage(true);
    }
  }, [isLoadingUser, isSending]);

  return (
    <div className="profile__container">
      <h2 className="text-green-900">Mes informations</h2>

      {showMessage && (
        <div className="profile__alert">
          <Alert
            message="Modifications enregistrées"
            description="Nous avons correctement modifié et enregistré vos informations"
            type="success"
            showIcon
          />
        </div>
      )}

      <div className="profile__form flex justify-center">
        {userProfile && (
          <Form
            layout="vertical"
            className="form w-col-50"
            onFinish={onSubmitHandler}
            autoComplete="off"
            initialValues={userProfile}>
            <div className="form__control">
              <div className="form__input">
                <Form.Item
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre prénom'
                    }
                  ]}>
                  <Input placeholder="Prénom" />
                </Form.Item>
                <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez votre nom de famille'
                    }
                  ]}>
                  <Input placeholder="Nom" />
                </Form.Item>

                <Form.Item name="email">
                  <Input disabled placeholder="Adresse Mail" />
                </Form.Item>
              </div>
            </div>

            <div className="form__control">
              <div className="form__input">
                <Form.Item name="password">
                  <Input.Password
                    placeholder="Nouveau Mot de Passe"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
                <Form.Item
                  name="new_password"
                  dependencies={['password']}
                  rules={[
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
                    placeholder="Confirmez Nouveau Mot de Passe"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="form__control">
              <div className="form__button flex justify-center">
                <Button loading={isLoadingUser} className="btn" type="primary" htmlType="submit">
                  Valider
                </Button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
