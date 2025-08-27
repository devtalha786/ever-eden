'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	decreaseCartQuantity,
	removeFromCart,
	clearCart,
	loadCart,
} from '@/store/cart/cartThunk';

export default function CartDrawer({ open, onClose }) {
	const dispatch = useDispatch();
	const { cartItems } = useSelector(s => s.cart);

	useEffect(() => {
		dispatch(loadCart());
	}, [dispatch]);

	const subtotal = cartItems.reduce(
		(sum, i) => sum + (i.price || 0) * i.quantity,
		0
	);

	// close drawer on ESC
	useEffect(() => {
		const onKey = e => e.key === 'Escape' && onClose?.();
		if (open) window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open, onClose]);

	return (
		<>
			{/* Overlay */}
			<div
				className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
					open
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
				onClick={onClose}
			/>

			{/* Drawer */}
			<aside
				className={`fixed right-0 top-0 h-screen w-full max-w-[500px] bg-white z-[61] shadow-2xl transition-transform duration-300 ease-out ${
					open ? 'translate-x-0' : 'translate-x-full'
				}`}
				aria-hidden={!open}
				role='dialog'
				aria-label='Shopping bag'
			>
				{/* Header */}
				<div className='flex items-center justify-between px-5 py-4 border-b'>
					<div className='flex items-center gap-2'>
						<h2 className='text-[13px] tracking-[1.5px] font-bold uppercase'>
							Bag
						</h2>
						<span className='text-sm text-gray-500'>
							({cartItems.length})
						</span>
					</div>
					<button aria-label='Close' onClick={onClose}>
						<X className='w-5 h-5' />
					</button>
				</div>

				{/* Perks / progress (optional, simple placeholder) */}
				<div className='px-5 py-3'>
					<div className='text-sm font-medium mb-2'>
						Congrats! You&apos;ve unlocked all perks!
					</div>
					<div className='flex gap-2 text-[12px]'>
						<span className='flex-1 text-center border px-2 py-1 rounded-full'>
							Free Sample
						</span>
						<span className='flex-1 text-center border px-2 py-1 rounded-full'>
							Free Shipping
						</span>
						{/* <span className='flex-1 text-center border px-2 py-1 rounded-full'>
							Free Kids Face Wash
						</span> */}
					</div>
				</div>

				<hr />

				{/* Items */}
				<div className='overflow-y-auto max-h-[calc(100vh-270px)] px-5'>
					{cartItems.length === 0 ? (
						<div className='py-12 text-center text-sm text-gray-500'>
							Your bag is empty.
						</div>
					) : (
						cartItems.map(item => (
							<div
								key={item.id}
								className='grid grid-cols-[80px_1fr_20px] gap-3 py-5 border-b'
							>
								<div className='relative w-20 h-24 rounded bg-gray-100 overflow-hidden'>
									{item.image1 && (
										<Image
											src={item.image1}
											alt={item.title || 'Product image'}
											fill
											className='object-cover'
										/>
									)}
								</div>

								<div className='pr-2'>
									<div className='text-sm font-medium leading-5'>
										{item.title}
									</div>
									{item.subtitle && (
										<div className='text-xs text-gray-500 mt-1'>
											{item.subtitle}
										</div>
									)}

									{/* Price row */}
									<div className='mt-1 flex items-center gap-2'>
										<span className='text-sm font-semibold'>
											$
											{typeof item.price === 'number'
												? `$${item.price.toFixed(2)}`
												: item.price}
										</span>
										{item.oldPrice && (
											<span className='text-xs line-through text-gray-400'>
												{typeof item.oldPrice ===
												'number'
													? `$${item.oldPrice.toFixed(
															2
													  )}`
													: item.oldPrice}
											</span>
										)}
									</div>

									{/* Qty controls */}
									<div className='mt-3 flex items-center gap-3'>
										<button
											className='w-7 h-7 border rounded flex items-center justify-center'
											onClick={() =>
												dispatch(
													decreaseCartQuantity(
														item.id
													)
												)
											}
											aria-label='Decrease quantity'
										>
											–
										</button>
										<span className='min-w-6 text-center'>
											{item.quantity}
										</span>
										<button
											className='w-7 h-7 border rounded flex items-center justify-center'
											onClick={() =>
												dispatch(addToCart(item))
											}
											aria-label='Increase quantity'
										>
											+
										</button>
									</div>
								</div>

								{/* Remove */}
								<button
									className='text-gray-500 hover:text-black text-sm'
									onClick={() =>
										dispatch(removeFromCart(item.id))
									}
									aria-label='Remove item'
								>
									×
								</button>
							</div>
						))
					)}
				</div>

				{/* Footer */}
				<div className='absolute bottom-0 left-0 right-0 border-t bg-white p-5 space-y-3'>
					{/* Subtotal */}
					<div className='flex items-center justify-between'>
						<div className='text-[13px] font-semibold'>
							Subtotal:
						</div>
						<div className='text-[15px] font-bold'>
							${subtotal.toFixed(2)}
						</div>
					</div>
					<div className='text-[12px] text-gray-500 -mt-1'>
						Shipping: Free US shipping!
					</div>

					{/* Actions */}
					<div className='flex items-center justify-between gap-2'>
						<button
							onClick={() => dispatch(clearCart())}
							className='text-[12px] underline underline-offset-2 text-gray-600 hover:text-black'
						>
							Remove all
						</button>
						<button
							className='flex-1 bg-[#ff4b85] text-white py-3 rounded font-bold tracking-wide uppercase text-[12px]'
							onClick={() => alert('Proceed to checkout')}
						>
							Checkout
						</button>
					</div>
				</div>
			</aside>
		</>
	);
}
