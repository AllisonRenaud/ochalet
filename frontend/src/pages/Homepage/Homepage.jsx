import './Homepage.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Photo from '../../assets/images/homepage-photo.jpg';
import LocationCard from '../../components/LocationCard/LocationCard';

const Homepage = () => {
  const navigate = useNavigate();

  const locations = [
    {
      id: 1,
      name: 'Alpes du Sud',
      image:
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 2,
      name: 'Jura',
      image:
        'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 3,
      name: 'Massif Central',
      image:
        'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    }
  ];

  return (
    <div className="homepage">
      <div className="slider flex items-center" style={{ backgroundImage: `url(${Photo})` }}>
        <div className="slider__info w-col-40">
          <div className="slider__title">Respirez l'air pur des montagnes</div>
          <div className="slider__button">
            <Button type="primary" htmlType="submit" size="large" onClick={() => navigate('/locations/')}>
              Voir les destinations
            </Button>
          </div>
        </div>
        <div />
      </div>
      <div className="homepage-locations">
        <div className="homepage-locations__title ">Des idées pour votre prochaine escapade</div>
        <div className="homepage-locations__card flex justify-center">
          {locations.map((location) => (
            <LocationCard location={location} key={location.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
