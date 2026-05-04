import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  BarChart3,
  Activity,
  Shield,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import img_hero_perf from "../../assets/hero_perf.png";
import img_hero_excellence from "../../assets/hero_excellence.png";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeState, setActiveState] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const scrollTimeoutRef = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!heroRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const isInHero =
        heroRect.top <= 0 &&
        heroRect.bottom >= window.innerHeight;

      // If we're in the hero section and haven't completed both states
      if (isInHero && isScrollLocked) {
        e.preventDefault();
        e.stopPropagation();

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Debounce scroll events - increased to 100ms for slower response
        scrollTimeoutRef.current = setTimeout(() => {
          if (e.deltaY > 0) {
            // Scrolling down
            if (activeState === 0) {
              setActiveState(1);
            } else if (activeState === 1) {
              // Unlock scroll to allow moving to next section
              setIsScrollLocked(false);
            }
          } else if (e.deltaY < 0) {
            // Scrolling up
            if (activeState === 1) {
              setActiveState(0);
            }
          }
        }, 100);
      }

      // If scroll is unlocked and we scroll back up into hero
      if (!isScrollLocked && heroRect.top >= 0) {
        setIsScrollLocked(true);
        setActiveState(1);
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeState, isScrollLocked]);

  const state1Content = {
    headline: "Advancing Performance Across Organizations",
    subtext:
      "Innovative Care Catalysts is a consulting firm dedicated to advancing performance across organizations through structured delivery, workforce development, and data-informed decision-making.",
    cta: "Schedule a Consultation",
    image: img_hero_perf,
    icons: [
      { Icon: BarChart3, label: "Healthcare Systems" },
      { Icon: Activity, label: "Workflow & Process" },
      { Icon: TrendingUp, label: "Analytics & Data" },
    ],
  };

  const state2Content = {
    headline: "Partnering for Excellence",
    subtext:
      "We partner with providers to strengthen operations, improve care quality, and navigate complex regulatory environments with confidence.",
    cta: "Learn More",
    image: img_hero_excellence,
    icons: [
      { Icon: Target, label: "Operational Systems" },
      { Icon: Shield, label: "Compliance & Regulatory" },
      { Icon: Activity, label: "Care Outcomes" },
    ],
  };

  const currentContent =
    activeState === 0 ? state1Content : state2Content;

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative min-h-[130vh] flex items-center justify-center overflow-hidden"
      animate={{
        backgroundColor:
          activeState === 0 ? "#FFFFFF" : "#FAFBFA",
      }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#A9C25D]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#2F4F3E]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      {/* Glassmorphic Container */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24 pb-20">
        <div
          className={`max-w-7xl mx-auto backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 relative min-h-[calc(90vh-8rem)] mx-[0px] mt-[0px] mb-[250px] transition-all duration-800 ${
            activeState === 0
              ? "bg-white/40 border-white/60"
              : "bg-[#032403] border-[#2F4F3E]/40"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full px-[0px] pt-[70px] pb-[0px]">
            {/* LEFT: Text Content */}
            <motion.div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeState}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {currentContent.headline && (
                    <h1
                      className={`text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 ${
                        activeState === 0
                          ? "text-[#2F4F3E]"
                          : "text-[#d5ffb5]"
                      }`}
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {currentContent.headline}
                    </h1>
                  )}

                  <p
                    className={`text-lg md:text-xl leading-relaxed mb-6 ${
                      activeState === 0
                        ? "text-[#2F4F3E]/80"
                        : "text-[#ffffffcc]"
                    }`}
                  >
                    {currentContent.subtext}
                  </p>

                  <button 
                    onClick={() => {
                      if (activeState === 0) {
                        navigate('/contact');
                      } else {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group bg-[#2F4F3E] text-white px-8 py-4 rounded-full hover:bg-[#3d6350] transition-all duration-300 flex items-center gap-2 text-lg shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {currentContent.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* RIGHT: Illustration Card */}
            <motion.div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeState}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#2F4F3E]/10 p-8"
                >
                  {/* Image with parallax */}
                  <motion.div
                    className="relative h-80 rounded-2xl overflow-hidden mb-6"
                    animate={{ y: activeState === 1 ? 10 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={currentContent.image}
                      alt="Healthcare Illustration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F4F3E]/20 to-transparent"></div>
                  </motion.div>

                  {/* Icons Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {currentContent.icons.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                        }}
                        className="flex flex-col items-center text-center gap-2 p-4 bg-[#F5F7F6] rounded-xl hover:bg-[#A9C25D]/20 transition-colors duration-300"
                      >
                        <item.Icon className="w-6 h-6 text-[#2F4F3E]" />
                        <span className="text-xs text-[#2F4F3E]/70">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Dot Indicators - Inside glassmorphic container */}
          <div className="absolute bottom-8 right-8 flex gap-3">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setActiveState(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeState === index
                    ? "w-3 h-3 bg-[#2F4F3E]"
                    : "w-3 h-3 bg-transparent border-2 border-[#A9C25D]"
                }`}
              />
            ))}
          </div>

          {/* Scroll Indicator - Inside glassmorphic container */}
          <motion.div
            className="absolute -bottom-[-30px] left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeState === 0 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-[#2F4F3E]/30 rounded-full flex justify-center pt-2 bg-white/50 backdrop-blur-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1.5 h-2 bg-[#A9C25D] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}