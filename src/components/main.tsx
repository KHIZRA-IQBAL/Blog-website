import Image from 'next/image';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6';
import React from 'react';
import { IoStar } from 'react-icons/io5';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

// ✅ Define types for fetched data
type HeroSection = {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
};

type Card = {
  cardImage: string;
  cardTitle: string;
  cardDescription: string;
  cardRecipe: string;
  cardRating: string;
  cardPrice: string;
};

type CardSection = {
  cardSectionheading: string;
  cardSectionparagraph: string;
  cardSectionCards: Card[];
};

type SpecialCard = {
  specialCardImage1: string;
  specialCardImage2: string;
};

const Food = async () => {
  // ✅ Fetch Hero Section Data
  const res: HeroSection = await client.fetch(`
    *[_type == 'landingPage'][0]{
      'heroTitle': sectionPage[0].heroTitle,
      'heroSubtitle': sectionPage[0].heroSubtitle,
      'heroImage': sectionPage[0].heroImage.asset->url
    }
  `);

  const { heroTitle, heroSubtitle, heroImage } = res;

  // ✅ Fetch Card Section Data
  const Data1: CardSection = await client.fetch(`
    *[_type == 'landingPage'][0].sectionPage[1]{
      'cardSectionheading': cardSectionheading,
      'cardSectionparagraph': cardSectionparagraph,
      'cardSectionCards': cardSectionCards[]{
        'cardImage': cardImage.asset->url,
        'cardTitle': cardTitle,
        'cardDescription': cardDescription,
        'cardRecipe': cardRecipe,
        'cardRating': cardRating,
        'cardPrice': cardPrice
      }
    }
  `);

  // ✅ Fetch Special Card Data
  const Data2: SpecialCard[] = await client.fetch(`
    *[_type == 'landingPage'][0].sectionPage[2].specialCardImages[]{
      'specialCardImage1': specialCardImage1.asset->url,
      'specialCardImage2': specialCardImage2.asset->url
    }
  `);

  return (
    <>
      {/* Hero Section */}
      <div className="xsm:overflow-x-hidden sm:overflow-x-hidden md:w-full bg-orange-50">
        <div className="md:flex justify-between px-[40px] bg-orange-50">
          <h1 className="text-5xl pt-[50px] text-center text-yellow-500 pb-[20px]">
            <span className="text-[#734060] font-bold">Your</span>
            {heroTitle}
          </h1>
          <h1 className="text-3xl text-center text-[#734060] font-semibold pt-[50px]">
            {heroSubtitle}
          </h1>
        </div>
        <Image
          src={heroImage}
          alt="Hero Image"
          width={1440}
          height={700}
          className="xsm:w-full md:w-[1440px] xsm:h-full md:h-[700px]"
        />
      </div>

      {/* Special Cards Section */}
      <div>
        <h1 className="text-5xl text-center text-[#734060] font-bold pt-[50px] mb-[30px]">
          Our <span className="text-yellow-500 font-semibold">Specialities</span>
        </h1>
        <div className="flex justify-center gap-8 w-full">
          {Data2.map((item, index) => (
            <div className="flex gap-4" key={index}>
              <Image
                src={item.specialCardImage1}
                alt="Special Image 1"
                width={400}
                height={400}
              />
              <Image
                src={item.specialCardImage2}
                alt="Special Image 2"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Card Section */}
      <div className="bg-orange-50">
        <h1 className="text-5xl text-center text-[#734060] font-bold pt-[50px] mb-[15px]">
          Our <span className="text-yellow-500 font-semibold">{Data1.cardSectionheading}</span>
        </h1>
        <p className="text-2xl text-center text-[#734060] font-semibold pt-[10px] mb-[10px]">
          {Data1.cardSectionparagraph}
        </p>
        <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xsm:gap-4 md:gap-4 pt-[20px] xsm:px-[4%] md:px-[13%]">
          {Data1.cardSectionCards.map((item, index) => (
            <Link
              href={`/menu/itemdetails?cardImage=${item.cardImage}&cardTitle=${item.cardTitle}&cardDescription=${item.cardDescription}&cardRecipe=${item.cardRecipe}&cardRating=${item.cardRating}&cardPrice=${item.cardPrice}`}
              key={index}
            >
              <div className="flex flex-col items-center w-[300px] rounded-2xl">
                <Image
                  src={item.cardImage}
                  alt={item.cardTitle}
                  width={700}
                  height={700}
                  className="w-[300px] h-[300px] rounded-2xl"
                />
                <div className="w-full mt-[10px]">
                  <h1 className="text-2xl">{item.cardTitle}</h1>
                  <p>{item.cardDescription}</p>
                  <div className="flex gap-2">
                    {[...Array(Number(item.cardRating))].map((_, i) => (
                      <IoStar color="orange" size={18} key={i} />
                    ))}
                  </div>
                  <p>{item.cardPrice}</p>
                  <Link href={`/menu/${index}`}>
                    <button className="hover:text-yellow-500 text-[#734060] font-semibold">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
          <div className="flex flex-col justify-center items-center bg-[#f5f5f5] w-[300px] h-[300px] rounded-2xl">
            <button className="text-yellow-500 font-semibold text-3xl">Order Now</button>
            <p className="text-[#855975] font-semibold text-1xl">
              and get 20% off on your first order
            </p>
          </div>
        </div>
         <footer className='bg-[#381229] text-white mt-[20px] xsm:w-full h-full md:h-[400px]'>
              <div className='flex justify-between xsm:gap-5 md:gap-0'>
              <div className='flex flex-col ml-[3%]'>
                 <h1 className='text-3xl  text-white font-semibold pt-[50px] mb-[10px]'><span className="text-5xl text-[#dab335] ">Pinch</span> Of Yum</h1>
                    <span className='flex gap-4 items-center'>
                    <FaFacebookSquare size="2rem" color="#facc15" />
                    <FaSquareInstagram size="2rem" color="#facc15" />
                    <FaSquareTwitter size="2rem" color="#facc15" />
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
  );
};

export default Food;



