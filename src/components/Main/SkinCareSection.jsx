'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function KidsSkinSection({
	title,
	description,
	buttonText,
	buttonLink,
	imageSrc,
	imageAlt,
	bgColor,
	textColor,
}) {
	return (
		<section className='w-full font-sofia lg:px-8'>
			<div
				className='flex flex-col lg:flex-row h-auto lg:h-[50rem]'
				style={{ backgroundColor: bgColor }}
			>
				{/* Left Side - Text */}
				<div
					className='flex flex-col justify-center items-center w-full lg:w-1/2 px-6 lg:px-16 py-12 text-center'
					style={{ color: textColor }}
				>
					<h2 className='text-[16px] lg:text-[24px] uppercase tracking-[1.5px] font-sofia-bold font-normal mb-5'>
						{title}
					</h2>

					<p className='text-[26px] lg:text-[38px] leading-[32px] lg:leading-[48px] tracking-[-0.7px] font-sofia font-normal max-w-[480px] mb-6'>
						{description}
					</p>

					<Link
						href={buttonLink}
						className='text-[16px] uppercase tracking-[1.5px] font-sofia-bold relative inline-block'
						style={{
							color: textColor,
							borderBottom: `2px solid ${textColor}`,
						}}
					>
						{buttonText}
					</Link>
				</div>

				{/* Right Side - Image */}
				<div className='w-full lg:w-1/2 relative h-[376px] lg:h-full'>
					<Image
						src={imageSrc}
						alt={imageAlt}
						fill
						priority
						className='object-cover object-center'
					/>
				</div>
			</div>
		</section>
	);
}
