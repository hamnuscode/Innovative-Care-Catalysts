import { motion, AnimatePresence } from 'motion/react'
import { Mail, Phone, Send, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [selectedService, setSelectedService] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    "MDS Consulting",
    "Delivery Leadership",
    "Business Strategy",
    "Agile Transformation",
    "Technology Advisory",
    "Data Solutions"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedService) return;
    setFormStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/hamnan03@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `New Lead: ${data.name}`,
          ...data,
          interest: selectedService,
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="flex-grow flex items-start justify-center pt-48 pb-20 px-6 bg-white">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full bg-[#F8FAF9] p-12 rounded-[3.5rem] text-center border border-[#2F4F3E]/5 shadow-2xl">
          <CheckCircle2 className="w-16 h-16 text-[#A9C25D] mx-auto mb-6" />
          <h2 className="text-3xl text-[#2F4F3E] mb-4 font-heading">Successfully Sent</h2>
          <p className="text-[#2F4F3E]/60 mb-8 leading-relaxed">Thank you for reaching out. Our leadership team will review your inquiry and respond within 24 hours.</p>
          <button onClick={() => window.location.href = '/'} className="w-full bg-[#2F4F3E] text-white py-4 rounded-full transition-all text-lg hover:bg-[#3d6350] shadow-lg">Return To Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex items-start justify-center pt-56 pb-32 px-6 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#A9C25D]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-r from-[#2F4F3E]/[0.02] to-transparent pointer-events-none" />

      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Side: Content & Info */}
          <div className="space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[#A9C25D] font-bold tracking-[0.4em] uppercase text-xs mb-3 block">Get In Touch</span>
              <h1 className="text-5xl lg:text-6xl text-[#2F4F3E] font-heading leading-tight mb-6">
                Ready to <span className="italic">Catalyze</span> <br />Your Success?
              </h1>
              <p className="text-lg text-[#2F4F3E]/60 leading-relaxed font-light max-w-md">
                We're here to help you navigate your most complex challenges with precision and scale.
              </p>
            </motion.div>

            <div className="space-y-5 max-w-sm">
              {[
                { icon: Mail, label: 'Email', value: 'info@innovativecarecatalysts.com', href: 'mailto:info@innovativecarecatalysts.com' },
                { icon: Phone, label: 'Phone', value: '(123) 456-7890', href: 'tel:+1234567890' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2F4F3E] flex items-center justify-center text-[#A9C25D] transition-transform group-hover:scale-110 duration-300 shadow-lg shadow-[#2F4F3E]/10">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-[#2F4F3E]/30 uppercase tracking-widest mb-0.5">{item.label}</span>
                    <a href={item.href} className="text-[#2F4F3E] text-base font-medium hover:text-[#A9C25D] transition-colors">{item.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Glowing Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:max-w-xl mx-auto w-full"
          >
            {/* Animated Glowing Border Container */}
            <div className="relative p-[1px] rounded-[2.5rem] overflow-hidden group">
              {/* Rotating Glow Logic */}
              <div className="absolute inset-0 bg-[#A9C25D]/10 group-hover:bg-[#A9C25D]/15 transition-colors pointer-events-none" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-100%] pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, #A9C25D, transparent 33%, transparent, #A9C25D, transparent 66%, transparent)'
                }}
              />

              <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl z-20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#2F4F3E] uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#F8FAF9] border border-[#2F4F3E]/5 rounded-xl py-3.5 px-5 text-[#2F4F3E] text-sm font-medium outline-none focus:ring-2 focus:ring-[#A9C25D] focus:border-[#A9C25D] transition-all placeholder:text-[#2F4F3E]/40"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#2F4F3E] uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full bg-[#F8FAF9] border border-[#2F4F3E]/5 rounded-xl py-3.5 px-5 text-[#2F4F3E] text-sm font-medium outline-none focus:ring-2 focus:ring-[#A9C25D] focus:border-[#A9C25D] transition-all placeholder:text-[#2F4F3E]/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 relative" ref={dropdownRef}>
                    <label className="text-[10px] font-bold text-[#2F4F3E] uppercase tracking-widest ml-1">Service Interest</label>
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full bg-[#F8FAF9] border ${isDropdownOpen ? 'border-[#A9C25D] ring-1 ring-[#A9C25D]/20 shadow-sm' : 'border-[#2F4F3E]/5'} rounded-xl py-3.5 px-5 text-sm flex items-center justify-between cursor-pointer transition-all hover:border-[#A9C25D]/20`}
                    >
                      <span className={selectedService ? 'text-[#2F4F3E] font-medium' : 'text-[#2F4F3E]/40'}>
                        {selectedService || "Select a service sector"}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#2F4F3E]/30 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-[110%] left-0 right-0 bg-white border border-[#2F4F3E]/10 rounded-xl shadow-2xl z-50 overflow-hidden">
                          {services.map((service) => (
                            <div key={service} onClick={() => { setSelectedService(service); setIsDropdownOpen(false); }} className="px-5 py-3 hover:bg-[#F8FAF9] transition-colors cursor-pointer text-sm text-[#2F4F3E]/80 border-b border-[#F8FAF9] last:border-0">{service}</div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#2F4F3E] uppercase tracking-widest ml-1">Project Details</label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="Tell us about your goals..."
                      className="w-full bg-[#F8FAF9] border border-[#2F4F3E]/5 rounded-xl py-3.5 px-5 text-[#2F4F3E] text-sm font-medium outline-none focus:ring-2 focus:ring-[#A9C25D] focus:border-[#A9C25D] transition-all placeholder:text-[#2F4F3E]/40 resize-none h-24"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending' || !selectedService}
                    className="w-full bg-[#2F4F3E] text-white py-4 rounded-xl transition-all text-lg font-medium shadow-xl flex items-center justify-center hover:bg-[#3d6350] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-30 disabled:cursor-not-allowed group overflow-hidden relative"
                  >
                    <span className="relative z-10">
                      {formStatus === 'sending' ? "Sending..." : "Initialize Consultation"}
                    </span>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-[#A9C25D] opacity-0 group-hover:opacity-10 transition-opacity" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
