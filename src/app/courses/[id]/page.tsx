import Image from 'next/image';
import { courseData } from '@/lib/course-data';

export async function generateStaticParams() {
  return Object.keys(courseData).map((id) => ({
    id: id,
  }));
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courseData[params.id as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
          <p className="mt-2 text-gray-600">The requested course does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                {course.description}
              </p>
              <div className="flex items-center space-x-4 text-white">
                <span>🕒 {course.duration}</span>
                <span>📚 {course.level}</span>
                <span>💰 ${course.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
              <p className="text-gray-600">{course.longDescription}</p>
            </div>

            {/* Modules */}
            <div className="space-y-6">
              {course.modules.map((module: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-4">Duration: {module.duration}</p>
                    
                    {/* Lessons */}
                    <div className="space-y-4">
                      {module.lessons.map((lesson: any, lessonIndex: number) => (
                        <div key={lessonIndex} className="border-t pt-4">
                          <div className="flex items-start">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900">
                                {lesson.title}
                              </h4>
                              <p className="text-gray-600 mt-1">
                                {lesson.description}
                              </p>
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <span>🕒 {lesson.duration}</span>
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <Image
                                src={lesson.image}
                                alt={lesson.title}
                                width={120}
                                height={80}
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <div className="text-center mb-6">
                <Image
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">
                  {course.instructor.name}
                </h3>
                <p className="text-gray-600">{course.instructor.role}</p>
              </div>
              <p className="text-gray-600 mb-6">
                {course.instructor.bio}
              </p>
              <form action="/api/enroll" method="POST">
                <input type="hidden" name="courseId" value={course.id} />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
                >
                  Enroll for ${course.price}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 