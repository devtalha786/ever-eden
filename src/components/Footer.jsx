import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
	return (
		<footer className='bg-[#f4f0ed] text-black'>
			<div className='max-w-[1400px] mx-auto px-6 lg:px-8 py-[60px]'>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
					{/* Left side links */}
					<div className='grid grid-cols-2 gap-5 flex-1 pt-8 order-2 lg:order-1'>
						{/* First column */}
						<ul>
							{[
								'EVEREDEN REWARDS',
								'SHARE & EARN',
								'SHOP ALL',
								'VALUE SETS & GIFTS',
								'OUR PHILOSOPHY',
								'MOMS IN MEDICINE',
								'JOURNAL',
								'CONTACT US',
								'CHILDREN’S PRIVACY POLICY',
								'GLOBAL PRIVACY POLICY',
							].map((item, idx) => (
								<li key={idx}>
									<Link
										href='#'
										className='hover:underline transition-colors duration-200 text-[14px] leading-[34px] text-black font-sofia'
									>
										{item}
									</Link>
								</li>
							))}
						</ul>

						{/* Second column */}
						<ul>
							{[
								'SHIPPING',
								'RETURNS',
								'FAQ',
								'AFFILIATES',
								'EVEREDEN AMBASSADORS',
								'TERMS & CONDITIONS',
								'PRIVACY CENTER',
								'ADVERSE EFFECTS? REPORT HERE',
								'TERMS OF SERVICE',
								'ACCESSIBILITY STATEMENT',
							].map((item, idx) => (
								<li key={idx}>
									<Link
										href='#'
										className='hover:underline transition-colors duration-200 text-[14px] leading-[34px] text-black font-sofia'
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter Section */}
					<div className='lg:w-1/2 w-full order-1 lg:order-2'>
						<h3 className='text-[28px] leading-[42px] font-normal tracking-[2.33px] uppercase mb-3 font-sofia text-center lg:text-left'>
							25% Off Your First Order
						</h3>
						<p className='text-[18px] mb-[23px] leading-[22px] font-sofia text-center lg:text-left'>
							Sign up and get 25% off your first order! Be the
							first to know about new launches, exclusive offers,
							and more.
						</p>

						{/* Email input with button */}
						<form className='flex w-full mb-5'>
							<input
								type='email'
								placeholder='Your email address'
								className='flex-1 px-4 text-[14px] leading-[53px] focus:outline-none font-sofia'
							/>
							<button
								type='submit'
								className='bg-[#FF4B85] text-white px-6 py-3 text-sm uppercase tracking-wide font-sofia'
							>
								Sign Up
							</button>
						</form>

						{/* Social Icons */}
						<div className='flex items-center gap-4 justify-center lg:justify-start'>
							<a
								href='https://www.facebook.com/everedenbrand'
								target='_blank'
								rel='noopener noreferrer'
								className='w-9 h-9 bg-white border border-black rounded-full flex items-center justify-center hover:bg-[#FF4B85] hover:text-white transition-colors'
							>
								<Facebook className='w-4 h-4' />
							</a>
							<a
								href='https://www.instagram.com/everedenbrand/'
								target='_blank'
								rel='noopener noreferrer'
								className='w-9 h-9 bg-white border border-black rounded-full flex items-center justify-center hover:bg-[#FF4B85] hover:text-white transition-colors'
							>
								<Instagram className='w-4 h-4' />
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='pt-[60px] text-[11.2px] font-sofia'>
					<p>
						Copyright © 2025,{' '}
						<Link href='/' className='underline'>
							Evereden
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
