"use client"
import Image from 'next/image'
import { useState } from 'react'

type Category = 'plantation' | 'forest' | 'school' | 'community' | 'workshop'

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const galleryItems = [
    {
      id: 1,
      category: 'plantation' as Category,
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=800&fit=crop',
      location: 'Mumbai, Maharashtra',
      work: 'Tree Plantation Drive',
      date: 'Jan 2026',
      volunteers: 520,
      trees: 2500
    },
    {
      id: 2,
      category: 'forest' as Category,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop',
      location: 'Western Ghats, Kerala',
      work: 'Forest Restoration',
      date: 'Dec 2025',
      volunteers: 300,
      trees: 10000
    },
    {
      id: 3,
      category: 'school' as Category,
      image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&h=800&fit=crop',
      location: 'Delhi NCR',
      work: 'School Eco Workshop',
      date: 'Nov 2025',
      volunteers: 150,
      students: 5000
    },
    {
      id: 4,
      category: 'community' as Category,
      image: 'https://images.unsplash.com/photo-1466692477390-1231d9f1dc3a?w=800&h=800&fit=crop',
      location: 'Bangalore, Karnataka',
      work: 'Community Garden',
      date: 'Oct 2025',
      volunteers: 200,
      gardens: 10
    },
    {
      id: 5,
      category: 'plantation' as Category,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=800&fit=crop',
      location: 'Sundarbans, West Bengal',
      work: 'Mangrove Plantation',
      date: 'Sep 2025',
      volunteers: 250,
      trees: 5000
    },
    {
      id: 6,
      category: 'workshop' as Category,
      image: 'https://images.unsplash.com/photo-1532996128724-d0f3d08ea0c3?w=800&h=800&fit=crop',
      location: 'Chennai, Tamil Nadu',
      work: 'Waste Management Workshop',
      date: 'Aug 2025',
      volunteers: 100,
      participants: 1000
    },
    {
      id: 7,
      category: 'plantation' as Category,
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=800&fit=crop',
      location: 'Pune, Maharashtra',
      work: 'Urban Plantation',
      date: 'Jul 2025',
      volunteers: 180,
      trees: 1200
    },
    {
      id: 8,
      category: 'forest' as Category,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=800&fit=crop',
      location: 'Himalayas, Uttarakhand',
      work: 'Forest Conservation',
      date: 'Jun 2025',
      volunteers: 220,
      trees: 8000
    },
    {
      id: 9,
      category: 'school' as Category,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=800&fit=crop',
      location: 'Hyderabad, Telangana',
      work: 'Eco Club Program',
      date: 'May 2025',
      volunteers: 80,
      students: 3000
    },
    {
      id: 10,
      category: 'community' as Category,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=800&fit=crop',
      location: 'Jaipur, Rajasthan',
      work: 'Green Park Development',
      date: 'Apr 2025',
      volunteers: 150,
      gardens: 5
    },
    {
      id: 11,
      category: 'plantation' as Category,
      image: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&h=800&fit=crop',
      location: 'Ahmedabad, Gujarat',
      work: 'Tree Plantation Drive',
      date: 'Mar 2025',
      volunteers: 400,
      trees: 3000
    },
    {
      id: 12,
      category: 'workshop' as Category,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=800&fit=crop',
      location: 'Kolkata, West Bengal',
      work: 'Awareness Campaign',
      date: 'Feb 2025',
      volunteers: 120,
      participants: 800
    }
  ]

  const categories: (Category | 'all')[] = ['all', ...new Set(galleryItems.map(item => item.category))] as (Category | 'all')[]

  const getCategoryEmoji = (cat: Category | 'all') => {
    const emojis: Record<Category, string> = {
      plantation: '🌳',
      forest: '🌲',
      school: '🏫',
      community: '🏘️',
      workshop: '🔧'
    }
    return cat !== 'all' ? emojis[cat] : '📸'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-pulse">🌿</span>
              <span className="font-bold text-xl text-green-800">GreenRoots</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="/About" className="text-gray-600 hover:text-green-700 transition">About</a>
              <a href="/" className="text-gray-600 hover:text-green-700 transition">Home</a>
              <a href="/Gallery" className="text-green-700 font-semibold border-b-2 border-green-700 pb-1 transition">Gallery</a>
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

      {/* Hero */}
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
            <span className="inline-block text-6xl mb-4">📸</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Our Gallery
            </h1>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
              Capturing moments of change, one tree at a time
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 border border-green-100">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">50K+</div>
              <div className="text-xs text-gray-500">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">3K+</div>
              <div className="text-xs text-gray-500">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">120+</div>
              <div className="text-xs text-gray-500">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-700">25</div>
              <div className="text-xs text-gray-500">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category
                    ? 'bg-gradient-to-r from-green-700 to-green-800 text-white shadow-lg shadow-green-200 scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:shadow-md border border-gray-200'
                }`}
              >
                {getCategoryEmoji(category)}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems
              .filter(item => filter === 'all' || item.category === filter)
              .map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square relative bg-gray-100">
                    <Image 
                      src={item.image} 
                      alt={item.work}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span>{getCategoryEmoji(item.category)}</span>
                      <span className="capitalize">{item.category}</span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content - Appears on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-sm md:text-base">{item.work}</h3>
                      <p className="text-green-200 text-xs flex items-center gap-1 mt-0.5">
                        <span>📍</span> {item.location}
                      </p>
                      <p className="text-white/60 text-xs mt-1">{item.date}</p>
                      
                      {/* Stats */}
                      <div className="flex gap-3 mt-2 text-xs text-white/80">
                        {item.volunteers && (
                          <span className="flex items-center gap-1">
                            <span>👥</span> {item.volunteers}
                          </span>
                        )}
                        {item.trees && (
                          <span className="flex items-center gap-1">
                            <span>🌳</span> {item.trees}
                          </span>
                        )}
                        {item.students && (
                          <span className="flex items-center gap-1">
                            <span>🎓</span> {item.students}
                          </span>
                        )}
                        {item.gardens && (
                          <span className="flex items-center gap-1">
                            <span>🌿</span> {item.gardens}
                          </span>
                        )}
                        {item.participants && (
                          <span className="flex items-center gap-1">
                            <span>👤</span> {item.participants}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Click indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        🔍 View
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {galleryItems.filter(item => filter === 'all' || item.category === filter).length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🔍</span>
              <h3 className="text-2xl font-semibold text-gray-700">No images found</h3>
              <p className="text-gray-500 mt-2">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 bg-gradient-to-r from-green-700 to-green-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Share Your Story 📸</h2>
          <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-green-100 text-lg">
            Have photos from our events? Share them and inspire others to join the movement!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-800 hover:bg-green-100 px-8 py-3 rounded-full font-semibold transition shadow-xl flex items-center gap-2">
              <span>📤</span> Upload Photos
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition flex items-center gap-2">
              <span>💬</span> Share Experience
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

      {/* Custom Animation CSS */}
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