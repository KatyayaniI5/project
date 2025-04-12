'use client';

import { useState } from 'react';

export default function EnrollButton({ price, courseId }: { price: number; courseId: string }) {
  const [isEnrolling, setIsEnrolling] = useState(false);

  const handleEnroll = async () => {
    setIsEnrolling(true);
    try {
      // Here you would typically make an API call to handle enrollment
      alert('Enrollment feature coming soon!');
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={isEnrolling}
      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-indigo-400"
    >
      {isEnrolling ? 'Processing...' : `Enroll for $${price}`}
    </button>
  );
} 