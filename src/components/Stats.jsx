import React, { useState, useEffect } from 'react'
import Stat from './Stat'
import Section from './Section'

const Stats = ({ stats, bg, text }) => {
  const py = '2xl:py-12 lg:py-10 md:py-8 py-6'
  
  // Custom hook to track screen width
  const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return width
  }

  const width = useScreenWidth()
  const displayedStats = width < 768 ? stats.slice(0, 2) : stats

  return (
    <Section bg={bg} text={text} py={py}>
      <div className="flex justify-between mt-[-10px]">
        {displayedStats.map((stat, index) => (
          <Stat 
            key={index + 1} 
            stat={stat.stat} 
            statDesc={stat.statDesc} 
            statType={stat.statType} 
          />
        ))}
      </div>
    </Section>
  )
}

export default Stats
