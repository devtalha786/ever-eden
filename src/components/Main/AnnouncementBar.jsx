'use client';
import { useEffect, useState } from 'react';

const messages = [
	'FREE SAMPLE WITH EVERY ORDER',
	'Free US Shipping over $49. Free US Returns.',
	'Join Evereden Rewards for exclusive perks',
	'Labor Day Sale 25% Off + Free Gift',
	'TAKE A 2 MIN QUIZ TO FIND YOUR PERFECT PRODUCT',
];

export default function AnnouncementBar() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % messages.length);
		}, 5000); // Switch every 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='sticky top-0 z-40 w-full bg-[#ff4b85] overflow-hidden'>
			<div className='relative h-[25px] md:h-[30px]'>
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`absolute w-full flex items-center justify-center transition-all duration-700 ease-in-out
              ${
					index === currentIndex
						? 'top-0 opacity-100'
						: 'top-full opacity-0'
				}
            `}
						style={{
							height: '100%',
						}}
					>
						<p className='m-0 p-0 text-[10px] md:text-[12px] font-bold uppercase tracking-[2px] text-white text-center cursor-pointer'>
							{msg}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
