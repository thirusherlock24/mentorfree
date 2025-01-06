import React from 'react';

const Contributors: React.FC = () => {
  const contributors = [
    { name: 'Thirunavukarasu L', role: 'Full Stack Developer' },
    { name: 'Barath', role: 'Full Stack Developer' },
    { name: 'Sanjeev', role: 'Full Stack Developer' },
    { name: 'Yasaswini', role: 'Research and Development' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20 xl:px-40">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
        Meet the <span className="text-blue-600">Contributors</span>
      </h1>

      {/* Contributors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4">
              {contributor.name.charAt(0)}
            </div>
            <p className="text-xl font-semibold text-gray-800">{contributor.name}</p>
            <p className="text-gray-500">{contributor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
