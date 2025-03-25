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

export const testimonialsData = {
  heading: "What Our Users Say",
  subheading: "Join thousands of learners leveling up their English skills!",
  testimonials: [
    {
      id: 1,
      review:
        "This platform has revolutionized the way I learn English. Highly recommended!",
      name: "John Doe",
      profession: "Software Engineer",
      videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      userImage: "/assets/empty-bg.webp",
      date: "2023-07-15",
    },
    {
      id: 2,
      review:
        "The interactive lessons are so engaging. I've improved my skills significantly.",
      name: "Jane Smith",
      profession: "Graphic Designer",
      videoSrc: "/assets/empty-bg.webp",
      userImage: "/assets/empty-bg.webp",
      date: "2023-06-20",
    },
    {
      id: 3,
      review:
        "I love the community aspect. Learning with others makes it so much fun.",
      name: "Michael Brown",
      profession: "Teacher",
      videoSrc: "/assets/empty-bg.webp",
      userImage: "/assets/empty-bg.webp",
      date: "2023-05-10",
    },
    {
      id: 4,
      review:
        "The AI tutor is incredibly helpful. I feel more confident in my English now.",
      name: "Emily Davis",
      profession: "Marketing Specialist",
      videoSrc: "/assets/empty-bg.webp",
      userImage: "/assets/empty-bg.webp",
      date: "2023-04-25",
    },
    {
      id: 5,
      review:
        "The progress tracking feature keeps me motivated to learn more every day.",
      name: "Chris Wilson",
      profession: "Data Analyst",
      videoSrc: "/assets/empty-bg.webp",
      userImage: "/assets/empty-bg.webp",
      date: "2023-03-15",
    }
  ],
};

export const faqData = {
  heading: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website is a place to help you find the best products and services in the world.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support by email at support@example.com or by phone at 123-456-7890.",
    },
    {
      question: "How do I find the best products?",
      answer:
        "You can find the best products by searching for them on the search page or by browsing the categories.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Yes, you can return a product within 30 days of purchase. Please refer to our return policy for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the order history page. You will also receive a tracking number via email once your order has shipped.",
    },
  ],
};
