import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import { getLocationsAction } from '../../store/actions/locationActions';

import './Locations.scss';

const Locations = () => {
  const dispatch = useDispatch();

  const locations = useSelector((state) => state.location.locations);

  useEffect(() => {
    dispatch(getLocationsAction());
  }, []);

  return (
    <div className="locations">
      <h1 className="locations__title">Les destinations</h1>
      <div className="locations__list flex flex-wrap justify-center">
        {locations.map((location) => (
          <div className="locations__card w-col-33" key={location.id}>
            <LocationCard location={location} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
