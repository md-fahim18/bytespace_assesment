import {
  PenTool,
  Braces,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  Layers,
  Asterisk,
  Zap,
  Flower2,
} from "lucide-react";
import { assets } from "./assets";

export const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const partnerLogos = [
  { name: "Logoipsum", icon: Layers },
  { name: "Logoipsum", icon: Asterisk },
  { name: "Logoipsum", icon: Zap },
  { name: "Logoipsum", icon: Flower2 },
];

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courseBase = {
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  rating: "4.5",
  author: "purepearl studio",
  level: "Beginner",
  price: "$25",
  priceNote: "/lifetime",
};

export const courses = [
  { title: "Learn Figma from Basic", image: assets.courses[0] },
  { title: "Build Digital Asset", image: assets.courses[1] },
  { title: "the Power of Big Data", image: assets.courses[2] },
  { title: "Balancing Productivity and Focus", image: assets.courses[3] },
  { title: "Mastering Money Management", image: assets.courses[4] },
  { title: "From Idea to Startup Success", image: assets.courses[5] },
].map((c, i) => ({ id: i + 1, ...courseBase, ...c }));

export const learningPaths = [
  { label: "Design", icon: PenTool },
  { label: "Development", icon: Braces },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Building2 },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: assets.testimonials[0],
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: assets.testimonials[1],
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: assets.testimonials[2],
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];
