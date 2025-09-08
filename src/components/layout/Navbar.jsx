import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Check, ChevronDown, ChevronRight } from "lucide-react";

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

  return (
    <div>
      <section className="flex">
        <div className="bg-[#FB2056] text-2xl px-2 py-1 font-bold w-1/6 text-white">
          Trek Update
        </div>
        <div className="bg-white py-1 font-medium w-5/6 relative overflow-hidden">
          {/* Left padding spacer */}
          <div className="absolute left-0 top-0 h-full w-2 bg-white z-10"></div>
          {/* Right padding spacer */}
          <div className="absolute right-0 top-0 h-full w-2 bg-white z-10"></div>

          <div className="flex items-center h-full px-2">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{
                x: [0, -100 * updates.length],
              }}
              transition={{
                duration: updates.length * 4, // 4 seconds per update
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedUpdates.map((update, index) => (
                <span
                  key={index}
                  className="bg-[#FB2056] text-white px-3 py-0.5 rounded-sm inline-block"
                >
                  {update}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-black ">
        <div className="py-3 w-11/12 mx-auto flex items-center justify-center">
          {/* Contact Information */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <a
                href="tel:+919634923602"
                className="text-[#e1ed00] text-sm hover:underline"
              >
                +91 9634923602
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <a
                href="tel:+917895770439"
                className="text-[#e1ed00] text-sm hover:underline"
              >
                +91 7895770439
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <a
                href="mailto:info@thesearchingsouls.com"
                className="text-[#e1ed00] text-sm hover:underline"
              >
                info@thesearchingsouls.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-[#e1ed00] text-sm">Contact us</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-[#e1ed00] text-sm">About us</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className=" w-11/12 mx-auto py-4 px-6 flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-4">
            <img
              src="https://www.thesearchingsouls.com/wp-content/uploads/2019/12/slImage-1_c817fd1824b483383e5e996e895a2d51.png"
              alt="The Searching Souls Logo"
              className="h-12 w-auto"
            />
            <h1 className="text-xl font-bold text-gray-800">
              The Searching Souls – चल एक सफर पे
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-8">
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

                {/* First Level Dropdown */}
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
                          !subItem.hasSubDropdown && setActiveSubDropdown(null)
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

                        {/* Second Level Dropdown */}
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
        </div>
      </section>
    </div>
  );
};

export default Navbar;
