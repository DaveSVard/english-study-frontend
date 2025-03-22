import {
  FaArrowUp,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaServer,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

export const navItems = [
  { id: 1, link: "#faq", title: "FAQ", scroll: true },
  { id: 2, link: "/contact-us", title: "Contact" },
];

export const socials = [
  { id: 1, link: "#", icon: <FaLinkedin /> },
  { id: 2, link: "#", icon: <FaFacebook /> },
  { id: 3, link: "#", icon: <FaInstagram /> },
  { id: 4, link: "#", icon: <FaTwitter /> },
  { id: 5, link: "#", icon: <FaTelegram /> },
];

export const heroData = {
  heading: "Master English in a Fun & Interactive Way!",
  subHeading:
    "Learn, play, and grow with engaging challenges, personalized vocabulary, and the CryptoLetters game!",
  image: {
    src: "/assets/empty-bg.webp",
    alt: "Dashboard Image",
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
  ],
};

export const statsData = {
  heading: "Join Thousands Learning English in a Fun & Interactive Way!",
  subHeading:
    "We’re changing the way people learn English. Check out the numbers that prove it!",
  stats: [
    {
      title: "Teachers Sharing Knowledge",
      description: "Experts helping students level up their skills",
      icon: FaClock,
      value: 100,
      nextSuffix: "+",
    },
    {
      title: "Global Learners",
      description: "Users from all over the world are improving daily!",
      icon: FaServer,
      value: 79,
      nextSuffix: "K+",
    },
    {
      title: "Countries Represented",
      description: "A global learning revolution!",
      icon: FaArrowUp,
      value: 99,
      nextSuffix: "+",
    },
  ],
};
