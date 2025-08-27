'use client';

import { useState, useRef, useEffect } from 'react';

export default function ShoppableVideoCarousel() {
	const [selectedIndex, setSelectedIndex] = useState(2); // Center tile is selected by default
	const [expandedProducts, setExpandedProducts] = useState({});
	const [isPlaying, setIsPlaying] = useState(true);
	const [isMuted, setIsMuted] = useState(true);
	const videoRefs = useRef([]);

	// Sample data structure - you would replace this with your actual data
	const carouselItems = [
		{
			id: '74165979-b2f3-406a-bba7-666ef9af7b9f',
			poster: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/preview_images/7c9a238dacf24c599d34d06555d9f3d4.thumbnail.0000000000.jpg?v=1723821147&width=960&height=540',
			video: 'https://cdn.shopify.com/videos/c/vp/7c9a238dacf24c599d34d06555d9f3d4/7c9a238dacf24c599d34d06555d9f3d4.HD-720p-3.0Mbps-33316878.mp4',
			products: [
				{
					id: '7751595819068',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Catalog_4in1spray.jpg?v=1756130303&width=80',
					title: 'Kids Berry Smooth 4-in-1 Leave-In Detangling Spray',
					comparePrice: '$22',
					price: '$16.50',
				},
				{
					id: '7751607681084',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/PDP_Gallery_HappyHairTrio_WithBrush.jpg?v=1756130300&width=80',
					title: 'Kids Happy Hair Trio',
					comparePrice: '$79',
					price: '$59.25',
				},
			],
		},
		{
			id: '1f5fadf1-b690-44a6-a378-4e29f20c6ee6',
			poster: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/preview_images/f8cfb2269f7e423eaa201389fe8ce4a4.thumbnail.0000000000.jpg?v=1745609912&width=960&height=540',
			video: 'https://cdn.shopify.com/videos/c/vp/f8cfb2269f7e423eaa201389fe8ce4a4/f8cfb2269f7e423eaa201389fe8ce4a4.HD-720p-1.6Mbps-46574880.mp4',
			products: [
				{
					id: '7751607681084-2',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/PDP_Gallery_HappyHairTrio_WithBrush.jpg?v=1756130300&width=80',
					title: 'Kids Happy Hair Trio',
					comparePrice: '$79',
					price: '$59.25',
				},
				{
					id: '7124341948476',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Catalog_Detangling_Conditioner.jpg?v=1756130403&width=80',
					title: 'Kids Detangling Conditioner',
					comparePrice: '$35',
					price: '$26.25',
				},
				{
					id: '7124314128444',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Catalog_Detangling_Shampoo.jpg?v=1756130406&width=80',
					title: 'Kids Detangling Shampoo',
					comparePrice: '$33',
					price: '$24.75',
				},
				{
					id: '7751595819068-2',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Catalog_4in1spray.jpg?v=1756130303&width=80',
					title: 'Kids Berry Smooth 4-in-1 Leave-In Detangling Spray',
					comparePrice: '$22',
					price: '$16.50',
				},
			],
		},
		{
			id: '6bb846f4-eb65-4fe6-ab0c-05da41a448be',
			poster: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/preview_images/822bca24493c4f4495739218e5e50cae.thumbnail.0000000000.jpg?v=1738606733&width=960&height=540',
			video: 'https://cdn.shopify.com/videos/c/vp/822bca24493c4f4495739218e5e50cae/822bca24493c4f4495739218e5e50cae.HD-720p-1.6Mbps-42010505.mp4',
			products: [
				{
					id: '6662416171068',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Kids_Daily_1-2-3_headband_Peach_2.jpg?v=1756130453&width=80',
					title: 'Kids Daily 1-2-3 Routine',
					comparePrice: '$65',
					price: '$48.75',
				},
				{
					id: '6556151775292',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Happy_Face_Duo_Peach_2.jpg?v=1756130474&width=80',
					title: 'Kids Happy Face Duo',
					comparePrice: '$41',
					price: '$30.75',
				},
			],
		},
		{
			id: '60927a53-e857-4a66-b18b-30e2c51216d2',
			poster: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/preview_images/7d6c817b911c4361b333d1b21fe45a06.thumbnail.0000000000.jpg?v=1745609745&width=960&height=540',
			video: 'https://cdn.shopify.com/videos/c/vp/7d6c817b911c4361b333d1b21fe45a06/7d6c817b911c4361b333d1b21fe45a06.HD-720p-1.6Mbps-46574776.mp4',
			products: [
				{
					id: '7295960612924',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Healthy_morning_duo_WithHeadBand_53a7539f-bafb-450f-b371-1eac8894e4e4.jpg?v=1756130326&width=80',
					title: 'Kids Healthy Morning Duo',
					comparePrice: '$48',
					price: '$36',
				},
				{
					id: '7751607681084-3',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/PDP_Gallery_HappyHairTrio_WithBrush.jpg?v=1756130300&width=80',
					title: 'Kids Happy Hair Trio',
					comparePrice: '$79',
					price: '$59.25',
				},
				{
					id: '6662416171068-2',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/Kids_Daily_1-2-3_headband_Peach_2.jpg?v=1756130453&width=80',
					title: 'Kids Daily 1-2-3 Routine',
					comparePrice: '$65',
					price: '$48.75',
				},
			],
		},
		{
			id: 'eb7b6f95-6524-4785-b143-cda2ac55a280',
			poster: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/preview_images/254e48e780b4457a8ba949ed41f145f8.thumbnail.0000000000.jpg?v=1749052132&width=960&height=540',
			video: 'https://cdn.shopify.com/videos/c/vp/254e48e780b4457a8ba949ed41f145f8/254e48e780b4457a8ba949ed41f145f8.HD-720p-1.6Mbps-48817460.mp4',
			products: [
				{
					id: '7997799104572',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/00_HappyFaceTrioPeach_Catalog.jpg?v=1756130207&width=80',
					title: 'Kids Happy Face Trio',
					comparePrice: '$67',
					price: '$57',
				},
				{
					id: '7997885874236',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/00_MistDuo_Catalog.jpg?v=1756130205&width=80',
					title: 'Kids Spritz and Slay Duo',
					comparePrice: '$40',
					price: '$32',
				},
				{
					id: '7994330972220',
					image: 'https://cdn.shopify.com/s/files/1/0009/7137/4652/files/00_HappyFaceMist_Catalog.jpg?v=1756130211&width=80',
					title: 'Kids Multi-Vitamin Hydrating Face Mist',
					price: '$18',
				},
			],
		},
	];

	const toggleProductExpand = videoId => {
		setExpandedProducts(prev => ({
			...prev,
			[videoId]: !prev[videoId],
		}));
	};

	const togglePlayPause = index => {
		if (videoRefs.current[index]) {
			if (videoRefs.current[index].paused) {
				videoRefs.current[index].play();
				setIsPlaying(true);
			} else {
				videoRefs.current[index].pause();
				setIsPlaying(false);
			}
		}
	};

	const toggleMute = index => {
		if (videoRefs.current[index]) {
			videoRefs.current[index].muted = !videoRefs.current[index].muted;
			setIsMuted(videoRefs.current[index].muted);
		}
	};

	const handleTileClick = index => {
		setSelectedIndex(index);
	};

	// Auto-play the center video when it changes
	useEffect(() => {
		if (videoRefs.current[selectedIndex]) {
			videoRefs.current[selectedIndex].play().catch(error => {
				console.log('Auto-play was prevented:', error);
			});
		}
	}, [selectedIndex]);

	return (
		<div className='shopify-section mt-4'>
			<div className='shopify-block shopify-app-block'>
				<div
					className='tolstoy-carousel-container direction-ltr'
					data-tolstoy-element='tolstoy-carousel-container'
				>
					<div
						className='relative mx-auto mb-4 h-[690px] w-full overflow-hidden'
						data-tolstoy-element='tolstoy-carousel-videos-container'
					>
						{/* Carousel tiles */}
						<div className='flex h-full items-center justify-center'>
							{carouselItems.map((item, index) => {
								const isCenter = index === selectedIndex;
								const position = index - selectedIndex;
								const translateX = position * 316; // 300px width + 16px gap

								return (
									<div
										key={item.id}
										className={`absolute flex h-full w-[316px] shrink-0 items-center justify-center p-0 px-2 transition-all duration-500 ${
											isCenter ? 'z-10' : 'z-0'
										}`}
										style={{
											transform: `translateX(${translateX}px)`,
										}}
										onClick={() => handleTileClick(index)}
									>
										<div
											className={`relative flex flex-col items-center gap-4 rounded-[10px] transition-all duration-500 ${
												isCenter
													? 'h-[595px] w-[300px]'
													: 'h-[483px] w-[300px]'
											}`}
										>
											{/* Video container */}
											<div
												className={`relative transition-all duration-500 ${
													isCenter
														? 'h-[500px] w-[300px]'
														: 'h-[388px] w-[300px] min-h-[388px]'
												} max-h-full max-w-full object-cover`}
											>
												<video
													ref={el =>
														(videoRefs.current[
															index
														] = el)
													}
													poster={item.poster}
													className='block h-full w-full rounded-[10px] object-cover transition-all duration-500'
													src={item.video}
													preload={
														isCenter
															? 'auto'
															: 'metadata'
													}
													loop
													muted={isMuted}
													playsInline
													crossOrigin='anonymous'
												/>
												<img
													src={item.poster}
													loading='lazy'
													alt='Video thumbnail'
													className='hidden h-full w-full object-cover'
												/>

												{/* Video controls */}
												<div className='absolute bottom-2 right-2 flex gap-2'>
													<button
														onClick={e => {
															e.stopPropagation();
															togglePlayPause(
																index
															);
														}}
														className='flex h-8 w-8 items-center justify-center rounded-full border-none bg-[#0000004d] opacity-100'
														aria-label='Play/pause video'
													>
														{isPlaying ? (
															<svg
																className='h-6 w-6'
																fill='none'
																viewBox='0 0 14 14'
															>
																<g clipPath='url(#pauseIcon)'>
																	<path
																		d='M4.375 2.5c-.633 0-1.125.516-1.125 1.125v6.75A1.11 1.11 0 0 0 4.375 11.5h.75c.61 0 1.125-.492 1.125-1.125v-6.75A1.14 1.14 0 0 0 5.125 2.5h-.75Zm4.5 0c-.633 0-1.125.516-1.125 1.125v6.75A1.11 1.11 0 0 0 8.875 11.5h.75c.61 0 1.125-.492 1.125-1.125v-6.75A1.14 1.14 0 0 0 9.625 2.5h-.75Z'
																		fill='#fff'
																	/>
																</g>
																<defs>
																	<clipPath id='pauseIcon'>
																		<path
																			fill='#fff'
																			d='M3 2.5h8v9H3z'
																		/>
																	</clipPath>
																</defs>
															</svg>
														) : (
															<svg
																className='h-6 w-6'
																fill='none'
																viewBox='0 0 24 24'
															>
																<path
																	d='M4 3.532c0-1.554 1.696-2.514 3.029-1.715l14.113 8.468c1.294.777 1.294 2.653 0 3.43L7.029 22.183c-1.333.8-3.029-.16-3.029-1.715V3.532Z'
																	fill='#fff'
																/>
															</svg>
														)}
													</button>

													<button
														onClick={e => {
															e.stopPropagation();
															toggleMute(index);
														}}
														className='flex h-8 w-8 items-center justify-center rounded-full border-none bg-[#0000004d] opacity-100'
														aria-label='Mute/unmute video sound'
													>
														{isMuted ? (
															<svg
																className='h-3 w-3'
																viewBox='0 0 12 12'
																fill='none'
															>
																<path
																	d='M6.266 1.551a0.667 0.667 0 0 1 0.382 0.583v7.714c0 0.261 -0.161 0.482 -0.381 0.602a0.651 0.651 0 0 1 -0.703 -0.12L2.85 7.918h-1.346a1.269 1.269 0 0 1 -1.286 -1.286v-1.286c0 -0.703 0.562 -1.286 1.286 -1.286h1.346L5.563 1.671a0.651 0.651 0 0 1 0.703 -0.12Zm2.492 2.651 1.105 1.106 1.105 -1.106c0.18 -0.18 0.483 -0.18 0.663 0 0.201 0.201 0.201 0.502 0 0.683L10.526 5.991l1.106 1.104c0.201 0.201 0.201 0.502 0 0.683a0.44 0.44 0 0 1 -0.663 0l-1.106 -1.105 -1.104 1.106c-0.201 0.201 -0.502 0.201 -0.683 0 -0.201 -0.182 -0.201 -0.483 0 -0.684l1.105 -1.105L8.073 4.886c-0.2 -0.18 -0.2 -0.482 0 -0.683 0.182 -0.18 0.483 -0.18 0.684 0Z'
																	fill='#fff'
																/>
															</svg>
														) : (
															<svg
																className='h-3 w-3'
																viewBox='0 0 12 12'
																fill='none'
															>
																<path
																	d='M6.627 1.55c.238.101.411.342.411.583v7.714c0 .261-.173.482-.411.603a.742.742 0 0 1-.757-.121l-2.921-2.41H1.5c-.779 0-1.385-.563-1.385-1.286V5.347c0-.703.606-1.286 1.385-1.286h1.449l2.921-2.39a.742.742 0 0 1 .757-.121Zm3.721 1.447c.931.723 1.537 1.788 1.537 2.993 0 1.225-.606 2.29-1.537 2.993a.542.542 0 0 1-.735-.06c-.195-.201-.152-.502.065-.683.714-.522 1.168-1.326 1.168-2.25 0-.904-.454-1.708-1.168-2.23a.475.475 0 0 1-.065-.683.565.565 0 0 1 .735-.08ZM9.029 4.503c.476.362.779.884.779 1.487 0 .623-.303 1.145-.779 1.507a.55.55 0 0 1-.736-.081.454.454 0 0 1 .087-.663.966.966 0 0 0 .389-.763.928.928 0 0 0-.389-.743.475.475 0 0 1-.087-.683.57.57 0 0 1 .736-.061Z'
																	fill='#fff'
																/>
															</svg>
														)}
													</button>
												</div>
											</div>

											{/* Product content */}
											<div
												className={`relative flex w-full flex-col gap-1 overflow-hidden rounded-[5px] border border-[#d8d8d8] bg-white transition-all duration-300 ease-in-out ${
													expandedProducts[item.id]
														? 'max-h-80'
														: 'max-h-20 min-h-20'
												}`}
											>
												{item.products.map(
													(product, productIndex) => (
														<div
															key={product.id}
															className='flex min-h-20 items-center p-2'
														>
															<div className='flex items-center'>
																<img
																	loading='lazy'
																	src={
																		product.image
																	}
																	alt={
																		product.title
																	}
																	className='mr-3 h-16 w-16 object-contain'
																/>
																<div className='flex flex-1 flex-col overflow-hidden'>
																	<div className='line-clamp-2 max-h-[2.2em] overflow-hidden font-sans text-sm leading-[1.1em]'>
																		{
																			product.title
																		}
																	</div>
																	<div className='font-sans text-sm'>
																		{product.comparePrice && (
																			<span className='line-through'>
																				{
																					product.comparePrice
																				}
																			</span>
																		)}{' '}
																		{
																			product.price
																		}
																	</div>
																</div>
															</div>
															<button
																className='hidden h-8 w-8 items-center justify-center rounded-full bg-[#090A0B]'
																title='Add to cart'
																aria-label='Add to cart'
															>
																<svg
																	width='30'
																	height='30'
																	viewBox='0 0 30 30'
																	fill='none'
																>
																	<rect
																		width='30'
																		height='30'
																		rx='15'
																		fill='#090A0B'
																	/>
																	<path
																		fillRule='evenodd'
																		clipRule='evenodd'
																		d='M16 11a1 1 0 1 0-2 0v3h-3a1 1 0 1 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 1 0 0-2h-3v-3Z'
																		fill='#fff'
																	/>
																</svg>
															</button>
														</div>
													)
												)}

												{item.products.length > 1 && (
													<button
														onClick={e => {
															e.stopPropagation();
															toggleProductExpand(
																item.id
															);
														}}
														className='absolute right-3 top-7 flex h-7 w-7 items-center justify-center border-none bg-transparent p-0 outline-none'
														title='Expand products'
														aria-label='Expand products'
													>
														<svg
															className={`h-4 w-4 transition-transform ${
																expandedProducts[
																	item.id
																]
																	? 'rotate-180'
																	: ''
															}`}
															viewBox='0 0 16 16'
															fill='none'
														>
															<path
																d='M7.28125 3.3125C7.65625 2.90625 8.3125 2.90625 8.6875 3.3125L14.6875 9.3125C15.0938 9.6875 15.0938 10.3438 14.6875 10.7188C14.3125 11.125 13.6562 11.125 13.2812 10.7188L8 5.4375L2.6875 10.7188C2.3125 11.125 1.65625 11.125 1.28125 10.7188C0.875 10.3438 0.875 9.6875 1.28125 9.3125L7.28125 3.3125Z'
																fill='black'
															/>
														</svg>
													</button>
												)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
