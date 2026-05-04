import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "We had a lot of ideas but no clear direction. They helped us simplify everything and focus on what actually drives growth.",
      author: "Founder",
      role: "SaaS Company",
    },
    {
      quote: "The biggest impact was on execution. Projects that used to drag started moving forward with clarity and ownership.",
      author: "Head of Operations",
      role: "Strategic Partner",
    },
    {
      quote: "They don’t overcomplicate things. Every recommendation was practical and easy to implement.",
      author: "Startup CEO",
      role: "Early-stage Venture",
    },
    {
      quote: "We finally understood what was working and what wasn’t. That alone changed how we make decisions.",
      author: "E-commerce Operator",
      role: "Growth Stage Retail",
    },
    {
      quote: "They helped us prioritize better. Instead of building everything, we started building the right things.",
      author: "Product Lead",
      role: "Market Expansion Team",
    },
    {
      quote: "It felt less like hiring consultants and more like bringing in a team that actually cared about outcomes.",
      author: "Consulting Client",
      role: "Project Transformation",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-[#2F4F3E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Client Stories
          </h2>
          <p className="text-lg text-[#2F4F3E]/70 max-w-2xl mx-auto">
            Hear from leaders who've experienced transformation firsthand
          </p>
        </motion.div>
      </div>

      {/* Infinite Loop Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex flex-nowrap"
          animate={{
            x: ["0%", "-33.33%"], // Using 3 sets for the original feel
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate testimonials for seamless loop (3 sets as originally intended) */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[450px] md:w-[500px] mx-4"
            >
              <div className="bg-gradient-to-br from-[#F5F7F6] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#2F4F3E]/10 h-full">
                <Quote className="w-10 h-10 text-[#A9C25D] mb-4" />
                <p className="text-[#2F4F3E] text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#2F4F3E]/10 pt-4">
                  <p
                    className="text-[#2F4F3E] font-medium mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {testimonial.author}
                  </p>
                  <p className="text-[#2F4F3E]/70 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}