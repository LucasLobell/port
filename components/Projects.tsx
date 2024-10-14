import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='mx-[clamp(12px,11.75vw,300px)] font-inter 2xl:mt-[75px]'>
      <div className='w-full justify-between flex flex-row'>
        <span className='uppercase 2xl:text-[18px] text-white'>Featured Projects</span>
        <span className='uppercase 2xl:text-[14px] text-white text-opacity-75'>More Projects</span>
      </div>
      <div>
        <Image src='' alt='' width={5} height={5} />
        <div>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <button></button>
            <Image src='' alt='' width={5} height={5} />
          </div>
        </div>
      </div>
      <div>
        <Image src='' alt='' width={5} height={5} />
        <div>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <button></button>
            <Image src='' alt='' width={5} height={5} />
          </div>
        </div>
      </div>
      <div>
        <Image src='' alt='' width={5} height={5} />
        <div>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <button></button>
            <Image src='' alt='' width={5} height={5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects