'use client';

export default function PromoSection() {
	return (
		<section className='bg-white text-black font-sofia'>
			<div className='px-4 md:px-0 py-[45px] md:py-[30px] max-w-[900px] mx-auto text-center'>
				{/* Heading */}
				<h2 className='font-bold uppercase tracking-[2px] text-[16px] md:text-[26px] mb-4'>
					All Ages. All Stages.™
				</h2>

				{/* Subtext */}
				<p className='text-[20px] md:text-[26px] leading-snug'>
					Transform routines into rituals with safe,
					scientifically-proven <br className='hidden md:block' />
					formulas for the whole family.
				</p>
			</div>
		</section>
	);
}
