import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-10">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 sm:w-13 sm:h-13">
                <Image
                  src="/uni-logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <span className="text-4xl font-bold">Uni</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight text-white">
              Start your learning journey today
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Join thousands of learners worldwide. Explore flexible, expert-led
              courses designed to help you grow — anytime, anywhere.
            </p>

            <button className="bg-[#ff5a2e] text-white px-8 py-3 font-medium shadow-md transition-colors">
              Get in Touch
            </button>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Office */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Office</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p>Germany —</p>
                <p>785 15h Street, Office 47</p>
                <p>Berlin, De 81566</p>
                <p className="mt-6">info@email.com</p>
                <p>+1 840 841 25 69</p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Links</h4>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Get in Touch</h4>
              <div className="flex w-full items-center justify-between">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-400 transition-colors"
                >
                  <FaDribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2025. All Rights Reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="mr-2">Site by</span>
              <span className="text-white">Sifad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
