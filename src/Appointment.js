import React, { useState } from 'react'

function Appointment() {
  
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
  return (
    <>
      <section id='Appointment' className='h-screen flex justify-center items-center'>
        <div id='appoint-form-section' className='w-4/5 p-10'>
          <div className="container mx-auto p-4">
                  <h1 className="text-6xl font-bold mb-4">Get Appointment</h1>
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                          <label className="block font-bold">Name:</label>
                          <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} className="border-4 rounded p-2 w-full" required/>
                      </div>

                      <div>
                          <label className="block font-bold">Age:</label>
                          <input type="number" name="age" placeholder='Enter your age' value={formData.age} onChange={handleChange} className="border-4 rounded p-2 w-full" required/>
                      </div>

                      <div>
                          <label className="block font-bold">Phone Number:</label>
                          <input type="tel" name="phoneNumber" placeholder='Enter your phone number' value={formData.phoneNumber} onChange={handleChange} className="border-4 rounded p-2 w-full" required/>
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
        </div>
      </section>

      
    </>
  )
}

export default Appointment
