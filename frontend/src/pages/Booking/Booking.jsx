import './Booking.scss';
import { Button, Form, Checkbox, Empty } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createBookingAction } from '../../store/actions/bookingActions';

dayjs.locale('fr');

const Booking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nights, setNights] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const isConnected = useSelector((state) => state.auth.isConnected);

  const isLoadingBooking = useSelector((state) => state.booking.isLoading);

  const offerSelected = useSelector((state) => state.offer.offerSelected);
  const dateRangeSelected = useSelector((state) => state.offer.dateRangeSelected);

  const onSubmitBooking = () => {
    const payload = {
      offerId: offerSelected.id,
      startDate: dayjs(dateRangeSelected.startDate).format('YYYY-MM-DD'),
      endDate: dayjs(dateRangeSelected.endDate).format('YYYY-MM-DD'),
      sellerId: offerSelected.userId
    };

    dispatch(createBookingAction(payload));

    setIsSending(true);
  };

  useEffect(() => {
    if (isSending && !isLoadingBooking) {
      navigate('/dashboard/bookings');
    }
  }, [isLoadingBooking, isSending]);

  useEffect(() => {
    if (dateRangeSelected && offerSelected) {
      const diff = dayjs(dateRangeSelected.endDate).diff(dayjs(dateRangeSelected.startDate), 'day');
      setNights(diff);
    }
  }, []);

  return (
    <div className="booking">
      <div className="booking__container ">
        {isConnected ? (
          <div>
            {dateRangeSelected && offerSelected ? (
              <div className="flex content-start justify-between">
                <div className="booking__card">
                  <h2 className="">Confirmer</h2>
                  <div className="booking__section">
                    <h3>Votre voyage</h3>
                    <div className="booking__dates">
                      <h4>Dates</h4>
                      <div>
                        {dayjs(dateRangeSelected.startDate).format('DD MMM')} —{' '}
                        {dayjs(dateRangeSelected.endDate).format('DD MMM')}
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="booking__section">
                    <h3>Conditions d'annulation</h3>
                    <div className="confirmation__condition-detail">
                      <p>
                        Remboursement : vous pouvez annuler votre séjour 30 jours avant votre date d'arrivée, sans frais. Passé ce
                        délais, vous ne bénéficierez d'aucun remboursement.
                      </p>
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
                      <Button
                        loading={isLoadingBooking}
                        className="btn"
                        type="primary"
                        size="large"
                        htmlType="submit"
                        onClick={onSubmitBooking}>
                        Confirmer la réservation
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="booking__card w-col-60">
                  <div className="booking__detail">
                    <div className="booking__section flex">
                      <div className="w-col-40">
                        <img className="img-responsive" src={offerSelected.media.image_default} alt={offerSelected.title} />
                      </div>
                      <div className="booking__description">
                        <div className="font-lg">{offerSelected.title}</div>
                        <div className="font-sm">
                          {offerSelected.city_name}, {offerSelected.location.name}
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="booking__section">
                      <h3>Détail du prix</h3>
                      <div className="flex justify-between font-lg">
                        <div>
                          {offerSelected.price}€ TTC x {nights} nuits
                        </div>
                        <div>
                          <strong>{offerSelected.price * nights} €</strong>
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
            ) : (
              <div className="flex flex-col items-center justify-center" style={{ height: 500 }}>
                <Empty description="Vous n'avez pas sélectionné votre destination" />
                <Button type="primary" htmlType="button" onClick={() => navigate('/locations')}>
                  Voir les destinations
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center" style={{ height: 500 }}>
            {/* TODO: add message for role === seller */}
            <h2 className="">Connectez-vous pour réserver ce chalet</h2>
            <div className="flex">
              <div className="booking__button">
                <Button type="primary" htmlType="button" onClick={() => navigate('/login')}>
                  Se connecter
                </Button>
              </div>
              <div className="booking__button">
                <Button type="primary" htmlType="button" onClick={() => navigate('/register')}>
                  Créer un compte
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
