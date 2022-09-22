import { Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, getUsersAction } from '../../store/actions/userActions';
import UserCard from '../UserCard/UserCard';
import './ListUsers.scss';

const ListUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userConnected = useSelector((state) => state.user.profile);

  const onDeleteHandler = (userId) => {
    dispatch(deleteUserAction({ userId }));
  };

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <div className="users__container">
      <h2 className="text-green-900">Les utilisateurs</h2>
      <div className="users__cards flex flex-wrap">
        {users.map((user) => (
          <div className="w-col-50" key={user.id}>
            <div className="users__card">
              <UserCard user={user} />
            </div>
            <div className="users__buttons flex justify-center">
              <div className="users__button">
                {user.id !== userConnected.id && (
                  <Button type="default" block size="small" htmlType="button" onClick={() => onDeleteHandler(user.id)}>
                    Supprimer
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
