'use client';

import { ChevronDown, Phone, Search, ShoppingCart, UserRound } from 'lucide-react'
import React from 'react'
import { useCart } from '../../../context/CartContext'

const Navbar = () => {

 const { cart } = useCart();
 return (
  // Pembungkus utama untuk memusatkan konten dan memberikan lebar maksimum
  <div>
   {/* Top Bar - Informasi kontak dan promosi */}
   <div className="bg-gray-900 text-white/70 text-poppins text-sm py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
    {/* Informasi Kontak */}
    <div className="flex items-center gap-1">
     <Phone size={16} /> {/* Ikon Phone */}
     <p>+0918827189782</p>
    </div>

    {/* Pesan Promosi */}
    <p className="text-center sm:text-left">
     Dapatkan diskon 50% untuk pesanan pertama Anda | Belanja Sekarang!
    </p>

    {/* Pilihan Bahasa & Lokasi */}
    <div className="flex items-center gap-4">
     {/* Pilihan Bahasa */}
     <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
      <p>ID</p>
      <ChevronDown size={16} /> {/* Ikon ChevronDown */}
     </div>
     {/* Pilihan Lokasi */}
     <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
      <p>Lokasi</p>
      <ChevronDown size={16} /> {/* Ikon ChevronDown */}
     </div>
    </div>
   </div>
   {/* End Top Bar */}

   {/* navbar */}
   <nav className="container mx-auto py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    {/* Logo/Nama Toko */}
    {/* Menggunakan font-lato (pastikan sudah dikonfigurasi di tailwind.config.js) */}
    <h1 className='text-3xl font-bold text-poppins text-gray-900'>
     Tokoku
    </h1>
    {/* Navigasi Utama */}
    <div className="flex-grow"> {/* Memungkinkan daftar navigasi mengambil ruang yang tersedia */}
     <ul className="flex flex-col text-poppins md:flex-row gap-4 md:gap-8 justify-center">
      <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
       Kategori
       <ChevronDown size={18} />
      </li>
      <li className="cursor-pointer hover:text-blue-600 transition-colors">
       Penawaran
      </li>
      <li className="cursor-pointer hover:text-blue-600 transition-colors">
       Terbaru
      </li>
      <li className="cursor-pointer hover:text-blue-600 transition-colors">
       Pengiriman
      </li>
     </ul>
    </div>

    {/* Search Bar */}
    <div className="relative w-full md:w-auto max-w-md"> {/* Batasi lebar search bar di desktop */}
     <input
      type="text"
      placeholder='Cari Produk'
      className="w-full p-2 pl-10 text-poppins bg-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
     />
     <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>

    {/* Akun & Keranjang */}
    <div className="flex items-center gap-6 text-poppins">
     {/* Bagian Akun */}
     <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
      <UserRound size={20} />
      <span className="hidden md:inline">Akun</span> {/* Sembunyikan teks di mobile jika ruang sempit */}
     </div>
     {/* Bagian Keranjang */}
     <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors relative">
      <ShoppingCart size={20} />
      <span className="hidden md:inline">Keranjang</span>
      {cart.length > 0 && (
       <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {cart.length}
       </span>
      )}
     </div>
    </div>
   </nav>
   {/* navbar */}
  </div>
 )
}

export default Navbar
