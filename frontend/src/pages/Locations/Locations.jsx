import LocationCard from '../../components/LocationCard/LocationCard';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Alpes du Sud',
      image:
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 2,
      name: 'Jura',
      image:
        'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 3,
      name: 'Massif Central',
      image:
        'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 4,
      name: 'Massif Central',
      image:
        'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 5,
      name: 'Massif Central',
      image:
        'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
    }
  ];

  return (
    <div className="locations flex justify-center">
      {locations.map((location) => (
        <div className="locations__card w-col-30">
          <LocationCard location={location} key={location.id} />
        </div>
      ))}
    </div>
  );
};

export default Locations;
