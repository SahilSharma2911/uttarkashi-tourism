// src/data/trekData.js

export const trekData = {
  // ==========================================
  // 1. KYARKOTI HARSIL TREK
  // ==========================================
  "kyarkoti-harsil-trek": {
    hero: {
      image: "/qq.webp",
      title: "Kyarkoti Harsil Trek",
      subtitle: "4N 5D — A Scenic Uttarakhand Trek",
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
        "Kafnu to Kaza all inclusive",
        "Book Now at Just ₹4000",
        "We are largest Service providers in Uttarakhand. i.e No outsourcing",
        "Highest Rated Trekking Company in India",
        "First Company to Introduce Jumbo Bag (Includes all Trekking Gear)",
        "Certified by IMF, ATAOI, Startup India, Uttarakhand Tourism, MSME and STU",
        "Top 10 Most Promising Adventure Travel Company in India",
      ],
    },

    trekDetails: {
      details: [
        { icon: "calendar", title: "Trek Duration", description: "4N 5D" },
        { icon: "distance", title: "Trek Distance", description: "41 Km" },
        {
          icon: "difficulty",
          title: "Difficulty Level",
          description: "Moderate to Difficult",
        },
        { icon: "altitude", title: "Altitude", description: "16100 Ft." },
        {
          icon: "season",
          title: "Best Season",
          description: "July- Early Sept",
        },
      ],
      pricing: {
        amount: "₹6,500",
        duration: "4N 5D",
        phone: "+918979920602",
        bookingUrl: "https://thesearchingsouls.com/trek/book/kyarkoti-harsil",
      },
      addOns: [
        "Transportation available at ₹ 3500/person from Shimla to Kafnu and Kaza to Manali",
        "Back Pack offloading ₹ 4000/person",
      ],
    },

    gearAndInclusions: {
      rentalUrl: "https://www.thesearchingsouls.com/rentalproduct/",
      inclusions: [
        "Kafnu to Kaza Trek",
        "Meals - (Veg Only- Breakfast, Lunch, Evening Snacks and Dinner)",
        "Accommodation in homestay/guest house on Triple/Quad Sharing Basis",
        "Experienced Trek Leader, Professional Guides and a very supportive staff",
        "Forest permits",
        "Medical Amenities – First Aid Kits, Oxymeters, oxygen cylinders.",
        "Sanitised and Hygienic Camp sites and Hotels",
      ],
      exclusions: [
        "Anything not mentioned in inclusion list",
        "5% GST",
        "Meals during Transportation",
        "Any kind of personal Expenses",
        "Unscheduled or extended stay due to road blocks, Landslides",
        "Porter/mule charges (Personal), Back pack offloading Charges",
        "Cost of Evacuation in case of emergency",
      ],
    },

    transportation: {
      items: [
        "No of Persons (5-7): Tata Sumo/Mahindra Bolero or Equivalent Vehicle",
        "No of Persons (8-13): Tempo Traveler",
        "Selection of vehicle depends on availability. In group departures vehicles are Non AC",
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
        "The Kyarkoti Harsil Trek is a scenic 4N 5D trek around the Harsil region of Uttarakhand. Expect alpine forests, river valleys, and panoramic Himalayan views.",
      specialFeatures: [
        "Takes you to a staggering altitude of 16100 ft above sea level",
        "Explores lush green valleys, alpine meadows and serene riverbanks",
        "Experience apple laden kafnu village and the arid mudh village in Spiti",
        "Forest, Meadows, Snow, Wildflowers, Rivers - Everything you can expect from a trek is delivered",
        "Less crowded and offbeat - not much people traverse on this trails",
      ],
      days: [
        {
          day: "Day 1: Shimla to Kafnu",
          details:
            "Drive Distance: 200 km | Drive Duration: 7-8 hours | Altitude: 2450 m",
          content: [
            "Pick up from Shimla bus stand at 6:30 AM",
            "Breakfast and lunch on the way",
            "Overnight stay in a guest house in Kafnu Village.",
          ],
        },
        {
          day: "Day 2: Kafnu to Mulling",
          details:
            "Trek: 11 km | Trek Duration: 7-8 hrs | Altitude gain: 2450 m to 3200 m",
          content: [
            "Trek to Mulling after breakfast",
            "First half is a gradual ascend second half slightly difficult",
            "Today's trail is mostly forest covered",
            "Packed lunch for the day",
            "Overnight in Camps at Mulling",
          ],
        },
        {
          day: "Day 3: Mulling to Karah",
          details:
            "Trek distance: 6 km | Trek Duration: 5 hours | Altitude gain: 3200 m to 3550 m",
          content: [
            "Leave for Karah Camp site after breakfast",
            "Today's trek is easy only the last 1 km is a steep ascend",
            "Hot lunch will be served at camp site",
            "Evening acclimatisation activities",
            "Overnight in camps",
          ],
        },
        {
          day: "Day 4: Rest and Acclimatisation at Karah",
          details: "",
          content: [
            "This day is kept for rest and acclimatisation.",
            "Some team games and acclimatisation activities will be conducted by our team",
          ],
        },
        {
          day: "Day 5: Kara to Phutsirang",
          details:
            "Trek distance: 5 km | Trek Duration: 5-6 hours | Altitude: 3550 m to 4200 m",
          content: [
            "Leave for the Phutsirang camp site after breakfast",
            "Today is a continuous ascend",
            "You will get to witness alpine ridges, river valleys, and panoramic Himalayan views",
            "Hot lunch will be served at camp site",
          ],
        },
      ],
      note: "It is advised to keep a buffer day for this trek in case of bad weather or any unforeseen situation.",
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
        title: "First Jumbo Bag",
        description: "Innovative all-in-one trekking gear solution",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
        title: "Easy Rescheduling",
        description: "Flexible booking and rescheduling options",
      },
    ],

    packingEssentials: [
      {
        category: "Basic Trek Essentials",
        items: [
          "Rucksack (60-70 ltr with cover)",
          "Down Jacket",
          "Fleece",
          "Gloves (Woollen and Waterproof)",
          "Poncho or a Rain Coat",
          "Trekking Pole",
          "Head Torch",
          "Trek Shoes - Men or Women",
          "Trek Pant – 2 Nos. Preferred",
          "Day Pack (20-30 litres)",
        ],
      },
      {
        category: "Clothes",
        items: [
          "A pair of Thermals",
          "Warm Socks and cotton socks (2-3 pair)",
          "Woollen Cap",
          "Sun Cap",
          "Gloves (Woollen and waterproof)",
          "Extra Layering of Warm Clothing as per necessity",
          "Extra lowers for Nights",
          "Balaclava",
        ],
      },
      {
        category: "Personal Utilities",
        items: [
          "Sun Glasses (UV Protected)",
          "Hand Towel",
          "Sun Screen Lotion (Min SPF- 30)",
          "Moisturiser",
          "Lunch box, Coffee mug and spoon",
          "Water bottle or Hydration Bag",
          "Sandals",
          "Basic First Aid",
          "Energy Bars",
        ],
      },
      {
        category: "Toiletries",
        items: [
          "Toilet paper rolls",
          "Towels",
          "Wet wipes (unscented)",
          "Zip Lock Bags",
          "Sanitizing Toilet Spray",
          "Soap and Handwash (pocket sized)",
          "Tooth Paste and Tooth Brush",
        ],
      },
    ],

    callToAction: {
      heading: "Pay Online To Book Your Trek Now",
      buttonText: "Book Now",
      bookingUrl: "https://thesearchingsouls.com/trek/book/kyarkoti-harsil",
    },

    relatedTreks: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2020/03/BL-T-1.jpg",
        title: "Bhrigu Lake Trek",
        description:
          "Bhrigu Lake is a high altitude trek in the himalayas of Kullu district of Himanchal Pradesh.",
        link: "https://www.thesearchingsouls.com/bhrigu-lake-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/06/HP-Thmb.jpg",
        title: "Hampta Pass Trek",
        description:
          "A pass in the Himalayas of Himachal Pradesh connecting Kullu and Spiti valley",
        link: "https://www.thesearchingsouls.com/hampta-pass-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/04/Thumbnail.jpg",
        title: "Kashmir Great Lakes Trek",
        description:
          "One of the most beautiful treks in the country with stunning alpine lakes",
        link: "https://www.thesearchingsouls.com/kashmir-great-lakes-trek",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/Tarsar-Marsar-1.jpg",
        title: "Tarsar Marsar Trek",
        description:
          "Alpine lake trek located in Tral valley of Pulwama district in Jammu and Kashmir",
        link: "https://www.thesearchingsouls.com/tarsar-marsar-lake-trek/",
      },
    ],
  },

  // ==========================================
  // 2. GULABI KANTHA TREK
  // ==========================================
  "gulabi-kantha": {
    hero: {
      image: "/aa.webp",
      title: "Gulabi Kantha Trek",
      subtitle: "4N 5D — Pink Mountain Paradise",
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
        "Dehradun to Dehradun all inclusive",
        "Book Now at Just ₹3500",
        "Perfect for beginners and families",
        "Highest Rated Trekking Company in India",
        "First Company to Introduce Jumbo Bag (Includes all Trekking Gear)",
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
        { icon: "altitude", title: "Altitude", description: "11,500 Ft." },
        {
          icon: "season",
          title: "Best Season",
          description: "April - June, Sept - Nov",
        },
      ],
      pricing: {
        amount: "₹8,000",
        duration: "4N 5D",
        phone: "+918979920602",
        bookingUrl: "https://thesearchingsouls.com/trek/book/gulabi-kantha",
      },
      addOns: [
        "Transportation available at ₹ 2500/person from Dehradun to Dehradun",
        "Back Pack offloading ₹ 3500/person",
      ],
    },

    gearAndInclusions: {
      rentalUrl: "https://www.thesearchingsouls.com/rentalproduct/",
      inclusions: [
        "Dehradun to Dehradun Trek",
        "Meals - (Veg Only- Breakfast, Lunch, Evening Snacks and Dinner)",
        "Accommodation in camps on Triple/Quad Sharing Basis",
        "Experienced Trek Leader, Professional Guides",
        "Forest permits and entry fees",
        "Medical Amenities – First Aid Kits, Oxymeters, oxygen cylinders",
        "Sanitised and Hygienic Camp sites",
      ],
      exclusions: [
        "Anything not mentioned in inclusion list",
        "5% GST",
        "Personal expenses",
        "Any kind of insurance",
        "Unscheduled stay due to weather conditions",
        "Porter/mule charges",
        "Cost of Evacuation in case of emergency",
      ],
    },

    transportation: {
      items: [
        "No of Persons (5-7): Tata Sumo/Mahindra Bolero",
        "No of Persons (8-13): Tempo Traveler",
        "Vehicles are Non AC for group departures",
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
        "Gulabi Kantha Trek is a beautiful 3N 4D trek in Uttarakhand. Known for its pink rhododendron blooms and stunning meadows, this trek offers spectacular views of major Himalayan peaks.",
      specialFeatures: [
        "Spectacular rhododendron forest trail during spring season",
        "360-degree views of major Himalayan peaks including Swargarohini",
        "Beautiful alpine meadows and pristine campsites",
        "Perfect beginner trek with moderate difficulty",
        "Close to Dehradun - easily accessible",
      ],
      days: [
        {
          day: "Day 1: Dehradun to Raithal to Gui",
          details: "Drive: 180 km | Trek: 3 km | Altitude: 8,500 ft",
          content: [
            "Early morning departure from Dehradun",
            "Drive to Raithal village through scenic mountain roads",
            "Begin trek to Gui campsite",
            "Gentle ascent through oak and rhododendron forests",
            "Overnight camping at Gui",
          ],
        },
        {
          day: "Day 2: Gui to Gulabi Kantha",
          details: "Trek: 6 km | Duration: 5-6 hours | Altitude: 11,500 ft",
          content: [
            "Trek through beautiful meadows",
            "Gradual ascent with stunning mountain views",
            "Reach Gulabi Kantha summit",
            "360-degree panoramic views of Himalayas",
            "Overnight camping near the summit",
          ],
        },
        {
          day: "Day 3: Gulabi Kantha to Gui",
          details: "Trek: 6 km | Duration: 4-5 hours | Altitude: 8,500 ft",
          content: [
            "Enjoy sunrise views from Gulabi Kantha",
            "Descend back to Gui campsite",
            "Packed lunch during trek",
            "Evening bonfire and cultural activities",
            "Overnight at Gui",
          ],
        },
        {
          day: "Day 4: Gui to Raithal, Drive to Dehradun",
          details: "Trek: 3 km | Drive: 180 km",
          content: [
            "Descend to Raithal village",
            "Drive back to Dehradun",
            "Expected arrival by evening",
            "Trek ends",
          ],
        },
      ],
      note: "Best time to visit is during April-May for rhododendron blooms or September-November for clear mountain views.",
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
        title: "First Jumbo Bag",
        description: "Innovative all-in-one trekking gear solution",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
        title: "Easy Rescheduling",
        description: "Flexible booking and rescheduling options",
      },
    ],

    packingEssentials: [
      {
        category: "Basic Trek Essentials",
        items: [
          "Rucksack (50-60 ltr with rain cover)",
          "Trekking Shoes with good grip",
          "Trekking Poles (recommended)",
          "Headlamp with extra batteries",
          "Water bottle (2 liters capacity)",
          "Day pack (20-30 liters)",
        ],
      },
      {
        category: "Clothes",
        items: [
          "2-3 Quick dry T-shirts",
          "Thermal inner wear (top and bottom)",
          "Fleece jacket",
          "Down/Padded jacket",
          "Trek pants (2 nos)",
          "Warm socks (3-4 pairs)",
          "Sun cap and woollen cap",
          "Gloves (both woollen and waterproof)",
        ],
      },
      {
        category: "Personal Items",
        items: [
          "Sunglasses (UV protected)",
          "Sunscreen lotion (SPF 40+)",
          "Moisturizer and lip balm",
          "Personal medicines",
          "Toiletries (biodegradable)",
          "Quick dry towel",
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
        "Dehradun to Dehradun all inclusive",
        "Book Now at Just ₹5000",
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
        { icon: "altitude", title: "Altitude", description: "12,000 Ft." },
        {
          icon: "season",
          title: "Best Season",
          description: "May - June, Sept - Nov",
        },
      ],
      pricing: {
        amount: "₹7,500",
        duration: "4N 5D",
        phone: "+918979920602",
        bookingUrl: "https://thesearchingsouls.com/trek/book/dayara-bugyal",
      },
      addOns: [
        "Transportation available at ₹ 3000/person from Dehradun to Dehradun",
        "Back Pack offloading ₹ 3000/person",
      ],
    },

    gearAndInclusions: {
      rentalUrl: "https://www.thesearchingsouls.com/rentalproduct/",
      inclusions: [
        "Dehradun to Dehradun Trek",
        "All Meals - Breakfast, Lunch, Dinner, Evening Snacks",
        "Accommodation in tents/homestays on sharing basis",
        "Experienced Trek Leader and support staff",
        "All necessary permits",
        "Medical kit, Oxymeters, Oxygen cylinders",
        "Sanitised camping equipment",
      ],
      exclusions: [
        "Anything not mentioned in inclusions",
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
        "No of Persons (5-7): Tata Sumo/Bolero",
        "No of Persons (8-13): Tempo Traveler",
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
          details: "Drive: 180 km | Duration: 7-8 hours | Altitude: 8,400 ft",
          content: [
            "Early morning departure from Dehradun",
            "Scenic drive through Uttarkashi",
            "Reach Barsu village by evening",
            "Acclimatization and briefing",
            "Overnight stay in homestay",
          ],
        },
        {
          day: "Day 2: Barsu to Barnala Tal",
          details: "Trek: 5 km | Duration: 4-5 hours | Altitude: 10,000 ft",
          content: [
            "Trek begins through dense oak and rhododendron forest",
            "Gradual ascent with beautiful forest trail",
            "Reach Barnala Tal - a small lake",
            "Set up camps near the lake",
            "Overnight camping",
          ],
        },
        {
          day: "Day 3: Barnala Tal to Dayara Bugyal",
          details: "Trek: 4 km | Duration: 3-4 hours | Altitude: 12,000 ft",
          content: [
            "Trek to the magnificent Dayara meadows",
            "Witness vast rolling grasslands",
            "360-degree mountain views",
            "Explore the meadows",
            "Overnight camping at Dayara Bugyal",
          ],
        },
        {
          day: "Day 4: Dayara Bugyal to Barsu",
          details: "Trek: 9 km | Duration: 6-7 hours | Altitude: 8,400 ft",
          content: [
            "Enjoy sunrise over the Himalayas",
            "Descend back to Barsu village",
            "Stop at Barnala Tal for lunch",
            "Reach Barsu by evening",
            "Overnight at homestay",
          ],
        },
        {
          day: "Day 5: Barsu to Dehradun",
          details: "Drive: 180 km | Duration: 7-8 hours",
          content: [
            "Drive back to Dehradun after breakfast",
            "Lunch on the way",
            "Reach Dehradun by evening",
            "Trek ends",
          ],
        },
      ],
      note: "This trek is perfect year-round. Visit in spring for blooming meadows or winter for snow-covered landscapes.",
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
        title: "First Jumbo Bag",
        description: "Innovative all-in-one trekking gear solution",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
        title: "Easy Rescheduling",
        description: "Flexible booking and rescheduling options",
      },
    ],

    packingEssentials: [
      {
        category: "Basic Trek Essentials",
        items: [
          "Rucksack (50-60 ltr)",
          "Trekking shoes with good ankle support",
          "Trekking poles",
          "Headlamp with batteries",
          "Water bottles (2 liters)",
          "Small backpack for day use",
        ],
      },
      {
        category: "Clothing",
        items: [
          "Quick-dry T-shirts (3-4)",
          "Full sleeve shirts (2)",
          "Trekking pants (2)",
          "Thermal wear (top & bottom)",
          "Fleece or woollen sweater",
          "Padded jacket",
          "Rain jacket/poncho",
          "Woollen socks (4 pairs)",
          "Sun cap and woollen cap",
          "Gloves",
        ],
      },
      {
        category: "Personal Care",
        items: [
          "Sunscreen (SPF 40+)",
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
          "Plastic bags for waste",
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
        description: "Popular winter summit trek with stunning snow landscapes",
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
        description: "High altitude alpine lake trek near Manali",
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

  // ==========================================
  // 4. BHRIGU LAKE TREK
  // ==========================================
  "bhrigu-lake-trek": {
    hero: {
      image: "/ll.png",
      title: "Bhrigu Lake Trek",
      subtitle: "3N 4D — Sacred Alpine Lake Adventure",
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
      trekName: "Bhrigu Lake Trek",
      price: "₹4,999",
      features: [
        "Manali to Manali all inclusive",
        "Book Now at Just ₹4500",
        "Sacred high altitude alpine lake",
        "Highest Rated Trekking Company in India",
        "First Company to Introduce Jumbo Bag",
        "Certified guides with local expertise",
        "Perfect weekend trek from Manali",
      ],
    },

    trekDetails: {
      details: [
        { icon: "calendar", title: "Trek Duration", description: "3N 4D" },
        { icon: "distance", title: "Trek Distance", description: "22 Km" },
        {
          icon: "difficulty",
          title: "Difficulty Level",
          description: "Easy to Moderate",
        },
        { icon: "altitude", title: "Altitude", description: "14,100 Ft." },
        { icon: "season", title: "Best Season", description: "May - October" },
      ],
      pricing: {
        amount: "₹4,999",
        duration: "3N 4D",
        phone: "+918979920602",
        bookingUrl: "https://thesearchingsouls.com/trek/book/bhrigu-lake-trek",
      },
      addOns: [
        "Transportation available at ₹ 2500/person from Delhi to Manali and back",
        "Back Pack offloading ₹ 3500/person",
      ],
    },

    gearAndInclusions: {
      rentalUrl: "https://www.thesearchingsouls.com/rentalproduct/",
      inclusions: [
        "Manali to Manali Trek",
        "All Meals (Breakfast, Lunch, Dinner, Evening Snacks)",
        "Accommodation in camps on Triple/Quad sharing",
        "Experienced Trek Leader and guides",
        "Forest permits and entry fees",
        "Medical kit, Oxymeters, Oxygen cylinders",
        "High quality camping equipment",
      ],
      exclusions: [
        "Items not mentioned in inclusions",
        "5% GST",
        "Personal expenses and tips",
        "Any kind of insurance",
        "Costs due to natural calamities",
        "Porter charges for personal luggage",
        "Emergency evacuation costs",
      ],
    },

    transportation: {
      items: [
        "No of Persons (5-7): Tata Sumo/Bolero",
        "No of Persons (8-13): Tempo Traveler",
        "Private taxis also available on request",
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
        "Bhrigu Lake Trek is a stunning high-altitude trek near Manali. Named after Sage Bhrigu, this sacred alpine lake sits at 14,100 ft and offers breathtaking 360-degree views of the Pir Panjal and Dhauladhar ranges. Perfect for beginners looking for a challenging yet achievable trek.",
      specialFeatures: [
        "Sacred alpine lake named after Sage Bhrigu from Mahabharata",
        "360-degree panoramic views of Pir Panjal and Dhauladhar ranges",
        "View of Hanuman Tibba, Seven Sisters, and Deo Tibba peaks",
        "Accessible high-altitude trek perfect for beginners",
        "Beautiful meadows and ridge walk experience",
      ],
      days: [
        {
          day: "Day 1: Manali to Gulaba to Rola Kholi",
          details:
            "Drive: 22 km | Trek: 5 km | Duration: 4-5 hours | Altitude: 10,500 ft",
          content: [
            "Drive from Manali to Gulaba (1 hour)",
            "Begin trek through beautiful meadows",
            "Gradual ascent with stunning valley views",
            "Reach Rola Kholi campsite",
            "Overnight camping at Rola Kholi",
          ],
        },
        {
          day: "Day 2: Rola Kholi to Bhrigu Lake and back",
          details: "Trek: 6 km | Duration: 6-7 hours | Altitude: 14,100 ft",
          content: [
            "Early morning start (around 5 AM)",
            "Trek to Bhrigu Lake via ridge",
            "Reach the sacred alpine lake",
            "360-degree mountain views",
            "Descend back to Rola Kholi",
            "Overnight camping at Rola Kholi",
          ],
        },
        {
          day: "Day 3: Rola Kholi to Gulaba, Drive to Manali",
          details: "Trek: 5 km | Duration: 3-4 hours | Drive: 22 km",
          content: [
            "Descend to Gulaba after breakfast",
            "Easy downhill trek through meadows",
            "Drive back to Manali",
            "Reach Manali by afternoon",
            "Trek ends",
          ],
        },
      ],
      note: "Weather conditions at high altitude can change rapidly. Carry proper warm clothing even in summer months.",
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
        title: "First Jumbo Bag",
        description: "Innovative all-in-one trekking gear solution",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
        title: "Easy Rescheduling",
        description: "Flexible booking and rescheduling options",
      },
    ],

    packingEssentials: [
      {
        category: "Basic Trek Essentials",
        items: [
          "Trekking backpack (50-60 ltr with rain cover)",
          "Good quality trekking shoes",
          "Trekking poles (highly recommended)",
          "Headlamp with spare batteries",
          "Water bottles (2 liters minimum)",
          "Day pack (20-30 liters)",
        ],
      },
      {
        category: "Clothing Layers",
        items: [
          "Moisture-wicking T-shirts (3)",
          "Full-sleeve quick-dry shirts (2)",
          "Trekking pants (2)",
          "Thermal innerwear (top & bottom)",
          "Fleece jacket or pullover",
          "Padded/Down jacket (very important)",
          "Waterproof jacket with hood",
          "Trekking socks (4-5 pairs)",
          "Sun hat and warm beanie",
          "Gloves (both light and warm)",
        ],
      },
      {
        category: "Personal Items",
        items: [
          "Sunglasses with UV protection",
          "Sunscreen lotion (SPF 50+)",
          "Moisturizer and lip balm (SPF)",
          "Personal toiletries",
          "Toilet paper and wet wipes",
          "Hand sanitizer",
          "Small towel (quick-dry)",
        ],
      },
      {
        category: "Important Others",
        items: [
          "Valid photo ID proof (mandatory)",
          "Personal first aid kit",
          "Prescribed personal medicines",
          "Energy bars, nuts, dry fruits",
          "Camera with extra batteries/power bank",
          "Reusable plastic bags",
          "Lightweight insulated water bottle",
        ],
      },
    ],

    callToAction: {
      heading: "Book Your Bhrigu Lake Adventure Now",
      buttonText: "Book Now",
      bookingUrl: "https://thesearchingsouls.com/trek/book/bhrigu-lake-trek",
    },

    relatedTreks: [
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2021/06/HP-Thmb.jpg",
        title: "Hampta Pass Trek",
        description:
          "Cross from Kullu to Lahaul valley with stunning landscape changes",
        link: "https://www.thesearchingsouls.com/hampta-pass-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/04/Thumbnail.jpg",
        title: "Kashmir Great Lakes Trek",
        description:
          "One of India's most beautiful treks with pristine alpine lakes",
        link: "https://www.thesearchingsouls.com/kashmir-great-lakes-trek",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/06/beas-kund.jpg",
        title: "Beas Kund Trek",
        description:
          "Easy trek to the origin of Beas river with magnificent views",
        link: "https://www.thesearchingsouls.com/beas-kund-trek/",
      },
      {
        image:
          "https://www.thesearchingsouls.com/wp-content/uploads/2022/08/chandratal.jpg",
        title: "Chandratal Lake Trek",
        description: "Moon Lake in Spiti - a photographer's paradise",
        link: "https://www.thesearchingsouls.com/chandratal-lake-trek/",
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
