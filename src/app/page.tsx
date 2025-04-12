import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const features = [
    {
      title: 'Expert-Led Courses',
      description: 'Learn from successful founders and industry experts who have built multi-million dollar startups',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      color: 'bg-blue-50'
    },
    {
      title: 'Live Workshops',
      description: 'Weekly live sessions with mentors to solve your specific business challenges',
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
      color: 'bg-green-50'
    },
    {
      title: 'Startup Tools',
      description: 'Access to premium tools and resources worth $50,000+ to build your startup',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      color: 'bg-purple-50'
    },
    {
      title: 'Community',
      description: 'Join a network of 10,000+ founders and learn from their experiences',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      color: 'bg-orange-50'
    }
  ]

  const courses = [
    {
      title: 'Startup Fundamentals',
      category: 'Foundation',
      rating: 4.9,
      students: 2345,
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'David Chen',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
        role: 'Serial Entrepreneur'
      },
      tags: ['Beginner Friendly', 'Most Popular']
    },
    {
      title: 'Growth Marketing',
      category: 'Marketing',
      rating: 4.8,
      students: 1890,
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Sarah Wilson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
        role: 'Growth Expert'
      },
      tags: ['Advanced', 'Trending']
    },
    {
      title: 'Fundraising Mastery',
      category: 'Finance',
      rating: 4.9,
      students: 1567,
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Michael Brown',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80',
        role: 'VC Partner'
      },
      tags: ['Advanced', 'New']
    }
  ]

  const stats = [
    { number: '10K+', label: 'Active Students' },
    { number: '$50M+', label: 'Funds Raised' },
    { number: '500+', label: 'Successful Startups' },
    { number: '95%', label: 'Success Rate' }
  ]

  const testimonials = [
    {
      name: 'Emily Zhang',
      role: 'Founder, EcoTech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      quote: 'Startup Academy helped me turn my eco-friendly tech idea into a viable business with over $1M in funding.',
      company: {
        logo: 'https://images.unsplash.com/photo-1563694983011-6f4d90358083?auto=format&fit=crop&w=100&q=80',
        name: 'EcoTech'
      }
    },
    {
      name: 'James Wilson',
      role: 'CEO, CloudFlow',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: 'The mentorship and network I gained were invaluable in scaling my SaaS startup to 100K users.',
      company: {
        logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=100&q=80',
        name: 'CloudFlow'
      }
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Founder, HealthTech',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
      quote: 'From idea to product-market fit, the guidance I received was instrumental in our success.',
      company: {
        logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=100&q=80',
        name: 'HealthTech'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Background */}
      <div className="relative h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80"
            alt="Startup background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Build Your Dream Startup
                <span className="text-indigo-400"> Today</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Join 10,000+ entrepreneurs learning how to build successful startups.
                Get access to expert-led courses, mentorship, and a supportive community.
              </p>
              <div className="space-x-4">
                <Link 
                  href="/signup"
                  className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/courses"
                  className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
                >
                  Explore Courses
                </Link>
              </div>
              <div className="mt-4 text-sm text-gray-300">
                Loading video... If video doesn't load, refresh the page.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive resources and support to help you build a successful startup
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} p-8 rounded-xl transition-all hover:shadow-lg`}
              >
                <div className="text-4xl mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Most Popular Courses
            </h2>
            <p className="text-xl text-gray-600">
              Start your journey with our highest-rated courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {course.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-white/90 text-indigo-600 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-indigo-600 mb-2">{course.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">{course.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-600">{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                    <Link
                      href={`/courses/${index + 1}`}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates who have built successful startups
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <Image
                    src={testimonial.company.logo}
                    alt={testimonial.company.name}
                    width={100}
                    height={30}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-indigo-700 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Startup Journey Today
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Join 10,000+ founders who have transformed their ideas into successful businesses
            </p>
            <Link 
              href="/signup"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105"
            >
              Get Started for Free
            </Link>
            <p className="text-indigo-200 mt-4">
              No credit card required • 7-day free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
