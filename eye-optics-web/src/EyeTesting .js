import React from 'react'
import './App.css'
import SocialIcons from './SocialIcons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import eyetesting_1 from './assets/eyetesting-img-1.png'
import eyetesting_2 from './assets/eyetestong-img-4.jpeg'
import doctor_2 from './assets/doctor-img-2.png'
import doctor_3 from './assets/doctor-img-3.png'

const EyeTesting = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phoneNumber: '',
        gender: ''
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, age, phoneNumber, gender } = formData;
    
        // Create the WhatsApp message
        const message = `Name: ${name}\nAge: ${age}\nPhone Number: ${phoneNumber}\nGender: ${gender}`;
    
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
    
        // WhatsApp URL with the encoded message
        const whatsappURL = `https://wa.me/923083065787?text=${encodedMessage}`;
    
        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');
      };

    const navigate = useNavigate();
        
    const handleContactClick = () => {
            navigate('/Contact');
        };
    
return (
    <>
        <section id='Eyetesting' className='h-lvh flex justify-center items-center'>
            <div id='eyetesting-section' className='h-full flex justify-center items-center p-10'>

                <div id='left-section' className='h-3/5 flex flex-col justify-evenly items-start w-2/5'>
                    <h1 id='eyetesting-subtitle' className='text-2xl'>Your Eye Health Partners</h1>
                    <h1 id='eyetesting-title' className='text-8xl text-sky-500 font-bold'>Precision Care for Every Eye</h1>
                    <p id='eyetesting-para' className='text-xl text-gray-600'>Protect your vision with proper eye care! Take regular breaks from screens, stay hydrated, and wear UV-protective sunglasses. 
                        Schedule routine eye check-ups to ensure long-term eye health and clarity.
                    </p>
                    <button id='eyetesting-btn' className='bg-sky-600 w-48 h-12 text-xl text-white rounded hover:bg-black'>Discover More</button>
                </div>
                <div id='right-section' className='w-2/5 flex justify-center items-center'>
                    
                    <div className='bg-sky-600 w-3/5  flex justify-center rounded-2xl'>
                        <img src={eyetesting_1} className=''></img>
                    </div>        
                    
                </div>
            </div>
        </section>

        {/* -----------------Doctors section */}
        <section id='Doctors' className='flex justify-center items-center'>
            <div id='doctors-section' className='flex justify-evenly items-center w-4/5 '>
                <div id='doctors-text' className='h-96 w-96 flex flex-col justify-evenly items-start'>
                    <p className='text-blue-600 text-xl font-bold'>Our Doctors</p>
                    <h1 className='text-4xl font-bold'>Meet Your Eye Care Experts</h1>
                    <p className='about-doctor text-xl'>Meet your dedicated eye care experts, committed to providing exceptional service and personalized solutions for all your vision needs.</p>
                    <button className='bg-blue-950  text-white border-2 w-44 h-10 border-white hover:bg-white hover:text-blue-950 hover:border-blue-950 rounded'>Discover More</button>
                </div>
                <div id='doctor-pic' className='border-8 border-sky-600 rounded-tr-full rounded-tl-full'>
                    <img src={eyetesting_1} className='h-96 w-64'></img>
                </div>
                <div id='doctor-pic' className='border-8 border-sky-600 rounded-tr-full rounded-tl-full'>
                    <img src={doctor_2} className='h-96 w-64'></img>
                </div>
                <div id='doctor-pic' className='border-8 border-sky-600 rounded-tr-full rounded-tl-full'>
                    <img src={doctor_3} className='h-96 w-64'></img>
                </div>
                
            </div>
        </section>

        {/* -----------------choose us section */}
        <section id='chooseus' className='h-lvh flex justify-center items-center'>
            <div id='choose-section' className='bg-blue-950 text-white w-4/5 h-4/5 flex flex-col justify-evenly items-center'>
                <div id='choose-text'className='w-full pl-20'>
                    <h2 className='text-2xl text-sky-500'>Why Choose Us</h2>
                    <h1 id='choose-heading' className='text-5xl font-bold'>Why We're Your Best Choice</h1>
                </div>
                <div id='sub-sections' className='flex justify-evenly items-center'>
                    <div id='choose-left' className='w-1/2'>
                        <div className='bg-blue-500 h-32 rounded-2xl flex flex-col justify-center p-3 m-3'>
                            <h1 className='text-3xl '>Advanced Technology</h1>
                            <p className='text-xl text-gray-800'>Experience the future of vision with our advanced technology, delivering precision and clarity for your eye care needs.</p>
                        </div>
                        <div className='bg-gray-400 hover:bg-blue-500 h-32 rounded-2xl flex flex-col justify-center p-3 m-3'>
                            <h1 className='text-3xl'>Experienced and Professional</h1>
                            <p className='text-xl text-gray-800'>Trust in our experienced and professional team, dedicated to providing exceptional eye care with expertise and compassion.</p>
                        </div>
                        <div className='bg-gray-400 hover:bg-blue-500 h-32 rounded-2xl flex flex-col justify-center p-3 m-3'>
                            <h1 className='text-3xl'>Personalized Care</h1>
                            <p className='text-xl text-gray-800'>Enjoy personalized care tailored to your unique vision needs, ensuring comfort and optimal eye health.</p>
                        </div>
                        <div className='bg-gray-400 hover:bg-blue-500 h-32 rounded-2xl flex flex-col justify-center p-3 m-3'>
                            <h1 className='text-3xl'>Comprehensive Services</h1>
                            <p className='text-xl text-gray-800'>Offering comprehensive services for all your eye care needs, from routine check-ups to advanced treatments.</p>
                        </div>

                    </div>
                    <div id='choose-right' claassName='w-2/5 flex justify-center items-center rounded overflow:hidden'>
                        <img className='rounded-2xl' src={eyetesting_2}></img>
                    </div>
                </div>
            </div>
        </section>

        {/* -------------------services section */}
        <section id='services' className='h-full flex justify-center items-center'>
            <div id='services-section' className=' w-4/5 h-full flex flex-col justify-center items-center'>
                <div id='services-text' className='h-64 flex flex-col justify-center items-center'>
                    <h5 className='text-sky-600 text-2xl'>Our Services</h5>
                    <h1 className='text-5xl font-bold'>Professional Eye Care Offerings</h1>
                </div>
                <div id='sub-services' className='flex flex-wrap justify-evenly items-center'>
                    <div id='tre-card-1' className='tre-card h-72 rounded-3xl border-2 flex justify-center items-center'>
                        <div id='treatment-text' className='flex flex-col justify-start bg-blue-400 rounded-2xl p-5 w-4/5 h-4/5'>
                            <h1 className='text-4xl text-white font-bold'>Dry Eye Treatment</h1>
                            <p className='text-white'>Relieve discomfort with our specialized dry eye treatment, designed to soothe irritation and restore moisture. 
                                Our personalized approach helps improve long-term eye comfort and overall eye health.
                            </p>
                        </div>
                    </div>
                    <div id='tre-card-2' className='tre-card h-72 rounded-3xl border-2 flex justify-center items-center'>
                        <div id='treatment-text' className='flex flex-col justify-start bg-blue-400 rounded-2xl p-5 w-4/5 h-4/5'>
                            <h1 className='text-4xl text-white font-bold'>Eye Disease Care</h1>
                            <p className='text-white'>Receive expert care for a range of eye diseases, ensuring early detection and effective treatment. 
                                Our advanced diagnostics and personalized treatment plans protect your vision and promote long-term eye health.
                            </p>
                        </div>
                    </div>
                    <div id='tre-card-3' className='tre-card h-72 rounded-3xl border-2 flex justify-center items-center'>
                        <div id='treatment-text' className='flex flex-col justify-start bg-blue-400 rounded-2xl p-5 w-4/5 h-4/5'>
                            <h1 className='text-4xl text-white font-bold'>Surgical Eye Care</h1>
                            <p className='text-white'>Offering advanced surgical eye care with precision and expertise, ensuring safe and effective procedures 
                                for various eye conditions. Trust our skilled surgeons to restore and enhance your vision.
                            </p>
                        </div>
                    </div>
                    <div id='tre-card-4' className='tre-card h-72 rounded-3xl border-2 flex justify-center items-center'>
                        <div id='treatment-text' className='flex flex-col justify-start bg-blue-400 rounded-2xl p-5 w-4/5 h-4/5'>
                            <h1 className='text-4xl text-white font-bold'>Contact Lens Fitting</h1>
                            <p className='text-white'>Experience comfortable and precise contact lens fitting tailored to your vision and lifestyle. Our 
                                experts ensure the perfect fit for optimal clarity and comfort.
                            </p>
                        </div>
                    </div>
                    <div id='tre-card-contact' className='tre-card h-72 bg-blue-950 rounded-3xl border-2 flex flex-col justify-evenly items-center p-6'>
                        <h1 className='text-2xl text-white font-bold'>Take the first step toward healthier eyes and see the world more clearly</h1>
                        <button className='text-white border-2 w-44 h-10 border-white hover:bg-white hover:text-blue-950 rounded ease-in-out'  onClick={handleContactClick}>Contact Us</button>
                    </div>
                    <div id='tre-card-5' className='tre-card h-72 rounded-3xl border-2 flex justify-center items-center'>
                        <div id='treatment-text' className='flex flex-col justify-start bg-blue-400 rounded-2xl p-5 w-4/5 h-4/5'>
                            <h1 className='text-4xl text-white font-bold'>Color Vision Testing</h1>
                            <p className='text-white'>Discover accurate color vision testing to diagnose and manage color vision deficiencies. Our 
                                tests provide detailed insights for personalized care and improved visual experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* -------------Apointment form section */}
        <section id='Appointment-form' className='flex justify-center items-center'>
            <div className="container mx-auto p-4">
                <h1 className="text-6xl font-bold mb-4">Get Appointment</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-bold">Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-4 rounded p-2 w-full" required/>
                    </div>

                    <div>
                        <label className="block font-bold">Age:</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} className="border-4 rounded p-2 w-full" required/>
                    </div>

                    <div>
                        <label className="block font-bold">Phone Number:</label>
                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border-4 rounded p-2 w-full" required/>
                    </div>

                    <div>
                        <label className="block font-bold">Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="border-4 rounded p-2 w-full" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-sky-600 ">Get Appointment</button>
                </form>
            </div>
        </section>     
        
    </>
  )
}

export default EyeTesting;
