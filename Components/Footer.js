import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-50 dark:text-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About MovieDB</h2>
            <p className="text-sm">
              Your ultimate destination for movie information, reviews, and ratings. Discover the world of cinema with MovieDB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/movies" className="text-sm hover:text-white transition-colors">Movies</Link></li>
              <li><Link href="/tv-shows" className="text-sm hover:text-white transition-colors">TV Shows</Link></li>
              <li><Link href="/actors" className="text-sm hover:text-white transition-colors">Actors</Link></li>
              <li><Link href="/news" className="text-sm hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-sm hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@moviedb.com" className="text-sm hover:text-white transition-colors">info@moviedb.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+1234567890" className="text-sm hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} MovieDB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}