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
      image: 'https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/alpes-du-sud_vhi04j.jpg'
    },
    {
      id: 2,
      name: 'Jura',
      image: 'https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/jura_dnzgip.jpg'
    },
    {
      id: 3,
      name: 'Massif Central',
      image: 'https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/massif-central_gjzs7y.jpg'
    },
    {
      id: 5,
      name: 'Pyrénées',
      image: 'https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/pyrenees_iiik20.jpg'
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
        <div className=" flex flex-wrap justify-center">
          {locations.map((location) => (
            <div className="homepage-locations__card w-col-25" key={location.id}>
              <LocationCard location={location} key={location.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
