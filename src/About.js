import React from 'react'

function About() {
  return (
    <>
      <section id='About' className='h-screen flex justify-center items-center'>
        <div id='about-section' className='flex flex-col justify-center items-center h-3/4 w-3/4'>
          <h1 className='font-bold text-6xl mb-10'>About Us</h1>
            <div id='about-text' className='w-3/4 text-white'>
                <p className='text-2xl leading-8 mb-7'>At OptoNik, we believe that clear vision is the foundation of a better life. 
                Established with the mission to bring high-quality, stylish, and affordable eyewear to everyone, 
                we’re committed to helping you see the world with clarity and confidence.
                </p>
                <p className='text-2xl leading-8'>Our journey began with a simple vision: to combine cutting-edge optical technology with modern, 
                fashionable designs that cater to all lifestyles. Whether you’re seeking prescription glasses, 
                blue light lenses, or the latest sunglasses, we offer a wide range of options for every need.
                </p>
            </div>
        </div>
      </section>

      <section id='about-second-section' className='flex flex-col justify-evenly items-start p-10 h-screen text-white'>
        <div className='a-s-s-heading relative left-40'>
          <h1 className='font-bold text-6xl'>Why Choose OptoNik?</h1>
        </div>
        <div id='a-s-s-options' className='w-3/5'>
          <p className='text-xl leading-10 mb-3'><span className='text-3xl font-bold'>Premium Quality:</span> Our eyewear is crafted from the finest materials to ensure durability and comfort, without compromising on style.</p>
          <p className='text-xl leading-10 mb-3'><span className='text-3xl font-bold'>Expert Care:</span> We collaborate with experienced opticians to ensure your glasses are tailored perfectly to your vision needs.</p>
          <p className='text-xl leading-10 mb-3'><span className='text-3xl font-bold'>Wide Selection:</span> From classic designs to trendy frames, we offer something for everyone – whether you're looking for professional, casual, or statement-making glasses.</p>
          <p className='text-xl leading-10 mb-3'><span className='text-3xl font-bold'>Affordable Pricing:</span> Quality eyewear shouldn’t break the bank. At Eye-Optics, we offer transparent pricing to ensure you get the best value.</p>
          <p className='text-xl leading-10 mb-3'><span className='text-3xl font-bold'>Sustainability:</span> We care about our planet. That's why many of our frames are made from eco-friendly materials, contributing to a more sustainable future.</p>
        </div>
      </section>

      <section id='a-s-s-promise' className='flex justify-center items-center '>
        <div id='promise-div' className='flex flex-col justify-center items-center bg-slate-300 w-4/5 h-80 border-1 rounded-3xl'>
          <h1 className='font-bold text-6xl mb-6'>Our Promise</h1>
          <p className='text-xl w-3/4 mb-5'>At OptoNik, we’re not just about selling glasses; we’re about creating a customer experience that values your vision and style. 
            Our dedicated team is here to guide you through every step of the process, from selecting the perfect frame to ensuring the best 
            optical fit. We’re committed to delivering eyewear that not only helps you see better but helps you look and feel your best.
          </p>
          <p className='text-xl w-3/4'>Thank you for trusting OptoNik with your vision. We’re excited to be part of your journey toward clearer, sharper sight.</p>
        </div>
      </section>

      
    </>
    
  )
}

export default About
