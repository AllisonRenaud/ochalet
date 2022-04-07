import { Button } from 'antd';
import OfferCard from '../OfferCard/OfferCard';
import './ListOffers.scss';

const ListOffers = () => {
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
      id: 3,
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
      price_ttc: 3000,
      people_capacity: 8,
      rooms: 4
    },
    {
      id: 6,
      title: 'Le Chalet Enchanté',
      image:
        'https://images.unsplash.com/photo-1533603907695-595cfc70df0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      zip_code: 44300,
      city_name: 'Vallet',
      locationId: 1,
      price_ttc: 3000,
      people_capacity: 8,
      rooms: 4
    }
  ];

  return (
    <div className="offers__container w-col-70">
      <div className="offers__title flex justify-center">Annonces</div>
      <div className="offers__cards flex flex-wrap">
        {offers.map((offer) => (
          <div className="w-col-50" key={offer.id}>
            <div className="offers__card ">
              <OfferCard offer={offer} />
            </div>
            <div className="offers__buttons flex justify-center">
              <div className="offers__button">
                <Button type="default" block size="small" htmlType="button">
                  Modifier
                </Button>
              </div>
              <div className="offers__button">
                <Button type="default" block size="small" htmlType="button">
                  Supprimer
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOffers;
