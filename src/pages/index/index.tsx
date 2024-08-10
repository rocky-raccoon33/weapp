import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import './index.less';
import StationList from '../../components/StationList'

export default function Index() {
  useEffect(() => {

    const userToken = Taro.getStorageSync('userToken');
    if (!userToken) {
      Taro.redirectTo({
        url: '/pages/login/index'
      });
    }
  }, []);


  return (
    <div className='home-page flex flex-col min-h-screen'>
      <header className='header bg-green-500 text-white p-4 text-center'>
        <h1 className='text-sm font-bold'>Electric Charging Station</h1>
      </header>
      <main className='main flex-1 p-4'>
        <StationList />
      </main>
      <footer className='footer bg-gray-200 text-center p-2'>
        <p>&copy; 2024 Electric Charging Stations Inc.</p>
      </footer>
    </div>
  );
};


