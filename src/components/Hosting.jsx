import React from 'react'
import { HOSTING_LIST } from './utils/helper'

import CommonSections from '../common/CommonSections'
const Hosting = () => {
    return (
        <section className='bg-offWhite'>
      <div className='container pb-[164px] max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10'>
          <div className='flex items-center gap-12 max-lg:flex-col-reverse max-lg:justify-center max-w-[1920px] mx-auto'>
              <div className='w-6/12 max-lg:w-full'>
                  <img src="/assets/images/webp/working-man-img-two.webp" alt="fedrate-Search" className='w-full max-lg:max-w-none max-w-[600px] max-lg:mx-auto' />
              </div>
              <div className='w-6/12 max-lg:w-full'>
                        <CommonSections
                            CommonText="Data Security and Hosting"
                            SectionList={HOSTING_LIST}
                            btnText="Get a Demo"
                        />
              </div>
          </div>
            </div>
            </section>
  )
}

export default Hosting