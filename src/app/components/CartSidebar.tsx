// components/CartSidebar.tsx
'use client';

import Image from 'next/image';
import { useCart } from '../../../context/CartContext';
import { X } from 'lucide-react';

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">Keranjang</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Isi Keranjang */}
      <div className="p-4 overflow-y-auto h-[calc(100%-150px)]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Keranjang kosong.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 mb-4">
              <Image
                src={item.thumbnail}
                alt={item.title}
                className="rounded object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-xs"
              >
                Hapus
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t px-4 py-3">
        <div className="flex justify-between text-sm font-medium mb-2">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
