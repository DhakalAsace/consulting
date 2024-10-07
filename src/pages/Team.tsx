import React from 'react'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'With over 20 years of experience in consulting, John leads our team with vision and expertise.'
  },
  {
    name: 'Jane Smith',
    role: 'Senior Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'Jane specializes in financial analysis and has helped numerous Fortune 500 companies optimize their operations.'
  },
  {
    name: 'Mike Johnson',
    role: 'Marketing Strategist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'Mike brings creative solutions to our clients\' marketing challenges, driving growth and engagement.'
  },
  {
    name: 'Sarah Lee',
    role: 'HR Consultant',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'Sarah is passionate about creating positive work environments and developing strong company cultures.'
  }
]

const Team: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover-shadow hover-grow">
              <img src={member.image} alt={member.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team