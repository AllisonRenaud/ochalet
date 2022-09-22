import PropTypes from 'prop-types';
import IconUser from '../icons/IconUser/IconUser';
import './UserCard.scss';

const UserCard = ({ user }) => (
  <div className="user-card">
    <div className="user-card__image flex items-center justify-center">
      <IconUser width={100} height={100} />
    </div>
    <div className="user-card__container flex flex-col items-center">
      <div className="user-card__name">
        {user.first_name} {user.last_name}
      </div>
      <div className="user-card__role">{user.role}</div>
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
