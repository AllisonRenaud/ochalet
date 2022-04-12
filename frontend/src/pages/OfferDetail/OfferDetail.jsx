import { Button, Empty } from 'antd';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import dayjs from 'dayjs';
import { fr } from 'date-fns/locale';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux';

import IconBed from '../../components/icons/IconBed/IconBed';
import IconBathroom from '../../components/icons/IconBathroom/IconBathroom';
import IconDog from '../../components/icons/IconDog/IconDog';
import IconTv from '../../components/icons/IconTv/IconTv';
import IconWifi from '../../components/icons/IconWifi/IconWifi';
import IconCleaning from '../../components/icons/IconCleaning/IconCleaning';
import IconBreakfast from '../../components/icons/IconBreakfast/IconBreakfast';
import {
  getDisabledDatesOfferAction,
  getOfferSelectedAction,
  setDateRangeSelectedAction
} from '../../store/actions/offerActions';

import './OfferDetail.scss';

const OfferDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { offerId } = useParams();

  const details = useSelector((state) => state.offer.offerSelected);
  const datesDisabledOffer = useSelector((state) => state.offer.disabledDates);

  const [startDate, setStartDate] = useState(dayjs().toDate());
  const [endDate, setEndDate] = useState(dayjs().toDate());

  const [disabledDates, setDisabledDates] = useState([]);

  const selectionRange = {
    startDate,
    endDate,
    key: 'offer'
  };

  const onSelectedDateRange = (dates) => {
    setStartDate(dates.offer.startDate);
    setEndDate(dates.offer.endDate);
  };

  useEffect(() => {
    dispatch(setDateRangeSelectedAction({ startDate, endDate }));
  }, [endDate]);

  useEffect(() => {
    dispatch(getOfferSelectedAction(Number(offerId)));
    dispatch(getDisabledDatesOfferAction(Number(offerId)));
  }, []);

  useEffect(() => {
    const generatedDates = datesDisabledOffer.map((date) => dayjs(date).toDate());
    setDisabledDates(generatedDates);
  }, [datesDisabledOffer]);

  return (
    <div className="offer-detail">
      {details ? (
        <div>
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
                  {disabledDates && (
                    <DateRange
                      ranges={[selectionRange]}
                      onChange={onSelectedDateRange}
                      minDate={dayjs().toDate()}
                      maxDate={dayjs().add(1, 'year').toDate()}
                      disabledDates={disabledDates}
                      rangeColors={['#00887b']}
                      locale={fr}
                    />
                  )}
                </div>
              </div>
              <div className="offer-widget flex flex-col justify-center">
                <div className="offer-widget__title">Prix TTC</div>
                <div className="offer-widget__description">{details.price}€ TTC / nuitée</div>
              </div>
              <div className="offer-widget flex flex-col justify-center">
                <div className="offer-widget__title">Adresse</div>
                <div className="offer-widget__description">
                  {details.street_number}, {details.street_name} <br />
                  {details.zip_code} {details.city_name} - {details.country}
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
                <div className="offer-widget__description">{details.people_capacity} personne(s)</div>
                <div className="offer-widget__title">Prestations</div>
                <div className="offer-widget__ameneties">
                  <div className="offer-detail__ameneties-item">
                    <IconBed height={16} width={16} /> {details.rooms} chambre(s)
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconBathroom height={16} width={16} /> {details.bathrooms} salle(s) de bain
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconDog height={16} width={16} /> {details.pets ? 'animaux acceptés' : 'animaux refusés'}
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconTv height={16} width={16} /> {details.tv} télévison(s)
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconWifi height={16} width={16} /> {details.wifi ? 'wifi disponible' : 'pas de wifi'}
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconCleaning height={16} width={16} />{' '}
                    {details.cleaning ? 'service de ménage inclu' : 'pas de service de ménage'}
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconBreakfast height={16} width={16} />{' '}
                    {details.breakfast ? 'petits déjeuners inclus' : 'petits déjeuners non inclus'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-detail__button flex justify-center">
            <Button type="primary" htmlType="submit" size="large" onClick={() => navigate('/booking/')}>
              Réserver
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center" style={{ height: 500 }}>
          <Empty description="Désolé, ce chalet n'existe pas" />
        </div>
      )}
    </div>
  );
};

export default OfferDetail;
