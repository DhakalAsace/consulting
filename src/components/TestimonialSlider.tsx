import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechInnovate Inc.",
    quote: "ConsultPro's strategic insights transformed our business. Their expertise in digital transformation was invaluable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Global Ventures LLC",
    quote: "The financial optimization services provided by ConsultPro helped us increase our profitability by 30% in just one year.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "EcoSolutions Co.",
    quote: "Working with ConsultPro on our international expansion was a game-changer. Their guidance made the process smooth and successful.",
    rating: 5,
  },
  {
    name: "David Thompson",
    company: "Retail Giants Corp.",
    quote: "ConsultPro's market research insights were eye-opening. They helped us identify untapped opportunities in our industry.",
    rating: 5,
  },
  {
    name: "Lisa Nakamura",
    company: "Tech Startups Inc.",
    quote: "The HR consulting services from ConsultPro revolutionized our company culture. Employee satisfaction has never been higher.",
    rating: 5,
  },
]

const TestimonialSlider: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">What Our Clients Say</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-shadow flex-shrink-0 w-full sm:w-80 transition-transform duration-300 hover:scale-105">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider