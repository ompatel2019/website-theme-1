import React from 'react'

const Section = ({bg, text, py, children}) => {
    py ? '' : py = '2xl:py-24 xl:py-16 md:py-12 py-8'
  return (
    <section className={`${bg} ${text} ${py} responsivePad space-y-8`}>
        {children}
    </section>
  )
}

export default Section