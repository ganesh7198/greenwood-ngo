import Image from 'next/image'

export default function Home() {
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
              <a href="/About" className="hover:text-green-700 transition">About us</a>
              <a href="/" className="hover:text-green-700 transition">Home</a>
              <a href="/Services" className="hover:text-green-700 transition">Services</a>
              <a href="/Gallery" className="hover:text-green-700 transition">Gallery</a>
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 via-white to-green-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight">
                Grow Trees. <br />Grow Life.
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Join GreenRoots Foundation in creating a cleaner, greener, and healthier planet through tree plantation drives, environmental education, and community action.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
            
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/50">
                <Image 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop" 
                  alt="People planting trees together" 
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">About GreenRoots Foundation</h2>
              <div className="w-24 h-1 bg-green-700 mt-4 rounded-full"></div>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                GreenRoots Foundation is a non-profit organization dedicated to protecting the environment through large-scale tree plantation campaigns, awareness programs, and community engagement. We believe that every tree planted today contributes to a healthier planet for future generations.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                {['🌱 Plant millions of trees', '🌲 Restore degraded forests', '🎓 Educate young people', '♻️ Promote sustainable living', '🌍 Fight climate change', '🤝 Community driven'].map((item) => (
                  <div key={item} className="bg-green-50 p-3 rounded-xl border border-green-100 text-green-800 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop" 
                  alt="Green forest and nature" 
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section with Images */}
      <section id="programs" className="py-16 md:py-24 bg-green-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900">Our Programs</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: '🌳', 
                title: 'Tree Plantation Drives', 
                desc: 'Organize plantation campaigns in schools, villages, cities, and public spaces.',
                image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop'
              },
              { 
                icon: '🌿', 
                title: 'Environmental Awareness', 
                desc: 'Conduct workshops on climate change, waste management, and biodiversity conservation.',
                image: 'https://images.unsplash.com/photo-1532996128724-d0f3d08ea0c3?w=400&h=300&fit=crop'
              },
              { 
                icon: '👥', 
                title: 'Community Green Projects', 
                desc: 'Support local communities in developing parks, gardens, and green public spaces.',
                image: 'https://images.unsplash.com/photo-1466692477390-1231d9f1dc3a?w=400&h=300&fit=crop'
              },
              { 
                icon: '🏫', 
                title: 'School Eco Clubs', 
                desc: 'Encourage students to participate in environmental activities and sustainability projects.',
                image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=400&h=300&fit=crop'
              },
            ].map((program) => (
              <div key={program.title} className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition group overflow-hidden">
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                  <Image 
                    src={program.image} 
                    alt={program.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <span className="text-4xl block">{program.icon}</span>
                <h3 className="text-xl font-bold mt-3 text-green-900">{program.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 md:py-24 bg-green-800 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop" 
            alt="Forest background" 
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Impact</h2>
          <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000+', label: 'Trees Planted' },
              { value: '3,000+', label: 'Volunteers' },
              { value: '120+', label: 'Campaigns' },
              { value: '25', label: 'Cities Reached' },
            ].map((stat) => (
              <div key={stat.label} className="bg-green-700/40 rounded-2xl p-6 backdrop-blur-sm border border-green-600">
                <div className="text-4xl md:text-5xl font-extrabold text-green-200">{stat.value}</div>
                <div className="mt-1 text-green-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900">Why Choose Us</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Transparent NGO', 'Community Driven', 'Experienced Volunteers', 'Sustainable Projects', 'Measurable Impact', 'Trusted by Communities'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100 hover:bg-green-100 transition">
                <span className="text-green-700 text-xl">✅</span>
                <span className="font-medium text-green-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-green-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900">Gallery</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Plantation drives', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop' },
              { title: 'Volunteers planting', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop' },
              { title: 'Forest restoration', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop' },
              { title: 'School awareness', image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=400&h=400&fit=crop' },
            ].map((item) => (
              <div key={item.title} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition flex items-center justify-center">
                  <span className="text-white font-semibold text-center p-2 bg-black/40 rounded-lg backdrop-blur-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900">Testimonials</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic">"Joining GreenRoots changed how I think about protecting the environment. Every event is a step toward a greener future."</p>
              <p className="mt-4 font-semibold text-green-800">— Sarah, Volunteer</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic">"Every plantation drive made a real difference in our community. The impact is visible and lasting."</p>
              <p className="mt-4 font-semibold text-green-800">— Michael, Community Leader</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-8 border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🌿</span>
            <span className="font-bold text-xl text-white">GreenRoots Foundation</span>
          </div>
          <p className="text-sm text-green-300">🌱 Plant Today. Protect Tomorrow.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Programs</a>
            <a href="#" className="hover:text-white transition">Impact</a>
            <a href="#" className="hover:text-white transition">Gallery</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <div className="mt-6 text-xs text-green-400">© 2026 GreenRoots Foundation. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}