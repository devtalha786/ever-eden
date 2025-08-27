'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import MobileDrawer from './MobileDrawer';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import CartDrawer from './Main/CartDrawer';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const { cartItems } = useSelector(state => state.cart);
	const cartCount = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	const mainNav = [
		{ name: 'Sale', href: '#', highlight: true },
		{ name: 'Bestsellers', href: '#' },
		{ name: 'Kids & Teens', href: '#' },
		{ name: 'Mom', href: '#' },
		{ name: 'Baby', href: '#' },
		{ name: 'Save with Sets', href: '#' },
		{ name: 'Offers', href: '#' },
	];

	return (
		<>
			<header
				className={`fixed top-[25px] md:top-7 left-0 w-full z-50 bg-white transition-all duration-300 ${
					isScrolled ? 'py-4' : 'py-4'
				}`}
			>
				<div className='max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-10 transition-all duration-300'>
					{/* LEFT LINKS (hide when scrolled) */}
					<nav
						className={`hidden lg:flex items-center space-x-8 text-[12px] uppercase font-semibold tracking-[1.5px] transition-all duration-300 ${
							isScrolled
								? 'opacity-0 w-0 overflow-hidden !hidden'
								: 'opacity-100'
						}`}
					>
						<a href='#' className='hover:text-[#ef8e74]'>
							Skincare Quiz
						</a>
						<a href='#' className='hover:text-[#ef8e74]'>
							Build Your Routine
						</a>
					</nav>

					{/* LOGO + MAIN NAV (moves left + merges with nav on scroll) */}
					<div
						className={`flex items-center transition-all duration-300 ${
							isScrolled ? 'space-x-6' : ''
						}`}
					>
						{/* Logo */}
						<div
							className={`text-2xl font-bold tracking-[1px] font-serif transition-all duration-300 ${
								isScrolled
									? 'lg:ml-0'
									: 'lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'
							}`}
						>
							<a href='/'>
								<Image
									src='/images/logo.svg'
									alt='Evereden Logo'
									width={140}
									height={40}
									className='h-auto w-auto'
								/>
							</a>
						</div>

						{/* Main Nav - moves inline when scrolled */}
						<div
							className={`hidden lg:flex items-center space-x-6 text-[12px] uppercase tracking-[1.5px] font-semibold transition-all duration-300 ${
								isScrolled
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-4 pointer-events-none'
							}`}
						>
							{mainNav.map((link, i) => (
								<a
									key={i}
									href={link.href}
									className={`${
										link.highlight ? 'text-red-500' : ''
									} hover:text-[#ef8e74]`}
								>
									{link.name}
								</a>
							))}
						</div>
					</div>

					{/* RIGHT ICONS */}
					<div className='flex items-center space-x-2'>
						<a
							href='#'
							className='hidden lg:block text-[12px] uppercase tracking-[1.5px] hover:text-[#ef8e74]'
						>
							Evereden Rewards
						</a>
						<Search className='w-5 h-5 cursor-pointer hover:text-[#ef8e74]' />
						<User className='w-5 h-5 cursor-pointer hover:text-[#ef8e74]' />
						<button
							type='button'
							onClick={() => setIsCartOpen(true)}
							className='relative cursor-pointer'
							aria-label='Open cart'
						>
							<ShoppingBag className='w-5 h-5 hover:text-[#ef8e74]' />
							{cartCount > 0 && (
								<span className='absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md'>
									{cartCount}
								</span>
							)}
						</button>

						{/* Hamburger */}
						<button onClick={toggleDrawer} className='lg:hidden'>
							{isDrawerOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</button>
					</div>
				</div>

				{/* MAIN NAV (only in second row when NOT scrolled) */}
				<div
					className={`hidden lg:flex justify-center space-x-8 text-[12px] uppercase tracking-[1.5px] font-semibold transition-all duration-300 ${
						isScrolled
							? 'opacity-0 pointer-events-none h-0'
							: 'opacity-100 mt-5'
					}`}
				>
					{mainNav.map((link, i) => (
						<a
							key={i}
							href={link.href}
							className={`${
								link.highlight ? 'text-red-500' : ''
							} hover:text-[#ef8e74]`}
						>
							{link.name}
						</a>
					))}
				</div>
			</header>

			{/* attach drawer at root level */}
			<CartDrawer
				open={isCartOpen}
				onClose={() => setIsCartOpen(false)}
			/>
			{/* Mobile Drawer */}
			<MobileDrawer open={isDrawerOpen} toggleDrawer={toggleDrawer} />
		</>
	);
}
