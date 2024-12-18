import React from 'react'
import { HOSTING_LIST } from '../utils/helper'

import CommonSections from '../common/CustomSections'
const Hosting = () => {
    return (
        <div className='bg-offWhite'>
            <div className='container pb-[164px] max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10'>
                <CommonSections
                    commonText="Data Security and Hosting"
                    sectionList={HOSTING_LIST}
                    btnText="Get a Demo"
                    peopleImg='/assets/images/webp/working-man-img-two.webp'
                    myClass='flex-row-reverse'
                />
            </div>
        </div>
    )
}

export default Hosting