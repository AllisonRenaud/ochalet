import './CreateOffer.scss';
import { useState } from 'react/cjs/react.development';
import { Button, Input, Form, InputNumber, Switch } from 'antd';
import DropFileInput from '../DropFileInput/DropFileInput';

const CreateOffer = () => {
  const [title, setTitle] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cityName, setCityName] = useState('');
  const [complementAddress, setComplementAddress] = useState('');
  const [imageDefault, setImageDefault] = useState('');
  const [images, setImages] = useState('');
  const [description, setDescription] = useState('');
  const [peopleCapacity, setPeopleCapacity] = useState('');
  const [rooms, setRooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [tv, setTv] = useState('');
  const [wifi, setWifi] = useState('');
  const [pets, setPets] = useState('');
  const [cleaning, setCleaning] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [price, setPrice] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [country, setCountry] = useState('');

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="create-offer__container w-col-70">
      <div className="create-offer__main-title ">Créer une annonce</div>

      <div className="create-offer__form flex justify-center">
        <Form layout="vertical" className="form" name="create-offer" onFinish={onSubmitHandler} autoComplete="off">
          <div className="form__control">
            <div className="form__input">
              <div className="create-offer__offer-title w-col-100">
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Renseignez le titre de l'annonce"
                    }
                  ]}>
                  <Input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Titre de l'annonce" />
                </Form.Item>
              </div>

              <div className="create-offer__offer-address">
                <div className="create-offer__secondary-title">Adresse</div>
                <div className="create-offer__first-address flex">
                  <div className="create-offer__number-address w-col-20">
                    <Form.Item
                      name="street-number"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le numéro de rue du logement'
                        }
                      ]}>
                      <Input
                        value={streetNumber}
                        onChange={(event) => setStreetNumber(event.target.value)}
                        placeholder="Numéro de Rue"
                      />
                    </Form.Item>
                  </div>
                  <div className="create-offer__street-address w-col-60">
                    <Form.Item
                      name="street-name"
                      rules={[
                        {
                          required: true,
                          message: 'Renseignez le nom de rue du logement'
                        }
                      ]}>
                      <Input value={streetName} onChange={(event) => setStreetName(event.target.value)} placeholder="Rue" />
                    </Form.Item>
                  </div>
                </div>
                <div className="create-offer__complement-address w-col-80">
                  <Form.Item
                    name="complement"
                    rules={[
                      {
                        required: false
                      }
                    ]}>
                    <Input
                      value={complementAddress}
                      onChange={(event) => setComplementAddress(event.target.value)}
                      placeholder="Complément d'adresse"
                    />
                  </Form.Item>
                </div>
                <div className="create-offer__second-address flex">
                  <div className="create-offer__zipcode-address w-col-20">
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
                  </div>
                  <div className="create-offer__city-address w-col-40">
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
                    <Input value={country} onChange={(event) => setCountry(event.target.value)} placeholder="Pays" />
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
                    <Input.TextArea
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="Votre texte ici"
                      rows={4}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="create-offer__offer-amenities">
                <div className="create-offer__secondary-title">Prestations</div>
                <div className="create-offer__first-amenities flex justify-between">
                  <div className="create-offer__item">
                    <Form.Item label="Nombre de personnes">
                      <Form.Item
                        name="people-capacity"
                        rules={[
                          {
                            required: true,
                            message: "Renseignez la capacité d'hébergement"
                          }
                        ]}>
                        <InputNumber
                          min={1}
                          max={30}
                          value={peopleCapacity}
                          onChange={(event) => setPeopleCapacity(event.target.value)}
                        />
                      </Form.Item>
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item label="Nombre de chambres">
                      <Form.Item
                        name="rooms"
                        rules={[
                          {
                            required: true,
                            message: 'Renseignez le nombre de chambres'
                          }
                        ]}>
                        <InputNumber min={1} max={15} value={rooms} onChange={(event) => setRooms(event.target.value)} />
                      </Form.Item>
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item label="Nombre de salles de bain">
                      <Form.Item
                        name="bathrooms"
                        rules={[
                          {
                            required: true,
                            message: 'Renseignez le nombre de salles de bain'
                          }
                        ]}>
                        <InputNumber min={1} max={15} value={bathrooms} onChange={(event) => setBathrooms(event.target.value)} />
                      </Form.Item>
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item label="Nombre de télévisions">
                      <Form.Item
                        name="tv"
                        rules={[
                          {
                            required: true,
                            message: 'Renseignez le nombre de télévisions'
                          }
                        ]}>
                        <InputNumber min={0} max={10} value={tv} onChange={(event) => setTv(event.target.value)} />
                      </Form.Item>
                    </Form.Item>
                  </div>
                </div>

                <div className="create-offer__second-amenities flex justify-between">
                  <div className="create-offer__item">
                    <Form.Item
                      name="wifi"
                      rules={[
                        {
                          required: true,
                          message: 'Votre logement dispose-t-il du Wifi?'
                        }
                      ]}
                      requiredMark="optional"
                      label="Wifi"
                      valuePropName="checked"
                      value={wifi}
                      onChange={(event) => setWifi(event.target.value)}>
                      <Switch />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item
                      name="pets"
                      rules={[
                        {
                          required: true,
                          message: 'Les animaux sont-ils acceptés dans votre logement?'
                        }
                      ]}
                      requiredMark="optional"
                      label="Animaux acceptés"
                      valuePropName="checked"
                      value={pets}
                      onChange={(event) => setPets(event.target.value)}>
                      <Switch />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item
                      name="cleaning"
                      rules={[
                        {
                          required: true,
                          message: 'Proposez vous un service de nettoyage?'
                        }
                      ]}
                      requiredMark="optional"
                      label="Service de nettoyage"
                      valuePropName="checked"
                      value={cleaning}
                      onChange={(event) => setCleaning(event.target.value)}>
                      <Switch />
                    </Form.Item>
                  </div>
                  <div className="create-offer__item">
                    <Form.Item
                      name="breakfast"
                      rules={[
                        {
                          required: true,
                          message: 'Proposez vous un service de petit déjeuner?'
                        }
                      ]}
                      requiredMark="optional"
                      label="Service de petit déjeuner"
                      valuePropName="checked"
                      value={breakfast}
                      onChange={(event) => setBreakfast(event.target.value)}>
                      <Switch />
                    </Form.Item>
                  </div>
                </div>
              </div>

              <div className="create-offer__secondary-title">Photo principale</div>
              <Form.Item
                name="images"
                rules={[
                  {
                    required: true,
                    message: 'Importez des photos du logement'
                  }
                ]}>
                <div>Téléchargez une seule photo</div>
                <DropFileInput value={imageDefault} onFileChange={setImageDefault} limitFiles={1} />
                <div className="create-offer__secondary-title">Autres photos</div>
                <div>Téléchargez cinq photos</div>
                <DropFileInput value={images} onFileChange={setImages} limitFiles={5} />
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
                  <InputNumber min={1} max={5000} value={price} onChange={(event) => setPrice(event.target.value)} />
                </Form.Item>
              </Form.Item>
            </div>
          </div>

          <div className="form__control">
            <div className="form__button flex justify-center">
              <Button
                className="btn"
                type="primary"
                size="large"
                htmlType="submit"
                disabled={
                  !title ||
                  !zipCode ||
                  !cityName ||
                  !images ||
                  !description ||
                  !peopleCapacity ||
                  !rooms ||
                  !bathrooms ||
                  !pets ||
                  !tv ||
                  !wifi ||
                  !cleaning ||
                  !breakfast ||
                  !price ||
                  !streetNumber ||
                  !streetName ||
                  !country
                }>
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
