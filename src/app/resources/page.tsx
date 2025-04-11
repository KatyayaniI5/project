import Link from "next/link";

const resources = [
  {
    category: "Business Planning",
    items: [
      {
        title: "Business Model Canvas Template",
        description: "A comprehensive template to map out your business model and value proposition.",
        type: "Template",
        link: "/resources/business-model-canvas",
      },
      {
        title: "Market Research Guide",
        description: "Step-by-step guide to conducting effective market research for your startup.",
        type: "Guide",
        link: "/resources/market-research",
      },
      {
        title: "Financial Projections Calculator",
        description: "Interactive tool to create and analyze your startup's financial projections.",
        type: "Tool",
        link: "/resources/financial-calculator",
      },
    ],
  },
  {
    category: "Funding & Investment",
    items: [
      {
        title: "Investor Pitch Deck Template",
        description: "Professional template for creating compelling pitch decks for investors.",
        type: "Template",
        link: "/resources/pitch-deck",
      },
      {
        title: "Funding Options Guide",
        description: "Comprehensive guide to different funding options available for startups.",
        type: "Guide",
        link: "/resources/funding-options",
      },
      {
        title: "Valuation Calculator",
        description: "Tool to estimate your startup's valuation based on various metrics.",
        type: "Tool",
        link: "/resources/valuation-calculator",
      },
    ],
  },
  {
    category: "Growth & Marketing",
    items: [
      {
        title: "Marketing Strategy Template",
        description: "Template to develop and document your startup's marketing strategy.",
        type: "Template",
        link: "/resources/marketing-strategy",
      },
      {
        title: "Growth Hacking Guide",
        description: "Practical guide to implementing growth hacking strategies for your startup.",
        type: "Guide",
        link: "/resources/growth-hacking",
      },
      {
        title: "Social Media Calendar",
        description: "Template to plan and organize your social media content strategy.",
        type: "Template",
        link: "/resources/social-media-calendar",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Startup Resources & Tools
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Access our collection of templates, guides, and tools to help you build and grow your startup.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((category) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
                    >
                      Access Resource
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Startup Checklist</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive checklist to ensure you've covered all essential aspects of launching your startup.
              </p>
              <Link
                href="/resources/checklist"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Download Checklist →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Competitor Analysis Tool</h3>
              <p className="text-gray-600 mb-4">
                Interactive tool to analyze your competitors and identify market opportunities.
              </p>
              <Link
                href="/resources/competitor-analysis"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Access Tool →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Resources?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our premium membership to access exclusive resources, tools, and expert guidance.
          </p>
          <Link
            href="/signup"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Upgrade to Premium
          </Link>
        </div>
      </section>
    </div>
  );
} 