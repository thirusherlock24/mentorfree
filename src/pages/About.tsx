import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20 xl:px-40">
      {/* Title Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          About <span className="text-blue-600">Mentor Free</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Empowering individuals through a decentralized mentoring network to unlock career opportunities and foster professional growth.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Column 1: Our Mission */}
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To design a platform connecting professionals as mentors with unemployed individuals, empowering them through decentralized networks.
          </p>
        </div>

        {/* Column 2: How We Plan to Start */}
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Plan to Start</h2>
          <p className="text-gray-600">
            We will personally invite professionals to a WhatsApp community, where they can bring other mentors and mentees. This will create a decentralized network for career guidance.
          </p>
          <p className="text-gray-600 mt-4">
            The platform will serve as a hub to organize and manage mentoring, connecting mentees with professionals across various fields.
          </p>
        </div>

        {/* Column 3: Our Objective */}
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Objective</h2>
          <p className="text-gray-600">
            Mentors provide free initial guidance, with the option to charge a minimal fee (up to 1000 bucks/month) for extended support, fostering growth for both mentors and mentees.
          </p>
          <p className="text-gray-600 mt-4">
            We believe everyone can be a mentor and a mentee, creating a self-sustaining, decentralized network of opportunities.
          </p>
        </div>
      </div>

      {/* Final Note */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          <strong>Note:</strong> MentorFree.org is a free service platform. However, if you find value, we encourage mentors and mentees to donate to support our mission.
        </p>
      </div>
    </div>
  );
};

export default About;
