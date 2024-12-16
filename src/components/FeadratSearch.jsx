import React from 'react'
import CommonSections from '../common/CommonSections'
import { FEDERATED_SERACH_LIST } from '../utils/helper'
const FeadratSearch = () => {
    return (
        <section className='bg-offWhite'>
      <div className='container py-[148px] max-xl:py-32 max-lg:py-24 max-md:py-16 max-sm:py-10'>
            <CommonSections CommonText="Headless federated search"SectionList={FEDERATED_SERACH_LIST}btnText="Get a Demo" PeopleImg='/assets/images/webp/working-man-img-one.webp'/>
            </div>
            </section>
  )
}

export default FeadratSearch