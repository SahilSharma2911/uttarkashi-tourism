import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Check,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const updates = [
    "All our treks are running smoothly and there is no impact of rain.",
    "NEW VIDEO ALERT: Watch Latest Video of your favorite Monsoon Trek.",
    "Book your next adventure trek with 20% early bird discount.",
    "Weather conditions are perfect for all high altitude treks.",
  ];

  const duplicatedUpdates = [...updates, ...updates];

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Treks",
      href: "#",
      hasDropdown: true,
      subItems: [
        {
          name: "Kyarkoti Harsil Trek",
          href: "/kyarkoti-harsil-trek",
          hasSubDropdown: false,
        },
        {
          name: "Gulabi Kantha",
          href: "/gulabi-kantha",
          hasSubDropdown: false,
        },
        {
          name: "Dayara Bugyal",
          href: "/dayara-bugyal",
          hasSubDropdown: false,
        },
        // {
        //   name: "Bhrigu Lake Trek",
        //   href: "/bhrigu-lake-trek",
        //   hasSubDropdown: false,
        // },
      ],
    },
    { name: "Tours", href: "#" },
    { name: "Rental", href: "#" },
    { name: "Our World", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
    setActiveMobileSubDropdown(null);
  };

  const toggleMobileSubDropdown = (index) => {
    setActiveMobileSubDropdown(
      activeMobileSubDropdown === index ? null : index
    );
  };

  return (
    <div className="font-sans">
      {/* Trek Updates Section (Top) */}
      <section className="bg-[#153022] text-white py-2">
        <div className="w-full max-w-[1440px] mx-auto px-4 relative overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap text-sm font-medium"
            animate={{
              x: [0, -100 * updates.length],
            }}
            transition={{
              duration: updates.length * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedUpdates.map((update, index) => (
              <span
                key={index}
                className="bg-[#2a4b38] px-4 py-1.5 rounded-full inline-block"
              >
                {update}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky Main Navigation Section */}
      <section className="sticky top-0 bg-[#1D3827]/90 backdrop-blur-md text-white shadow-md z-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpeg"
                alt="The Searching Souls Logo"
                className="h-12 w-auto"
              />
              <h1 className="text-xl font-bold tracking-tight hidden md:block">
                Beyond Trails, Into the Wild.
              </h1>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() =>
                    setActiveDropdown(item.hasDropdown ? index : null)
                  }
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 text-white hover:text-[#e1ed00] font-semibold text-base uppercase tracking-wider transition-colors duration-300"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-5 h-5" />}
                  </a>

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <motion.div
                      className="absolute top-full left-0 bg-white/95 backdrop-blur-md text-gray-900 rounded-xl shadow-2xl p-4 min-w-60 z-50 border border-gray-200/50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="flex items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-[#2a4b38] hover:text-white rounded-lg transition-colors duration-200 block"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-[#e1ed00] transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden bg-[#1D3827]/90 backdrop-blur-md border-t border-[#2a4b38] overflow-hidden"
          initial={{ height: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 py-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#2a4b38] last:border-b-0"
              >
                <div className="flex items-center justify-between py-3">
                  <a
                    href={item.href}
                    className="text-white hover:text-[#e1ed00] font-semibold text-base uppercase tracking-wider transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="p-2 text-white hover:text-[#e1ed00]"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeMobileDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile First Level Dropdown */}
                {item.hasDropdown && activeMobileDropdown === index && (
                  <div className="pl-6 pb-3">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 text-gray-100 hover:text-[#e1ed00] text-sm font-medium transition-colors duration-300"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#2a4b38] text-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <a
              href="tel:+919634923602"
              className="text-[#e1ed00] text-base font-medium hover:underline"
            >
              +91 9634923602
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <a
              href="tel:+917895770439"
              className="text-[#e1ed00] text-base font-medium hover:underline"
            >
              +91 7895770439
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:info@thesearchingsouls.com"
              className="text-[#e1ed00] text-base font-medium hover:underline"
            >
              info@thesearchingsouls.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5" />
            <span className="text-[#e1ed00] text-base font-medium">
              Contact us
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5" />
            <span className="text-[#e1ed00] text-base font-medium">
              About us
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;