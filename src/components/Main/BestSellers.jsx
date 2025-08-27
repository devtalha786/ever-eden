'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
	{
		id: 1,
		valueSet: true,
		bestseller: false,
		newTag: false,
		saleTag: true,
		image1: '/images/productImg1.webp',
		image2: '/images/product-hover-img-4.webp',
		title: 'Barbie™ Kids Happy Face Duo',
		price: '37.95',
		discount: 'Save 21%',
		oldPrice: '$48.00',
		rating: 5,
		reviews: 80,
	},
	{
		id: 2,
		valueSet: true,
		bestseller: true,
		newTag: true,
		saleTag: false,
		image1: '/images/productImg2.webp',
		image2: '/images/product-hover-img-2.webp',
		title: 'Kids Happy Hair Duo',
		price: '40.50',
		discount: 'Save 20%',
		oldPrice: '$50.00',
		rating: 5,
		reviews: 68,
	},
	{
		id: 3,
		valueSet: true,
		bestseller: true,
		newTag: false,
		saleTag: true,
		image1: '/images/productImg3.webp',
		image2: '/images/product-hover-img-3.webp',
		title: 'Kids Daily 1-2-3 Routine',
		price: '24.95',
		discount: 'Save 25%',
		oldPrice: '$32.00',
		rating: 5,
		reviews: 39,
	},
	{
		id: 4,
		valueSet: true,
		bestseller: true,
		newTag: false,
		saleTag: false,
		image1: '/images/productImg4.webp',
		image2: '/images/product-hover-img-4.webp',
		title: 'Kids Healthy Morning Duo',
		price: '36.95',
		discount: 'Save 21%',
		oldPrice: '$48.00',
		rating: 5,
		reviews: 77,
	},
];

export default function BestSellers() {
	const [hovered, setHovered] = useState(null);

	return (
		<section className='w-full bg-[rgba(243,237,232,0.5)] pt-[45px] pb-[75px] px-4 md:px-8 font-sofia'>
			{/* Heading */}
			<h2 className='uppercase tracking-[1.5px] mb-[25px] text-[14px] text-[#ff4b85] font-medium'>
				Bestsellers
			</h2>

			{/* Grid Layout — Works for Mobile & Desktop */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
				{products.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						hovered={hovered}
						setHovered={setHovered}
					/>
				))}
			</div>
		</section>
	);
}
