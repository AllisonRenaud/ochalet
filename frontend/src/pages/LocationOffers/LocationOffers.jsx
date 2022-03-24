import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import OfferCard from '../../components/OfferCard/OfferCard';
import './LocationOffers.scss';

const LocationOffers = () => {
  const [locationIdSelected, setLocationIdSelected] = useState('');
  const { locationId } = useParams();

  const offers = [
    {
      id: 1,
      title: 'La Perle des Bois',
      image:
        'https://images.unsplash.com/photo-1631282715347-766ce1849088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 13100,
      city_name: 'Aix',
      locationId: 1,
      price_ttc: 2000,
      people_capacity: 6,
      rooms: 3
    },
    {
      id: 2,
      title: 'Le Chalet Enchanté',
      image:
        'https://images.unsplash.com/photo-1533603907695-595cfc70df0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 44300,
      city_name: 'Vallet',
      locationId: 1,
      price_ttc: 3000,
      people_capacity: 8,
      rooms: 4
    },
    {
      id: 3,
      title: 'Le Flocon',
      image:
        'https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 89000,
      city_name: 'Auxerre',
      locationId: 1,
      price_ttc: 2500,
      people_capacity: 4,
      rooms: 2
    },
    {
      id: 4,
      title: 'La Perle des Bois',
      image:
        'https://images.unsplash.com/photo-1631282715347-766ce1849088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 13100,
      city_name: 'Aix',
      locationId: 1,
      price_ttc: 2000,
      people_capacity: 6,
      rooms: 3
    },
    {
      id: 5,
      title: 'Le Chalet Enchanté',
      image:
        'https://images.unsplash.com/photo-1533603907695-595cfc70df0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 44300,
      city_name: 'Vallet',
      locationId: 1,
      price_ttc: 1000,
      people_capacity: 10,
      rooms: 5
    },
    {
      id: 6,
      title: 'Le Flocon',
      image:
        'https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 89000,
      city_name: 'Auxerre',
      locationId: 1,
      price_ttc: 1500,
      people_capacity: 12,
      rooms: 6
    }
  ];

  return (
    <div className="offers flex justify-center">
      {offers.map((offer) => (
        <div className="offers__card">
          <OfferCard offer={offer} key={offer.id} />
        </div>
      ))}
    </div>
  );
};

export default LocationOffers;
