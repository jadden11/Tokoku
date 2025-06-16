// app/products.tsx

'use client';

import Link from "next/link";
import { Heart, Star } from 'lucide-react';
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useFilter } from "../context/FilterContext";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
};


export default function Products() {
  const { searchTerm } = useSearch(); // ambil searchTerm dari context
  const { addToCart } = useCart(); // ✅ Ambil fungsi addToCart
  const [products, setProducts] = useState<Product[]>([]);
  const { filters } = useFilter();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        let filtered = data.products as Product[];

        // Filter kategori
        if (filters.category) {
          filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(filters.category.toLowerCase())
          );
        }

        // Filter harga
        filtered = filtered.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

        // Filter rating
        if (filters.rating > 0) {
          filtered = filtered.filter(p => p.rating >= filters.rating);
        }

        // Sort
        if (filters.sort === 'lowest') {
          filtered.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'highest') {
          filtered.sort((a, b) => b.price - a.price);
        } else if (filters.sort === 'rating') {
          filtered.sort((a, b) => b.rating - a.rating);
        }

        setProducts(filtered);
      });
  }, [filters]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center font-poppins">Produk Kami</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block group"
          >
            <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
                <button
                  className="absolute top-3 right-3 bg-white bg-opacity-75 p-2 rounded-full shadow-md text-gray-500 hover:text-red-500 hover:bg-opacity-100 transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Add ${product.title} to favorites!`);
                  }}
                >
                  <Heart size={20} fill="none" />
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1 text-poppins line-clamp-2 min-h-[56px]">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2 text-montserrat min-h-[40px]">
                  {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between text-lato text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-medium">{product.rating.toFixed(1)}</span>
                  </div>
                  <span className="font-bold text-blue-600 text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  className="mt-4 bg-gray-50 text-black text-poppins border border-gray-200 hover:text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-200 font-lato font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      thumbnail: product.thumbnail,
                    });
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
