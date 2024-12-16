import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonButton from '../common/CommonButton'
import { HOSTING_LIST } from './utils/helper'
import CommonList from '../common/CommonList'

const Hosting = () => {
    return (
        <section className='bg-offWhite'>
      <div className='container pb-[164px] max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10'>
          <div className='flex items-center gap-12 max-lg:flex-col-reverse max-lg:justify-center'>
              <div className='w-6/12 max-lg:w-full'>
                  <img src="/assets/images/webp/working-man-img-two.webp" alt="fedrate-Search" className='w-full max-lg:max-w-none max-w-[600px] max-lg:mx-auto' />
              </div>
              <div className='w-6/12 max-lg:w-full'>
                  <div>
                      <CommonHeading CustomHeading='Data Security and Hosting' />
                      <div className=' translate-x-4'>
                          {HOSTING_LIST.map((obj, i) => (
                              <CommonList key={i} CustomListText={obj} />
                          ))}
                      </div>
                      <div className='w-[116px] mt-6'>
                          <CommonButton CustomButton='Get a demo' />
                      </div>
                  </div>
              </div>
          </div>
            </div>
            </section>
  )
}

export default Hosting