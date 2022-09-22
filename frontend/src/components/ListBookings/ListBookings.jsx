import { Button, Empty } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsClientAction, getBookingsSellerAction, updateBookingAction } from '../../store/actions/bookingActions';
import BookingCard from '../BookingCard/BookingCard';

import './ListBookings.scss';

const ListBookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const role = useSelector((state) => state.user?.profile?.role);

  const onChangeStatus = (booking, status) => {
    const updateBooking = {
      id: booking.id,
      status
    };

    dispatch(updateBookingAction(updateBooking));
  };

  useEffect(() => {
    if (role === 'seller') {
      dispatch(getBookingsSellerAction());
    }

    if (role === 'client') {
      dispatch(getBookingsClientAction());
    }
  }, [role]);

  return (
    <div className="bookings__container">
      <h2 className="text-green-900">Les réservations</h2>
      {bookings.length > 0 ? (
        <div className="bookings__cards flex flex-wrap">
          {bookings.map((booking) => (
            <div className="w-col-33" key={booking.id}>
              <div className="bookings__card">
                <BookingCard booking={booking} />
              </div>
              {role === 'seller' && (
                <div className="bookings__buttons flex justify-center">
                  <div className="bookings__button">
                    <Button onClick={() => onChangeStatus(booking, 'active')} type="default" block size="small" htmlType="button">
                      Accepter
                    </Button>
                  </div>
                  <div className="bookings__button">
                    <Button
                      onClick={() => onChangeStatus(booking, 'rejected')}
                      type="default"
                      block
                      size="small"
                      htmlType="button">
                      Rejeter
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center" style={{ height: 500 }}>
          <Empty description="Vous n'avez pas de réservation" />
        </div>
      )}
    </div>
  );
};

export default ListBookings;
