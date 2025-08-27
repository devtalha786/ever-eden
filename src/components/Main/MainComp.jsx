'use client';
import React from 'react';
import { Play } from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';
import Header from '../Header';
import HeroSale from './HeroSale';
import PromoSection from './PromoSection';
import BestSellers from './BestSellers';
import SafetyIconSection from './SafetyIconSection';
import SkinCareSection from './SkinCareSection';
import HeroLearnSection from './HeroLearnSection';
import ShoppableVideoCarousel from './ShoppableVideoCarousel';

const EveRedenHomepage = () => {
	return (
		<div className='min-h-screen bg-white'>
			{/* Top Banner */}
			<AnnouncementBar />

			{/* Header */}
			<Header />

			{/* Hero Section */}
			<HeroSale />

			{/* All Ages Section */}
			<PromoSection />

			{/* Products Grid */}
			<BestSellers />

			{/* Safety Section */}
			<SafetyIconSection />

			{/* Self Care Section */}
			<SkinCareSection
				title='SELF-CARE STARTS HERE'
				description='	Healthy habits start young and last a lifetime—our kids and pre-teen formulas are the perfect place to begin.'
				buttonText='SHOP KIDS & TEENS'
				buttonLink='/#'
				imageSrc='/images/skinCareMobile.webp'
				imageAlt='Kids skin and hair care'
				bgColor='#f7fe9d'
				textColor='black'
			/>

			{/* Made by Moms Section */}
			<div className='w-full font-sofia lg:px-8'>
				<div className='flex flex-col-reverse lg:flex-row items-center lg:h-[50rem] bg-[#f5e3ef]'>
					{/* Left Image */}
					<div className='w-full lg:w-1/2 h-[376px] md:h-full'>
						<img
							src='/images/bestSeller.webp'
							alt='Bestsellers'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Right Content */}
					<div className='w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-4'>
						<h2 className='text-[16px] md:text-[24px] uppercase tracking-[2px] text-black max-w-[75%] font-sofia-bold'>
							MINDFULLY MADE, SCIENTIFICALLY PROVEN
						</h2>
						<p className='mt-5 text-[26px] md:text-[38px] text-black max-w-[75%]'>
							Potent, safe and non-toxic products Made By Moms in
							Medicine™, our leading dermatologists.
						</p>
						<a
							href='#'
							className="mt-6 text-[16px] uppercase tracking-[2px] font-sofia-bold text-black relative after:content-[''] after:block after:h-[2px] after:w-full after:bg-black hover:after:bg-black"
						>
							SHOP BESTSELLERS
						</a>

						{/* Certification image */}
						<img
							src='/images/certs.webp'
							alt='Certifications'
							className='mt-8 w-2/3 lg:w-[300px] mx-auto pb-5 lg:pb-0'
						/>
					</div>
				</div>
			</div>

			{/* Innovation Section */}
			<SkinCareSection
				title='INNOVATION MADE INCLUSIVE'
				description='Safe & effective skincare is the right of all. We ensure our formulas can be used by every body.'
				buttonText='SHOP SETS'
				buttonLink='/#'
				imageSrc='/images/ShopMom.webp'
				imageAlt='ShopMom care'
				bgColor='#ff4b85'
				textColor='white'
			/>

			{/* Botanicals Section */}
			<HeroLearnSection />

			{/* shopable video careousal */}
			<ShoppableVideoCarousel />
		</div>
	);
};

export default EveRedenHomepage;
