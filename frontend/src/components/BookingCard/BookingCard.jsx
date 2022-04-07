import './BookingCard.scss';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import IconUser from '../icons/IconUser/IconUser';

dayjs.locale('fr');

const BookingCard = ({ booking }) => (
  <div className="booking-card">
    <div className="booking-card__image flex items-center justify-center">
      <IconUser width={100} height={100} />
    </div>
    <div className="booking-card__container flex flex-col items-center">
      <div className="booking-card__name">
        {dayjs(booking.dateStart).format('DD MMM')} — {dayjs(booking.dateEnd).format('DD MMM')}
      </div>
      <div className="booking-card__status">{booking.status}</div>
    </div>
  </div>
);

BookingCard.propTypes = {
  booking: PropTypes.object.isRequired
};

export default BookingCard;
