import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cart/cartThunk';

const ProductCard = ({ product, hovered, setHovered }) => {
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};
	return (
		<div
			className='group'
			onMouseEnter={() => setHovered(product.id)}
			onMouseLeave={() => setHovered(null)}
		>
			{/* Product Card */}
			<div className='relative border border-gray-200 rounded-lg overflow-hidden font-sofia'>
				{/* Bestseller Badge */}
				{product.bestseller && (
					<div className='absolute top-2 left-2 bg-[#ff4b85] text-white text-[10px] font-semibold uppercase px-2 py-1 rounded z-20'>
						Bestseller
					</div>
				)}
				{/* Value Set Badge */}
				{product.valueSet && (
					<div
						className={`absolute ${
							product.bestseller ? 'top-[37px]' : 'top-2'
						} left-2 bg-white text-[#ff4b85] text-[10px] font-semibold uppercase px-2 py-1 rounded z-20`}
					>
						Value Set
					</div>
				)}

				{/* New SVG */}
				{product.newTag && (
					<div className='absolute top-2 right-2 z-40'></div>
				)}

				{/* Sale SVG */}
				{product.saleTag && (
					<div className='absolute top-2 right-2 z-20'></div>
				)}

				{/* Product Image with Hover Fade */}
				<div className='w-full aspect-[4/5] relative cursor-pointer'>
					<Image
						src={product.image1}
						alt={product.title}
						fill
						className={`object-cover absolute inset-0 transition-opacity duration-500 ${
							hovered === product.id ? 'opacity-0' : 'opacity-100'
						}`}
						priority
					/>
					<Image
						src={product.image2}
						alt={product.title}
						fill
						className={`object-cover absolute inset-0 transition-opacity duration-500 ${
							hovered === product.id ? 'opacity-100' : 'opacity-0'
						}`}
						priority
					/>
				</div>
			</div>

			{/* Title */}
			<h3 className='text-[18px] leading-[18px] font-normal mt-3 cursor-pointer'>
				{product.title}
			</h3>

			{/* Price */}
			<div className='flex items-center gap-2 mt-1 cursor-pointer'>
				<span className='text-[16px] font-normal leading-[21px]'>
					${product.price}
				</span>
				{product.oldPrice && (
					<span className='line-through text-[#918f8f] text-[16px] font-normal leading-[21px]'>
						{product.oldPrice}
					</span>
				)}
				<span className='text-[#000] bg-[#e5ffae] text-[12px] py-[3px] px-[7px]'>
					{product.discount}
				</span>
			</div>

			{/* Ratings */}
			<div className='flex items-center mt-1 gap-1 cursor-pointer'>
				{[...Array(product.rating)].map((_, i) => (
					<Star key={i} size={12} className='text-black fill-black' />
				))}
				<span className='text-xs ml-1'>({product.reviews})</span>
			</div>

			{/* Button */}
			<button
				onClick={handleAddToCart}
				className='w-full mt-7 border border-black py-4 text-xs font-bold uppercase tracking-[1px] transition-colors duration-200 bg-white hover:bg-[#ff4b85] hover:text-white hover:border-[#ff4b85]'
			>
				Add To Cart
			</button>
		</div>
	);
};

export default ProductCard;
