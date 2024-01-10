
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

import Image from 'next/image';
const Footer = () => {
 



  return (
    <div className='w-full my-10  overflow-hidden '>
      
      <div className='transition-transform duration-1000 transform hover:translate-x-1/2 px-5 '>
       
        <Image
          src="/car-svgrepo-com.svg"
          height={32}
          width={32}
          alt="car"
          className=' glow'
        />
      </div>
      <div className='w-full h-1 blur-md -z-10 bg-gradient-to-r from-yellow-500 opacity-80 '/>


      <div className='max-w-screen-xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4  h-full bg-transparent backdrop-blur-lg shadow-lg shadow-slate-400'>
        {/* Privacy Policy Section */}
        <div className=''>
          <h3 className='text-lg font-bold mb-2'>Privacy Policy</h3>
          <p className='text-sm'>Your privacy is important to us. Read our privacy policy for more information.</p>
        </div>

        {/* Contacts Section */}
        <div className=''>
          <h3 className='text-lg font-bold mb-2'>Contacts</h3>
          <p className='text-sm'>Have questions? Reach out to us at <a href='mailto:info@example.com'>info@example.com</a>.</p>
        </div>

        {/* Download App Section */}
        <div className=''>
          <h3 className='text-lg font-bold mb-2'>Download Our App</h3>
          <p className='text-sm'>Get our app for a seamless car-buying experience. Available on iOS and Android.</p>
          <div className='flex space-x-2 mt-2'>
            <a href='#' className='hover:underline text-orange-300 glow'>Download on the App Store</a>
            <span className="">|</span>
            <a href='#' className='hover:underline text-orange-300 glow'>Get it on Google Play</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
