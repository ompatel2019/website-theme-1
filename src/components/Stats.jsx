import React from 'react'
import Stat from './Stat'
import Section from './Section'

const Stats = ({stats, bg, text}) => {
  const py = '2xl:py-12 lg:py-10 md:py-8 py-6'
  return (
    <Section bg={bg} text={text} py={py}>
        <div className="flex justify-between">
          {
            stats.map((stat, index) => (
              <Stat key={index+1} stat={stat.stat} statDesc={stat.statDesc} statType={stat.statType}/>
            ))
          }
        </div>
    </Section>
  )
}

export default Stats