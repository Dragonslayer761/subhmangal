import { WeddingPackage, AddOnService } from "./types";

// Generated SVG Logo Data URI based on description: White text, Red dot, Green leaf
export const LOGO_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 80'%3E%3Cstyle%3E.text%7Bfont-family:'Playfair Display',serif;font-size:40px;fill:white;font-weight:bold;%3E%3C/style%3E%3Ctext x='10' y='55' class='text'%3ESUBHMANGAL%3C/text%3E%3Ccircle cx='285' cy='50' r='4' fill='%23ef4444'/%3E%3Cpath d='M250 25 Q 270 10 285 25 Q 270 40 250 25' fill='none' stroke='%2322c55e' stroke-width='2'/%3E%3C/svg%3E";

export const PACKAGES: WeddingPackage[] = [
  {
    id: "pre-wedding",
    title: "Pre-Wedding Love Tales",
    price: "₹20,000",
    description:
      "Capture the romance before the big day with our cinematic storytelling.",
    isPremium: false,
    highlightColor: "green",
    features: {
      rawPhotos: "Unlimited Raw Photos",
      editedPhotos: 30,
      video: "Cinematic Video (Approx. 3 min)",
      reels: "1 Instagram Reel",
    },
  },
  {
    id: "wedding-standard",
    title: "Traditional Wedding to Reception",
    price: "₹1,20,000",
    duration: "3 Days Coverage",
    description:
      "Comprehensive coverage for both bride and groom sides, capturing every ritual from wedding to reception.",
    isPremium: false,
    highlightColor: "red",
    features: {
      rawPhotos: "Unlimited Raw Photos",
      editedPhotos: 120,
      album: "40 Pages High Gloss Non-Tearable Album",
      video: "Cinematic Full Video (35-40 min) + Teaser",
      reels: "1 Reel",
    },
    manpower: [
      {
        event: "Wedding Days",
        details: [
          "Bride Side: 1 Photographer, 1 Cinematographer",
          "Groom Side: 1 Photographer, 1 Cinematographer",
        ],
      },
      {
        event: "Biday & Bodhuboron",
        details: ["1 Photographer, 1 Cinematographer"],
      },
      {
        event: "Reception",
        details: ["2 Photographers, 1 Cinematographer"],
      },
    ],
  },
  {
    id: "wedding-premium",
    title: "Premium Royal Celebration",
    price: "₹1,40,000",
    duration: "4 Days Coverage",
    description:
      "The ultimate luxury package covering everything from Aiburobhat to Reception with exclusive extras.",
    isPremium: true,
    highlightColor: "gold",
    features: {
      rawPhotos: "Unlimited Raw Photos",
      editedPhotos: 240,
      album: "Two 40 Pages High Gloss Non-Tearable Albums",
      video: "Cinematic Full Video (35-40 min) + Teaser",
      reels: "2 Reels",
      extra: [
        "Complimentary Pre-wedding Photo Shoot (30 edited pics)",
        "Includes Aiburobhat Photography (Both sides)",
      ],
    },
    manpower: [
      {
        event: "Aiburobhat",
        details: ["1 Photographer (Both sides)"],
      },
      {
        event: "Wedding Days",
        details: [
          "Bride Side: 1 Photographer, 1 Cinematographer",
          "Groom Side: 1 Photographer, 1 Cinematographer",
        ],
      },
      {
        event: "Biday & Bodhuboron",
        details: ["1 Photographer, 1 Cinematographer"],
      },
      {
        event: "Reception",
        details: ["2 Photographers, 1 Cinematographer"],
      },
    ],
  },
];

