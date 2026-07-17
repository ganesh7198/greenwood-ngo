"use client"
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: '🌳',
      title: 'Tree Plantation Drives',
      description: 'Large-scale tree plantation campaigns in urban and rural areas to increase green cover and combat climate change.',
      features: ['Urban Plantation', 'Rural Afforestation', 'Mangrove Restoration', 'Native Species Focus'],
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=500&fit=crop'
    },
    {
      id: 2,
      icon: '🌿',
      title: 'Environmental Education',
      description: 'Comprehensive workshops and training programs to raise awareness about climate change, biodiversity, and sustainable living.',
      features: ['School Programs', 'Community Workshops', 'Corporate Training', 'Online Courses'],
      image: 'https://images.unsplash.com/photo-1532996128724-d0f3d08ea0c3?w=800&h=500&fit=crop'
    },
    {
      id: 3,
      icon: '🏘️',
      title: 'Community Green Spaces',
      description: 'Developing and maintaining parks, community gardens, and green public spaces for healthier, happier communities.',
      features: ['Community Gardens', 'Urban Parks', 'Green Corridors', 'Playgrounds'],
      image: 'https://images.unsplash.com/photo-1466692477390-1231d9f1dc3a?w=800&h=500&fit=crop'
    },
    {
      id: 4,
      icon: '♻️',
      title: 'Waste Management Solutions',
      description: 'Implementing sustainable waste management practices including segregation, composting, and recycling programs.',
      features: ['Composting', 'Recycling', 'Waste Segregation', 'Zero Waste Workshops'],
      image: 'https://images.unsplash.com/photo-1532996128724-d0f3d08ea0c3?w=800&h=500&fit=crop'
    },
    {
      id: 5,
      icon: '🏫',
      title: 'School Eco Clubs',
      description: 'Establishing and supporting eco-clubs in schools to nurture environmental stewardship among young students.',
      features: ['Eco Club Setup', 'Student Activities', 'Green Curriculum', 'Field Trips'],
      image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&h=500&fit=crop'
    },
    {
      id: 6,
      icon: '🌊',
      title: 'Water Conservation',
      description: 'Initiatives focused on water harvesting, conservation, and creating awareness about water sustainability.',
      features: ['Rainwater Harvesting', 'Water Bodies Restoration', 'Awareness Campaigns', 'Community Ponds'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop'
    },
    {
      id: 7,
      icon: '🌍',
      title: 'Corporate Sustainability',
      description: 'Partnering with corporations to implement CSR initiatives focused on environmental sustainability and carbon offset.',
      features: ['CSR Projects', 'Carbon Offset', 'Green Events', 'Employee Engagement'],
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop'
    },
    {
      id: 8,
      icon: '🤝',
      title: 'Volunteer Programs',
      description: 'Connecting passionate individuals with meaningful environmental projects across the country.',
      features: ['Training Programs', 'Community Projects', 'Leadership Development', 'Networking'],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-xl text-green-800">GreenRoots</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="/About" className="text-gray-600 hover:text-green-700 transition">About</a>
              <a href="/" className="text-gray-600 hover:text-green-700 transition">Home</a>
              <a href="/Gallery" className="text-gray-600 hover:text-green-700 transition">Gallery</a>
              <a href="/Services" className="text-green-700 font-semibold border-b-2 border-green-700 pb-1 transition">Services</a>
              <a href="/Contact" className="text-gray-600 hover:text-green-700 transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-green-200">
                <span>👥</span> Volunteer
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-800 to-green-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <span className="inline-block text-6xl mb-4">⚡</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
              Comprehensive environmental solutions for a greener, sustainable future
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 border border-green-100">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">8+</div>
              <div className="text-xs text-gray-500">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">25+</div>
              <div className="text-xs text-gray-500">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">3K+</div>
              <div className="text-xs text-gray-500">Volunteers Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">50K+</div>
              <div className="text-xs text-gray-500">Trees Planted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="text-4xl">{service.icon}</span>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full font-medium border border-green-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-2.5 rounded-xl font-semibold transition shadow-lg shadow-green-200 flex items-center justify-center gap-2 group/btn">
                    <span>Learn More</span>
                    <span className="group-hover/btn:translate-x-1 transition">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose GreenRoots?</h2>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto">
              We deliver measurable environmental impact through expertise and community engagement
            </p>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition">
              <span className="text-4xl block mb-3">✅</span>
              <h4 className="font-bold text-lg">Transparent NGO</h4>
              <p className="text-sm text-green-100 mt-1">100% transparency in operations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition">
              <span className="text-4xl block mb-3">🏆</span>
              <h4 className="font-bold text-lg">Experienced Team</h4>
              <p className="text-sm text-green-100 mt-1">10+ years of expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition">
              <span className="text-4xl block mb-3">📊</span>
              <h4 className="font-bold text-lg">Measurable Impact</h4>
              <p className="text-sm text-green-100 mt-1">Data-driven results</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition">
              <span className="text-4xl block mb-3">🤝</span>
              <h4 className="font-bold text-lg">Community Driven</h4>
              <p className="text-sm text-green-100 mt-1">Local communities at heart</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Ready to Make a Difference?</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Join us in creating a sustainable future. Volunteer, donate, or partner with us today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center gap-2">
              <span>👥</span> Become a Volunteer
            </button>
          
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🌿</span>
            <span className="font-bold text-xl text-white">GreenRoots</span>
          </div>
          <p className="text-sm text-green-400">🌱 Plant Today. Protect Tomorrow.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Programs</a>
            <a href="#" className="hover:text-white transition">Impact</a>
            <a href="#" className="hover:text-white transition">Gallery</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <div className="mt-6 text-xs text-gray-600">© 2026 GreenRoots Foundation. All rights reserved.</div>
        </div>
      </footer>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .group {
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </div>
  )
}