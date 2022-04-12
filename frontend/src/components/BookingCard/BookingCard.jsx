import './BookingCard.scss';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import IconUser from '../icons/IconUser/IconUser';

dayjs.locale('fr');

const BookingCard = ({ booking }) => {
  console.log('🚀 -> file: BookingCard.jsx -> line 10 -> BookingCard -> booking', booking);
  const generateStatus = (status) => {
    const listStatus = {
      rejected: 'Réservation refusée',
      active: 'Réservation acceptée',
      inactive: 'En cours de confirmation'
    };

    return listStatus[status];
  };

  return (
    <div className="booking-card">
      <div className="booking-card__image flex items-center justify-center">
        <img src={booking.offer.media?.image_default} alt={booking.offer.title} />
      </div>
      <div className="booking-card__container flex flex-col items-center">
        <div className="booking-card__name">
          {dayjs(booking.dateStart).format('DD MMM')} — {dayjs(booking.dateEnd).format('DD MMM')}
        </div>
        <div className="booking-card__status">{generateStatus(booking.status)}</div>
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  booking: PropTypes.object.isRequired
};

export default BookingCard;
