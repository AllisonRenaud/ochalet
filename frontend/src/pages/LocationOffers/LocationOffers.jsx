import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import OfferCard from '../../components/OfferCard/OfferCard';
import { getLocationOffersAction } from '../../store/actions/locationActions';

import './LocationOffers.scss';

const LocationOffers = () => {
  const dispatch = useDispatch();

  const { locationId } = useParams();

  const offers = useSelector((state) => state.location.locationOffers);

  useEffect(() => {
    dispatch(getLocationOffersAction(Number(locationId)));
  }, []);

  return (
    <div className="offers">
      <h1 className="offers__title">Les chalets</h1>
      <div className="offers__list flex flex-wrap justify-center">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <div className="offers__card w-col-33" key={offer.id}>
              <OfferCard offer={offer} />
            </div>
          ))
        ) : (
          <Empty description="Pas d'annonce pour le moment" />
        )}
      </div>
    </div>
  );
};

export default LocationOffers;
