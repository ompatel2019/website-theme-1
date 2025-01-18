import React from 'react'
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Blogs from '../pages/blogs/Blogs'

const BlogsPage = ({consistentLayout}) => {
    const blogsSec = 'Blogs';
    const pricingSec = 'Pricing';
    const contactSec = 'Contact Form';
    
    return (
        <>
        <Blogs
            blogsSec={blogsSec}
            consistentLayout={consistentLayout}
        />

        <Pricing
            pricing={pricingSec}
            consistentLayout={consistentLayout}
        />

        <ContactForm
            contactForm={contactSec}
            consistentLayout={consistentLayout}
        />
        
        </>
  )
}

export default BlogsPage