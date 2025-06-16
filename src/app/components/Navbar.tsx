// app/components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useCart } from '../../../context/CartContext';
import { useSearch } from '../../../context/SearchContext';
import { ChevronDown, Phone, Search, ShoppingCart, UserRound } from 'lucide-react';
import CartSidebar from './CartSidebar';
import { useState } from 'react';

const Navbar = () => {
 const { searchTerm, setSearchTerm } = useSearch();
 const { cart } = useCart();
 const [isCartOpen, setIsCartOpen] = useState(false);


 return (
  <div>
   {/* Top Bar */}
   <div className="bg-gray-900 text-white/70 text-poppins text-sm py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
    <div className="flex items-center gap-1">
     <Phone size={16} />
     <p>+0918827189782</p>
    </div>
    <p className="text-center sm:text-left">
     Dapatkan diskon 50% untuk pesanan pertama Anda | Belanja Sekarang!
    </p>
    <div className="flex items-center gap-4">
     <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
      <p>ID</p>
      <ChevronDown size={16} />
     </div>
     <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
      <p>Lokasi</p>
      <ChevronDown size={16} />
     </div>
    </div>
   </div>

   {/* Main Navbar */}
   <nav className="container mx-auto py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <h1 className="text-3xl font-bold text-poppins text-gray-900">
     <Link href="/">Tokoku</Link>
    </h1>

    <ul className="flex flex-col text-poppins md:flex-row gap-4 md:gap-8 justify-center">
     <li>
      <Link href="/categories" className="flex items-center gap-1 hover:text-blue-600">
       Kategori <ChevronDown size={18} />
      </Link>
     </li>
     <li>
      <Link href="/penawaran" className="hover:text-blue-600">
       Penawaran
      </Link>
     </li>
     <li>
      <Link href="/terbaru" className="hover:text-blue-600">
       Terbaru
      </Link>
     </li>
     <li>
      <Link href="/pengiriman" className="hover:text-blue-600">
       Pengiriman
      </Link>
     </li>
    </ul>

    {/* Search */}
    <div className="relative w-full md:w-auto max-w-md">
     <input
      type="text"
      placeholder="Cari Produk"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 pl-10 bg-gray-50 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
     />
     <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>

    {/* Akun & Keranjang */}
    <div className="flex items-center gap-6 text-poppins">
     <Link href="/login" className="flex items-center gap-1 hover:text-blue-600">
      <UserRound size={20} />
      <span className="hidden md:inline">Akun</span>
     </Link>
     <button
      onClick={() => setIsCartOpen(true)}
      className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors relative"
     >
      <ShoppingCart size={20} />
      <span className="hidden md:inline">Keranjang</span>
      {cart.length > 0 && (
       <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {cart.length}
       </span>
      )}
     </button>
    </div>
    <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

   </nav>
  </div>
 );
};

export default Navbar;
