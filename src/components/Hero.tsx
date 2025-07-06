
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Technology
              <span className="gradient-text block">Solutions</span>
              for Tomorrow
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Netcraaftix delivers cutting-edge technology and infrastructure services. 
              From software development to smart installations, we ensure precision in every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                Our Services
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200"
              >
                Get Quote
              </Button>
            </div>

            {/* Tagline */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="w-12 h-px bg-blue-600"></div>
              <p className="text-blue-600 font-medium italic">It's all about perfection</p>
              <div className="w-12 h-px bg-blue-600"></div>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  {/* Service Icons */}
                  <div className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl">💻</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Software Dev</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl">🛜</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Networking</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                    <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl">📹</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">CCTV Systems</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6 text-center hover:bg-purple-100 transition-colors">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl">👆</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Biometrics</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10 animate-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
