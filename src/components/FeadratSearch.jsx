import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { FEDERATED_SERACH_LIST } from './utils/helper'
import CommonButton from '../common/CommonButton'
import CommonList from '../common/CommonList'
const FeadratSearch = () => {
    return (
        <section className='bg-offWhite'>
      <div className='container py-[148px] max-xl:py-32 max-lg:py-24 max-md:py-16 max-sm:py-10'>
          <div className='flex items-center gap-12 max-lg:flex-wrap max-lg:justify-center'>
              <div className='w-6/12 max-lg:w-full'>
                  <div>
                      <CommonHeading CustomHeading='Headless federated search' />
                      <div className=' translate-x-4'>
                          {FEDERATED_SERACH_LIST.map((obj, i) => (
                              <CommonList key={i} CustomListText={obj} />
                          ))}
                      </div>
                      <div className='w-[116px] mt-6'>
                          <CommonButton CustomButton='Get a demo' />
                      </div>
                  </div>
              </div>
              <div className='w-6/12 max-lg:w-full'>
                  <img src="/assets/images/webp/working-man-img-one.webp" alt="fedrate-Search" className='w-full max-w-[600px] max-lg:mx-auto max-lg:max-w-none' />
              </div>
          </div>
            </div>
            </section>
  )
}

export default FeadratSearch