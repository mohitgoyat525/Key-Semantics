import React, { useState } from 'react'
import { FOOTER_LEFT_ICON, FOOTER_RIGHT_ICON } from '../components/utils/icons'

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, company, phone });
  };

  return (
    <footer className="bg-darkBlue h-full">
      <div className="container relative">
        <p className="absolute top-0 left-0 max-sm:hidden">
          <FOOTER_LEFT_ICON />
        </p>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-white font-bold text-[32px] text-center leading-[72px] max-lg:text-3xl max-md:text-2xl pt-24 max-xl:pt-20 max-lg:pt-16 max-md:pt-10 max-sm:pt-6">
            How does KeySemantics work?
          </h2>
          <p className="font-normal text-base text-center text-white leading-[28px] pt-2">
            Request a demo for your team and let us show you how KeySemantics can help your company
          </p>
          <form
            className="flex items-center justify-center flex-col mt-[64px] max-xl:mt-11 max-lg:mt-8 max-md:mt-5"
            onSubmit={handleSubmit}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 border border-solid border-[#24254B] rounded-full outline-none placeholder:text-[#7C7EB9] text-[#7C7EB9] font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px]"
              placeholder="Name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 border border-solid border-[#24254B] rounded-full outline-none placeholder:text-[#7C7EB9] text-[#7C7EB9] font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2"
              placeholder="Email"
              required
            />
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 border border-solid border-[#24254B] rounded-full outline-none placeholder:text-[#7C7EB9] text-[#7C7EB9] font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2"
              placeholder="Company"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="bg-[#24254B] w-[320px] mx-auto py-4 px-5 border border-solid border-[#24254B] rounded-full outline-none placeholder:text-[#7C7EB9] text-[#7C7EB9] font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2"
              placeholder="Phone (optional)"
            />
            <p className="text-[10px] font-normal leading-[14px] text-center text-[#7C7DB9] pt-4 pb-6">
              By submitting my contact information I agree to the KeySemantics Privacy Policy
            </p>
            <button
              type="submit"
              className="border border-solid border-[#48C3D7] rounded-full bg-[#48C3D7] text-white py-4 px-[32px] font-medium text-sm leading-[20px] min-w-[180px] mb-24 max-xl:mb-20 max-lg:mb-14 max-md:mb-8 max-sm:mb-5"
            >
              Request a demo
            </button>
          </form>
        </div>
        <p className="absolute bottom-0 right-0 max-sm:hidden">
          <FOOTER_RIGHT_ICON />
        </p>
      </div>
      <div className="bg-[#111235] p-6">
        <div className="container flex items-center justify-between max-sm:flex-col max-sm:justify-center">
          <p className="text-xs font-normal text-[#7C7DB9] leading-[28px] max-sm:text-center">
            ©2024 KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland
          </p>
          <p className="text-xs font-normal text-[#7C7DB9] leading-[28px]">info@keysemantics.ch</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;