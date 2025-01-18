import React from 'react'
import blog1 from '../../images/blog1.webp'
import blog2 from '../../images/blog2.webp'
import blog3 from '../../images/blog3.webp'
import { Link } from 'react-router-dom'

const Blogs = ({consistentLayout, blogsSec}) => {
  const subHeading = "Latest Insights and Trends in Digital Services"

  const blogs = [
    {
      blogImage: blog1,
      blogType: 'Tutorial', 
      blogTitle: 'The Ultimate Guide to Optimising Your Website for 2025', 
      blogDescription: 'Explore essential tips for advanced SEO and website optimization techniques.',
      blogReleaseDuration: 'December 28, 2024 ⋅ 5 min read',
      blogTo: '/blogs/1'
    },
    {
      blogImage: blog2,
      blogType: 'Informative', 
      blogTitle: 'The Impact of Web Design on User Experience and Conversions', 
      blogDescription: 'Discover how thoughtful design significantly boosts user engagement and sales.',
      blogReleaseDuration: 'August 27, 2024 ⋅ 5 min read',
      blogTo: '/blogs/2'
    },
    {
      blogImage: blog3,
      blogType: 'Tutorial', 
      blogTitle: 'How to Measure the ROI of Your SEO Efforts', 
      blogDescription: 'Learn effective strategies to quantify and enhance your SEO investments.',
      blogReleaseDuration: 'October 4, 2024 ⋅ 5 min read',
      blogTo: '/blogs/3'
    },
  ]

  return (
    <section
      id='blogs'
      className={consistentLayout.section}
    >
      {/* HEADINGS */}
      <div className='text-center'>
        <p className={`${consistentLayout.sectionClass}`}>{blogsSec.toUpperCase()}</p>
        <h3 className={consistentLayout.sectionSubheadingClass}>{subHeading}</h3>
      </div>

      {/* BLOGS */}
      <div className='grid grid-cols-3 gap-8 max-md:grid-cols-1'>
        {blogs.map((blog, blogIndex) => (
          <div key={blogIndex} className='flex flex-col justify-between space-y-2'>
            <img src={blog.blogImage} alt={blog.blogTitle} width={400} height={400} loading='lazy' className='rounded-md' />
            <p className='italic text-base'>{blog.blogType}</p>
            <Link to={blog.blogTo}>
              <h4 className='p font-bold'>{blog.blogTitle}</h4>
            </Link>
            <p className='text-md'>{blog.blogDescription}</p>
            <p className='text-xs'>{blog.blogReleaseDuration}</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Blogs