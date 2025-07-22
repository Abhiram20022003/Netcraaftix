import { Card, CardContent } from '@/components/ui/card';
const Testimonials = () => {
  const testimonials = [{
    name: "Dr. Rajesh Kumar",
    position: "Principal, Green Valley School",
    company: "Educational Institution",
    testimonial: "Netcraaftix transformed our classrooms with their smart board installations. The precision and attention to detail in their work is exceptional. Our teachers and students love the new interactive learning environment.",
    rating: 5,
    avatar: "RK"
  }, {
    name: "Priya Sharma",
    position: "IT Manager",
    company: "TechCorp Solutions",
    testimonial: "Their networking solutions have significantly improved our office connectivity. The team's professionalism and technical expertise made the entire process seamless. Highly recommended for corporate networking needs.",
    rating: 5,
    avatar: "PS"
  }, {
    name: "Mr. Venkat Rao",
    position: "Security Head",
    company: "Industrial Complex",
    testimonial: "The CCTV system installed by Netcraaftix has enhanced our security tremendously. The cameras are top-quality and the monitoring system is very user-friendly. Excellent service and support.",
    rating: 5,
    avatar: "VR"
  }, {
    name: "Sarah Johnson",
    position: "HR Director",
    company: "Global Enterprises",
    testimonial: "The biometric attendance system has streamlined our employee management completely. No more manual tracking - everything is automated and accurate. The installation was quick and professional.",
    rating: 5,
    avatar: "SJ"
  }, {
    name: "Municipal Officer",
    position: "Deputy Collector",
    company: "Government Office",
    testimonial: "Netcraaftix delivered a comprehensive networking solution for our government office. Their understanding of security requirements and professional approach impressed us. Truly reliable partners.",
    rating: 5,
    avatar: "MO"
  }, {
    name: "Anita Reddy",
    position: "Business Owner",
    company: "Retail Chain",
    testimonial: "From software development to security systems, they handled everything perfectly. The custom application they developed has improved our inventory management significantly. Great team to work with!",
    rating: 5,
    avatar: "AR"
  }];
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }, (_, i) => <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>);
  };
  return <section id="testimonials" className="py-20 bg-gray-50">
      
    </section>;
};
export default Testimonials;