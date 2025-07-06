
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal, Green Valley School",
      company: "Educational Institution",
      testimonial: "Netcraaftix transformed our classrooms with their smart board installations. The precision and attention to detail in their work is exceptional. Our teachers and students love the new interactive learning environment.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      position: "IT Manager",
      company: "TechCorp Solutions",
      testimonial: "Their networking solutions have significantly improved our office connectivity. The team's professionalism and technical expertise made the entire process seamless. Highly recommended for corporate networking needs.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Mr. Venkat Rao",
      position: "Security Head",
      company: "Industrial Complex",
      testimonial: "The CCTV system installed by Netcraaftix has enhanced our security tremendously. The cameras are top-quality and the monitoring system is very user-friendly. Excellent service and support.",
      rating: 5,
      avatar: "VR"
    },
    {
      name: "Sarah Johnson",
      position: "HR Director",
      company: "Global Enterprises",
      testimonial: "The biometric attendance system has streamlined our employee management completely. No more manual tracking - everything is automated and accurate. The installation was quick and professional.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Municipal Officer",
      position: "Deputy Collector",
      company: "Government Office",
      testimonial: "Netcraaftix delivered a comprehensive networking solution for our government office. Their understanding of security requirements and professional approach impressed us. Truly reliable partners.",
      rating: 5,
      avatar: "MO"
    },
    {
      name: "Anita Reddy",
      position: "Business Owner",
      company: "Retail Chain",
      testimonial: "From software development to security systems, they handled everything perfectly. The custom application they developed has improved our inventory management significantly. Great team to work with!",
      rating: 5,
      avatar: "AR"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Satisfied Clients</h3>
            <p className="text-gray-600 mb-6">
              Experience the same level of excellence and precision that has made our clients successful.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-xl"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
