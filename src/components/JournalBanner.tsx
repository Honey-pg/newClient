import React from 'react';

const JournalBanner: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="bg-white p-2 hidden sm:block">
              <img src="https://i.ibb.co/6rC6Pz2/iot-cover.png" alt="Internet of Things Journal Cover" className="h-32 w-auto" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Internet of Things</h1>
              <p className="mt-2 text-lg text-gray-300">Supports open access</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-8 mt-6 md:mt-0 text-right">
            <div>
              <p className="font-bold text-2xl">12.4</p>
              <p className="text-sm text-gray-300">CiteScore</p>
            </div>
            <div>
              <p className="font-bold text-2xl">7.6</p>
              <p className="text-sm text-gray-300">Impact Factor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalBanner;
