
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. From web applications to mobile apps, we deliver scalable and robust software.",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "Custom Software", "API Development"],
      color: "blue"
    },
    {
      title: "Networking Solutions",
      description: "Complete networking infrastructure setup and maintenance. Ensuring reliable, secure, and high-performance network connectivity.",
      icon: "🛜",
      features: ["Network Setup", "WiFi Solutions", "Network Security", "Maintenance"],
      color: "green"
    },
    {
      title: "CCTV Systems",
      description: "Advanced surveillance systems for enhanced security. Professional installation and ongoing maintenance of CCTV camera systems.",
      icon: "📹",
      features: ["Camera Installation", "Remote Monitoring", "System Maintenance", "Security Analysis"],
      color: "red"
    },
    {
      title: "Biometric Systems",
      description: "Modern biometric attendance and access control systems. Streamline employee management with cutting-edge biometric technology.",
      icon: "👆",
      features: ["Attendance Systems", "Access Control", "Integration", "Reporting"],
      color: "purple"
    },
    {
      title: "Smart Board Solutions",
      description: "Interactive smart board installation and support for educational and corporate environments. Enhance presentations and collaboration.",
      icon: "📋",
      features: ["Interactive Boards", "Installation", "Training", "Technical Support"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 hover:bg-green-100",
      red: "bg-red-50 border-red-200 hover:bg-red-100",
      purple: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      orange: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      red: "bg-red-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to empower your business with cutting-edge infrastructure and software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${getColorClasses(service.color)} transition-all duration-300 hover:shadow-xl hover:scale-105 border-2`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${getIconColorClasses(service.color)} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 hover:shadow-xl"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
