import Image from 'next/image';
import Link from 'next/link';
import { courseData } from '@/lib/course-data';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Courses</h1>
          <p className="text-xl text-gray-600">Choose from our selection of expert-led courses</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(courseData).map((course) => (
            <Link 
              href={`/courses/${course.id}`} 
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-indigo-600">{course.level}</span>
                  <span className="text-sm font-medium text-gray-600">{course.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-600">{course.instructor.name}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">${course.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 