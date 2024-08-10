import React from 'react';
import './StationList.less';

interface Station {
  id: number;
  name: string;
  address: string;
  status: 'Available' | 'Occupied';
}

const stations: Station[] = [
  { id: 1, name: 'Station A', address: '123 Main St', status: 'Available' },
  { id: 2, name: 'Station B', address: '456 Elm St', status: 'Occupied' },
  { id: 3, name: 'Station C', address: '789 Maple Ave', status: 'Available' },
];

const StationList: React.FC = () => {
  return (
    <div className='list-container'>
      <h2 className='text-2xl font-bold mb-4'>Charging Stations</h2>
      <ul className='station-list'>
        {stations.map(station => (
          <li key={station.id} className='station-item border p-4 mb-2 rounded bg-gray-100'>
            <h3 className='text-xl font-semibold'>{station.name}</h3>
            <p>{station.address}</p>
            <p>Status: {station.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;
