import React from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Consulting in a Digital World",
    date: "April 15, 2024",
    excerpt: "As technology continues to evolve, the consulting industry must adapt to new challenges and opportunities...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2 class="text-3xl font-bold mb-6">The Future of Consulting in a Digital World</h2>
      
      <p class="mb-6 text-lg leading-relaxed">The consulting industry is undergoing a significant transformation as we navigate the digital age. With the rapid advancement of technology, consultants are faced with both new challenges and exciting opportunities. This article explores the future of consulting in a digital world and how firms can adapt to stay relevant and valuable to their clients.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">1. Embracing Digital Tools and Platforms</h3>
      <p class="mb-6 text-lg leading-relaxed">Consultants must become proficient in using digital tools and platforms to enhance their service delivery. This includes mastering data analytics software, project management tools, and collaboration platforms. By leveraging these technologies, consultants can provide more accurate insights, streamline processes, and improve communication with clients.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">2. Developing Expertise in Emerging Technologies</h3>
      <p class="mb-6 text-lg leading-relaxed">As businesses increasingly adopt technologies like artificial intelligence, blockchain, and the Internet of Things, consultants need to develop expertise in these areas. This knowledge will be crucial in helping clients navigate the complexities of digital transformation and identify opportunities for innovation.</p>
      
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Digital Technology" class="my-8 rounded-lg shadow-md w-full" />
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">3. Shifting to Data-Driven Insights</h3>
      <p class="mb-6 text-lg leading-relaxed">The abundance of data available today presents an opportunity for consultants to provide more accurate and actionable insights. By harnessing the power of big data and advanced analytics, consultants can offer evidence-based recommendations that drive tangible results for their clients.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">4. Adapting to Remote and Virtual Consulting</h3>
      <p class="mb-6 text-lg leading-relaxed">The COVID-19 pandemic has accelerated the shift towards remote work, and consulting is no exception. Consultants must adapt to delivering their services virtually, using video conferencing, virtual whiteboards, and other digital collaboration tools to maintain the same level of engagement and effectiveness as in-person consultations.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">5. Focus on Continuous Learning and Upskilling</h3>
      <p class="mb-6 text-lg leading-relaxed">In a rapidly evolving digital landscape, consultants must commit to continuous learning and upskilling. This includes staying updated on the latest industry trends, technologies, and best practices to provide cutting-edge advice to clients.</p>
      
      <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Continuous Learning" class="my-8 rounded-lg shadow-md w-full" />
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">6. Emphasizing Cybersecurity and Data Privacy</h3>
      <p class="mb-6 text-lg leading-relaxed">As businesses become more digitally dependent, the importance of cybersecurity and data privacy increases. Consultants need to incorporate these considerations into their recommendations and help clients navigate the complex landscape of digital security and compliance.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">7. Personalization and Customization of Services</h3>
      <p class="mb-6 text-lg leading-relaxed">Digital technologies enable consultants to offer more personalized and customized services. By leveraging data and AI, consultants can tailor their approaches to each client's unique needs and circumstances, providing more value and fostering stronger relationships.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">Conclusion</h3>
      <p class="mb-6 text-lg leading-relaxed">The future of consulting in a digital world is both challenging and exciting. By embracing new technologies, developing relevant expertise, and adapting their service delivery models, consultants can continue to provide immense value to their clients. Those who successfully navigate this digital transformation will be well-positioned to thrive in the consulting industry of tomorrow.</p>
    `
  },
  {
    id: 2,
    title: "Navigating Economic Uncertainty: Strategies for Businesses",
    date: "April 8, 2024",
    excerpt: "In times of economic uncertainty, businesses need to be agile and prepared. Here are key strategies to help your company thrive...",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2 class="text-3xl font-bold mb-6">Navigating Economic Uncertainty: Strategies for Businesses</h2>
      
      <p class="mb-6 text-lg leading-relaxed">Economic uncertainty can be a significant challenge for businesses of all sizes. Whether it's due to global events, market fluctuations, or industry disruptions, companies must be prepared to navigate turbulent times. This article outlines key strategies to help your business not just survive, but thrive during periods of economic uncertainty.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">1. Maintain a Strong Cash Position</h3>
      <p class="mb-4 text-lg leading-relaxed">Cash is king, especially during uncertain times. Focus on maintaining a healthy cash reserve to weather potential downturns. This might involve:</p>
      <ul class="list-disc pl-8 mb-6 text-lg leading-relaxed">
        <li>Improving cash flow management</li>
        <li>Negotiating better terms with suppliers</li>
        <li>Exploring alternative financing options</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Cash Management" class="my-8 rounded-lg shadow-md w-full" />
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">2. Diversify Revenue Streams</h3>
      <p class="mb-4 text-lg leading-relaxed">Don't put all your eggs in one basket. Diversifying your revenue streams can help mitigate risks associated with economic uncertainty. Consider:</p>
      <ul class="list-disc pl-8 mb-6 text-lg leading-relaxed">
        <li>Expanding into new markets or customer segments</li>
        <li>Developing new products or services</li>
        <li>Exploring partnerships or collaborations</li>
      </ul>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">3. Embrace Agility and Flexibility</h3>
      <p class="mb-4 text-lg leading-relaxed">Being able to pivot quickly in response to changing market conditions is crucial. This might involve:</p>
      <ul class="list-disc pl-8 mb-6 text-lg leading-relaxed">
        <li>Adopting agile methodologies in your operations</li>
        <li>Creating a flexible workforce through cross-training</li>
        <li>Implementing scalable technologies and systems</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Business Agility" class="my-8 rounded-lg shadow-md w-full" />
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">4. Focus on Core Competencies</h3>
      <p class="mb-4 text-lg leading-relaxed">During uncertain times, it's important to focus on what you do best. Identify your core competencies and allocate resources accordingly. This might mean:</p>
      <ul class="list-disc pl-8 mb-6 text-lg leading-relaxed">
        <li>Streamlining your product or service offerings</li>
        <li>Outsourcing non-core functions</li>
        <li>Investing in areas that provide a competitive advantage</li>
      </ul>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">5. Prioritize Customer Retention</h3>
      <p class="mb-4 text-lg leading-relaxed">Acquiring new customers can be challenging and expensive during economic downturns. Focus on retaining your existing customer base by:</p>
      <ul class="list-disc pl-8 mb-6 text-lg leading-relaxed">
        <li>Providing exceptional customer service</li>
        <li>Offering loyalty programs or incentives</li>
        <li>Staying engaged with your customers through various channels</li>
      </ul>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">Conclusion</h3>
      <p class="mb-6 text-lg leading-relaxed">Navigating economic uncertainty requires a combination of prudent financial management, strategic thinking, and adaptability. By implementing these strategies, businesses can position themselves to withstand economic challenges and emerge stronger on the other side. Remember, periods of uncertainty can also present opportunities for growth and innovation for those who are prepared and agile.</p>
    `
  },
  {
    id: 3,
    title: "The Importance of Sustainable Business Practices",
    date: "April 1, 2024",
    excerpt: "Sustainability is no longer just a buzzword. It is a crucial aspect of modern business strategy. Learn why and how to implement sustainable practices...",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2 class="text-3xl font-bold mb-6">The Importance of Sustainable Business Practices</h2>
      
      <p class="mb-6 text-lg leading-relaxed">In today's business landscape, sustainability has evolved from a nice-to-have initiative to a critical component of business strategy. Companies that embrace sustainable practices not only contribute to environmental and social well-being but also position themselves for long-term success. This article explores the importance of sustainable business practices and provides guidance on how to implement them effectively.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">Why Sustainable Business Practices Matter:</h3>
      
      <h4 class="text-xl font-semibold mb-3 mt-6">1. Meeting Consumer Expectations</h4>
      <p class="mb-6 text-lg leading-relaxed">Modern consumers are increasingly environmentally conscious and prefer to support businesses that align with their values. Implementing sustainable practices can enhance your brand image and attract a growing segment of eco-conscious customers.</p>
      
      <h4 class="text-xl font-semibold mb-3 mt-6">2. Regulatory Compliance</h4>
      <p class="mb-6 text-lg leading-relaxed">Governments worldwide are implementing stricter environmental regulations. By adopting sustainable practices proactively, businesses can stay ahead of regulatory requirements and avoid potential penalties.</p>
      
      <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Sustainable Business" class="my-8 rounded-lg shadow-md w-full" />
      
      <h4 class="text-xl font-semibold mb-3 mt-6">3. Cost Savings</h4>
      <p class="mb-6 text-lg leading-relaxed">Many sustainable practices, such as energy efficiency measures or waste reduction initiatives, can lead to significant cost savings over time.</p>
      
      <h4 class="text-xl font-semibold mb-3 mt-6">4. Risk Mitigation</h4>
      <p class="mb-6 text-lg leading-relaxed">Sustainable practices can help businesses mitigate risks associated with resource scarcity, climate change, and reputational damage.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">How to Implement Sustainable Business Practices:</h3>
      
      <h4 class="text-xl font-semibold mb-3 mt-6">1. Conduct a Sustainability Audit</h4>
      <p class="mb-6 text-lg leading-relaxed">Start by assessing your current practices and identifying areas for improvement. This might include evaluating energy usage, waste production, supply chain practices, and more.</p>
      
      <h4 class="text-xl font-semibold mb-3 mt-6">2. Set Clear Goals and Metrics</h4>
      <p class="mb-6 text-lg leading-relaxed">Establish specific, measurable sustainability goals for your organization. These might include reducing carbon emissions, increasing the use of renewable energy, or improving waste management.</p>
      
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Business Goals" class="my-8 rounded-lg shadow-md w-full" />
      
      <h4 class="text-xl font-semibold mb-3 mt-6">3. Integrate Sustainability into Business Strategy</h4>
      <p class="mb-6 text-lg leading-relaxed">Ensure that sustainability is not just a side project but an integral part of your overall business strategy. This might involve rethinking product design, supply chain management, or operational processes.</p>
      
      <h4 class="text-xl font-semibold mb-3 mt-6">4. Engage Employees</h4>
      <p class="mb-6 text-lg leading-relaxed">Foster a culture of sustainability within your organization. Educate employees about the importance of sustainable practices and encourage their participation in sustainability initiatives.</p>
      
      <h3 class="text-2xl font-semibold mb-4 mt-8">Conclusion</h3>
      <p class="mb-6 text-lg leading-relaxed">Implementing sustainable business practices is no longer optional for companies that want to thrive in the long term. By embracing sustainability, businesses can reduce costs, mitigate risks, meet consumer expectations, and contribute to a better world. The journey towards sustainability is ongoing, but the benefits to both the business and the planet make it a worthwhile endeavor. Start small, set clear goals, and continuously improve your practices to build a more sustainable and resilient business for the future.</p>
    `
  }
]

const BlogList: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Company Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-shadow hover-grow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-semibold hover-text">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find(post => post.id === parseInt(id || ''))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-600 text-sm mb-8">{post.date}</p>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <Link to="/blog" className="mt-12 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold hover-text">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blog: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:id" element={<BlogPost />} />
    </Routes>
  )
}

export default Blog