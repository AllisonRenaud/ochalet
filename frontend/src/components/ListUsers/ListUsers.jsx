import UserCard from '../UserCard/UserCard';

const ListUsers = () => {
  const users = [
    {
      id: 1,
      first_name: 'Laura',
      last_name: 'Dupont',
      role: 'seller'
    },
    {
      id: 2,
      first_name: 'Jean',
      last_name: 'Dupuis',
      role: 'user'
    },
    {
      id: 3,
      first_name: 'Louis',
      last_name: 'Blanc',
      role: 'user'
    },
    {
      id: 4,
      first_name: 'Nicolas',
      last_name: 'Martin',
      role: 'seller'
    },
    {
      id: 5,
      first_name: 'Marion',
      last_name: 'Petit',
      role: 'user'
    },
    {
      id: 6,
      first_name: 'Albert',
      last_name: 'Dubois',
      role: 'user'
    }
  ];

  return (
    <div className="users__container w-col-70">
      <div className="users__title flex justify-center">Tous les utilisateurs</div>
      <div className="users__cards flex flex-wrap">
        {users.map((user) => (
          <div className="users__card w-col-50">
            <UserCard user={user} key={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
