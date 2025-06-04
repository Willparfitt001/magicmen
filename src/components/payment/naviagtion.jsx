'use client';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export default function PaymentNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <nav className="flex uppercase text-xl font-bold font-roboto-mono items-center justify-between px-11 py-4 bg-black text-white z-50 relative">
        <span
          className="flex gap-2 text-2xl items-center cursor-pointer"
          onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu size={24} />
          <span>Menu</span>
        </span>
        <div className="md:w-40 w-20">
          <img
            className="object-contain w-full h-full"
            alt="nav image"
            src="https://payments.magicmen.com.au/wp-content/uploads/2020/07/2019logo.png"
          />
        </div>
        <a
          href="tel:1300624426"
          className="text-right hidden md:block">
          <p className="text-yellow-500 text-sm">For phone bookings</p>
          <p className="text-white font-bold text-base">
            <span className="text-green-500">Call us at</span> 1300 624 426
          </p>
        </a>
        <a
          href="tel:1300624426"
          className="text-right block md:hidden">
          <p className="text-white font-bold text-base">
            <span className="text-green-500">Call us </span>
          </p>
        </a>
      </nav>

      {/* Full Screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 text-white z-50 flex flex-col items-center justify-center space-y-6 text-center text-xl font-bold uppercase">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMenuOpen(false)}>
            <IoMdClose />
          </button>

          <a
            href="/product-category/home-visits-deposit"
            className="hover:text-yellow-400">
            Home Visit Packages
          </a>
          <a
            href="/product-category/stage-show-deposits"
            className="hover:text-yellow-400">
            Stage Show Packages
          </a>
          <a
            href="/payment"
            className="hover:text-yellow-400">
            Online Deposits
          </a>
          <a
            href="/policy/terms-condition"
            className="hover:text-yellow-400">
            Terms & Conditions
          </a>
          <a
            href="/policy/privacy-policy"
            className="hover:text-yellow-400">
            Privacy Policy
          </a>

          {/* Payment logos */}
          <div className="mt-10 flex items-center space-x-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              alt="visa"
              className="w-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
              alt="mastercard"
              className="w-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
              alt="secure"
              className="w-10"
            />
          </div>
        </div>
      )}
    </>
  );
}
