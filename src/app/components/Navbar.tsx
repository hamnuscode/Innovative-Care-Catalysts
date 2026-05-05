import image_d80d5c2312b94c5160074dc8a2f4bfc23b1be6b4 from "../../assets/d80d5c2312b94c5160074dc8a2f4bfc23b1be6b4.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Info,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", id: "home", icon: Home },
  { name: "Services", href: "/#services", id: "services", icon: Briefcase },
  { name: "About", href: "/#about", id: "about", icon: Info },
  { name: "Contact", href: "/contact", id: "contact", icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string, id?: string) => {
    setIsMobileMenuOpen(false);
    if (!id || href === "/contact") {
      navigate(href);
      return;
    }

    if (window.location.pathname !== "/") {
      navigate(href);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 transition-all duration-500 ${
          isScrolled ? "w-full max-w-sm" : "w-full max-w-7xl"
        }`}
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.7)",
            backdropFilter: isScrolled
              ? "blur(20px)"
              : "blur(10px)",
            borderRadius: isScrolled ? "9999px" : "16px",
            paddingLeft: isScrolled ? "16px" : "24px",
            paddingRight: isScrolled ? "16px" : "24px",
            paddingTop: isScrolled ? "8px" : "10px",
            paddingBottom: isScrolled ? "8px" : "10px",
            boxShadow: isScrolled
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="border border-[#2F4F3E]/10 relative"
        >
          <div className="flex items-center justify-between">
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center flex-shrink-0"
              >
                <button onClick={() => handleLinkClick("/")}>
                  <img
                    src={image_d80d5c2312b94c5160074dc8a2f4bfc23b1be6b4}
                    alt="Innovative Care Catalysts"
                    className="h-[160px]"
                  />
                </button>
              </motion.div>
            )}

            <div className={`hidden md:flex items-center ${isScrolled ? "mx-auto" : "gap-8"}`}>
              {isScrolled ? (
                <div className="flex items-center gap-3">
                  {navLinks.map((link, index) => (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.href, link.id)}
                      className="group relative"
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#F5F7F6] p-2.5 rounded-full group-hover:bg-[#A9C25D] transition-all duration-300"
                      >
                        <link.icon className="w-4 h-4 text-[#2F4F3E]" />
                      </motion.div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#2F4F3E] text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                        {link.name}
                      </div>
                    </button>
                  ))}
                  <div className="w-px h-6 bg-[#2F4F3E]/20 mx-1"></div>
                  <motion.button
                    onClick={() => handleLinkClick("/contact")}
                    className="bg-[#2F4F3E] text-white px-5 py-2 rounded-full hover:bg-[#3d6350] transition-all duration-300 shadow-lg text-sm whitespace-nowrap"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              ) : (
                <>
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.href, link.id)}
                      className="text-[#2F4F3E] hover:text-[#A9C25D] transition-colors duration-300 relative group text-lg font-medium"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A9C25D] group-hover:w-full transition-all duration-300"></span>
                    </button>
                  ))}
                  <motion.button
                    onClick={() => handleLinkClick("/contact")}
                    className="bg-[#2F4F3E] text-white px-6 py-2.5 rounded-full hover:bg-[#3d6350] transition-all duration-300 shadow-lg hover:shadow-xl text-lg ml-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </>
              )}
            </div>

            <button
              className="md:hidden text-[#2F4F3E] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </nav>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          scale: isMobileMenuOpen ? 1 : 0.95,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-xl pt-24 px-6"
      >
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href, link.id)}
              className="flex items-center gap-4 text-3xl text-[#2F4F3E] hover:text-[#A9C25D] transition-colors duration-300 font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <link.icon className="w-8 h-8" />
              {link.name}
            </button>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-[#2F4F3E] text-white px-10 py-5 rounded-3xl text-center font-bold text-xl shadow-2xl mt-4"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </>
  );
}