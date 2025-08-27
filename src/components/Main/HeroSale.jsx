'use client';
import Image from 'next/image';

export default function HeroSale() {
	return (
		<section className='relative w-full mt-[90px] font-sofia'>
			{/* Desktop Hero */}
			<div className='hidden md:block relative h-screen'>
				{/* Background image */}
				<Image
					src='/images/desktopHero.webp'
					alt='Labor Day Sale'
					fill
					className='object-cover object-center'
					priority
				/>

				{/* Overlay Button */}
				<div className='absolute inset-0 flex items-end justify-center'>
					<a
						href='/collections/sale'
						className='min-w-[220px] bg-[#ff4b85] text-white text-sm tracking-[2px] font-bold uppercase 
              h-[53px] flex items-center justify-center 
              hover:bg-white hover:text-[#515151] transition'
					>
						Shop Sale
					</a>
				</div>
			</div>

			{/* Mobile Hero */}
			<div className='block md:hidden'>
				<div className='flex flex-col'>
					{/* Top Text Block */}
					<div className='bg-[#fe84ac] text-center px-6 py-10 flex flex-col items-center justify-center'>
						<p className='text-[22px] text-white font-bold uppercase leading-snug'>
							Labor Day Sale: <br /> 25% OFF SITEWIDE
						</p>
						<p className='mt-4 text-white text-sm leading-relaxed'>
							One last hurrah for the summer! Get 25% off <br />
							and a free Travel-Size Face Wash for kids <br />
							in our bestselling Peach scent with orders $59+
						</p>
						<a
							href='/collections/sale'
							className='mt-6 min-w-[220px] bg-white text-[#ff4b85] text-sm tracking-[2px] font-bold uppercase 
                h-[45px] flex items-center justify-center 
                hover:text-[#515151] transition'
						>
							Shop Sale
						</a>
					</div>

					{/* Bottom Image */}
					<div>
						<a href='/collections/sale'>
							<Image
								src='/images/mobileHero.webp'
								alt='Labor Day Sale Mobile'
								width={1126}
								height={995}
								className='w-full h-auto object-cover'
								priority
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
