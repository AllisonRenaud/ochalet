import OfferCard from '../../components/OfferCard/OfferCard';

const LocationOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'La Perle des Bois',
      image:
        'https://images.unsplash.com/photo-1631282715347-766ce1849088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 13100,
      city_name: 'Aix',
      locationId: 1
    },
    {
      id: 2,
      title: 'Le Chalet Enchanté',
      image:
        'https://images.unsplash.com/photo-1533603907695-595cfc70df0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 44300,
      city_name: 'Vallet',
      locationId: 1
    },
    {
      id: 3,
      title: 'Le Flocon',
      image:
        'https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 89000,
      city_name: 'Auxerre',
      locationId: 1
    },
    {
      id: 4,
      title: 'La Perle des Bois',
      image:
        'https://images.unsplash.com/photo-1631282715347-766ce1849088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 13100,
      city_name: 'Aix',
      locationId: 1
    },
    {
      id: 5,
      title: 'Le Chalet Enchanté',
      image:
        'https://images.unsplash.com/photo-1533603907695-595cfc70df0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 44300,
      city_name: 'Vallet',
      locationId: 1
    },
    {
      id: 6,
      title: 'Le Flocon',
      image:
        'https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 89000,
      city_name: 'Auxerre',
      locationId: 1
    }
  ];

  return (
    <div className="offers flex justify-center">
      {offers.map((offer) => (
        <div className="offers__card w-col-30">
          <OfferCard offer={offer} key={offer.id} />
        </div>
      ))}
    </div>
  );
};

export default LocationOffers;