export const ADD_ONS: AddOnService[] = [
  {
    title: "Drone Cinematography",
    price: "₹8,000 / day",
    description: "Aerial shots to give a grand perspective to your venue.",
  },
  {
    title: "Drone Combo Deal",
    price: "₹15,000",
    description: "Discounted rate for both Wedding and Reception days.",
  },
  {
    title: "Pre-Wedding Cinematic Video",
    price: "₹10,000 extra",
    description:
      "Add a high-quality cinematic film to your complimentary pre-wedding photo shoot.",
  },
  {
    title: "Additional Album Pages",
    price: "₹500 + Service Charge",
    description: "Price per 2 extra pages in the high gloss album.",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: "Ring Ceremony",
    url: "../assets/images/MAN_3088.jpg",
    title: "Couple Shoot",
  },
  {
    id: 2,
    category: "Wedding",
    url: "../assets/images/DSC_1128.jpg",
    title: "Sindoor Daan",
  },
  {
    id: 3,
    category: "Pre-wedding",
    url: "../assets/images/10.jpg",
    title: "Golden Hour Moments",
  },
  {
    id: 4,
    category: "Wedding",
    url: "../assets/images/ANK_4971_1.jpg",
    title: "The Varmala",
  },
  {
    id: 5,
    category: "Ring Ceremony",
    url: "../assets/images/H6.jpg",
    title: "Haldi Ceremony",
  },
  {
    id: 6,
    category: "Pre-wedding",
    url: "../assets/images/SD709530.jpg",
    title: "Casual Romance",
  },
  {
    id: 7,
    category: "Wedding",
    url: "../assets/images/MAN_2668.jpg",
    title: "The Grand Entrance",
  },
  {
    id: 8,
    category: "Ring Ceremony",
    url: "../assets/images/SEN_1949.jpg",
    title: "Sacred Fire",
  },
  {
    id: 9,
    category: "Pre-wedding",
    url: "../assets/images/(25).jpg",
    title: "Playful Moments",
  },
  {
    id: 10,
    category: "Pre-wedding",
    url: "../assets/images/1.jpg",
    title: "Romantic Prelude",
  },
  {
    id: 11,
    category: "Pre-wedding",
    url: "../assets/images/21.jpg",
    title: "Tender Embrace",
  },
  {
    id: 12,
    category: "Pre-wedding",
    url: "../assets/images/22.jpg",
    title: "Blissful Beginning",
  },
  {
    id: 13,
    category: "Pre-wedding",
    url: "../assets/images/wl2.jpg",
    title: "Ganges Sunset Serenade",
  },
  {
    id: 14,
    category: "Pre-wedding",
    url: "../assets/images/23.jpg",
    title: "Forever Starts Here",
  },
  {
    id: 15,
    category: "Pre-wedding",
    url: "../assets/images/2(1).jpg",
    title: "Eternal Vows",
  },
  {
    id: 16,
    category: "Pre-wedding",
    url: "../assets/images/L29.jpg",
    title: "Heritage of Love",
  },
  {
    id: 17,
    category: "Pre-wedding",
    url: "../assets/images/26.jpg",
    title: "Victoria Memorial Whispers",
  },
  {
    id: 18,
    category: "Pre-wedding",
    url: "../assets/images/(55).jpg",
    title: "Sunlit Promises",
  },
  {
    id: 19,
    category: "Wedding",
    url: "../assets/images/27.jpg",
    title: "Sacred Vows",
  },
  {
    id: 20,
    category: "Wedding",
    url: "../assets/images/w11.jpg",
    title: "Joyful Union",
  },
  {
    id: 21,
    category: "Wedding",
    url: "../assets/images/30.jpg",
    title: "Eternal Bond",
  },
  {
    id: 22,
    category: "Wedding",
    url: "../assets/images/31.jpg",
    title: "Graceful Moments",
  },
  {
    id: 24,
    category: "Wedding",
    url: "../assets/images/34.jpg",
    title: "Together Forever",
  },
  {
    id: 23,
    category: "Wedding",
    url: "../assets/images/32.jpg",
    title: "Haldi Highlights",
  },
  {
    id: 25,
    category: "Wedding",
    url: "../assets/images/12.jpg",
    title: "Ceremonial Bliss",
  },
  {
    id: 26,
    category: "Wedding",
    url: "../assets/images/37.jpg",
    title: "Ceremonial Bliss",
  },
  {
    id: 27,
    category: "Wedding",
    url: "../assets/images/36.jpg",
    title: "Ceremonial Bliss",
  },
];

export const CONTACT_INFO = {
  phone: "+91 9804222178",
  whatsapp: "+91 8100544925",
  email: "hello@subhmangal.in",
  instagram:
    "https://www.instagram.com/subhmangal.kolkata?igsh=djNrcGxqNm1sNzAx",
  facebook: "https://www.facebook.com/share/1CnhNW6vpj/",
  address: "Kolkata, West Bengal",
};
