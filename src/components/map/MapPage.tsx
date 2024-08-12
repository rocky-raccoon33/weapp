// MapPage.tsx
import React, { useEffect, useState } from 'react';
import { View, Map, Input, CoverImage, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import PinIcon from "../../assets/icons8-place-marker-100.png"
import GoTo from "../../assets/icons8-near-me-100.png"
import Image from "../../assets/image.png"

interface Marker {
	id: number;
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	availableChargePoints: number;
	photoUrl: string; // 照片 URL
	iconUrl: string; // 图标 URL
	navigationUrl: string; // 导航 URL
}

const markers: Marker[] = [
	{
		id: 1,
		latitude: 39.915,
		longitude: 116.404,
		title: '北京附小',
		address: '中国北京市海淀区蓝旗营清华南路',
		availableChargePoints: 5,
		photoUrl: 'https://example.com/photo1.png',
		iconUrl: '../../assets/icons8-charging-station-50.png',
		navigationUrl: 'https://maps.example.com/route?destination=39.915,116.404',
	},
	{
		id: 2,
		latitude: 39.920,
		longitude: 116.410,
		title: '华泰小区',
		address: '张家湾镇北大化村658号',
		availableChargePoints: 3,
		photoUrl: 'https://example.com/photo2.png',
		iconUrl: '../../assets/icons8-charging-station-50.png',
		navigationUrl: 'https://maps.example.com/route?destination=39.920,116.410',
	},
	// 添加更多 marker
];

const MapPage: React.FC = () => {

	const markerIcon = "https://ucarecdn.com/ac06d2f8-5905-4c3e-878f-2cfe2b5d40fa/icons8chargingstation24.png"
	const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

	const handleMarkerTap = (markerId: number) => {
		const marker = markers.find(m => m.id === markerId) || null;
		setSelectedMarker(marker);
	};


	const handleNavigation = (url: string) => {
		// Taro.navigateTo({
		//   url,
		// });
	};

	return (
		<View className='relative h-screen w-screen flex justify-center'>
			{/* 搜索组件 */}
			<View className='absolute top-4 transform -translate-x-1/2 z-20 p-1 bg-white shadow-md rounded-md w-5/6'>
				<Input
					type='text'
					placeholder='查找附近小区'
					className='w-full h-12 px-4 border border-gray-300 rounded-lg'
				/>
			</View>

			{/* 地图组件 */}
			<Map
				onError={(err) => { console.log(err) }}
				className='h-full w-full'
				longitude={116.404}
				latitude={39.915}
				scale={14}
				markers={markers.map(marker => ({
					id: marker.id,
					latitude: marker.latitude,
					longitude: marker.longitude,
					iconPath: markerIcon,
					width: 40,
					height: 40

				}))}
				onMarkerTap={(e) => handleMarkerTap(e.markerId)}
				showCompass
				showScale
				showLocation
			/>

			{/* Marker 浮层卡片固定在底部中间 */}
			{selectedMarker && (
				<View className='absolute bottom-16 w-5/6 transform -translate-x-1/2 p-4 bg-white shadow-lg rounded-lg'>
					<View className='p-1'>
						{/* 第一行：图片、站点名称、具体地址和导航图标 */}
						<View className='flex flex-row items-center mb-2'>
							{/* 第一列：图片 */}
							<CoverImage src={Image} className='w-16 h-16 mr-4 rounded' />

							{/* 第二列：站点名称和具体地址 */}
							<View className='flex-1'>
								<View className='font-bold text-lg'>{selectedMarker.title}</View>
								<View className='flex flex-row items-center text-gray-600'>
									{/* 定位图标 */}
									<CoverImage src={PinIcon} className='w-3 h-3 mr-1' />
									<View className='block break-words whitespace-normal text-black'>{selectedMarker.address}</View>
								</View>
							</View>

							{/* 第三列：导航图标 */}
							<CoverImage
								src={GoTo}
								className='m-3 w-8 h-8 cursor-pointer'
								onClick={() => handleNavigation(selectedMarker.navigationUrl)}
							/>
						</View>

						{/* 第二行：可用的充电桩信息 */}
						<View className='text-green-600 text-base'>
							{selectedMarker.availableChargePoints} 充电桩可用
						</View>
					</View>
				</View>
			)}
		</View>
	);
};

export default MapPage;
