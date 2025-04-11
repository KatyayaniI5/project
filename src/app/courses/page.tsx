import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Startup Fundamentals",
    description: "Learn the essential skills and knowledge needed to launch and grow your startup.",
    duration: "8 weeks",
    level: "Beginner",
    image: "/images/course1.jpg",
  },
  {
    id: 2,
    title: "Growth Hacking",
    description: "Master the art of rapid business growth and customer acquisition strategies.",
    duration: "6 weeks",
    level: "Intermediate",
    image: "/images/course2.jpg",
  },
  {
    id: 3,
    title: "Pitch Perfect",
    description: "Learn how to create compelling pitches and secure funding for your startup.",
    duration: "4 weeks",
    level: "All Levels",
    image: "/images/course3.jpg",
  },
  {
    id: 4,
    title: "Market Research Mastery",
    description: "Develop skills to conduct effective market research and validate your business ideas.",
    duration: "5 weeks",
    level: "Beginner",
    image: "/images/course4.jpg",
  },
  {
    id: 5,
    title: "Product Development",
    description: "Learn the process of developing and launching successful products.",
    duration: "7 weeks",
    level: "Intermediate",
    image: "/images/course5.jpg",
  },
  {
    id: 6,
    title: "Digital Marketing for Startups",
    description: "Master digital marketing strategies to grow your startup's online presence.",
    duration: "6 weeks",
    level: "All Levels",
    image: "/images/course6.jpg",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to help you build and grow your startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
                  <span className="text-sm font-medium text-indigo-600">
                    {course.duration}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link
                  href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/signup"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Learning Today
          </Link>
        </div>
      </div>
    </div>
  );
} 