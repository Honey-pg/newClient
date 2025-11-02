import React from 'react';

const EditorInChief: React.FC = () => {
  return (
    <div className="bg-brand-blue text-white p-6 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Editor-in-Chief</h3>
        <a href="#" className="text-sm font-semibold hover:underline">View full editorial board</a>
      </div>
      <div className="flex items-center gap-4">
        <img src="https://i.ibb.co/G03gCjD/prof-xhafa.jpg" alt="Professor F. Xhafa" className="h-20 w-20 rounded-full object-cover" />
        <div>
          <p className="font-bold text-lg">Professor F. Xhafa</p>
          <p className="text-sm text-gray-300">Universitat Politècnica de Catalunya, Barcelona, Spain</p>
        </div>
      </div>
    </div>
  );
};

export default EditorInChief;
