import React from 'react'

const SectionHeader = ({sectionName, sectionHeader, sectionDesc, centre}) => {
  return (
    <div className={`flex flex-col h-full justify-around ${centre ? 'text-center' : ''} 2xl:space-y-8 lg:space-y-6 md:space-y-4 space-y-2`}>
      <div className='2xl:space-y-4 lg:space-y-3 md:space-y-2 space-y-1'>
        <h4 className='h7 font-supreme-medium'>
          {sectionName}
        </h4>
        <h2 className='h4 font-supreme-bold'>
          {sectionHeader}
        </h2>
      </div>
      <p className='p'>
        {sectionDesc}
      </p>
    </div>
  )
}

export default SectionHeader