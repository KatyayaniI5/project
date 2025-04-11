import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "From Garage to Global: The Story of TechStart",
    description: "How a small team built a billion-dollar tech company in just 5 years.",
    category: "Technology",
    image: "/images/casestudy1.jpg",
    keyLearnings: [
      "Product-market fit strategies",
      "Scaling operations efficiently",
      "Building a strong company culture",
    ],
  },
  {
    id: 2,
    title: "Sustainable Success: GreenTech's Journey",
    description: "A case study on building a sustainable business in the renewable energy sector.",
    category: "Sustainability",
    image: "/images/casestudy2.jpg",
    keyLearnings: [
      "Navigating regulatory challenges",
      "Building partnerships with stakeholders",
      "Creating a sustainable business model",
    ],
  },
  {
    id: 3,
    title: "Market Disruption: The FoodTech Revolution",
    description: "How a food delivery startup changed the industry landscape.",
    category: "Food & Beverage",
    image: "/images/casestudy3.jpg",
    keyLearnings: [
      "Identifying market gaps",
      "Building a strong brand",
      "Managing rapid growth",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Real-World Startup Success Stories
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Learn from the experiences of successful startups and discover the strategies that helped them grow.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Learnings:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {study.keyLearnings.map((learning, index) => (
                        <li key={index}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    Read Full Case Study
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
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Startup Templates</h3>
              <p className="text-gray-600 mb-4">
                Access our collection of templates for business plans, pitch decks, and more.
              </p>
              <Link
                href="/templates"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Browse Templates →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Interviews</h3>
              <p className="text-gray-600 mb-4">
                Watch interviews with successful entrepreneurs and industry leaders.
              </p>
              <Link
                href="/interviews"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Watch Interviews →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our community to access exclusive case studies, resources, and networking opportunities.
          </p>
          <Link
            href="/signup"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
} 