import React from 'react'

const BlogSectionWrapper = ({children, sectionClass}) => {
  return (
    <div className='space-y-4'>
      {children}
    </div>
  )
}

export default BlogSectionWrapper