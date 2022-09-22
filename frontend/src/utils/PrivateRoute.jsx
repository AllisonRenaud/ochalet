import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfileAction } from '../store/actions/userActions';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    navigate('/login');
  } else {
    dispatch(getProfileAction());
  }

  return children;
};

export default PrivateRoute;
