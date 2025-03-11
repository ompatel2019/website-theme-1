import React from 'react'
import Stat from './Stat'

const Stats = ({stats, bg, text}) => {
  return (
    <section className={`responsivePad ${bg} ${text} 2xl:py-12 lg:py-10 md:py-8 py-6`}>
      <div className="flex justify-between">
        {
          stats.map((stat, index) => (
            <Stat key={index+1} stat={stat.stat} statDesc={stat.statDesc} statType={stat.statType}/>
          ))
        }
      </div>
    </section>
  )
}

export default Stats