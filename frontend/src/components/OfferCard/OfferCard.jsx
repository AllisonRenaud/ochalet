import { Link } from 'react-router-dom';
import './OfferCard.scss';
import PropTypes from 'prop-types';

const OfferCard = ({ offer }) => (
  <Link to="/locations/:id/offer/:id">
    <div className="offer-card">
      <div className="offer-card__image flex items-center justify-center">
        <img src={offer.image} alt={offer.title} />
      </div>
      <div className="offer-card__container flex items-center justify-center">
        <div>
          {offer.title}
          <div className="offer-card__location">
            {offer.zip_code} {offer.city_name}
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
