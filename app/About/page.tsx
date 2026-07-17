import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-xl text-green-800">GreenRoots</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="/About" className="text-green-700 font-semibold transition">About us</a>
              <a href="/" className="hover:text-green-700 transition">Home</a>
              <a href="/Services" className="hover:text-green-700 transition">Services</a>
              <a href="/Gallery" className="hover:text-green-700 transition">Gallery</a>
              <a href="#testimonials" className="hover:text-green-700 transition">Testimonials</a>
              <a href="/Contact" className="hover:text-green-700 transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-1 border border-green-700 text-green-700 hover:bg-green-50 px-4 py-2 rounded-full text-sm font-medium transition">
                <span>👥</span> Volunteer
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / Banner Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">About Us</h1>
          <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Learn about our journey, mission, and the impact we've created together
          </p>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">Who We Are</h2>
              <div className="w-20 h-1 bg-green-700 mt-4 rounded-full"></div>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                GreenRoots Foundation is a passionate team of environmentalists, educators, and community leaders 
                dedicated to creating a sustainable future. Founded in 2018, we've grown from a small group of 
                volunteers to a recognized NGO working across 25+ cities.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe that environmental conservation starts with community action. Our team consists of 
                dedicated professionals, enthusiastic volunteers, and partners who share our vision of a greener planet.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center bg-green-50 p-4 rounded-xl">
                  <span className="text-3xl block">🏢</span>
                  <span className="text-sm font-medium text-gray-700">Founded 2018</span>
                </div>
                <div className="text-center bg-green-50 p-4 rounded-xl">
                  <span className="text-3xl block">🌍</span>
                  <span className="text-sm font-medium text-gray-700">25+ Cities</span>
                </div>
                <div className="text-center bg-green-50 p-4 rounded-xl">
                  <span className="text-3xl block">👥</span>
                  <span className="text-sm font-medium text-gray-700">3000+ Members</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop" 
                  alt="GreenRoots Foundation team" 
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="py-16 md:py-24 bg-green-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">What We Do</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our core activities focus on creating lasting environmental impact through various initiatives
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition">
              <span className="text-5xl block">🌳</span>
              <h3 className="text-2xl font-bold mt-4 text-green-900">Tree Plantation</h3>
              <p className="mt-3 text-gray-600">
                Organize large-scale tree plantation drives in urban and rural areas. We've planted over 50,000 
                trees across schools, parks, and degraded lands.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition">
              <span className="text-5xl block">🎓</span>
              <h3 className="text-2xl font-bold mt-4 text-green-900">Environmental Education</h3>
              <p className="mt-3 text-gray-600">
                Conduct workshops and awareness programs in schools and communities about climate change, 
                waste management, and sustainable living.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition">
              <span className="text-5xl block">🤝</span>
              <h3 className="text-2xl font-bold mt-4 text-green-900">Community Engagement</h3>
              <p className="mt-3 text-gray-600">
                Build green spaces, parks, and community gardens. Empower local communities to take ownership 
                of their environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We've Done */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">What We've Done</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our achievements and milestones since our founding in 2018
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 text-center">
              <span className="text-5xl block">🌱</span>
              <div className="text-3xl font-extrabold text-green-800 mt-3">50,000+</div>
              <div className="text-sm text-gray-700 font-medium">Trees Planted</div>
              <p className="text-xs text-gray-500 mt-2">Across 120+ campaigns</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 text-center">
              <span className="text-5xl block">🏫</span>
              <div className="text-3xl font-extrabold text-green-800 mt-3">150+</div>
              <div className="text-sm text-gray-700 font-medium">Schools Reached</div>
              <p className="text-xs text-gray-500 mt-2">Through eco-clubs and workshops</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 text-center">
              <span className="text-5xl block">🌍</span>
              <div className="text-3xl font-extrabold text-green-800 mt-3">25</div>
              <div className="text-sm text-gray-700 font-medium">Cities</div>
              <p className="text-xs text-gray-500 mt-2">Active across the country</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 text-center">
              <span className="text-5xl block">♻️</span>
              <div className="text-3xl font-extrabold text-green-800 mt-3">5,000+</div>
              <div className="text-sm text-gray-700 font-medium">kg Waste Recycled</div>
              <p className="text-xs text-gray-500 mt-2">Through awareness programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What We'll Do */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What We'll Do</h2>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
              Our vision for the future and upcoming initiatives to create a greener planet
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-green-700/40 p-8 rounded-2xl border border-green-600 backdrop-blur-sm hover:bg-green-700/60 transition">
              <span className="text-5xl block">🎯</span>
              <h3 className="text-2xl font-bold mt-4">Plant 1 Million Trees</h3>
              <p className="mt-3 text-green-100">
                Ambitious target to plant 1 million trees by 2030 across urban and rural areas, 
                focusing on native species and forest restoration.
              </p>
            </div>
            <div className="bg-green-700/40 p-8 rounded-2xl border border-green-600 backdrop-blur-sm hover:bg-green-700/60 transition">
              <span className="text-5xl block">📚</span>
              <h3 className="text-2xl font-bold mt-4">Green Education Hub</h3>
              <p className="mt-3 text-green-100">
                Establish environmental education centers in 50+ schools with curriculum on sustainability, 
                climate action, and biodiversity.
              </p>
            </div>
            <div className="bg-green-700/40 p-8 rounded-2xl border border-green-600 backdrop-blur-sm hover:bg-green-700/60 transition">
              <span className="text-5xl block">🌐</span>
              <h3 className="text-2xl font-bold mt-4">Digital Green Platform</h3>
              <p className="mt-3 text-green-100">
                Launch a digital platform connecting volunteers, donors, and communities to track 
                environmental impact and share success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Join Our Mission</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Be part of our journey to create a sustainable future. Together, we can make a difference.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center gap-2">
              <span>👥</span> Become a Volunteer
            </button>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center gap-2">
              <span>❤️</span> Donate Now
            </button>
          </div>
        </div>
      </section>

    
    </div>
  )
}