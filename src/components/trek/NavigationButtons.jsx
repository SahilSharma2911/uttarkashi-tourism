const NavigationButtons = () => {
  // Button data for easier management
  const buttons = [
    { id: "05ee38c", href: "#trekdetail", text: "Trek Summary" },
    { id: "98a712b", href: "#greview", text: "Google Reviews" },
    { id: "a30e587", href: "#trekitinerary", text: "Trek Itinerary" },
    { id: "fe7c578", href: "#trekessentials", text: "Trek Essentials" },
    { id: "b42bcbd", href: "#faqs", text: "Trek FAQs" },
    { id: "accebdc", href: "#reachbase", text: "How to reach Base?" },
    { id: "3e29124", href: "#why", text: "Why TSS" },
    { id: "1e9ed71", href: "#safety", text: "Safety with TSS" },
  ];

  // Arrow icon component
  const ArrowIcon = () => (
    <svg
      aria-hidden="true"
      className="w-4 h-4 mr-2"
      viewBox="0 0 256 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
    </svg>
  );

  return (
    <div className="w-11/12 mx-auto my-14">
      <div className=" lg:px-24">
        <div className="flex flex-wrap  justify-center gap-4">
          {buttons.map((button) => (
            <div key={button.id} className="w-full sm:w-auto">
              <div className="elementor-button-wrapper">
                <a
                  href={button.href}
                  className="
                    elementor-button 
                    elementor-button-link 
                    elementor-size-md 
                    elementor-animation-skew-forward
                    flex
                    items-center
                    justify-center
                    bg-[#1D3827]
                    hover:bg-black
                    text-white
                    font-medium
                    py-3
                    px-6
                    rounded-md
                    transition-all
                    duration-300
                    transform
                    hover:-skew-x-8
                    shadow-md
                    hover:shadow-lg
                    w-full
                  "
                >
                  <span className=" flex items-center">
                    <span className="">{button.text}</span>
                    <span className="ml-2 hover:text-white">
                      <ArrowIcon />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
