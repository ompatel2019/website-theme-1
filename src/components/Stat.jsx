import React from 'react'
import { NumberTicker } from "@/components/magicui/number-ticker";

const Stat = ({stat, statDesc, statType}) => {
  return (
    <div>
        <p className='flex text-center items-center justify-center font-supreme-extrabold h2'>
            <NumberTicker
                value={stat}
            />
            <p>
                {statType}
            </p>
        </p>

        <h5 className='text-center font-supreme-medium h5'>
            {statDesc}
        </h5>
    </div>
  )
}

export default Stat