import { Button, Input, Form, InputNumber, Switch, Select, Alert, Empty } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CreateOffer from '../../components/CreateOffer/CreateOffer';
import DropFileInput from '../../components/DropFileInput/DropFileInput';
import ListBookings from '../../components/ListBookings/ListBookings';
import ListOffers from '../../components/ListOffers/ListOffers';
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile';
import { getLocationsAction } from '../../store/actions/locationActions';
import { getOfferSelectedAction, updateOfferAction } from '../../store/actions/offerActions';

import './UpdateOffer.scss';

const UpdateOffer = () => {
  const dispatch = useDispatch();
  const { offerId } = useParams();

  const offerSelected = useSelector((state) => state.offer.offerSelected);

  const isLoadingOffer = useSelector((state) => state.offer.isLoading);
  const locations = useSelector((state) => state.location.locations);

  const [selectedTab, setSelectedTab] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
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

    dispatch(updateOfferAction(formData));

    setIsSending(true);
  };

  useEffect(() => {
    dispatch(getLocationsAction());
    dispatch(getOfferSelectedAction(offerId));
  }, []);

  useEffect(() => {
    if (isSending && !isLoadingOffer) {
      setShowMessage(true);
    }
  }, [isLoadingOffer, isSending]);

  return (
    <div className="update-offer__container w-col-70">
      <h2 className="text-green-900">Modifier l'annonce</h2>
      {showMessage && (
        <div className="profile__alert">
          <Alert
            message="Modifications enregistrées"
            description="Nous avons correctement modifié et enregistré votre annonce"
            type="success"
            showIcon
          />
        </div>
      )}
      <div className="update-offer__form flex justify-center">
        {offerSelected ? (
          <Form
            layout="vertical"
            className="form"
            name="update-offer"
            encType="multipart/form-data"
            onFinish={onSubmitHandler}
            autoComplete="off"
            initialValues={offerSelected}>
            <div className="form__control">
              <div className="form__input">
                <div className="update-offer__secondary-title">Destination</div>
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
                <div className="update-offer__secondary-title">Titre</div>
                <div className="update-offer__offer-title w-col-100">
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

                <div className="update-offer__offer-address">
                  <div className="update-offer__secondary-title">Adresse</div>
                  <div className="update-offer__first-address flex">
                    <div className="update-offer__number-address w-col-20">
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
                    <div className="update-offer__street-address w-col-60">
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
                  <div className="update-offer__complement-address w-col-80">
                    <Form.Item name="complement">
                      <Input placeholder="Complément d'adresse" />
                    </Form.Item>
                  </div>
                  <div className="update-offer__second-address flex">
                    <div className="update-offer__zipcode-address w-col-20">
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
                    <div className="update-offer__city-address w-col-40">
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
                  <div className="update-offer__country-address w-col-40">
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

                <div className="update-offer__offer-description">
                  <div className="update-offer__secondary-title">Description de l'annonce</div>
                  <div className="update-offer__description">
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

                <div className="update-offer__offer-amenities">
                  <div className="update-offer__secondary-title">Prestations</div>
                  <div className="update-offer__first-amenities flex justify-between">
                    <div className="update-offer__item">
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
                    <div className="update-offer__item">
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
                    <div className="update-offer__item">
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
                    <div className="update-offer__item">
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

                  <div className="update-offer__second-amenities flex justify-between">
                    <div className="update-offer__item">
                      <Form.Item name="wifi" label="Wifi" valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </div>
                    <div className="update-offer__item">
                      <Form.Item name="pets" label="Animaux acceptés" valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </div>
                    <div className="update-offer__item">
                      <Form.Item name="cleaning" label="Service de nettoyage" valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </div>
                    <div className="update-offer__item">
                      <Form.Item name="breakfast" label="Service de petit déjeuner" valuePropName="checked">
                        <Switch />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <div className="update-offer__secondary-title">Photo principale</div>
                <Form.Item>
                  <div>Téléchargez une seule photo</div>
                  <DropFileInput value={imageDefault} onFileChange={setImageDefault} limitFiles={1} />
                  {imageError}
                  <div className="update-offer__secondary-title">Autres photos</div>
                  <div>Téléchargez cinq photos</div>
                  <DropFileInput value={images} onFileChange={setImages} limitFiles={5} />
                  {imagesError}
                </Form.Item>

                <div className="update-offer__secondary-title">Prix</div>
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
                <Button loading={isLoadingOffer} className="btn" type="primary" size="large" htmlType="submit">
                  Valider
                </Button>
              </div>
            </div>
          </Form>
        ) : (
          <div className="flex items-center justify-center" style={{ height: 500 }}>
            <Empty description="Cette annonce n'existe pas" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateOffer;
