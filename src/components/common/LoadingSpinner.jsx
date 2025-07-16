import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Initial */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full text-white text-2xl font-bold animate-pulse">
            HM
          </div>
        </div>
        
        {/* Loading Animation */}
        <div className="loading-dots mb-6">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-primary-500">
          <p className="text-lg font-medium mb-2">Loading Portfolio</p>
          <p className="text-sm">Preparing amazing experience...</p>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6 w-64 mx-auto">
          <div className="w-full bg-secondary-100 rounded-full h-2">
            <div className="bg-gradient-to-r from-primary-400 to-accent-400 h-2 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;