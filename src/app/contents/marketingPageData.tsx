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
    },
    {
      id: 2,
      review:
        "The interactive lessons are so engaging. I've improved my skills significantly.",
      name: "Jane Smith",
      profession: "Graphic Designer",
    },
    {
      id: 3,
      review:
        "I love the community aspect. Learning with others makes it so much fun.",
      name: "Michael Brown",
      profession: "Teacher",
    },
    {
      id: 4,
      review:
        "The AI tutor is incredibly helpful. I feel more confident in my English now.",
      name: "Emily Davis",
      profession: "Marketing Specialist",
    },
    {
      id: 5,
      review:
        "The progress tracking feature keeps me motivated to learn more every day.",
      name: "Chris Wilson",
      profession: "Data Analyst",
    },
    {
      id: 6,
      review:
        "I've tried many platforms, but this one is by far the best for learning English.",
      name: "Sarah Johnson",
      profession: "HR Manager",
    },
    {
      id: 7,
      review:
        "The lessons are well-structured and easy to follow. Great for all levels.",
      name: "David Martinez",
      profession: "Sales Executive",
    },
    {
      id: 8,
      review:
        "The customer support is fantastic. They really care about their users.",
      name: "Laura Garcia",
      profession: "Customer Service Representative",
    },
    {
      id: 9,
      review:
        "I've made so much progress in such a short time. This platform is amazing.",
      name: "James Anderson",
      profession: "Project Manager",
    },
    {
      id: 10,
      review:
        "The variety of exercises keeps things interesting. I never get bored.",
      name: "Linda Thompson",
      profession: "Content Writer",
    },
    {
      id: 11,
      review:
        "The feedback from the AI tutor is very constructive. I've learned a lot.",
      name: "Robert Lee",
      profession: "Financial Advisor",
    },
    {
      id: 12,
      review: "The mobile app is very convenient. I can learn on the go.",
      name: "Patricia White",
      profession: "Nurse",
    },
    {
      id: 13,
      review:
        "The lessons are very interactive and engaging. I look forward to them every day.",
      name: "Charles Harris",
      profession: "Architect",
    },
    {
      id: 14,
      review:
        "The platform is very user-friendly. It's easy to navigate and find what I need.",
      name: "Barbara Clark",
      profession: "Lawyer",
    },
    {
      id: 15,
      review: "The community is very supportive. I've made many friends here.",
      name: "Daniel Lewis",
      profession: "Chef",
    },
    {
      id: 16,
      review:
        "The AI tutor is very accurate. It helps me correct my mistakes effectively.",
      name: "Jennifer Robinson",
      profession: "Photographer",
    },
    {
      id: 17,
      review:
        "The lessons are very comprehensive. They cover all aspects of English learning.",
      name: "Paul Walker",
      profession: "Engineer",
    },
    {
      id: 18,
      review: "The platform is very affordable. Great value for money.",
      name: "Elizabeth Hall",
      profession: "Accountant",
    },
    {
      id: 19,
      review:
        "The progress tracking feature is very motivating. I can see my improvement.",
      name: "Mark Allen",
      profession: "Consultant",
    },
    {
      id: 20,
      review:
        "The lessons are very practical. I can apply what I learn in real life.",
      name: "Mary Young",
      profession: "Doctor",
    },
  ],
};
