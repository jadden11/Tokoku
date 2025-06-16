// app/cart/page.tsx
'use client';

import { useCart } from '../../../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
 const { cart, removeFromCart } = useCart();

 const total = cart.reduce((sum, item) => sum + item.price, 0);

 return (
  <div className="container mx-auto p-6">
   <h1 className="text-3xl font-bold mb-6 text-center">Keranjang Belanja</h1>

   {cart.length === 0 ? (
    <div className="text-center text-gray-500">
     <p>Keranjang kosong.</p>
     <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
      Kembali ke Beranda
     </Link>
    </div>
   ) : (
    <div className="grid gap-6">
     {cart.map((item) => (
      <div key={item.id} className="flex items-center gap-4 border rounded-xl p-4 bg-white shadow">
       <img
        src={item.thumbnail}
        alt={item.title}
        width={80}
        height={80}
        className="rounded-lg object-cover"
       />
       <div className="flex-grow">
        <h2 className="font-semibold text-lg">{item.title}</h2>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
       </div>
       <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm"
       >
        Hapus
       </button>
      </div>
     ))}

     <div className="text-right mt-4">
      <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
      <Link
       href="/checkout"
       className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
      >
       Checkout
      </Link>
     </div>
    </div>
   )}
  </div>
 );
}
