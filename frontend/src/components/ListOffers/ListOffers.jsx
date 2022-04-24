import { Button, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import OfferCard from '../OfferCard/OfferCard';
import { deleteOfferAction, getOffersAction, getSellerMyOffersAction } from '../../store/actions/offerActions';
import './ListOffers.scss';

const ListOffers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const offers = useSelector((state) => state.offer.offers);
  const role = useSelector((state) => state.user?.profile?.role);

  const onDeleteOfferHandler = (offerId) => {
    dispatch(deleteOfferAction({ offerId, role }));
  };

  useEffect(() => {
    if (role === 'seller') {
      dispatch(getSellerMyOffersAction());
    }

    if (role === 'admin') {
      dispatch(getOffersAction());
    }
  }, [role]);

  return (
    <div className="offers__container">
      <h2 className="text-green-900">Les annonces</h2>
      {offers.length > 0 ? (
        <div className="offers__cards flex flex-wrap">
          {offers.map((offer) => (
            <div className="w-col-33" key={offer.id}>
              <div className="offers__card ">
                <OfferCard offer={offer} />
              </div>
              <div className="offers__buttons flex justify-center">
                <div className="offers__button">
                  <Button
                    onClick={() => navigate(`/locations/${offer.locationId}/offers/${offer.id}`)}
                    type="default"
                    block
                    size="small"
                    htmlType="button">
                    Voir
                  </Button>
                </div>
                {role === 'seller' && (
                  <div className="offers__button">
                    <Button
                      onClick={() => navigate(`/dashboard/offer/${offer.id}`)}
                      type="default"
                      block
                      size="small"
                      htmlType="button">
                      Modifier
                    </Button>
                  </div>
                )}
                <div className="offers__button">
                  <Button type="default" block size="small" htmlType="button" onClick={() => onDeleteOfferHandler(offer.id)}>
                    Supprimer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center" style={{ height: 500 }}>
          <Empty description="Pas d'annonce pour le moment" />
        </div>
      )}
    </div>
  );
};

export default ListOffers;
