export const courseData = {
  'startup-fundamentals': {
    id: 'startup-fundamentals',
    title: 'Startup Fundamentals',
    price: 99.99,
    duration: '6 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'David Chen',
      role: 'Serial Entrepreneur',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      bio: '15+ years experience in building successful startups. Founded 3 companies with successful exits.'
    },
    description: 'Master the fundamentals of building a successful startup from ideation to launch.',
    longDescription: `This comprehensive course covers everything you need to know to start your entrepreneurial journey. 
    Learn how to validate your ideas, understand your market, and build a sustainable business model.`,
    modules: [
      {
        title: 'Ideation and Validation',
        duration: '1 week',
        lessons: [
          {
            title: 'Finding the Right Problem',
            duration: '45 min',
            video: 'https://example.com/video1',
            description: 'Learn how to identify real market problems worth solving.',
            topics: [
              'Problem identification frameworks',
              'Market research techniques',
              'Customer interview strategies',
              'Problem validation methods'
            ],
            image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80'
          },
          // ... more lessons
        ]
      },
      // ... more modules
    ]
  },
  'growth-marketing': {
    id: 'growth-marketing',
    title: 'Growth Marketing Mastery',
    price: 149.99,
    duration: '8 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Sarah Wilson',
      role: 'Growth Marketing Expert',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      bio: 'Former Growth Lead at top tech startups. Helped scale 5 companies to $10M+ ARR.'
    },
    description: 'Learn advanced growth marketing strategies to scale your startup.',
    longDescription: `Master the art of growth marketing with proven techniques and strategies. 
    From customer acquisition to retention, learn how to grow your startup efficiently.`,
    modules: [
      {
        title: 'Growth Marketing Fundamentals',
        duration: '1 week',
        lessons: [
          {
            title: 'Understanding Growth Marketing',
            duration: '50 min',
            video: 'https://example.com/video1',
            description: 'Learn the core principles of growth marketing.',
            topics: [
              'Growth marketing framework',
              'Key metrics and KPIs',
              'Growth experimentation',
              'Data-driven decision making'
            ],
            image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80'
          },
          // ... more lessons
        ]
      },
      // ... more modules
    ]
  },
  'fundraising': {
    id: 'fundraising',
    title: 'Fundraising Mastery',
    price: 199.99,
    duration: '4 weeks',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Michael Brown',
      role: 'VC Partner',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80',
      bio: 'Partner at leading VC firm. Invested in 50+ startups with 5 unicorns.'
    },
    description: 'Learn how to raise capital and pitch to investors effectively.',
    longDescription: `Master the art of fundraising for your startup. From preparing your pitch deck to 
    negotiating terms, this course covers everything you need to know about raising capital.`,
    modules: [
      {
        title: 'Fundraising Basics',
        duration: '1 week',
        lessons: [
          {
            title: 'Understanding Startup Funding',
            duration: '55 min',
            video: 'https://example.com/video1',
            description: 'Learn the fundamentals of startup funding and different funding options.',
            topics: [
              'Types of funding',
              'Funding stages',
              'Equity vs debt',
              'Funding timeline'
            ],
            image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80'
          },
          // ... more lessons
        ]
      },
      // ... more modules
    ]
  }
}; 