
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Netcraaftix</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted partner for cutting-edge technology solutions. 
              Based in Telangana, India, we deliver precision in every project.
            </p>
            <p className="text-blue-400 font-medium italic">"It's all about perfection"</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Networking Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">CCTV Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Biometric Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Smart Board Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <div>
                  <p>P no 76, Siva Hills, Meerpet</p>
                  <p>Hyderabad, Telangana 500058</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+918977118189" className="hover:text-white transition-colors">
                  +91 - 8977118189
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:info@netcraaftix.co.in" className="hover:text-white transition-colors">
                  info@netcraaftix.co.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <span>netcraaftix.co.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Netcraaftix. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
