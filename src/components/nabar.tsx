import React from 'react'
import Image from 'next/image'

const Main1 = () => {
  return (
    <>
      <div className="bg-[#734060] text-white flex px-[3%]">
        <Image src="/logo.png" alt="logo" width={100} height={100} className='w-[100px] h-[100px]'/>
          <h1 className='text-3xl text-slate-200 m-auto xsm:hidden sm:hidden md:block'><span className='text-6xl font-serif font-bold'>Pinch</span>   <span className='text-[#979797]'>Of</span> Yum</h1>
      </div>
    </>
  )
}

export default Main1