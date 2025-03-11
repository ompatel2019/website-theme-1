import React from 'react'
import { Link } from 'react-router-dom'

const CTAMini = ({text}) => {
  return (
  <div className="">
    <div className="bg-primary px-4 py-3 text-black shadow-lg font-supreme-medium">
      <Link to="/contact-us" className='flex justify-center items-center'>
        <p className="text-center max-md:text-sm p">
        {text}
        </p>
        <i className="bi bi-arrow-right-circle-fill ml-1 h7"></i>
      </Link>
    </div>
  </div>
  )
}

export default CTAMini