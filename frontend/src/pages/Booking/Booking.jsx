import './Booking.scss';
import { Button, Form, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

const Booking = () => {
  const cabin = {
    cabinId: 1,
    title: 'Le Chalet Enchanté',
    city_name: 'Chambéry',
    mountain_name: 'Savoie',
    image: 'https://picsum.photos/seed/picsum/700/470',
    price: 200
  };

  const booking = {
    dateStart: '2021-03-01',
    dateEnd: '2021-04-08',
    nights: 6
  };

  return (
    <div className="booking">
      <div className="booking__container ">
        <div className="flex content-start justify-between">
          <div className="booking__card">
            <h2 className="">Confirmer et payer</h2>
            <div className="booking__section">
              <h3>Votre voyage</h3>
              <div className="booking__dates">
                <h4>Dates</h4>
                <div>
                  {dayjs(booking.dateStart).format('DD MMM')} — {dayjs(booking.dateEnd).format('DD MMM')}
                </div>
              </div>
            </div>

            <hr />

            <div className="booking__section">
              <h3>Conditions d'annulation</h3>
              <div className="confirmation__condition-detail">
                <p>Non remboursable : si vous annulez un mois avant votre arrivée, vous ne bénéficiez d'aucun remboursement.</p>
                <p>
                  Notre Politique relative aux cas de force majeure ne couvre pas les perturbations de voyage causées par le
                  Covid-19.
                </p>
              </div>
            </div>

            <hr />

            <div className="booking__section">
              <p className="booking__terms">
                En sélectionnant le bouton ci-dessous, j'accepte{' '}
                <Link target="_blank" to="/cgv" className="link">
                  les conditions générales de vente.
                </Link>
              </p>
              <div className="booking__button flex justify-center">
                <Button className="btn" type="primary" size="large" htmlType="submit">
                  Confirmer et payer
                </Button>
              </div>
            </div>
          </div>
          <div className="booking__card w-col-60">
            <div className="booking__detail">
              <div className="booking__section flex">
                <div className="w-col-40">
                  <img className="img-responsive" src={cabin.image} alt={cabin.title} />
                </div>
                <div className="booking__description">
                  <div className="font-lg">{cabin.title}</div>
                  <div className="font-sm">
                    {cabin.city_name}, {cabin.mountain_name}
                  </div>
                </div>
              </div>

              <hr />

              <div className="booking__section">
                <h3>Détail du prix</h3>
                <div className="flex justify-between font-lg">
                  <div>
                    {cabin.price}€ x {booking.nights} nuits
                  </div>
                  <div>
                    <strong>{cabin.price * booking.nights} €</strong>
                  </div>
                </div>
              </div>

              <hr />

              <div className="booking__section">
                Une caution de 500€ est demandée pour ce chalet. Elle sera prélevée séparément au moment de votre arrivée.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
