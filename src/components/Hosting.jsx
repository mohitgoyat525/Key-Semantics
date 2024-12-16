import React from 'react'
import { HOSTING_LIST } from '../utils/helper'

import CommonSections from '../common/CommonSections'
const Hosting = () => {
    return (
        <section className='bg-offWhite'>
            <div className='container pb-[164px] max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10'>
                <CommonSections
                    CommonText="Data Security and Hosting"
                    SectionList={HOSTING_LIST}
                    btnText="Get a Demo"
                    PeopleImg='/assets/images/webp/working-man-img-two.webp'
                    myClass='flex-row-reverse'
                />
            </div>
        </section>
    )
}

export default Hosting