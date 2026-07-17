"use client"

export default function ContactPage() {
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
              <a href="/Services" className="text-gray-600 hover:text-green-700 transition">Services</a>
              <a href="/Contact" className="text-green-700 font-semibold border-b-2 border-green-700 pb-1 transition">Contact</a>
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
            <span className="inline-block text-6xl mb-4">📞</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for collaborations, queries, or to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-green-100 hover:shadow-xl transition hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">EMAIL</p>
                  <p className="text-sm font-semibold text-gray-800">hello@greenroots.org</p>
                  <p className="text-xs text-gray-400">support@greenroots.org</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-green-100 hover:shadow-xl transition hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">PHONE</p>
                  <p className="text-sm font-semibold text-gray-800">+1 (555) 234-5678</p>
                  <p className="text-xs text-gray-400">Mon-Fri 9AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-green-100 hover:shadow-xl transition hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">ADDRESS</p>
                  <p className="text-sm font-semibold text-gray-800">123 Green Street</p>
                  <p className="text-xs text-gray-400">Eco City, Earth 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-green-900">Send Us a Message</h2>
              <div className="w-16 h-1 bg-green-700 mt-2 rounded-full"></div>
              <p className="mt-3 text-sm text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition bg-white">
                    <option>General Inquiry</option>
                    <option>Volunteer Opportunity</option>
                    <option>Partnership Request</option>
                    <option>Donation Query</option>
                    <option>Event Participation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Write your message here..." 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-green-200">
                  Send Message 📤
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-green-900">Get in Touch</h2>
                <div className="w-16 h-1 bg-green-700 mt-2 rounded-full"></div>
                
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Email Us</p>
                      <p className="text-sm text-gray-600">hello@greenroots.org</p>
                      <p className="text-sm text-gray-600">support@greenroots.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Call Us</p>
                      <p className="text-sm text-gray-600">+1 (555) 234-5678</p>
                      <p className="text-sm text-gray-600">+1 (555) 876-5432</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Visit Us</p>
                      <p className="text-sm text-gray-600">123 Green Street</p>
                      <p className="text-sm text-gray-600">Eco City, Earth 12345</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700 text-center mb-4">Connect With Us</h3>
                <div className="flex justify-center gap-6">
                  <span className="text-3xl hover:scale-110 transition cursor-pointer">📘</span>
                  <span className="text-3xl hover:scale-110 transition cursor-pointer">🐦</span>
                  <span className="text-3xl hover:scale-110 transition cursor-pointer">📸</span>
                  <span className="text-3xl hover:scale-110 transition cursor-pointer">▶️</span>
                  <span className="text-3xl hover:scale-110 transition cursor-pointer">💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-green-900">Working Hours</h2>
          <div className="w-16 h-1 bg-green-700 mx-auto mt-2 rounded-full"></div>
          <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100">
              <p className="text-sm font-semibold text-gray-800">Mon - Fri</p>
              <p className="text-sm text-green-700">9:00 AM - 6:00 PM</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100">
              <p className="text-sm font-semibold text-gray-800">Sat - Sun</p>
              <p className="text-sm text-green-700">Closed</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">📅 Emergency support available 24/7 for ongoing projects</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Mission 🌱</h2>
          <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-green-100 text-lg">
            Every tree planted, every community educated, every step towards sustainability counts.
            Be part of the change.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-800 hover:bg-green-100 px-8 py-3 rounded-full font-semibold transition shadow-xl flex items-center gap-2">
              <span>👥</span> Volunteer Now
            </button>
           
          </div>
        </div>
      </section>

   
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
      `}</style>
    </div>
  )
}