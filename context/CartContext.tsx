'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
 id: number;
 title: string;
 price: number;
 thumbnail: string;
 quantity: number;
};

type CartContextType = {
 cart: Product[];
 addToCart: (product: Omit<Product, 'quantity'>) => void;
 removeFromCart: (productId: number) => void;
 clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
 const [cart, setCart] = useState<Product[]>([]);

 const addToCart = (product: Omit<Product, 'quantity'>) => {
  setCart((prevCart) => {
   const existing = prevCart.find((item) => item.id === product.id);
   if (existing) {
    return prevCart.map((item) =>
     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
   } else {
    return [...prevCart, { ...product, quantity: 1 }];
   }
  });
 };

 const removeFromCart = (productId: number) => {
  setCart((prev) => prev.filter((item) => item.id !== productId));
 };

 const clearCart = () => setCart([]);

 return (
  <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
   {children}
  </CartContext.Provider>
 );
};

export const useCart = () => {
 const context = useContext(CartContext);
 if (!context) {
  throw new Error('useCart must be used within a CartProvider');
 }
 return context;
};
