import React from 'react'
import CommonSections from '../common/CustomSections'
import { FEDERATED_SERACH_LIST } from '../utils/helper'
const FeadratSearch = () => {
  return (
    <div className='bg-offWhite'>
      <div className='container py-[148px] max-xl:py-32 max-lg:py-24 max-md:py-16 max-sm:py-10'>
        <CommonSections commonText="Headless federated search" sectionList={FEDERATED_SERACH_LIST} btnText="Get a Demo" peopleImg='/assets/images/webp/working-man-img-one.webp' />
      </div>
    </div>
  )
}

export default FeadratSearch