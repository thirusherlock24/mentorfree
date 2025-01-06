import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6 lg:px-20 xl:px-40">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">Mentor Free</span>
      </h1>
      <h1 className="text-3xl font-extrabold text-red-800 mb-6">
         Site Under Development 
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-8">
        Connecting mentors with mentees through a decentralized network. Empowering individuals to achieve their dreams with guidance, mentorship, and community support.
      </p>
      
      <p className="text-lg text-gray-600 max-w-3xl mb-8">
        We are working hard to bring you an amazing experience! In the meantime, join our WhatsApp community to stay updated and connect with mentors and mentees.
      </p>

      {/* Call-to-Action */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <a
          href="https://chat.whatsapp.com/HQdm1QEwtoBGvHFEITD3hy" // Replace with your WhatsApp group link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-300"
        >
          Join WhatsApp Community
        </a>
        <a
          href="/about"
          className="px-6 py-3 text-lg text-green-500 bg-white border border-green-500 rounded hover:bg-green-500 hover:text-white transition-colors duration-300"
        >
          Learn More About Us
        </a>
      </div>

      {/* Features Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Decentralized Network</h3>
          <p className="text-gray-600">
            Create a strong, self-sustaining network where everyone can be a mentor and a mentee, fostering growth and opportunities.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Accessible Mentorship</h3>
          <p className="text-gray-600">
            Provide free paths to mentees and affordable guidance through experienced mentors across various fields.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Support</h3>
          <p className="text-gray-600">
            Join a vibrant community of mentors and mentees, sharing knowledge, experiences, and career guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
