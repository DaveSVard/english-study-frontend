import {
  FaArrowUp,
  FaBook,
  FaClock,
  FaComments,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPuzzlePiece,
  FaServer,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-llet-700 bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-neutral-300 dark:border-llet-700" />
);

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
    },
    {
      id: 6,
      review:
        "The progress tracking feature keeps me motivated to learn more every day.",
      name: "Chris Wilson",
      profession: "Data Analyst",
      videoSrc: "/assets/empty-bg.webp",
      userImage: "/assets/empty-bg.webp",
      date: "2023-03-15",
    },
  ],
};

export const faqData = {
  heading: "Frequently Asked Questions",
  faqs: [
    {
      question: "What languages can I learn on this platform?",
      answer:
        "Our platform offers a wide range of languages including Spanish, French, German, Mandarin, Japanese, and many more.",
    },
    {
      question: "How do I start learning a new language?",
      answer:
        "To start learning a new language, simply sign up for an account, choose your desired language, and begin with our introductory lessons.",
    },
    {
      question: "Are there any resources for advanced learners?",
      answer:
        "Yes, we provide advanced resources such as podcasts, articles, and live conversation sessions to help advanced learners improve their skills.",
    },
    {
      question: "Can I track my language learning progress?",
      answer:
        "Absolutely! Our platform includes a progress tracking feature that allows you to monitor your learning milestones and achievements.",
    },
    {
      question: "Do you offer live tutoring sessions?",
      answer:
        "Yes, we offer live tutoring sessions with experienced language tutors. You can schedule sessions at your convenience through our platform.",
    },
    {
      question: "Is there a community for language learners?",
      answer:
        "Yes, we have a vibrant community of language learners where you can interact, share experiences, and practice with fellow learners.",
    },
  ],
};

export const featuresData = {
  heading: "Why us?",
  subheading: "What makes our platform stand out?",
  features: [
    {
      title: "Introduction to Language Learning",
      description:
        "Begin your journey with our comprehensive language courses.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <FaBook className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Interactive Vocabulary Building",
      description:
        "Enhance your vocabulary with engaging and interactive tools.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <FaPuzzlePiece className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Grammar Mastery",
      description:
        "Master the intricacies of grammar with our expert resources.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <FaPenFancy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Conversational Practice",
      description:
        "Improve your speaking skills with real-life conversation practice.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <FaComments className="h-4 w-4 text-neutral-500" />,
    },
  ],
};
