import Image from 'next/image'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'
import { IoStar } from 'react-icons/io5'

const Menu = async({searchParams}:{searchParams:Promise<{cardImage:string,cardTitle:string,cardDescription:string,cardRecipe:string,cardRating:number,cardPrice:number}>}) =>
     {

          const {cardImage,cardTitle,cardDescription,cardRecipe,cardRating,cardPrice}=await searchParams
      return (
    <>
    <div className='w-full bg-orange-50'>
    <div className='xsm:flex-col md:flex'>
        <Image src={cardImage} alt={cardTitle} width={600} height={600} className='xsm:w-full md:w-[600px]'/>
        <div>
            <h1 className='text-5xl text-center text-[#734060] font-bold pt-[50px] mb-[30px]'>{cardTitle}</h1>
            <p className='text-2xl text-center text-[#734060] font-semibold pt-[10px] mb-[10px]'>
                {cardDescription}
            </p>
            <div className='flex gap-2 pl-[10px] items-center'>
                {[...Array(cardRating)].map((_, index) => {
                return (
                    <IoStar color='orange' size={18} key={index}/>
                )
                })}
            </div>
          
           <p className='pl-[10px] font-semibold text-[18px]'><span>Price:</span> {cardPrice}</p>
           
           <p className='pl-[10px]'><span className='font-semibold text-[18px]'>Recipe:</span>{cardRecipe}</p>
           </div>
      </div>
      <footer className='bg-[#381229] text-white mt-[20px] xsm:w-full h-full md:h-[400px]'>
      <div className='flex justify-between xsm:gap-5 md:gap-0'>
      <div className='flex flex-col ml-[3%]'>
         <h1 className='text-3xl  text-white font-semibold pt-[50px] mb-[10px]'><span className="text-5xl text-[#dab335] ">Pinch</span> Of Yum</h1>
            <span className='flex gap-4 items-center'>
            <FaFacebookSquare size="2rem" color="#facc15"/>
            <FaSquareInstagram size="2rem" color="#facc15"/>
            <FaSquareTwitter size="2rem" color="#facc15"/>
            </span>
         </div>
         <div className='w-[2px] h-[300px] bg-white mt-[50px]'></div>
          <div className='xsm:hidden md:flex justify-center gap-9 mb-[150px] mt-[50px] mr-[250px]'> 
          <div className='flex flex-col'>
          <h1 className='text-2xl font-semibold mb-[10px]'>About Us</h1>
          <p className='text-[#979797]'>Our Story</p>
          <p className='text-[#979797]'>Our Team</p>
          <p className='text-[#979797]'>Careers</p>
          </div>
          <div className='flex flex-col'>
          <h1 className='text-2xl font-semibold mb-[10px]'>Services</h1>
          <p className='text-[#979797]'>Order Online</p>
          <p className='text-[#979797]'>Catering</p>
          <p className='text-[#979797]'>Gift Cards</p>
          </div>
          <div className='flex flex-col'>
          <h1 className='text-2xl font-semibold mb-[10px]'>Contact Us</h1>
          <p className='text-[#979797]'>Contact</p>
          <p className='text-[#979797]'>Support</p>
          <p className='text-[#979797]'>Destinations</p>
          </div>
          </div>
      </div>
         <p className='text-center text-[#979797] xsm:ml-[10px] md:ml-[210px]'><span className='text-yellow-500'>©</span> 2021 Pinch Of Yum</p>
         <p className='text-center text-[#979797] xsm:ml-[10px] md:ml-[210px]'>All rights reserved</p>
        
      
         </footer>
    </div>
  </>
  )
}

export default Menu
