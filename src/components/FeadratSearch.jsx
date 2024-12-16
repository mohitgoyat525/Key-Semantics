import React from 'react'
import CommonSections from '../common/CommonSections'
import { FEDERATED_SERACH_LIST } from './utils/helper'
const FeadratSearch = () => {
    return (
        <section className='bg-offWhite'>
      <div className='container py-[148px] max-xl:py-32 max-lg:py-24 max-md:py-16 max-sm:py-10'>
          <div className='flex items-center gap-12 max-lg:flex-wrap max-lg:justify-center'>
              <div className='w-6/12 max-lg:w-full'>
                        <CommonSections
                            CommonText="Headless federated search"
                            SectionList={FEDERATED_SERACH_LIST}
                            btnText="Get a Demo"
                        />
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