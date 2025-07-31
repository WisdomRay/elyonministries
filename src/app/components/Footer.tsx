"use client";
import Image from 'next/image';

export default function Footer() {
  return (
   <div className="bg-black text-white">
  {/* Banner section */}
  <div className="relative md:h-[900px] h-[300px]">
    <Image
      src="/Images/footer/footer_banner.svg"
      alt="Footer Banner"
      width={400}
      height={400}
      className="object-cover w-full h-full"
    />
    <div className="md:hidden py-4 absolute top-4 left-1/2 transform -translate-x-1/2 text-center w-full">
      <p className="font-sans text-[12px] font-medium mb-4">FAVOURITE QUOTE</p>
      <blockquote className="font-sans text-[20px] font-semibold">
        “One moment in God&rsquo;s presence can change everything.”
      </blockquote>
    </div>
  </div>

  {/* Central white card */}
  <div className="bg-white rounded-2xl px-6 py-[70px] md:max-w-2xl lg:max-w-4xl mx-auto md:mt-[-300px] mt-[-100px] relative z-10">
    <div className="text-black text-center md:w-[60%] mx-auto">
      <p className="font-bold text-[24px] md:text-[44px] font-merriweather">See You This Sunday</p>
      <p className="font-sans text-sm font-medium">
        Grow stronger in your walk with God and connect with a loving church family.
      </p>
    </div>

    {/* Service Times */}
    <div className="bg-black p-2 font-sans font-bold text-[18px] text-center rounded-2xl mb-4 mt-6 md:w-[60%] mx-auto">
      <div className="flex justify-between  mb-4">
        <div className="bg-white text-black px-4 py-2 rounded-md text-sm">6:30am</div>
        <div className="bg-white text-black px-4 py-2 rounded-md text-sm">8:00am</div>
        <div className="bg-white text-black px-4 py-2 rounded-md text-sm">9:30am</div>
      </div>
      <p>(GMT +1)</p>
    </div>

    {/* Contact Button */}
    <div className="flex justify-center items-center">
      <button className="text-white bg-[#C83737] w-full md:w-[60%] py-2 rounded-full">Contact us</button>
    </div>
  </div>

  {/* Footer Section */}
  <footer className="mt-10 px-6 py-12 text-white">
    <div className="flex flex-col md:flex-row justify-between gap-8">
      {/* Logo */}
      <div>
        <Image src="/images/logo.svg" alt="Logo" width={48} height={48} />
      </div>

      {/* Links */}
      <div>
        <p className="font-bold text-sm mb-2">Quick Links</p>
        <ul className="flex flex-col gap-1">
          <li><a href="#" className="hover:text-[#FFD700]">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About us</a></li>
          <li><a href="#" className="hover:text-gray-300">Give</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <p className="font-bold text-sm mb-2">Contact</p>
        <p>+2349012667508</p>
        <p>+2348131667803</p>
        <p>19 Ikot Anyang Offot, Uyo, Akwa Ibom - Nigeria</p>
        <div className="flex gap-4 mt-2">
          <Image src="/images/phone.svg" alt="Phone" width={24} height={24} />
          <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <p className="text-center text-sm mt-10 text-gray-400">
      © 2025 – Elyon Life Ministry | All Rights Reserved
    </p>
  </footer>
</div>

  )
}
