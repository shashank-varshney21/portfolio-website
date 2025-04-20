import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
        <h2 className='text-center text-5xl font-Ovo'>My services</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am a frontend developer from India with 3 years of Experience in multiple companies like Microsoft, Tesla and Apple.
        </p>

        <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
            {serviceData.map(({icon,title,description,link},index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-[#2a004a] dark:hover:shadow-white'> 
                    <Image src={icon} alt='' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-4 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt=''/></a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services