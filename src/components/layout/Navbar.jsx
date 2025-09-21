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
    { name: "Home", href: "#" },
    { name: "Reviews", href: "#" },
    {
      name: "Treks",
      href: "#",
      hasDropdown: true,
      subItems: [
        {
          name: "Himalayan Treks",
          hasSubDropdown: true,
          subSubItems: [
            "Everest Base Camp",
            "Annapurna Circuit",
            "Manaslu Trek",
          ],
        },
        {
          name: "Sahyadri Treks",
          hasSubDropdown: true,
          subSubItems: ["Rajgad Trek", "Harishchandragad", "Kalsubai Peak"],
        },
        {
          name: "Valley of Flowers",
          hasSubDropdown: true,
          subSubItems: ["Hemkund Sahib", "Valley Trek", "Nanda Devi"],
        },
        { name: "Adventure Treks", hasSubDropdown: false },
        { name: "Monsoon Treks", hasSubDropdown: false },
      ],
    },
    { name: "Shop", href: "#" },
    { name: "Char Dham", href: "#" },
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
    <div>
      {/* Main Navigation Section */}
      <section className="bg-white border-b border-black">
        <div className="w-11/12 mx-auto py-4">
          <div className="flex items-center justify-between gap-2">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src="/logo.webp"
                alt="The Searching Souls Logo"
                className="h-8 md:h-12 w-auto"
              />
              <h1 className="text-sm md:text-xl font-bold text-gray-800">
                The Searching Souls – चल एक सफर पे
              </h1>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
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
                    className="flex items-center gap-1 text-gray-700 hover:text-[#FB2056] font-medium transition-colors duration-200"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50 border">
                      {item.subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="relative"
                          onMouseEnter={() =>
                            setActiveSubDropdown(
                              subItem.hasSubDropdown ? subIndex : null
                            )
                          }
                          onMouseLeave={() =>
                            !subItem.hasSubDropdown &&
                            setActiveSubDropdown(null)
                          }
                        >
                          <a
                            href="#"
                            className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-[#3f444b] hover:text-white transition-colors duration-200"
                          >
                            {subItem.name}
                            {subItem.hasSubDropdown && (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </a>

                          {subItem.hasSubDropdown &&
                            activeSubDropdown === subIndex && (
                              <div className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 min-w-44 z-50 border">
                                {subItem.subSubItems.map(
                                  (subSubItem, subSubIndex) => (
                                    <a
                                      key={subSubIndex}
                                      href="#"
                                      className="block px-4 py-2 text-gray-700 hover:bg-[#3f444b] hover:text-white transition-colors duration-200"
                                    >
                                      {subSubItem}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#FB2056] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          initial={{ height: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="w-11/12 mx-auto py-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center justify-between py-3">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-[#FB2056] font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="p-1 text-gray-700 hover:text-[#FB2056]"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMobileDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile First Level Dropdown */}
                {item.hasDropdown && activeMobileDropdown === index && (
                  <div className="pl-4 pb-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="py-1">
                        <div className="flex items-center justify-between py-2">
                          <a
                            href="#"
                            className="text-gray-600 hover:text-[#FB2056] transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                          {subItem.hasSubDropdown && (
                            <button
                              onClick={() => toggleMobileSubDropdown(subIndex)}
                              className="p-1 text-gray-600 hover:text-[#FB2056]"
                            >
                              <ChevronDown
                                className={`w-3 h-3 transition-transform duration-200 ${
                                  activeMobileSubDropdown === subIndex
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Mobile Second Level Dropdown */}
                        {subItem.hasSubDropdown &&
                          activeMobileSubDropdown === subIndex && (
                            <div className="pl-4">
                              {subItem.subSubItems.map(
                                (subSubItem, subSubIndex) => (
                                  <a
                                    key={subSubIndex}
                                    href="#"
                                    className="block py-2 text-gray-500 hover:text-[#FB2056] transition-colors duration-200"
                                  >
                                    {subSubItem}
                                  </a>
                                )
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trek Updates Section */}
      <section className="flex flex-col lg:flex-row">
        <div className="bg-[#FB2056] text-lg md:text-2xl px-2 py-1 font-bold w-full lg:w-1/6 text-white text-center lg:text-left">
          Trek Update
        </div>
        <div className="bg-white py-1 font-medium w-full lg:w-5/6 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-2 bg-white z-10"></div>
          <div className="absolute right-0 top-0 h-full w-2 bg-white z-10"></div>

          <div className="flex items-center h-full px-2">
            <motion.div
              className="flex gap-3 md:gap-6 whitespace-nowrap text-xs md:text-sm"
              animate={{
                x: [0, -100 * updates.length],
              }}
              transition={{
                duration: updates.length * 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedUpdates.map((update, index) => (
                <span
                  key={index}
                  className="bg-[#FB2056] text-white px-2 md:px-3 py-0.5 rounded-sm inline-block"
                >
                  {update}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black">
        <div className="py-2 md:py-3 w-11/12 mx-auto flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8">
            <div className="flex items-center gap-1 md:gap-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <a
                href="tel:+919634923602"
                className="text-[#e1ed00] text-xs md:text-sm hover:underline"
              >
                +91 9634923602
              </a>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <a
                href="tel:+917895770439"
                className="text-[#e1ed00] text-xs md:text-sm hover:underline"
              >
                +91 7895770439
              </a>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <a
                href="mailto:info@thesearchingsouls.com"
                className="text-[#e1ed00] text-xs md:text-sm hover:underline"
              >
                info@thesearchingsouls.com
              </a>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-[#e1ed00] text-xs md:text-sm">
                Contact us
              </span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-[#e1ed00] text-xs md:text-sm">
                About us
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
