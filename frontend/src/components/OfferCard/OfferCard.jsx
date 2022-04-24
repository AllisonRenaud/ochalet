import { Link } from 'react-router-dom';
import './OfferCard.scss';
import PropTypes from 'prop-types';
import IconUsers from '../icons/IconUsers/IconUsers';
import IconBed from '../icons/IconBed/IconBed';

const OfferCard = ({ offer }) => (
  <Link to={`/locations/${offer.locationId}/offers/${offer.id}`}>
    <div className="offer-card">
      <div
        className="offer-card__image flex items-center justify-center"
        style={{ background: `url(${offer.media.image_default})` }}
      />

      <div className="offer-card__container">
        <div className="offer-card__title">{offer.title}</div>
        <div className="offer-card__location">{offer.city_name}</div>
        <div className="offer-card__price">
          {offer.price}€ <span>TTC par nuitée</span>
        </div>
        <div className="offer-card__amenities flex">
          <div className="offer-card__ameneties-item flex items-center">
            <IconUsers height={16} width={16} /> <div className="offer-card__ameneties-value">{offer.people_capacity}</div>
          </div>
          <div className="offer-card__ameneties-item  flex items-center">
            <IconBed height={20} width={20} /> <div className="offer-card__ameneties-value">{offer.rooms}</div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired
};

export default OfferCard;
