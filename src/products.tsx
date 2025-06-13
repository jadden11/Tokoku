'use client';

import Link from "next/link";
import { Heart, Star } from 'lucide-react'; // Mengimpor ikon Heart dan Star

export default async function Products() {
 const res = await fetch('https://dummyjson.com/products');
 const data = await res.json();

 return (
  <main className="container mx-auto p-6"> {/* Mengatur lebar maksimum dan pemusatan */}
   <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center font-poppins">Produk Kami</h1>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.products.slice(0, 6).map((product: any) => (
     // Menggunakan Link untuk navigasi ke halaman detail produk
     <Link
      key={product.id}
      href={`/products/${product.id}`}
      className="block group" // Menambahkan group untuk efek hover pada children
     >
      <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
       {/* Container untuk Gambar dan Tombol Love */}
       <div className="relative w-full h-48 overflow-hidden">
        <img
         src={product.thumbnail}
         alt={product.title}
         className="rounded-t-lg transition-transform duration-300 group-hover:scale-110" // Efek zoom pada hover
        />
        {/* Tombol Love/Favorite */}
        <button
         className="absolute top-3 right-3 bg-white bg-opacity-75 p-2 rounded-full shadow-md text-gray-500 hover:text-red-500 hover:bg-opacity-100 transition-all duration-200 focus:outline-none"
         onClick={(e) => {
          e.preventDefault(); // Mencegah navigasi Link saat tombol diklik
          // Logika untuk menambahkan ke favorit di sini
          console.log(`Add ${product.title} to favorites!`);
         }}
         aria-label={`Tambahkan ${product.title} ke favorit`}
        >
         <Heart size={20} fill="none" /> {/* Gunakan fill="none" untuk outline default */}
        </button>
       </div>

       {/* Detail Produk */}
       <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 text-poppins line-clamp-2 min-h-[56px]">
         {product.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2 text-montserrat min-h-[40px]">
         {product.description}
        </p>

        <div className="mt-3 flex items-center justify-between text-lato text-sm">
         {/* Rating Produk */}
         <div className="flex items-center gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="font-medium">{product.rating.toFixed(1)}</span>
         </div>
         {/* Harga Produk */}
         <span className="font-bold text-blue-600 text-lg">
          ${product.price.toFixed(2)}
         </span>
        </div>

        {/* Tombol Add to Cart */}
        <button
         className="mt-4 bg-gray-50 text-black text-poppins border border-gray-200 hover:text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-200 font-lato font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
         onClick={(e) => {
          e.preventDefault(); // Mencegah navigasi Link saat tombol diklik
          // Logika untuk menambahkan ke keranjang di sini
          console.log(`Add ${product.title} to cart!`);
         }}
        >
         Add to cart
        </button>
       </div>
      </div>
     </Link>
    ))}
   </div>
  </main>
 );
}
