import React from 'react'
import { assets } from '../assets/assets'
import {delay, motion} from 'motion/react'



const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Browes Cars", "List Your Car", "About Us"]
        },
        {
            title: "Resources",
            links: ["Help Center", "Terms of service", "Privacy Policy", "Insurance"]
        },
        {
            title: "Contact",
            links: ["Sector 35, Noida", "Gautam buddha nagar 201307", "8114202144", "tripathiyash0231@gmail.com"]
        }
    ];

    return (
        <motion.div 
             initial={{opacity: 0, y: 30}}
              whileInView={{y:0, opacity: 1}}
              transition={{duration: 0.6}}
        className="px-6 md:px-16 lg:px-24 xl:px-32">
            <motion.div 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.3}}        
            className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <motion.img
              initial={{opacity: 0, y: 30}}
              whileInView={{y:0, opacity: 1}}
              transition={{duration: 0.6}}                   
                    className="w-34 md:w-32" src={assets.logo} alt="logo" />
                    <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.4}}                
                    className="max-w-[410px] mt-6">Premium car rental service with a wide selection of luxury and everyday vehicles 
                        for all your driving need.</motion.p>

                        <motion.div 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.3}}                    
                        className='flex items-center gap-3 mt-6'>
                        <a href="#"> <img src={assets.instagram_logo} alt="" className='w-5 h-5'/></a>
                        <a href="#"> <img src={assets.facebook_logo} alt="" className='w-5 h-5'/></a>
                        <a href="#"> <img src={assets.twitter_logo} alt="" className='w-5 h-5'/></a>
                        <a href="#"> <img src={assets.gmail_logo} alt="" className='w-5 h-5'/></a>
                        </motion.div>
                </div>
                <motion.div
             initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y:0}}
              transition={{duration: 0.6, delay: 0.4}}
                className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 ©  All Right Reserved.
            </p>
        </motion.div>
    );
};








export default Footer