import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ProductImage1 from './assets/item-1.png'
import ProductImage3 from './assets/item-3.png'
import ProductImage4 from './assets/item-4.png'
import ProductImage5 from './assets/item-5.png'
import ProductImage6 from './assets/item-6.png'
import ProductImage9 from './assets/item-9.png'
import ProductImage10 from './assets/item-10.png'
import ProductImage12 from './assets/item-12.png'
import ProductImage13 from './assets/item-13.png'
import ProductImage14 from './assets/item-14.png'

import glassimg1 from './assets/sun-glass-2.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

import brand1 from './assets/brand-1.png'
import brand2 from './assets/brand-2.png'
import brand3 from './assets/brand-3.png'
import brand4 from './assets/brand-4.png'
import brand5 from './assets/brand-5.png'


const Frames = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };



  const products = [
    { id: 1, name: 'Metal Frame Anti-Blue', discription:'glasses', price:'20$', image:ProductImage1, category: 'men' },
    { id: 2, name: 'Classic Cross Knot Frame', discription:'glasses', price:'20$', image:ProductImage12, category: 'women' },
    { id: 3, name: 'Fashion Square Frame', discription:'glasses', price:'20$', image:ProductImage3, category: 'men' },
    { id: 4, name: 'Cat Eye Metal Frame', discription:'glasses', price:'20$', image:ProductImage13, category: 'women' },
    { id: 5, name: 'Classic Vintage Round Frame', discription:'glasses', price:'20$', image:ProductImage5, category: 'men' },
    { id: 6, name: 'Loewe Metal Frame', discription:'glasses', price:'20$', image:ProductImage14, category: 'women' },
    { id: 7, name: 'Rimless Ultralight Titanium Frame ', discription:'glasses', price:'20$', image:ProductImage6, category: 'men' },
    { id: 8, name: 'Dropship Rectangle Frame', discription:'glasses', price:'20$', image:ProductImage9, category: 'women' },
    { id: 9, name: 'Geometric Frame', discription:'glasses', price:'20$', image:ProductImage4, category: 'men' },
    { id: 10, name: 'Ray-Ban Aviator Frame', discription:'glasses', price:'20$', image:ProductImage10, category: 'women' },
  ];
  
  const location = useLocation();
  const initialCategory = location.state?.category || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );
  return (
    <>
    {/* -------------------------Main section */}
      <section id='Frames' className='flex justify-start items-center m-0 p-32 '>
            <div id='frames-section' className='flex justify-start items-center position-relative'>
                <div id='frames-text' className='flex-col justify-start items-center'>
                    <h1 id='frames-title' className='text-black text-6xl font-bold mb-5 w-3/5 '>UNIQUE YOU UNIQUE FRAMES</h1>
                    <p id='frames-para' className='text-gray-500 text-2xl mb-5'>Timeless sunglasses for every occasion</p>
                    <div className='flex justify-start items-center'>
                        <button id='frames-btn-1' className='text m-4 ml-0'>SHOP MEN'S</button>
                        <button id='frames-btn-2' className='text m-4'>SHOP WOMEN'S</button>
                    </div>
                </div>

                <div id='imageDiv' className='flex justify-center items-center'>
                    <img id='mainImage' src={glassimg1}  alt='eyetesting-image'></img>
                </div>
            </div>
      </section>
      
      {/* -----------------Top Product section */}
      <section id='top-products' className='h-full p-20 flex flex-col justify-evenly items-center flex-wrap'>
            <h1 className='text-5xl font-bold mb-8'>Top Products</h1>
            <div id='swipdiv' className='flex justify-evenly items-center w-4/5'>
                <Swiper onSwiper={setSwiperRef} slidesPerView={2} centeredSlides={true} spaceBetween={20} pagination={{ type: 'fraction',}}
                    navigation={true} modules={[Pagination, Navigation]} className="mySwiper w-full">
                    <SwiperSlide>
                        <div id='product1' className='product flex justify-start items-end pb-2 ps-3 hover:justify-center hover:items-center hover:pb-0 hover:ps-0 overflow-hidden'>
                            <h1 id='p-name' className='text-3xl font-bold text-white pb-5'>Men's Metal Frame</h1>
                            <div className='top-price flex justify-evenly items-center h-full w-full '>
                                <button className='product-btn'>Book Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='product2' className='product flex justify-start items-end  pb-2 ps-3 hover:justify-center hover:items-center hover:pb-0 hover:ps-0 overflow-hidden'>
                            <h1 id='p-name' className='text-3xl font-bold text-white pb-5'>Men's Browline Frame</h1>
                            <div className='top-price flex justify-evenly items-center h-full w-full '>
                                <button className='product-btn'>Book Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='product3' className='product flex justify-start items-end  pb-2 ps-3 hover:justify-center hover:items-center hover:pb-0 hover:ps-0 overflow-hidden'>
                            <h1 id='p-name' className='text-3xl font-bold text-white pb-5'>Men's Gental Monster Frame</h1>
                            <div className='top-price flex justify-evenly items-center h-full w-full'>
                                <button className='product-btn'>Book Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='product4' className='product flex justify-start items-end  pb-2 ps-3 hover:justify-center hover:items-center hover:pb-0 hover:ps-0 overflow-hidden'>
                            <h1 id='p-name' className='text-3xl font-bold text-white pb-5'>Men's Classic Frame</h1>
                            <div className='top-price flex justify-evenly items-center h-full w-full'>
                                <button className='product-btn'>Book Now</button>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='product5' className='product flex justify-start items-end  pb-2 ps-3 hover:justify-center hover:items-center hover:pb-0 hover:ps-0 overflow-hidden'>
                            <h1 id='p-name' className='text-3xl font-bold text-white pb-5'>Men's Casual Frame</h1>
                            <div className='top-price flex justify-evenly items-center h-full w-full'>
                                <button className='product-btn'>Book Now</button>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='product6' className='product flex justify-start items-end  pb-2 ps-3 hover:justify-center hover:items-center hover:pb-0 hover:ps-0 overflow-hidden'>
                            <h1 id='p-name' className='text-3xl font-bold text-white pb-5'>Men's Stylish Frame</h1>
                            <div className='top-price flex justify-evenly items-center h-full w-full'>
                                <button className='product-btn'>Book Now</button>
                            </div>
                        </div> 
                    </SwiperSlide>
                </Swiper>
            </div>
      </section>

      {/* -----------------Brand section */}
      <section id='brands' className='flex justify-center items-center h-3/5 p-9 bg-slate-300'>
            <div id='brands-section' className='flex flex-col justify-center items-center'>
                <h1 className=' text-6xl font-bold mb-6'>Brands</h1>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={brand1} alt='eyetesting-image'></img>
                    </div>
                    <div>
                        <img src={brand2} alt='eyetesting-image'></img>
                    </div>
                    <div>
                        <img src={brand3} alt='eyetesting-image'></img>
                    </div>
                    <div>
                        <img src={brand4} alt='eyetesting-image'></img>
                    </div>
                    <div>
                        <img src={brand5} alt='eyetesting-image'></img>
                    </div>
                </div>
            </div>
      </section>


      {/* ------------------------Product list section */}
      <section id='Product-List' className='flex flex-col justify-center items-center w-full h-full p-8'>
        <h1 id='Product-heading' className='text-5xl font-bold'>Frames List</h1>

        <div className='relative'>
          <button onClick={() => setSelectedCategory('all')} className={`filter-btn w-36 h-10 m-2 ${selectedCategory === 'all' ? 'active' : ''}`}>All</button>
          <button onClick={() => setSelectedCategory('men')} className={`filter-btn w-36 h-10 m-2 ${selectedCategory === 'men' ? 'active' : ''}`}>Men</button>
          <button onClick={() => setSelectedCategory('women')} className={`filter-btn w-36 h-10 m-2 ${selectedCategory === 'women' ? 'active' : ''}`}>Women</button>
        </div>

        <div id='products-section' className='flex justify-evenly items-center flex-wrap '>
          {filteredProducts.map(product => (
            <div id='Items' className='m-8'>
                <div className="item-card">
                  <div className="sidebar">
                      <div className="name text-white">
                          <h2 className='text-2xl'>{product.name}</h2>
                      </div>
                  </div>
                  <div className="card">
                      <div className="image">
                          <img src={product.image} alt='eyetesting-image'/>
                      </div>
                      <div className="content">
                          <p className="description">{product.discription}</p>
                          <p className="price">{product.price}</p>
                      </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </section>
        
    </>
  )
}

export default Frames;