import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hi! Welcome to Innovative Care Catalysts. How can we help you today?',
      options: ['Strategic Consulting', 'Delivery Leadership', 'Technology Advisory', 'General Inquiry'],
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0); // 0: initial, 1: details, 2: contact, 3: finished
  const [userData, setUserData] = useState({
    interest: '',
    details: '',
    contact: ''
  });
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const addMessage = (text: string, type: 'bot' | 'user', options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      text,
      options,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');
    setUserData(prev => ({ ...prev, interest: option }));
    
    // Bot response after a small delay
    setTimeout(() => {
      addMessage('Great! Could you tell us a bit more about what you\'re looking for or your current organizational challenges?', 'bot');
      setStep(1);
    }, 600);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        text: 'Hi! Welcome to Innovative Care Catalysts. How can we help you today?',
        options: ['Strategic Consulting', 'Delivery Leadership', 'Technology Advisory', 'General Inquiry'],
        timestamp: new Date(),
      }
    ]);
    setStep(0);
    setUserData({ interest: '', details: '', contact: '' });
    setInputValue('');
    setIsSending(false);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const currentInput = inputValue.trim();

    // Step 2: Email Validation
    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(currentInput)) {
        addMessage(currentInput, 'user');
        setInputValue('');
        setTimeout(() => {
          addMessage("That doesn't look like a valid email address. Could you please provide a correct one so we can reach you?", 'bot');
        }, 600);
        return;
      }
    }

    addMessage(currentInput, 'user');
    setInputValue('');

    if (step === 1) {
      setUserData(prev => ({ ...prev, details: currentInput }));
      setTimeout(() => {
        addMessage('Thanks for sharing. Lastly, what\'s the best email to reach you at? (Please enter your email below)', 'bot');
        setStep(2);
      }, 600);
    } else if (step === 2) {
      setUserData(prev => ({ ...prev, contact: currentInput }));
      
      setTimeout(async () => {
        const fullTranscript = messages.map(m => `${m.type.toUpperCase()}: ${m.text}`).join('\n');
        
        addMessage(`Thank you, we have received your details! Please verify that your email is correct: ${currentInput}. Our team will reach out shortly.`, 'bot');
        setStep(3);
        
        setIsSending(true);
        try {
          // Creating a Premium Lead Report for the email body
          const leadReport = `
--- 📋 ICC PREMIUM LEAD REPORT ---
📍 INQUIRY TYPE: ${userData.interest.toUpperCase()}
📧 CONTACT EMAIL: ${currentInput}
📝 PROJECT DETAILS: ${userData.details}

--- 💬 FULL CONVERSATION TRANSCRIPT ---
${messages.map(m => `[${m.type.toUpperCase()}] ${m.text}`).join('\n')}

--- 🔒 SECURE SYSTEM CAPTURE ---
Innovative Care Catalysts | Operations Transformation
          `.trim();

          const response = await fetch('https://formsubmit.co/ajax/hamnan03@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: `💎 New Lead: ${userData.interest} (${currentInput})`,
              "Report Details": leadReport,
              "Contact Email": currentInput,
              "Service Category": userData.interest,
              _template: 'table',
              _honey: '' // Anti-spam hidden field
            })
          });

          if (!response.ok) throw new Error('Failed to send');
          
          setIsSending(false);
        } catch (error) {
          console.error('Error sending email:', error);
          setIsSending(false);
        }
      }, 600);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[380px] md:w-[440px] h-[580px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#2F4F3E]/10"
          >
            {/* Smaller Header */}
            <div className="bg-[#2F4F3E] p-4 md:p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A9C25D]/10 border border-[#A9C25D]/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#A9C25D]" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg leading-none tracking-tight">ICC Concierge</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A9C25D] animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A9C25D]/80">Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5 text-white/50 hover:text-white" />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#F8FAF9] scroll-smooth"
            >
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-[#2F4F3E] text-white rounded-tr-none shadow-md' 
                        : 'bg-white text-[#2F4F3E] rounded-tl-none shadow-sm border border-[#2F4F3E]/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                  
                  {msg.options && step === 0 && (
                    <div className="flex flex-wrap gap-2.5 mt-4">
                      {msg.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-white border border-[#2F4F3E]/10 text-[#2F4F3E] px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wide hover:bg-[#A9C25D] hover:border-[#A9C25D] hover:text-[#2F4F3E] transition-all duration-300 shadow-sm active:scale-95"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isSending && (
                <div className="flex items-center gap-2 text-[10px] text-[#2F4F3E]/40 italic uppercase tracking-widest font-bold animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9C25D]"></span>
                  Syncing with ICC Team...
                </div>
              )}
            </div>

            {/* Input Footer */}
            {step < 3 && (
              <div className="p-5 bg-white border-t border-[#2F4F3E]/5 shadow-[0_-10px_40px_-15px_rgba(47,79,62,0.1)]">
                <div className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={step === 0 ? "Select an option to begin..." : step === 2 ? "Enter your email address..." : "Type your message..."}
                    disabled={step === 0}
                    className="w-full bg-[#F4F6F5] border border-transparent rounded-full py-4 pl-6 pr-14 text-[13px] focus:ring-2 focus:ring-[#A9C25D] focus:bg-white focus:border-[#2F4F3E]/5 text-[#2F4F3E] outline-none transition-all placeholder:text-[#2F4F3E]/30"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim() || step === 0}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full transition-all ${
                      inputValue.trim() && step !== 0
                        ? 'bg-[#A9C25D] text-[#2F4F3E] hover:scale-110 shadow-lg' 
                        : 'bg-[#2F4F3E]/5 text-[#2F4F3E]/20 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="p-5 bg-white border-t border-[#2F4F3E]/5 text-center flex flex-col items-center gap-2">
                <p className="text-[11px] text-[#2F4F3E]/40 font-bold uppercase tracking-[0.2em] italic">
                  Conversation Archived
                </p>
                <button
                  onClick={resetChat}
                  className="text-[11px] font-bold text-[#A9C25D] uppercase tracking-[0.1em] hover:text-[#2F4F3E] transition-colors flex items-center gap-1.5 group"
                >
                  Start New Chat
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#2F4F3E] rounded-full shadow-2xl flex items-center justify-center text-[#A9C25D] hover:bg-[#3d6350] transition-colors relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A9C25D] rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[10px] text-[#2F4F3E] font-bold">1</span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
