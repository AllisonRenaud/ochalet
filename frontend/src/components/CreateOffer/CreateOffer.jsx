import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { Button, Input, Form, InputNumber, Switch, Select } from 'antd';
import DropFileInput from '../DropFileInput/DropFileInput';
import { createOfferAction } from '../../store/actions/offerActions';

import './CreateOffer.scss';
import { getLocationsAction } from '../../store/actions/locationActions';

const CreateOffer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoadingOffer = useSelector((state) => state.offer.isLoading);
  const locations = useSelector((state) => state.location.locations);

  const [isSending, setIsSending] = useState(false);
  const [imageDefault, setImageDefault] = useState('');
  const [images, setImages] = useState('');

  const [imageError, setImageError] = useState();
  const [imagesError, setImagesError] = useState();

  const onSubmitHandler = (values) => {
    if (images.length < 5) {
      setImagesError('Vous devez télécharger cinq photos');
    }

    if (imageDefault.length < 1) {
      setImageError('Vous devez télécharger une photo');
    }

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('street_name', values.street_name);
    formData.append('street_number', values.street_number);
    formData.append('complement', values.complement);
    formData.append('zip_code', values.zip_code);
    formData.append('city_name', values.city_name);
    formData.append('country', values.country);
    formData.append('description', values.description);
    formData.append('people_capacity', values.people_capacity);
    formData.append('rooms', values.rooms);
    formData.append('bathrooms', values.bathrooms);
    formData.append('tv', values.tv);
    formData.append('wifi', values.wifi);
    formData.append('pets', values.pets);
    formData.append('cleaning', values.cleaning);
    formData.append('breakfast', values.breakfast);
    formData.append('price', values.price);
    formData.append('image_default', imageDefault[0]);
    formData.append('locationId', values.locationId);

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < images.length; index++) {
      formData.append(`image_${index}`, images[index]);
    }

    dispatch(createOfferAction(formData));

    setIsSending(true);
  };

  useEffect(() => {
    dispatch(getLocationsAction());
  }, []);

  useEffect(() => {
    if (isSending && !isLoadingOffer) {
      navigate('/dashboard/offers');
      // window.location.reload(false);
    }
  }, [isLoadingOffer, isSending]);

  return (
    <div className="create-offer__container">
      <h2 className="text-green-900">Créer une annonce</h2>

      <div className="create-offer__form flex justify-center">
        <Form
          layout="vertical"
          className="form"
          name="create-offer"
          encType="multipart/form-data"
          onFinish={onSubmitHandler}
          autoComplete="off"
          initialValues={{ wifi: false, pets: false, cleaning: false, breakfast: false }}>
          <div className="form__control">
            <div className="form__input">
              <div className="create-offer__secondary-title">Destination</div>
              <div className="w-col-30">
                <Form.Item
                  name="locationId"
                  rules={[
                    {
                      required: true,
                      message: 'Sélectionnez la destination du logement'
                    }
                  ]}>
                  <Select placeholder="Destination">
                    {locations.map((location) => (
                      <Select.Option value={location.id} key={location.id}>
                        {location.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="form__control">
            <div className="form__input">
              <div className="create-offer__secondary-title">Titre</div>
              <div className="create-offer__offer-title w-col-100">
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Renseignez le titre de l'annonce"
                    }
                  ]}>
                  <Input placeholder="Titre de l'annonce" />
                </Form.Item>
              </div>

              <div className="create-offer__offer-address">
                <div className="create-offer__secondary-title">Adresse</div>
                <div className="create-offer__first-address flex">
                  <div className="create-offer__number-address w-col-20">
                    <Form.Item
                      name="street_number"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le numéro de rue du logement'
                        }
                      ]}>
                      <Input placeholder="Numéro de Rue" />
                    </Form.Item>
                  </div>
                  <div className="create-offer__street-address w-col-60">
                    <Form.Item
                      name="street_name"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le nom de rue du logement'
                        }
                      ]}>
                      <Input placeholder="Rue" />
                    </Form.Item>
                  </div>
                </div>
                <div className="create-offer__complement-address w-col-80">
                  <Form.Item name="complement">
                    <Input placeholder="Complément d'adresse" />
                  </Form.Item>
                </div>
                <div className="create-offer__second-address flex">
                  <div className="create-offer__zipcode-address w-col-20">
                    <Form.Item
                      name="zip_code"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le code postal du logement'
                        }
                      ]}>
                      <Input placeholder="Code Postal" />
                    </Form.Item>
                  </div>
                  <div className="create-offer__city-address w-col-40">
                    <Form.Item
                      name="city_name"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez la ville du logement'
                        }
                      ]}>
                      <Input placeholder="Ville" />
                    </Form.Item>
                  </div>
                </div>
                <div className="create-offer__country-address w-col-40">
                  <Form.Item
                    name="country"
                    rules={[
                      {
                        required: true,
                        message: 'Renseignez le pays du logement'
                      }
                    ]}>
                    <Input placeholder="Pays" />
                  </Form.Item>
                </div>
              </div>

              <div className="create-offer__offer-description">
                <div className="create-offer__secondary-title">Description de l'annonce</div>
                <div className="create-offer__description">
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: 'Faites une description du logement'
                      }
                    ]}>
                    <Input.TextArea placeholder="Votre texte ici" rows={4} />
                  </Form.Item>
                </div>
              </div>

              <div className="create-offer__offer-amenities">
                <div className="create-offer__secondary-title">Prestations</div>
                <div className="create-offer__first-amenities flex justify-between">
                  <div className="create-offer__item">
                    <Form.Item
                      label="Nombre de personnes"
                      name="people_capacity"
                      rules={[
                        {
                          required: true,
                          message: "Renseignez la capacité d'hébergement"
                        }
                      ]}>
                      <InputNumber min={1} max={30} />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item
                      label="Nombre de chambres"
                      name="rooms"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le nombre de chambres'
                        }
                      ]}>
                      <InputNumber min={1} max={15} />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item
                      label="Nombre de salles de bain"
                      name="bathrooms"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le nombre de salles de bain'
                        }
                      ]}>
                      <InputNumber min={1} max={15} />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item
                      label="Nombre de télévisions"
                      name="tv"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le nombre de télévisions'
                        }
                      ]}>
                      <InputNumber min={0} max={10} />
                    </Form.Item>
                  </div>
                </div>

                <div className="create-offer__second-amenities flex justify-between">
                  <div className="create-offer__item">
                    <Form.Item name="wifi" label="Wifi" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item name="pets" label="Animaux acceptés" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item name="cleaning" label="Service de nettoyage" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item name="breakfast" label="Service de petit déjeuner" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </div>
                </div>
              </div>

              <div className="create-offer__secondary-title">Photo principale</div>
              <Form.Item>
                <div>Téléchargez une seule photo</div>
                <DropFileInput value={imageDefault} onFileChange={setImageDefault} limitFiles={1} />
                {imageError}
                <div className="create-offer__secondary-title">Autres photos</div>
                <div>Téléchargez cinq photos</div>
                <DropFileInput value={images} onFileChange={setImages} limitFiles={5} />
                {imagesError}
              </Form.Item>

              <div className="create-offer__secondary-title">Prix</div>
              <Form.Item label="Prix TTC en € d'une nuitée">
                <Form.Item
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez le prix de la nuitée TTC en €'
                    }
                  ]}>
                  <InputNumber min={1} max={5000} />
                </Form.Item>
              </Form.Item>
            </div>
          </div>

          <div className="form__control">
            <div className="form__button flex justify-center">
              <Button
                loading={isLoadingOffer}
                className="btn"
                type="primary"
                size="large"
                htmlType="submit"
                disabled={images.length < 5 || imageDefault < 1}>
                Créer une annonce
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateOffer;
