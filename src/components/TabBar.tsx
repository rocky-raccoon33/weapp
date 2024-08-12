import React from 'react';
import { View, Image, Text } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';

interface TabItem {
  pagePath: string;
  text: string;
  iconPath: string;
  selectedIconPath: string;
}

const tabBarData: TabItem[] = [
  {
    pagePath: '/pages/index/index',
    text: '首页',
    iconPath: '/assets/icons/home.png',
    selectedIconPath: '/assets/icons/home-active.png',
  },
  {
    pagePath: '/pages/user/index',
    text: '用户',
    iconPath: '/assets/icons/user.png',
    selectedIconPath: '/assets/icons/user-active.png',
  },
  {
    pagePath: '/pages/settings/index',
    text: '设置',
    iconPath: '/assets/icons/settings.png',
    selectedIconPath: '/assets/icons/settings-active.png',
  },
];

const TabBar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.path;

  const handleSwitchTab = (path: string) => {
    if (path !== currentPath) {
      Taro.switchTab({ url: path });
    }
  };

  return (
    <View className='fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center z-50'>
      {tabBarData.map((item) => (
        <View
          key={item.pagePath}
          className='flex flex-col items-center justify-center h-full my-4'
          onClick={() => handleSwitchTab(item.pagePath)}
        >
          {/* <Image
            src={currentPath === item.pagePath ? item.selectedIconPath : item.iconPath}
            className='w-6 h-6'
          /> */}
          <Text className={`text-xs ${currentPath === item.pagePath ? 'text-red-500' : 'text-gray-500'}`}>
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TabBar;
