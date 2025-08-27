import Image from 'next/image';
import Link from 'next/link';

export default function HeroLearnSection() {
	return (
		<section className='relative w-full font-sofia'>
			{/* Desktop Layout */}
			<div className='hidden lg:block relative pt-[60px]'>
				{/* Background Image */}
				<div className='relative w-full h-[700px]'>
					<Image
						src='/images/dektop_Banner.jpg'
						alt='Hero Banner Desktop'
						fill
						priority
						className='object-cover'
					/>
				</div>

				{/* Overlay Content - LEFT ALIGNED */}
				<Link
					href='#'
					className='absolute inset-0 flex items-center justify-start'
				>
					<div className='max-w-[500px] text-center'>
						<h1 className='text-[45px] leading-tight text-black font-sofia'>
							Formulas enriched by the world’s most beneficial
							botanicals
						</h1>
						<div className='mt-6'>
							<span className="relative inline-block uppercase tracking-[2px] font-semibold text-black cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black hover:text-black">
								Learn more
							</span>
						</div>
					</div>
				</Link>
			</div>

			{/* Mobile Layout */}
			<div className='lg:hidden relative pt-[20px]'>
				{/* Background Image */}
				<div className='relative w-full h-[800px]'>
					<Image
						src='/images/mobile_banner.webp'
						alt='Hero Banner Mobile'
						fill
						priority
						className='object-cover'
					/>
				</div>

				{/* Overlay Content */}
				<div className='absolute inset-0 flex flex-col items-center md:items-start justify-start px-4'>
					<h1 className='text-[26px] text-[#2a4c50] text-center md:text-left pt-[30px] leading-snug'>
						Formulas enriched <br /> by the world’s most beneficial
						ingredients
					</h1>
					<div className='mt-5 flex justify-center'>
						<Link
							href='3'
							className="relative inline-block uppercase tracking-[2px] font-semibold text-black cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black hover:text-black"
						>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
