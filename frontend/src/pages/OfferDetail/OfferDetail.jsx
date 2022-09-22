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
  cleanOfferSelectedAction,
  getDisabledDatesOfferAction,
  getOfferSelectedAction,
  setDateRangeSelectedAction
} from '../../store/actions/offerActions';

import './OfferDetail.scss';

const OfferDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { offerId } = useParams();

  const offerSelected = useSelector((state) => state.offer.offerSelected);
  const datesDisabledOffer = useSelector((state) => state.offer.disabledDates);

  const role = useSelector((state) => state.user?.profile?.role);

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
    dispatch(cleanOfferSelectedAction());
    dispatch(getOfferSelectedAction(Number(offerId)));
    dispatch(getDisabledDatesOfferAction(Number(offerId)));
  }, []);

  useEffect(() => {
    const generatedDates = datesDisabledOffer.map((date) => dayjs(date).toDate());
    setDisabledDates(generatedDates);
  }, [datesDisabledOffer]);

  return (
    <div className="offer-detail">
      {offerSelected ? (
        <div>
          <div className="offer-detail__name">
            <h2 className="offer-detail__title">{offerSelected.title}</h2>
            <div className="offer-detail__location">
              {offerSelected.zip_code} {offerSelected.city_name}
            </div>
          </div>

          <div className="flex offer-detail__container">
            <div className="offer-detail__sidebar w-col-30 flex flex-col">
              <div className="offer-widget flex flex-col justify-center">
                <h3>Calendrier</h3>
                <div>
                  {disabledDates && (
                    <div className="offer-detail__calendar">
                      <DateRange
                        ranges={[selectionRange]}
                        onChange={onSelectedDateRange}
                        minDate={dayjs().toDate()}
                        maxDate={dayjs().add(1, 'year').toDate()}
                        disabledDates={disabledDates}
                        rangeColors={['#00887b']}
                        locale={fr}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="offer-widget flex flex-col justify-center">
                <h3>Prix TTC</h3>
                <div>{offerSelected.price}€ TTC / nuitée</div>
              </div>
              <div className="offer-widget flex flex-col justify-center">
                <h3>Adresse</h3>
                <div>
                  {offerSelected.street_number}, {offerSelected.street_name} <br />
                  {offerSelected.zip_code} {offerSelected.city_name} - {offerSelected.country}
                </div>
              </div>
            </div>
            <div className="w-col-70">
              <div className="offer-detail__images">
                <div className="grid-images">
                  <div
                    className="offer-detail__image featured"
                    style={{ backgroundImage: `url(${offerSelected.media.image_default})` }}
                  />
                  <div
                    className="offer-detail__image image-1"
                    style={{ backgroundImage: `url(${offerSelected.media.images[0]})` }}
                  />
                  <div
                    className="offer-detail__image image-2"
                    style={{ backgroundImage: `url(${offerSelected.media.images[1]})` }}
                  />
                  <div
                    className="offer-detail__image image-3"
                    style={{ backgroundImage: `url(${offerSelected.media.images[2]})` }}
                  />
                  <div
                    className="offer-detail__image image-4"
                    style={{ backgroundImage: `url(${offerSelected.media.images[3]})` }}
                  />
                  <div
                    className="offer-detail__image image-5"
                    style={{ backgroundImage: `url(${offerSelected.media.images[4]})` }}
                  />
                </div>
              </div>

              <div className="offer-widget">
                <h3>Description</h3>
                <div>{offerSelected.description}</div>
                <h3>Capacité d'accueil</h3>
                <div>{offerSelected.people_capacity} personne(s)</div>
                <h3>Prestations</h3>
                <div className="offer-widget__ameneties">
                  <div className="offer-detail__ameneties-item">
                    <IconBed height={16} width={16} /> {offerSelected.rooms} chambre(s)
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconBathroom height={16} width={16} /> {offerSelected.bathrooms} salle(s) de bain
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconDog height={16} width={16} /> {offerSelected.pets ? 'animaux acceptés' : 'animaux refusés'}
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconTv height={16} width={16} /> {offerSelected.tv} télévison(s)
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconWifi height={16} width={16} /> {offerSelected.wifi ? 'wifi disponible' : 'pas de wifi'}
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconCleaning height={16} width={16} />{' '}
                    {offerSelected.cleaning ? 'service de ménage inclus' : 'pas de service de ménage'}
                  </div>
                  <div className="offer-detail__ameneties-item">
                    <IconBreakfast height={16} width={16} />{' '}
                    {offerSelected.breakfast ? 'petits déjeuners inclus' : 'petits déjeuners non inclus'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="offer-detail__button flex justify-center">
            {role !== 'seller' && (
              <Button type="primary" htmlType="submit" size="large" onClick={() => navigate('/booking/')}>
                Réserver
              </Button>
            )}
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
