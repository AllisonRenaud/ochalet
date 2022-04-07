import { Button } from 'antd';
import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './OfferDetail.scss';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';

import IconBed from '../../components/icons/IconBed/IconBed';
import IconBathroom from '../../components/icons/IconBathroom/IconBathroom';
import IconDog from '../../components/icons/IconDog/IconDog';
import IconTv from '../../components/icons/IconTv/IconTv';
import IconWifi from '../../components/icons/IconWifi/IconWifi';
import IconCleaning from '../../components/icons/IconCleaning/IconCleaning';
import IconBreakfast from '../../components/icons/IconBreakfast/IconBreakfast';

const OfferDetail = () => {
  const [locationIdSelected, setLocationIdSelected] = useState('');
  const [offerIdSelected, setOfferIdSelected] = useState('');

  const { offerId, locationId } = useParams();
  const navigate = useNavigate();

  // useEffect(() => dispatch(fetchOffer(parseInt(id, 10))), []);

  // const offerSelected = useSelector((state) => state.offers.offerSelected);

  // const getDatesDisabled = (bookings) => {
  //   const reservations = bookings.map((reservation) =>
  //     eachDayOfInterval({
  //       start: new Date(reservation.reservation_start),
  //       end: new Date(reservation.reservation_end)
  //     })
  //   );
  //   const newArray = Array.prototype.concat.apply([], reservations);
  //   return newArray;
  // };

  const details = {
    offerId: 1,
    title: 'Le Chalet Enchanté',
    zip_code: 44300,
    city_name: 'Vallet',
    country: 'France',
    steet_name: 'Rue de la Montagne',
    street_number: 35,
    media: {
      image_default: 'https://picsum.photos/seed/picsum/700/470',
      images: [
        'https://picsum.photos/seed/picsum/700/470',
        'https://picsum.photos/seed/picsum/700/470',
        'https://picsum.photos/seed/picsum/700/470',
        'https://picsum.photos/seed/picsum/700/470',
        'https://picsum.photos/seed/picsum/700/470'
      ]
    },
    locationId: 1,
    description:
      'Appartement idéalement situé, ski aux pieds, refait avec modernité et esprit montagne. Proche de toutes commodités , esf, forfait de ski, supérette, tabac, resto boulangerie. Nous voulons que vous passiez un séjour agréable dans notre appartement, nous mettons tout en place pour que vous soyez comme chez vous !',
    people_capacity: 6,
    rooms: 3,
    bathrooms: 2,
    pets: true,
    tv: 1,
    wifi: true,
    cleaning: true,
    breakfast: false,
    notes: 'Code promo CHALET10 pour avoir 10% de réduction sur la location des skis.',
    price_ttc: 2500
  };

  return (
    <div className="offer-detail">
      <div key={details.offerId}>
        <div className="offer-detail__name">
          <div className="offer-detail__title">{details.title}</div>
          <div className="offer-detail__location">
            {details.zip_code} {details.city_name}
          </div>
        </div>

        <div className="flex">
          <div className="offer-detail__sidebar w-col-30 flex flex-col">
            <div className="offer-widget flex flex-col justify-center">
              <div className="offer-widget__title">Calendrier</div>
              <div className="offer-widget__description">
                <DateRange
                  className="offer-widget__calendar"
                  // onChange={onChangeDatePicker}
                  moveRangeOnFirstSelection={false}
                  // ranges={[dateRange]}
                  // locale={frLocale}
                  dateDisplayFormat="dd.MM.yyyy"
                  minDate={new Date()}
                  // maxDate={addMonths(new Date(), 12)}
                  startDatePlaceholder="Arrivée"
                  endDatePlaceholder="Départ"
                  // disabledDates={getDatesDisabled(offerSelected.bookings)}
                  rangeColors={['#0dc948']}
                />
              </div>
            </div>
            <div className="offer-widget flex flex-col justify-center">
              <div className="offer-widget__title">Prix TTC</div>
              <div className="offer-widget__description">{details.price_ttc}€ / semaine</div>
            </div>
            <div className="offer-widget flex flex-col justify-center">
              <div className="offer-widget__title">Adresse</div>
              <div className="offer-widget__description">
                {details.street_number} {details.steet_name} {details.zip_code} {details.city_name} - {details.country}
              </div>
            </div>
          </div>
          <div className="w-col-70 offer-detail__container">
            <div className="offer-detail__images">
              <div className="flex">
                <img
                  className="w-col-33 img-responsive offer-detail__images-item"
                  src={details.media.images[0]}
                  alt={details.title}
                />
                <img
                  className="w-col-33 img-responsive offer-detail__images-item"
                  src={details.media.images[1]}
                  alt={details.title}
                />
                <img
                  className="w-col-33 img-responsive offer-detail__images-item"
                  src={details.media.images[2]}
                  alt={details.title}
                />
              </div>

              <div className="flex">
                <div className="offer-detail__images--default">
                  <img
                    className="img-responsive offer-detail__images-item"
                    src={details.media.image_default}
                    alt={details.title}
                  />
                </div>
                <div className="offer-detail__images--mosaic flex flex-col">
                  <img className="img-responsive offer-detail__images-item" src={details.media.images[3]} alt={details.title} />
                  <img className="img-responsive offer-detail__images-item" src={details.media.images[4]} alt={details.title} />
                </div>
              </div>
            </div>

            <div className="offer-widget">
              <div className="offer-widget__title">Description</div>
              <div className="offer-widget__description">{details.description}</div>
              <div className="offer-widget__title">Capacité d'accueil</div>
              <div className="offer-widget__description">{details.people_capacity} personnes</div>
              <div className="offer-widget__title">Prestations</div>
              <div className="offer-widget__ameneties">
                <div className="offer-detail__ameneties-item">
                  <IconBed height={16} width={16} /> {details.rooms} chambres
                </div>
                <div className="offer-detail__ameneties-item">
                  <IconBathroom height={16} width={16} /> {details.bathrooms} salles de bain
                </div>
                <div className="offer-detail__ameneties-item">
                  <IconDog height={16} width={16} /> {details.pets}
                </div>
                <div className="offer-detail__ameneties-item">
                  <IconTv height={16} width={16} /> {details.tv} télévison
                </div>
                <div className="offer-detail__ameneties-item">
                  <IconWifi height={16} width={16} /> {details.wifi}
                </div>
                <div className="offer-detail__ameneties-item">
                  <IconCleaning height={16} width={16} /> {details.cleaning}
                </div>
                <div className="offer-detail__ameneties-item">
                  <IconBreakfast height={16} width={16} /> {details.breakfast}
                </div>
              </div>
              <div className="offer-widget__title">Informations complémentaires</div>
              <div className="offer-detail__extra-detail">{details.notes}</div>
            </div>
          </div>
        </div>
        <div className="offer-detail__button flex justify-center">
          <Button type="primary" htmlType="submit" size="large" onClick={() => navigate('/booking/')}>
            Réserver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
