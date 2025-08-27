'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SafetyIconSection() {
	const icons = [
		{
			src: '/images/sulfates.avif',
			text: 'NO SULFATES',
		},
		{
			src: '/images/parabens.avif',
			text: 'NO PARABENS',
		},
		{
			src: '/images/pthalates.avif',
			text: 'NO PHTHALATES',
		},
		{
			src: '/images/petrolatum.avif',
			text: 'NO PETROLATUM',
		},
		{
			src: '/images/chemical.avif',
			text: 'NO FORMALDEHYDE',
		},
	];

	const texts = [
		'Gentle, non-toxic & safe',
		'EWG vetted ingredients',
		'Safety tested for sensitive skin',
		'Developed by dermatological experts',
		'Clinically tested',
	];

	return (
		<section className='w-full px-4 md:px-8 py-4 lg:py-6 max-w-[1400px] mx-auto font-sofia'>
			{/* Heading */}
			<div className='mb-6 lg:mb-10'>
				<h2 className='text-[30px] lg:text-[48px] text-black text-center lg:text-left font-sofia tracking-[-0.7px] font-normal mb-5'>
					Safety Reigns Supreme
				</h2>
			</div>

			{/* Main wrapper */}
			<div className='flex flex-col-reverse lg:flex-row justify-center gap-0 lg:gap-[170px]'>
				{/* Desktop Icons */}
				<div className='hidden lg:flex flex-wrap justify-center items-center w-1/2'>
					{icons.map((icon, i) => (
						<div
							key={i}
							className='flex flex-col items-center justify-center mb-6 w-1/3'
						>
							<img
								src={icon.src}
								alt={icon.text}
								className='h-[73px] w-auto mb-2'
							/>
							<p className='text-[10px] text-theme-primary uppercase text-center'>
								{icon.text}
							</p>
						</div>
					))}
				</div>

				{/* Text rows */}
				<div className='w-full lg:w-1/2 text-[18px] lg:text-[24px] text-black'>
					{texts.map((txt, i) => (
						<div
							key={i}
							className='flex items-center mb-2 last:mb-0'
						>
							<img
								src='/images/pinkleaf.png'
								alt='leaf'
								className='h-[26px] w-auto mr-6 lg:mr-1'
							/>
							<p>{txt}</p>
						</div>
					))}
				</div>
			</div>

			{/* Mobile Swiper */}
			<div className='flex lg:hidden justify-center mt-8'>
				<Swiper
					spaceBetween={30}
					slidesPerView={3}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className='w-full !pb-6'
				>
					{icons.map((icon, i) => (
						<SwiperSlide
							key={i}
							className='flex flex-col items-center justify-center'
						>
							<div className='flex flex-col items-center justify-center'>
								<img
									src={icon.src}
									alt={icon.text}
									className='h-[73px] w-auto mb-2'
								/>
								<p className='text-[10px] text-[#ff4b85] uppercase text-center'>
									{icon.text}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
