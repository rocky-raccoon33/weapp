import React, { useEffect } from 'react';

import Taro from '@tarojs/taro';
import MapPage from '@/components/map/MapPage';
import TabBar from '@/components/TabBar';
import './index.less';


export default function Index() {
  useEffect(() => {

    const userToken = Taro.getStorageSync('userToken');
    if (!userToken) {
      Taro.redirectTo({
        url: '/pages/login/index'
      });
    }
    // Taro.redirectTo({ url: '/pages/login/index' });
  }, []);


  return (
    <div>
      <MapPage />
      <TabBar />
    </div>
  );
};


