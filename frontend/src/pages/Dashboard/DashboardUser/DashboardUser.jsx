import '../Dashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import UpdateProfile from '../../../components/UpdateProfile/UpdateProfile';
import ListBookings from '../../../components/ListBookings/ListBookings';
import { getBookingsClientAction, getBookingsSellerAction } from '../../../store/actions/bookingActions';
import DashboardSidebar from '../../../components/DashboardSidebar/DashboardSidebar';

const DashboardUser = () => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.user?.profile?.role);

  useEffect(() => {
    dispatch(getBookingsClientAction());
  }, []);

  useEffect(() => {
    if (role === 'seller') {
      dispatch(getBookingsSellerAction());
    }

    if (role === 'client') {
      dispatch(getBookingsClientAction());
    }
  }, []);

  return (
    <div className="container flex">
      <DashboardSidebar />
      <ListBookings />
    </div>
  );
};

export default DashboardUser;
