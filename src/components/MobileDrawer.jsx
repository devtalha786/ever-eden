// import { X, ChevronDown } from 'lucide-react';
// import { useState } from 'react';

// export default function MobileDrawer({ open, toggleDrawer }) {
// 	const [openMenu, setOpenMenu] = useState(null);

// 	const toggleMenu = menu => {
// 		setOpenMenu(openMenu === menu ? null : menu);
// 	};

// 	return (
// 		<div
// 			className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
// 				open ? 'translate-x-0' : '-translate-x-full'
// 			}`}
// 		>
// 			{/* Drawer Header */}
// 			<div className='flex items-center justify-between px-5 py-4 border-b'>
// 				<h2 className='text-lg font-bold uppercase tracking-[2px]'>
// 					Menu
// 				</h2>
// 				<X className='w-6 h-6 cursor-pointer' onClick={toggleDrawer} />
// 			</div>

// 			{/* Drawer Links */}
// 			<nav className='flex flex-col px-5 py-4 space-y-4 text-[15px] uppercase font-semibold'>
// 				<button
// 					onClick={() => toggleMenu('shop')}
// 					className='flex items-center justify-between'
// 				>
// 					Shop{' '}
// 					<ChevronDown
// 						className={`w-4 h-4 transition-transform ${
// 							openMenu === 'shop' ? 'rotate-180' : ''
// 						}`}
// 					/>
// 				</button>
// 				{openMenu === 'shop' && (
// 					<div className='ml-4 flex flex-col space-y-3 text-[14px] font-normal capitalize mt-2'>
// 						<a href='#'>Best Sellers</a>
// 						<a href='#'>New Arrivals</a>
// 						<a href='#'>Collections</a>
// 						<a href='#'>Baby Care</a>
// 					</div>
// 				)}

// 				<a href='#' className='hover:text-[#ef8e74]'>
// 					Skincare Quiz
// 				</a>
// 				<a href='#' className='hover:text-[#ef8e74]'>
// 					Build Your Routine
// 				</a>
// 				<a href='#' className='hover:text-[#ef8e74]'>
// 					Rewards
// 				</a>
// 			</nav>
// 		</div>
// 	);
// }

import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function MobileDrawer({ open, toggleDrawer }) {
	const [openMenu, setOpenMenu] = useState(null);

	const toggleMenu = menu => {
		setOpenMenu(openMenu === menu ? null : menu);
	};

	return (
		<div
			className={`fixed top-7 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
				open ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			{/* Drawer Header */}
			<div className='flex items-center justify-between px-5 py-4 border-b'>
				<h2 className='text-lg font-bold uppercase tracking-[2px]'>
					Menu
				</h2>
				<X className='w-6 h-6 cursor-pointer' onClick={toggleDrawer} />
			</div>

			{/* Drawer Links */}
			<nav className='flex flex-col px-5 py-4 space-y-4 text-[14px] uppercase font-semibold'>
				<button
					onClick={() => toggleMenu('shop')}
					className='flex items-center justify-between'
				>
					Shop
					<ChevronDown
						className={`w-4 h-4 transition-transform ${
							openMenu === 'shop' ? 'rotate-180' : ''
						}`}
					/>
				</button>
				{openMenu === 'shop' && (
					<div className='ml-4 flex flex-col space-y-3 text-[13px] font-normal capitalize mt-2'>
						<a href='#'>Sale</a>
						<a href='#'>Bestsellers</a>
						<a href='#'>Kids & Teens</a>
						<a href='#'>Mom</a>
						<a href='#'>Baby</a>
						<a href='#'>Save with Sets</a>
						<a href='#'>Offers</a>
					</div>
				)}

				<a href='#' className='hover:text-[#ef8e74]'>
					Skincare Quiz
				</a>
				<a href='#' className='hover:text-[#ef8e74]'>
					Build Your Routine
				</a>
				<a href='#' className='hover:text-[#ef8e74]'>
					Evereden Rewards
				</a>
			</nav>
		</div>
	);
}
