// src/data/trekData.js

export const trekData = {
  // ==========================================
  // 1. KYARKOTI HARSIL TREK
  // ==========================================
  "kyarkoti-harsil-trek": {
    title: "Kyarkoti Harsil Trek",
    hero: {
      image: "/qq.webp",
      title: "Kyarkoti Harsil Trek",
      subtitle: "6N 7D — Alpine Adventure in Uttarakhand",
      buttonText: "Book Now",
    },

    navigationButtons: [
      { id: "05ee38c", href: "#trekdetail", text: "Trek Summary" },
      { id: "98a712b", href: "#greview", text: "Google Reviews" },
      { id: "a30e587", href: "#trekitinerary", text: "Trek Itinerary" },
      { id: "fe7c578", href: "#trekessentials", text: "Trek Essentials" },
      { id: "b42bcbd", href: "#faqs", text: "Trek FAQs" },
      { id: "accebdc", href: "#reachbase", text: "How to reach Base?" },
      { id: "3e29124", href: "#why", text: "Why TSS" },
      { id: "1e9ed71", href: "#safety", text: "Safety with TSS" },
    ],

    enquiry: {
      trekName: "Kyarkoti Harsil Trek",
      price: "₹6,500",
      features: [
        "All-inclusive Harsil base to Kyarkoti trek package",
        "No outsourcing — largest service provider in Uttarakhand",
        "Highest rated trekking company in India",
        "First to introduce Jumbo Bag",
        "Certified by IMF, ATAOI, Startup India, Uttarakhand Tourism",
        "Top 10 Most Promising Adventure Travel Company",
      ],
    },

    trekDetails: {
      details: [
        { icon: "calendar", title: "Trek Duration", description: "6N 7D" },
        {
          icon: "distance",
          title: "Trek Distance",
          description: "≈ 34 km (on foot)",
        },
        {
          icon: "difficulty",
          title: "Difficulty Level",
          description: "Moderate",
        },
        { icon: "altitude", title: "Max Altitude", description: "3,800 m" },
        {
          icon: "season",
          title: "Best Season",
          description: "June – September",
        },
      ],
      pricing: {
        amount: "₹6,500",
        duration: "6N 7D",
        phone: "+916396476118",
        bookingUrl: "https://thesearchingsouls.com/trek/book/kyarkoti-harsil",
      },
      addOns: [
        "Transportation: ₹3,500/person (Shimla / Dehradun to Harsil and return)",
        "Backpack offloading: ₹4,000/person",
      ],
    },

    gearAndInclusions: {
      rentalUrl: "https://www.thesearchingsouls.com/rentalproduct/",
      inclusions: [
        "All meals (veg) during trek and stay",
        "Trek to Kyarkoti Lake route",
        "Accommodation in tents and guest houses",
        "Experienced trek leader and support staff",
        "Permits, forest & entry fees",
        "First aid kit, basic medical facilities",
        "Sanitized campsites & proper hygiene",
      ],
      exclusions: [
        "Transport to/from trek start unless opted",
        "GST (5%)",
        "Personal expenses, snacks, drinks",
        "Emergency evacuation cost",
        "Backpack offloading (separate charge)",
      ],
    },

    transportation: {
      items: [
        "Vehicles for pick-up from Dehradun / drop location",
        "Sumo / Bolero for small groups, Tempo Traveler for larger groups",
        "Non-AC or AC depending on group size and availability",
      ],
      reviewImages: [
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aBT1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aDB2.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aHP1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKGL-1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKK-New-2.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aSP1.jpg",
      ],
    },

    itinerary: {
      overview:
        "The Kyarkoti Harsil Trek is a 7-day alpine journey through Uttarakhand’s pristine landscapes. Begin with a drive from Dehradun to Harsil, then trek through meadows, camps, and reach the Kyarkoti Lake before returning via scenic descent.",
      specialFeatures: [
        "Summit point around 3,800 m",
        "Green meadows, alpine vistas, stone trails",
        "Lesser-known, offbeat route with fewer trekkers",
        "Mix of campsite, forests, ridgelines",
      ],
      days: [
        {
          day: "Day 1: Dehradun → Uttarkashi → Harsil",
          details:
            "Drive ~168 km (6–8 hrs) via Mussoorie → Uttarkashi → Harsil (2,450 m)",
          content: [
            "Pick up participants from Dehradun early morning",
            "Drive through scenic route via Uttarkashi",
            "Reach Harsil by evening, check-in and dinner",
            "Evening orientation, rest and acclimatize",
          ],
        },
        {
          day: "Day 2: Harsil → Lower Kyarkoti Camp",
          details: "Trek ~8 km, 5–6 hrs, to Lower Kyarkoti (~3,000 m)",
          content: [
            "After breakfast, start trek from Harsil",
            "Walk through alpine meadows and gentle slopes",
            "Set up camp in Lower Kyarkoti, acclimatize",
            "Enjoy scenic views of the valley",
          ],
        },
        {
          day: "Day 3: Lower Kyarkoti → Upper Kyarkoti Camp",
          details: "Trek ~6 km, 4–5 hrs, reaching ~3,300–3,400 m",
          content: [
            "Continue ascending through trails and ridges",
            "Cross small streams and meadows",
            "Set camp at Upper Kyarkoti",
            "Afternoon acclimatization walk nearby",
          ],
        },
        {
          day: "Day 4: Exploration / Day Treks from Upper Kyarkoti",
          details: "Day trek around, no major camp movement",
          content: [
            "Short hike to nearby ridgelines or viewpoints",
            "Explore surrounding terrain, glacier edges",
            "Return to Upper camp for overnight stay",
          ],
        },
        {
          day: "Day 5: Upper Kyarkoti → Laldevta Camp",
          details: "Trek ~12 km, 5–6 hrs, descend to Laldevta (~3,100 m)",
          content: [
            "Begin descent towards Laldevta",
            "Walk downhill through meadows and rough paths",
            "Set up camp at Laldevta",
          ],
        },
        {
          day: "Day 6: Laldevta → Harshil / Uttarkashi",
          details:
            "Trek ~5 km, then drive back ~230 km (6 hrs) to Harsil / Uttarkashi",
          content: [
            "Trek the last few km to connect to motor route",
            "Drive back via scenic route to Harsil or Uttarkashi",
            "Overnight stay in Harsil or Uttarkashi depending on schedule",
          ],
        },
        {
          day: "Day 7: Return / Departure",
          details: "After breakfast, depart for Dehradun or onward destination",
          content: [
            "Drive from Harsil to Dehradun (~230 km)",
            "Reach by evening, drop participants",
            "Trek ends",
          ],
        },
      ],
      note: "Altitude acclimatization is built in. It is recommended to keep buffer day for bad weather or delays.",
    },

    safetyVideos: [
      {
        title: "Safety with TSS",
        videoUrl: "https://www.youtube.com/embed/eUUtMhlHYAE",
      },
      {
        title: "TSS Jumbo Bag",
        videoUrl: "https://www.youtube.com/embed/0uZkt8wGP1g",
      },
    ],

    whyTSS: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Higesht-Rated.jpg",
        title: "Highest Rated",
        description:
          "Top-rated trekking company with exceptional reviews and ratings",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Jumbo-Bag.jpg",
        title: "Jumbo Bag Innovation",
        description: "All-in-one trekking gear solution provided by TSS",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
        title: "Easy Rescheduling",
        description: "Flexible booking, easy reschedule options",
      },
    ],

    packingEssentials: [
      {
        category: "Basic Trek Essentials",
        items: [
          "Rucksack (60-70 L) with rain cover",
          "Down jacket",
          "Fleece / wool sweater",
          "Gloves (wool + waterproof)",
          "Rain jacket / poncho",
          "Trekking poles",
          "Headlamp + extra batteries",
          "Trekking shoes (broken-in)",
          "Trekking pants (2 pairs)",
          "Daypack (20-30 L)",
        ],
      },
      {
        category: "Clothing",
        items: [
          "Thermal inner wear",
          "Warm socks (4–5 pairs)",
          "Cotton socks (2 pairs)",
          "Woollen cap",
          "Sun cap",
          "Extra layers for cold nights",
          "Balaclava / neck gaiter",
        ],
      },
      {
        category: "Personal Utilities",
        items: [
          "Sunglasses (UV)",
          "Sunscreen lotion (SPF 40+)",
          "Lip balm, moisturizer",
          "Hand towel",
          "Water bottle (2–3 L)",
          "Snacks / energy bars",
          "First aid kit, personal meds",
        ],
      },
      {
        category: "Toiletries",
        items: [
          "Quick-dry towel",
          "Wet wipes",
          "Biodegradable soap",
          "Toothbrush & toothpaste",
          "Toilet paper",
        ],
      },
    ],

    callToAction: {
      heading: "Book Your Kyarkoti Harsil Trek Adventure",
      buttonText: "Book Now",
      bookingUrl: "https://thesearchingsouls.com/trek/book/kyarkoti-harsil",
    },

    relatedTreks: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2020/03/BL-T-1.jpg",
        title: "Bhrigu Lake Trek",
        description:
          "High altitude alpine lake trek near Manali with panoramic views",
        link: "https://www.thesearchingsouls.com/bhrigu-lake-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/06/HP-Thmb.jpg",
        title: "Hampta Pass Trek",
        description:
          "Alpine pass trek connecting Kullu and Spiti valleys with scenic trails",
        link: "https://www.thesearchingsouls.com/hampta-pass-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/04/Thumbnail.jpg",
        title: "Kashmir Great Lakes Trek",
        description:
          "Multi-day alpine lakes trek in Kashmir with pristine scenery",
        link: "https://www.thesearchingsouls.com/kashmir-great-lakes-trek",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/Tarsar-Marsar-1.jpg",
        title: "Tarsar Marsar Trek",
        description:
          "Scenic alpine lake trek in Kashmir with beautiful meadows",
        link: "https://www.thesearchingsouls.com/tarsar-marsar-lake-trek/",
      },
    ],
  },

  // ==========================================
  // 2. GULABI KANTHA TREK
  // ==========================================
  "gulabi-kantha": {
    title: "Gulabi Kantha Trek",
    hero: {
      image: "/aa.webp",
      title: "Gulabi Kantha Trek",
      subtitle: "3N 4D — Pink Mountain Paradise",
      buttonText: "Book Now",
    },

    navigationButtons: [
      { id: "1", href: "#trekdetail", text: "Trek Summary" },
      { id: "2", href: "#greview", text: "Google Reviews" },
      { id: "3", href: "#trekitinerary", text: "Trek Itinerary" },
      { id: "4", href: "#trekessentials", text: "Trek Essentials" },
      { id: "5", href: "#faqs", text: "Trek FAQs" },
      { id: "6", href: "#reachbase", text: "How to reach Base?" },
      { id: "7", href: "#why", text: "Why TSS" },
      { id: "8", href: "#safety", text: "Safety with TSS" },
    ],

    enquiry: {
      trekName: "Gulabi Kantha Trek",
      price: "₹8,000",
      features: [
        "Dehradun to Dehradun all inclusive package",
        "Book Now at Just ₹3,500",
        "Perfect for beginners and families",
        "Highest Rated Trekking Company in India",
        "First Company to Introduce Jumbo Bag",
        "Certified by IMF, ATAOI, Startup India, Uttarakhand Tourism",
        "Expert local guides with extensive knowledge",
      ],
    },

    trekDetails: {
      details: [
        { icon: "calendar", title: "Trek Duration", description: "3N 4D" },
        { icon: "distance", title: "Trek Distance", description: "28 Km" },
        {
          icon: "difficulty",
          title: "Difficulty Level",
          description: "Easy to Moderate",
        },
        {
          icon: "altitude",
          title: "Max Altitude",
          description: "3,500 m (11,500 ft)",
        },
        {
          icon: "season",
          title: "Best Season",
          description: "April - June, September - November",
        },
      ],
      pricing: {
        amount: "₹8,000",
        duration: "3N 4D",
        phone: "+916396476118",
        bookingUrl: "https://thesearchingsouls.com/trek/book/gulabi-kantha",
      },
      addOns: [
        "Transportation: ₹2,500/person from Dehradun to Dehradun",
        "Backpack offloading: ₹3,500/person",
      ],
    },

    gearAndInclusions: {
      rentalUrl: "https://www.thesearchingsouls.com/rentalproduct/",
      inclusions: [
        "Dehradun to Dehradun trek package",
        "All Meals - Vegetarian (Breakfast, Lunch, Dinner, Evening Snacks)",
        "Accommodation in camps on sharing basis",
        "Experienced Trek Leader and professional guides",
        "Forest permits and entry fees",
        "Medical Amenities - First Aid Kits, Oxymeters, Oxygen cylinders",
        "Sanitised and hygienic campsites",
      ],
      exclusions: [
        "Items not mentioned in inclusions",
        "5% GST",
        "Personal expenses",
        "Any kind of personal insurance",
        "Delays due to weather conditions",
        "Porter/mule charges for personal bags",
        "Cost of emergency evacuation",
      ],
    },

    transportation: {
      items: [
        "5-7 persons: Tata Sumo/Mahindra Bolero",
        "8-13 persons: Tempo Traveler",
        "Non-AC vehicles for group departures",
      ],
      reviewImages: [
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aBT1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aDB2.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aHP1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKGL-1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKK-New-2.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aSP1.jpg",
      ],
    },

    itinerary: {
      overview:
        "Gulabi Kantha Trek is a beautiful 3N 4D trek in Uttarakhand. Known for its pink rhododendron blooms during spring and stunning meadows, this trek offers spectacular views of major Himalayan peaks including Swargarohini.",
      specialFeatures: [
        "Spectacular rhododendron forest trail during spring season",
        "360-degree views of major Himalayan peaks including Swargarohini",
        "Beautiful alpine meadows and pristine campsites",
        "Perfect beginner-friendly trek with moderate difficulty",
        "Close to Dehradun - easily accessible",
      ],
      days: [
        {
          day: "Day 1: Dehradun to Raithal to Gui",
          details: "Drive: 180 km | Trek: 3 km | Altitude: 2,600 m (8,500 ft)",
          content: [
            "Early morning departure from Dehradun",
            "Scenic drive through mountain roads to Raithal village",
            "Brief trek from Raithal to Gui campsite",
            "Gentle ascent through oak and rhododendron forests",
            "Overnight camping at Gui",
          ],
        },
        {
          day: "Day 2: Gui to Gulabi Kantha",
          details:
            "Trek: 6 km | Duration: 5-6 hours | Altitude: 3,500 m (11,500 ft)",
          content: [
            "Trek through beautiful meadows after breakfast",
            "Gradual ascent with stunning mountain views",
            "Reach Gulabi Kantha summit",
            "Enjoy 360-degree panoramic views of Himalayas",
            "Overnight camping near the summit",
          ],
        },
        {
          day: "Day 3: Gulabi Kantha to Gui",
          details:
            "Trek: 6 km | Duration: 4-5 hours | Altitude: 2,600 m (8,500 ft)",
          content: [
            "Enjoy sunrise and morning views from Gulabi Kantha",
            "Descend back to Gui campsite",
            "Packed lunch during descent",
            "Evening bonfire and cultural activities",
            "Overnight at Gui campsite",
          ],
        },
        {
          day: "Day 4: Gui to Raithal and Dehradun",
          details: "Trek: 3 km | Drive: 180 km",
          content: [
            "Descend to Raithal village after breakfast",
            "Drive back to Dehradun",
            "Lunch on the way",
            "Expected arrival in Dehradun by evening",
            "Trek concludes",
          ],
        },
      ],
      note: "Best time to visit is April-May for rhododendron blooms or September-November for clear mountain views and pleasant weather.",
    },

    safetyVideos: [
      {
        title: "Safety with TSS",
        videoUrl: "https://www.youtube.com/embed/eUUtMhlHYAE",
      },
      {
        title: "TSS Jumbo Bag",
        videoUrl: "https://www.youtube.com/embed/0uZkt8wGP1g",
      },
    ],

    whyTSS: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Higesht-Rated.jpg",
        title: "Highest Rated",
        description:
          "Top-rated trekking company with excellent customer reviews",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Jumbo-Bag.jpg",
        title: "Jumbo Bag Innovation",
        description:
          "First company to introduce all-in-one trekking gear solution",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
        title: "Easy Rescheduling",
        description: "Flexible booking and hassle-free rescheduling options",
      },
    ],

    packingEssentials: [
      {
        category: "Basic Trek Essentials",
        items: [
          "Rucksack (50-60 liters with rain cover)",
          "Trekking shoes with good grip and ankle support",
          "Trekking poles (recommended)",
          "Headlamp with extra batteries",
          "Water bottle (2 liters capacity)",
          "Day pack (20-30 liters)",
        ],
      },
      {
        category: "Clothing",
        items: [
          "Quick-dry T-shirts (3-4)",
          "Full sleeve shirts (2)",
          "Thermal inner wear (top and bottom)",
          "Fleece jacket",
          "Down/Padded jacket",
          "Trekking pants (2 pairs)",
          "Warm socks (3-4 pairs)",
          "Sun cap and woollen cap",
          "Gloves (woollen and waterproof)",
        ],
      },
      {
        category: "Personal Care",
        items: [
          "Sunglasses (UV protected)",
          "Sunscreen lotion (SPF 40+)",
          "Moisturizer and lip balm",
          "Personal medicines",
          "Biodegradable toiletries",
          "Quick-dry towel",
          "Tissue papers and wet wipes",
        ],
      },
      {
        category: "Miscellaneous",
        items: [
          "Photo ID proof (mandatory)",
          "Plastic bags for wet clothes",
          "Camera with extra batteries",
          "Power bank",
          "Energy bars and dry fruits",
          "Personal medical kit",
        ],
      },
    ],

    callToAction: {
      heading: "Book Your Gulabi Kantha Adventure Today",
      buttonText: "Book Now",
      bookingUrl: "https://thesearchingsouls.com/trek/book/gulabi-kantha",
    },

    relatedTreks: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/04/dayara-bugyal.jpg",
        title: "Dayara Bugyal Trek",
        description:
          "One of the most beautiful meadow treks in India with stunning alpine scenery",
        link: "https://www.thesearchingsouls.com/dayara-bugyal-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2020/03/BL-T-1.jpg",
        title: "Bhrigu Lake Trek",
        description:
          "High altitude alpine lake trek near Manali with panoramic mountain views",
        link: "https://www.thesearchingsouls.com/bhrigu-lake-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/06/kedarkantha-trek.jpg",
        title: "Kedarkantha Trek",
        description:
          "Popular winter trek with snow-covered trails and 360-degree summit views",
        link: "https://www.thesearchingsouls.com/kedarkantha-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/03/brahmatal-trek.jpg",
        title: "Brahmatal Trek",
        description:
          "Winter wonderland trek with frozen lake and majestic mountain views",
        link: "https://www.thesearchingsouls.com/brahmatal-trek/",
      },
    ],
  },

  // ==========================================
  // 3. DAYARA BUGYAL TREK
  // ==========================================
  "dayara-bugyal": {
    title: "Dayara Bugyal Trek",
    hero: {
      image: "/db.avif",
      title: "Dayara Bugyal Trek",
      subtitle: "4N 5D — India's Most Beautiful Meadow",
      buttonText: "Book Now",
    },

    navigationButtons: [
      { id: "1", href: "#trekdetail", text: "Trek Summary" },
      { id: "2", href: "#greview", text: "Google Reviews" },
      { id: "3", href: "#trekitinerary", text: "Trek Itinerary" },
      { id: "4", href: "#trekessentials", text: "Trek Essentials" },
      { id: "5", href: "#faqs", text: "Trek FAQs" },
      { id: "6", href: "#reachbase", text: "How to reach Base?" },
      { id: "7", href: "#why", text: "Why TSS" },
      { id: "8", href: "#safety", text: "Safety with TSS" },
    ],

    enquiry: {
      trekName: "Dayara Bugyal Trek",
      price: "₹7,500",
      features: [
        "Dehradun to Dehradun all inclusive package",
        "Book Now at Just ₹5,000",
        "India's most beautiful high altitude meadow",
        "Highest Rated Trekking Company in India",
        "First Company to Introduce Jumbo Bag",
        "Certified by IMF, ATAOI, Startup India, Uttarakhand Tourism",
        "Perfect for all skill levels",
      ],
    },

    trekDetails: {
      details: [
        { icon: "calendar", title: "Trek Duration", description: "4N 5D" },
        { icon: "distance", title: "Trek Distance", description: "32 Km" },
        { icon: "difficulty", title: "Difficulty Level", description: "Easy" },
        {
          icon: "altitude",
          title: "Max Altitude",
          description: "3,650 m (12,000 ft)",
        },
        {
          icon: "season",
          title: "Best Season",
          description: "May - June, September - November",
        },
      ],
      pricing: {
        amount: "₹7,500",
        duration: "4N 5D",
        phone: "+916396476118",
        bookingUrl: "https://thesearchingsouls.com/trek/book/dayara-bugyal",
      },
      addOns: [
        "Transportation: ₹3,000/person from Dehradun to Dehradun",
        "Backpack offloading: ₹3,000/person",
      ],
    },

    gearAndInclusions: {
      rentalUrl: "https://www.thesearchingsouls.com/rentalproduct/",
      inclusions: [
        "Dehradun to Dehradun trek package",
        "All Meals - Vegetarian (Breakfast, Lunch, Dinner, Evening Snacks)",
        "Accommodation in tents/homestays on sharing basis",
        "Experienced Trek Leader and support staff",
        "All necessary permits and entry fees",
        "Medical kit, Oxymeters, Oxygen cylinders",
        "Sanitised camping equipment and campsites",
      ],
      exclusions: [
        "Items not mentioned in inclusions",
        "5% GST",
        "Personal expenses",
        "Insurance of any kind",
        "Delays due to weather or road conditions",
        "Porter charges for personal bags",
        "Emergency evacuation charges",
      ],
    },

    transportation: {
      items: [
        "5-7 persons: Tata Sumo/Mahindra Bolero",
        "8-13 persons: Tempo Traveler",
        "Non-AC vehicles for group departures",
      ],
      reviewImages: [
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aBT1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aDB2.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aHP1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKGL-1.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKK-New-2.jpg",
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aSP1.jpg",
      ],
    },

    itinerary: {
      overview:
        "Dayara Bugyal Trek is one of the most beautiful high-altitude meadow treks in India. Located in Uttarakhand, this trek offers vast rolling meadows, stunning mountain views, and a gentle trail perfect for beginners and families.",
      specialFeatures: [
        "One of India's most beautiful and vast alpine meadows",
        "360-degree views of major Himalayan peaks - Bandarpoonch, Gangotri range",
        "Easy trek suitable for beginners and families",
        "Stunning oak and rhododendron forests",
        "Perfect for photography and nature lovers",
      ],
      days: [
        {
          day: "Day 1: Dehradun to Barsu Village",
          details:
            "Drive: 180 km | Duration: 7-8 hours | Altitude: 2,560 m (8,400 ft)",
          content: [
            "Early morning departure from Dehradun",
            "Scenic drive through Uttarkashi",
            "Reach Barsu village by evening",
            "Acclimatization and briefing session",
            "Overnight stay in homestay",
          ],
        },
        {
          day: "Day 2: Barsu to Barnala Tal",
          details:
            "Trek: 5 km | Duration: 4-5 hours | Altitude: 3,050 m (10,000 ft)",
          content: [
            "Trek begins through dense oak and rhododendron forest",
            "Gradual ascent with beautiful forest trail",
            "Reach Barnala Tal - a small alpine lake",
            "Packed lunch during the trek",
            "Set up camps near the lake",
            "Overnight camping at Barnala Tal",
          ],
        },
        {
          day: "Day 3: Barnala Tal to Dayara Bugyal",
          details:
            "Trek: 4 km | Duration: 3-4 hours | Altitude: 3,650 m (12,000 ft)",
          content: [
            "Trek to the magnificent Dayara meadows after breakfast",
            "Witness vast rolling grasslands",
            "360-degree mountain views from the meadow",
            "Explore the scenic meadows and take photographs",
            "Overnight camping at Dayara Bugyal",
          ],
        },
        {
          day: "Day 4: Dayara Bugyal to Barsu",
          details:
            "Trek: 9 km | Duration: 6-7 hours | Altitude: 2,560 m (8,400 ft)",
          content: [
            "Enjoy sunrise over the Himalayas from Dayara",
            "Descend back through forest trails",
            "Stop at Barnala Tal for lunch",
            "Reach Barsu village by evening",
            "Overnight at homestay",
          ],
        },
        {
          day: "Day 5: Barsu to Dehradun",
          details: "Drive: 180 km | Duration: 7-8 hours",
          content: [
            "Drive back to Dehradun after breakfast",
            "Scenic drive back through mountain roads",
            "Lunch on the way",
            "Reach Dehradun by evening",
            "Trek concludes",
          ],
        },
      ],
      note: "This trek is perfect year-round. Visit in spring (May-June) for blooming meadows or fall (September-November) for clear mountain views.",
    },

    safetyVideos: [
      {
        title: "Safety with TSS",
        videoUrl: "https://www.youtube.com/embed/eUUtMhlHYAE",
      },
      {
        title: "TSS Jumbo Bag",
        videoUrl: "https://www.youtube.com/embed/0uZkt8wGP1g",
      },
    ],

    whyTSS: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Higesht-Rated.jpg",
        title: "Highest Rated",
        description:
          "Top-rated trekking company with excellent customer reviews",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Jumbo-Bag.jpg",
        title: "Jumbo Bag Innovation",
        description:
          "First company to introduce all-in-one trekking gear solution",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
        title: "Easy Rescheduling",
        description: "Flexible booking and hassle-free rescheduling options",
      },
    ],

    packingEssentials: [
      {
        category: "Basic Trek Essentials",
        items: [
          "Rucksack (50-60 liters with rain cover)",
          "Trekking shoes with good ankle support",
          "Trekking poles (recommended)",
          "Headlamp with extra batteries",
          "Water bottles (2 liters capacity)",
          "Small backpack for day use (20-30 liters)",
        ],
      },
      {
        category: "Clothing",
        items: [
          "Quick-dry T-shirts (3-4)",
          "Full sleeve shirts (2)",
          "Trekking pants (2)",
          "Thermal wear (top and bottom)",
          "Fleece or woollen sweater",
          "Padded jacket",
          "Rain jacket/poncho",
          "Woollen socks (4 pairs)",
          "Cotton socks (1 pair)",
          "Sun cap and woollen cap",
          "Gloves (woollen and waterproof)",
        ],
      },
      {
        category: "Personal Care",
        items: [
          "Sunscreen lotion (SPF 40+)",
          "Sunglasses (UV protected)",
          "Moisturizer and lip balm",
          "Toilet paper and wet wipes",
          "Hand sanitizer",
          "Personal hygiene items",
          "Quick-dry towel",
        ],
      },
      {
        category: "Others",
        items: [
          "Valid ID proof (mandatory)",
          "Personal medical kit",
          "Energy bars and dry fruits",
          "Camera with extra batteries",
          "Plastic bags for waste management",
          "Book or cards for leisure",
        ],
      },
    ],

    callToAction: {
      heading: "Experience India's Most Beautiful Meadow",
      buttonText: "Book Now",
      bookingUrl: "https://thesearchingsouls.com/trek/book/dayara-bugyal",
    },

    relatedTreks: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/08/kedarkantha.jpg",
        title: "Kedarkantha Trek",
        description:
          "Popular winter summit trek with stunning snow-covered landscapes",
        link: "https://www.thesearchingsouls.com/kedarkantha-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/05/har-ki-dun.jpg",
        title: "Har Ki Dun Trek",
        description: "Valley trek with ancient villages and hanging glaciers",
        link: "https://www.thesearchingsouls.com/har-ki-dun-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2020/03/BL-T-1.jpg",
        title: "Bhrigu Lake Trek",
        description:
          "High altitude alpine lake trek near Manali with panoramic views",
        link: "https://www.thesearchingsouls.com/bhrigu-lake-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/07/chopta-chandrashila.jpg",
        title: "Chopta Chandrashila Trek",
        description: "Mini Switzerland of India with panoramic summit views",
        link: "https://www.thesearchingsouls.com/chopta-chandrashila-trek/",
      },
    ],
  },
};

export const getTrekData = (slug: string) => {
  return trekData[slug as keyof typeof trekData] || null;
};

// Helper function to get all trek slugs (useful for generating routes)
export const getAllTrekSlugs = () => {
  return Object.keys(trekData);
};

// Helper function to get trek names (useful for search/filters)
export const getAllTrekNames = () => {
  return Object.entries(trekData).map(([slug, data]) => ({
    slug,
    name: data.hero.title,
  }));
};
