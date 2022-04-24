import { Link } from 'react-router-dom';
import './LocationCard.scss';
import PropTypes from 'prop-types';

const LocationCard = ({ location }) => (
  <Link to={`/locations/${location.id}/offers/`}>
    <div className="location-card">
      <div className="location-card__image flex items-center justify-center" style={{ background: `url(${location.image})` }} />
      <div className="location-card__title flex items-center justify-center">{location.name}</div>
    </div>
  </Link>
);

LocationCard.propTypes = {
  location: PropTypes.object.isRequired
};

export default LocationCard;
