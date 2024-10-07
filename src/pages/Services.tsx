import React from 'react'
import { BarChart2, TrendingUp, Briefcase, Users, Globe, Zap } from 'lucide-react'

const services = [
  { 
    icon: BarChart2, 
    title: 'Financial Analysis', 
    description: 'In-depth financial analysis to optimize your business performance.',
    longDescription: `Our Financial Analysis service provides a comprehensive examination of your company's financial health. We utilize advanced tools to uncover insights that drive strategic decision-making. Our expert consultants will:

    • Conduct thorough reviews of financial statements
    • Perform ratio analysis to assess liquidity, profitability, and efficiency
    • Identify trends and patterns in your financial data
    • Provide actionable recommendations for financial optimization`
  },
  { 
    icon: TrendingUp, 
    title: 'Market Research', 
    description: 'Comprehensive market research to identify opportunities and threats.',
    longDescription: `Our Market Research service empowers your business with data-driven insights. We employ a mix of qualitative and quantitative methods to provide a holistic view of your market landscape. Our approach includes:

    • Industry analysis and trend forecasting
    • Competitor benchmarking and SWOT analysis
    • Customer segmentation and persona development
    • Market size and growth potential assessment`
  },
  { 
    icon: Briefcase, 
    title: 'Business Strategy', 
    description: 'Develop and implement effective business strategies for growth.',
    longDescription: `Our Business Strategy service helps your company achieve sustainable growth and competitive advantage. We work closely with your leadership team to develop a tailored strategy. Our process includes:

    • Comprehensive situational analysis
    • Long-term goal setting and objective development
    • Strategic initiative prioritization
    • Implementation roadmap creation`
  },
  { 
    icon: Users, 
    title: 'Human Resources', 
    description: 'Optimize your workforce and improve organizational culture.',
    longDescription: `Our Human Resources consulting service focuses on maximizing your most valuable asset - your people. We help organizations build high-performing teams and foster positive workplace cultures. Our HR solutions include:

    • Talent acquisition and retention strategies
    • Performance management system design
    • Employee engagement programs
    • Leadership development and succession planning`
  },
  { 
    icon: Globe, 
    title: 'International Expansion', 
    description: 'Guide your business through international markets and regulations.',
    longDescription: `Our International Expansion service helps businesses successfully navigate global markets. We provide comprehensive support for companies looking to expand across borders. Our service includes:

    • Market entry strategy development
    • Cross-cultural business practice analysis
    • Regulatory and compliance guidance
    • International marketing and branding strategies`
  },
  { 
    icon: Zap, 
    title: 'Digital Transformation', 
    description: 'Transform your business with cutting-edge digital solutions.',
    longDescription: `Our Digital Transformation service helps businesses leverage technology to revolutionize their operations. We guide companies through integrating digital technologies into all areas of their business. Our approach includes:

    • Digital maturity assessment and roadmap development
    • Technology stack evaluation and recommendations
    • Business process reengineering for digital efficiency
    • Data analytics and AI implementation strategies`
  },
]

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-shadow hover-grow" id={service.title.toLowerCase().replace(/\s+/g, '-')}>
              <service.icon className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-gray-700 mt-4">
                <h4 className="font-semibold mb-2">Learn More:</h4>
                <div className="text-sm space-y-2">
                  {service.longDescription.split('\n\n').map((paragraph, i) => (
                    <div key={i} className="mb-2">
                      {paragraph.trim().startsWith('•') 
                        ? <ul className="list-disc pl-5 space-y-1">
                            {paragraph.split('\n').map((item, j) => (
                              <li key={j}>{item.trim().replace('• ', '')}</li>
                            ))}
                          </ul>
                        : <p>{paragraph}</p>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services