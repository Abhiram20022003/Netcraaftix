
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Netcraaftix</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based in Telangana, India, we are dedicated to delivering exceptional technology solutions 
            with unwavering focus on quality and precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Netcraaftix, we believe in the power of technology to transform businesses and lives. 
              Our mission is to provide cutting-edge solutions that not only meet but exceed our clients' expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every project we undertake is approached with meticulous attention to detail and a commitment 
              to delivering perfection. We understand that in today's digital age, reliability and precision 
              are not just preferences—they're necessities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Precision Focus</h4>
                    <p className="text-gray-600">
                      Every solution is crafted with meticulous attention to detail, ensuring optimal performance and reliability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Driven</h4>
                    <p className="text-gray-600">
                      We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Client Partnership</h4>
                    <p className="text-gray-600">
                      We build lasting relationships by understanding your unique needs and delivering tailored solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
