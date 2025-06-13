import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import React from 'react'

const Header = () => {
 return (
  <div className="container mx-auto px-6">
   {/* Bagian Hero / Banner Promosi */}
   <div
    className="relative bg-cover bg-center h-72 flex items-center justify-center p-4 rounded-lg overflow-hidden"
    style={{ backgroundImage: "url('https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
   >
    {/* Overlay untuk meningkatkan keterbacaan teks */}
    <div className="absolute inset-0 bg-black opacity-40"></div>

    {/* Konten teks dan tombol */}
    <div className="relative z-10 text-white text-start">
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-montserrat">
      Dapatkan Diskon Hingga 50% <br />
      Untuk Headphone Pilihan
     </h1>
     <button className="rounded-full bg-gray-900 hover:bg-blue-700 transition-colors text-white py-3 px-8 text-lg text-poppins shadow-lg">
      Beli Sekarang
     </button>
    </div>
   </div>

   {/* Bagian Filter */}
   <div className="flex justify-between bg-white py-4 px-6 mt-4 md:mt-6 text-poppins">
    <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
     {/* Item Filter: Headphone Type */}
     <li className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-400 transition-colors text-gray-700 text-sm md:text-base font-lato">
      Tipe Headphone <ChevronDown size={18} />
     </li>
     {/* Item Filter: Price */}
     <li className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-400 transition-colors text-gray-700 text-sm md:text-base font-lato">
      Harga <ChevronDown size={18} />
     </li>
     {/* Item Filter: Review */}
     <li className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-400 transition-colors text-gray-700 text-sm md:text-base font-lato">
      Ulasan <ChevronDown size={18} />
     </li>
     {/* Item Filter: Color */}
     <li className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-400 transition-colors text-gray-700 text-sm md:text-base font-lato">
      Warna <ChevronDown size={18} />
     </li>
     {/* Item Filter: All Filters */}
     <li className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-400 transition-colors text-gray-700 text-sm md:text-base font-lato">
      Semua Filter <SlidersHorizontal size={18} />
     </li>
    </ul>
    {/* Bagian Sort By */}
    <button className="px-5 py-2 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition-colors text-gray-700 text-base font-lato flex items-center gap-2">
     Urutkan Berdasarkan <ChevronDown size={18} />
    </button>
   </div>

  </div>
 );
}

export default Header
