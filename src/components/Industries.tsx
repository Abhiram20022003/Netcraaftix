
import { Card, CardContent } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      title: "Educational Institutions",
      description: "Schools, colleges, and universities trust us for smart board installations, networking solutions, and security systems.",
      icon: "🎓",
      services: ["Smart Boards", "Network Setup", "CCTV Systems", "Biometric Attendance"],
      image: "photo-1523050854058-8df90110c9f1"
    },
    {
      title: "Corporate Businesses",
      description: "Helping businesses streamline operations with custom software, networking infrastructure, and security solutions.",
      icon: "🏢",
      services: ["Software Development", "Network Infrastructure", "Security Systems", "Biometric Access"],
      image: "photo-1486406146926-c627a92ad1ab"
    },
    {
      title: "Government Organizations",
      description: "Providing secure, reliable technology solutions for government agencies and public sector organizations.",
      icon: "🏛️",
      services: ["Secure Networking", "Surveillance Systems", "Custom Applications", "Infrastructure"],
      image: "photo-1551836022-deb4988cc6c0"
    },
    {
      title: "Residential Clients",
      description: "Smart home solutions, security systems, and networking setups for modern residential properties.",
      icon: "🏠",
      services: ["Home Security", "Smart Systems", "Network Setup", "Maintenance"],
      image: "photo-1560518883-ce09059eeffa"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across multiple sectors, delivering tailored technology solutions that meet industry-specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {industry.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Netcraaftix for their technology infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
