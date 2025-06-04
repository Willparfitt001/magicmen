'use client';

import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import Footer from '@/components/home/Footer';
import CustomH1 from '@/components/home/heading';
export default function OnlineShopPage() {
  return (
    <div className="text-white">
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>
      <span className="block w-full md:w-4/5 text-center mx-auto my-11 space-y-11 p-4">
        <CustomH1 text={`Visit Our Online store`} />
        <div>
          <img
            alt="ghhghg"
            src="https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/magic-men-shop-1024x504.png"
          />
        </div>
        <a
          href="#"
          className="font-roboto-mono text-xl uppercase cursor-pointer font-bold text-center">
          click here to visit
        </a>
      </span>
      <Footer />
    </div>
  );
}
