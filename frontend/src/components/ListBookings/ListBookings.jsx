import { Button } from 'antd';
import BookingCard from '../BookingCard/BookingCard';
import './ListBookings.scss';

const ListBookings = () => {
  const bookings = [
    {
      id: 1,
      dateStart: '2021-03-01',
      dateEnd: '2021-04-09',
      status: 'en attente'
    },
    {
      id: 2,
      dateStart: '2021-05-03',
      dateEnd: '2021-06-08',
      status: 'confirmé'
    },
    {
      id: 3,
      dateStart: '2021-07-05',
      dateEnd: '2021-09-10',
      status: 'en attente'
    },
    {
      id: 4,
      dateStart: '2021-03-09',
      dateEnd: '2021-04-11',
      status: 'en attente'
    },
    {
      id: 5,
      dateStart: '2021-12-01',
      dateEnd: '2021-12-08',
      status: 'confirmé'
    },
    {
      id: 6,
      dateStart: '2021-11-02',
      dateEnd: '2021-11-08',
      status: 'confirmé'
    }
  ];

  return (
    <div className="bookings__container w-col-70">
      <div className="bookings__title flex justify-center">Toutes les réservations</div>
      <div className="bookings__cards flex flex-wrap">
        {bookings.map((booking) => (
          <div className="w-col-50" key={booking.id}>
            <div className="bookings__card">
              <BookingCard booking={booking} />
            </div>
            <div className="bookings__buttons flex justify-center">
              <div className="bookings__button">
                <Button type="default" block size="small" htmlType="button">
                  Accepter
                </Button>
              </div>
              <div className="bookings__button">
                <Button type="default" block size="small" htmlType="button">
                  Rejeter
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBookings;
