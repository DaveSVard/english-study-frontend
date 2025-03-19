import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

export const navItems = [
  { id: 1, link: "#faq", title: "FAQ" },
  { id: 2, link: "/contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "#", icon: <FaLinkedin /> },
  { id: 2, link: "#", icon: <FaFacebook /> },
  { id: 3, link: "#", icon: <FaInstagram /> },
  { id: 4, link: "#", icon: <FaTwitter /> },
  { id: 5, link: "#", icon: <FaTelegram /> },
];

export const hero = {
  heading: "Master English in a Fun & Interactive Way!",
  subHeading: "Learn, play, and grow with engaging challenges, personalized vocabulary, and the CryptoLetters game!",
  image: {
    src: "/assets/empty-bg.webp",
    alt: "Dashboard Image"
  },
  CTAs: [
    {
      id: 1,
      link: "/register",
      title: "Get Started for Free",
      variant: "accent",
    },
    {
      id: 2,
      link: "#features",
      title: "Explore Features",
      variant: "outline",
    },
    
  ]
};
