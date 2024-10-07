import React from 'react'
import { ArrowRight, Phone, Star, BarChart2, TrendingUp, Briefcase, Users, Globe, Zap, Search, PenTool, Rocket, BarChart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import TestimonialSlider from '../components/TestimonialSlider'

const services = [
  { icon: BarChart2, title: "Strategic Planning", description: "Develop comprehensive strategies to drive your business forward.", color: "blue" },
  { icon: TrendingUp, title: "Financial Optimization", description: "Maximize your financial performance with our expert analysis and advice.", color: "green" },
  { icon: Zap, title: "Digital Transformation", description: "Navigate the digital landscape and transform your business for the future.", color: "purple" },
]

const processSteps = [
  { icon: Search, title: "Discovery", description: "We analyze your business needs and challenges." },
  { icon: PenTool, title: "Strategy", description: "Our experts develop a tailored plan for your success." },
  { icon: Rocket, title: "Implementation", description: "We work closely with you to execute the strategy." },
  { icon: BarChart, title: "Evaluation", description: "We measure results and refine our approach as needed." },
]

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Empower Your Business with Expert Consulting</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Transform challenges into opportunities with ConsultPro's innovative solutions and strategic guidance.</p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="/contact" className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold transition duration-300">
                Get Started
              </a>
              <a href="tel:+1234567890" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition duration-300 flex items-center justify-center">
                <Phone className="mr-2" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link key={index} to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className={`bg-${service.color}-100 p-6 rounded-lg hover-shadow hover-grow ${index === 1 ? 'ring-4 ring-blue-500' : ''}`}>
              <service.icon className={`h-10 w-10 md:h-12 md:w-12 text-${service.color}-600 mb-4`} />
              <h3 className={`text-lg md:text-xl font-semibold text-${service.color}-800 mb-2`}>{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <span className={`text-${service.color}-600 hover:text-${service.color}-800 inline-flex items-center hover-text`}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-shadow hover-grow">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <step.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Contact Form Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home