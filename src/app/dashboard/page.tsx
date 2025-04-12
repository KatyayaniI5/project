'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const COURSES = [
  {
    id: '1',
    title: 'Startup Fundamentals',
    description: 'Learn the essential building blocks of creating a successful startup, from ideation to market validation.',
    price: 99.99,
    image: '/images/courses/startup-fundamentals.jpg',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Ideation and Problem Validation',
        description: 'Learn how to identify and validate real market problems.'
      },
      {
        id: 'lesson-2',
        title: 'Business Model Development',
        description: 'Create a sustainable business model for your startup.'
      }
    ]
  },
  {
    id: '2',
    title: 'Marketing Strategy',
    description: 'Master the art of startup marketing with proven techniques and strategies.',
    price: 149.99,
    image: '/images/courses/marketing.jpg',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Digital Marketing Fundamentals',
        description: 'Learn the basics of digital marketing for startups.'
      },
      {
        id: 'lesson-2',
        title: 'Growth Hacking Techniques',
        description: 'Discover effective growth hacking strategies.'
      }
    ]
  },
  {
    id: '3',
    title: 'Fundraising Essentials',
    description: 'Learn how to raise capital and pitch to investors effectively.',
    price: 199.99,
    image: '/images/courses/fundraising.jpg',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Pitch Deck Creation',
        description: 'Create a compelling pitch deck for investors.'
      },
      {
        id: 'lesson-2',
        title: 'Investor Relations',
        description: 'Learn how to build and maintain investor relationships.'
      }
    ]
  }
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Startup Academy, {user.name}!
          </h1>
          <p className="mt-2 text-gray-600">
            Start your entrepreneurial journey with our comprehensive courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 w-full relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${course.price}
                  </span>
                </div>
                <button
                  onClick={() => router.push(`/courses/${course.id}`)}
                  className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 