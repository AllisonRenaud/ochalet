import './CreateOffer.scss';
import { useState } from 'react/cjs/react.development';
import { Button, Input, Form, InputNumber, Switch } from 'antd';

const CreateOffer = () => {
  const [title, setTitle] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cityName, setCityName] = useState('');
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
  const [notes, setNotes] = useState('');

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="create-offer__container w-col-70">
      <div className="create-offer__title flex justify-center">Créer une annonce</div>

      <div className="create-offer__form flex justify-center">
        <Form layout="vertical" className="form w-col-60" name="create-offer" onFinish={onSubmitHandler} autoComplete="off">
          <div className="form__control">
            <div className="form__input">
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
                    message: 'Renseignez le pays du logement'
                  }
                ]}>
                <Input value={country} onChange={(event) => setCountry(event.target.value)} placeholder="Pays" />
              </Form.Item>

              <Form.Item
                name="images"
                rules={[
                  {
                    required: true,
                    message: 'Importez des photos du logement'
                  }
                ]}>
                <Input value={images} onChange={(event) => setImages(event.target.value)} placeholder="Photos" />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: 'Faites une description du logement'
                  }
                ]}>
                <Input.TextArea value={description} onChange={(event) => setDescription(event.target.value)} />
              </Form.Item>

              <Form.Item label="Capacité d'hébergement">
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

              <Form.Item
                name="wifi"
                rules={[
                  {
                    required: true,
                    message: 'Votre logement dispose-t-il du Wifi?'
                  }
                ]}
                label="Wifi"
                valuePropName="checked"
                value={wifi}
                onChange={(event) => setWifi(event.target.value)}>
                <Switch />
              </Form.Item>

              <Form.Item
                name="pets"
                rules={[
                  {
                    required: true,
                    message: 'Les animaux sont-ils acceptés dans votre logement?'
                  }
                ]}
                label="Animaux acceptés"
                valuePropName="checked"
                value={pets}
                onChange={(event) => setPets(event.target.value)}>
                <Switch />
              </Form.Item>

              <Form.Item
                name="cleaning"
                rules={[
                  {
                    required: true,
                    message: 'Proposez vous un service de nettoyage?'
                  }
                ]}
                label="Service de nettoyage"
                valuePropName="checked"
                value={cleaning}
                onChange={(event) => setCleaning(event.target.value)}>
                <Switch />
              </Form.Item>

              <Form.Item
                name="breakfast"
                rules={[
                  {
                    required: true,
                    message: 'Proposez vous un service de petit déjeuner?'
                  }
                ]}
                label="Service de petit déjeuner"
                valuePropName="checked"
                value={breakfast}
                onChange={(event) => setBreakfast(event.target.value)}>
                <Switch />
              </Form.Item>

              <Form.Item label="Prix de la nuitée">
                <Form.Item
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: 'Renseignez le prix de la nuitée'
                    }
                  ]}>
                  <InputNumber min={1} max={5000} value={price} onChange={(event) => setPrice(event.target.value)} />
                </Form.Item>
              </Form.Item>

              <Form.Item
                label="Notes"
                name="notes"
                rules={[
                  {
                    required: false
                  }
                ]}>
                <Input.TextArea value={notes} onChange={(event) => setNotes(event.target.value)} />
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
