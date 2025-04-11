import Image from "next/image";
import Link from "next/link";

const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Serial Entrepreneur",
    expertise: "Product Development & Scaling",
    image: "/images/mentor1.jpg",
    experience: "10+ years",
    companies: ["TechStart", "GrowthLabs", "InnovateX"],
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Venture Capitalist",
    expertise: "Fundraising & Investment",
    image: "/images/mentor2.jpg",
    experience: "15+ years",
    companies: ["VC Partners", "Startup Fund", "Angel Network"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Growth Marketing Expert",
    expertise: "Digital Marketing & Growth",
    image: "/images/mentor3.jpg",
    experience: "8+ years",
    companies: ["GrowthHackers", "Digital Boost", "MarketMasters"],
  },
];

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Expert Mentorship for Your Startup Journey
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get personalized guidance from successful entrepreneurs and industry leaders who have been where you are.
            </p>
            <Link
              href="/signup"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Mentorship
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Mentorship Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
              <p className="text-gray-600">
                Get one-on-one mentorship tailored to your specific startup needs and challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Schedule sessions at your convenience with mentors who understand your busy schedule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Network Building</h3>
              <p className="text-gray-600">
                Connect with a network of successful entrepreneurs and industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                  <p className="text-indigo-600 font-medium mb-2">{mentor.title}</p>
                  <p className="text-gray-600 mb-4">{mentor.expertise}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Experience:</span> {mentor.experience}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Companies:</span> {mentor.companies.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Startup?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our mentorship program and get the guidance you need to succeed.
          </p>
          <Link
            href="/signup"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
} 