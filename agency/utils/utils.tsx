import { desktop, growth, innovation, shield, mobile, ecommerce } from "./icons";
import { Bungee_Outline } from "next/font/google";

const bungee = Bungee_Outline ({

  subsets: ["latin"],
  weight: ["400"],
})

interface IService {
title: string;
icon: any;
description: string;
bulletPoints: string[];
}

export const navLinks = [

{
    name: "Home",
    url: "/",
},
{
    name: "Services",
    url: "/services",
},
{
    name: "About",
    url: "/about",
},
{
    name: "Contact Us",
    url: "/",
},
];



export const services: IService[] = [
    {
      title: "Digital Marketing",
      icon: growth,
      description:
        "Our data-driven digital marketing strategies enhance your online visibility and engagement, connecting you with your target audience effectively.",
      bulletPoints: [
        "Targeted SEO strategies",
        "Engaging content creation",
        "Social media management",
        "Pay-per-click advertising",
      ],
    },
    {
      title: "UX/UI Design & Web Development",
      icon: desktop,
      description:
        "We create intuitive and engaging digital experiences through user-centered design and responsive web development, ensuring accessibility and performance.",
      bulletPoints: [
        "User-centered UX/UI design",
        "Responsive and accessible web development",
        "Custom website and application solutions",
        "Optimization for performance and speed",
      ],
    },
    {
      title: "Branding & Strategy",
      icon: innovation,
      description:
        "We help define and elevate your brand through comprehensive identity development and strategic market positioning, ensuring a cohesive brand story.",
      bulletPoints: [
        "Comprehensive brand identity development",
        "Market research and analysis",
        "Brand strategy and positioning",
        "Visual design and collateral creation",
      ],
    },
    {
        title: "E-commerce Solutions",
        icon: ecommerce,
        description:
          "We build user-friendly e-commerce platforms that streamline shopping experiences, driving sales while ensuring security and usability.",
        bulletPoints: [
          "Customized e-commerce platform development",
          "User-friendly shopping experiences",
          "Payment gateway integration",
          "Inventory management systems",
        ],
      },
      {
        title: "Mobile App Development",
        icon: mobile,
        description:
          "Our mobile app development services focus on creating engaging, user-friendly applications for both iOS and Android platforms, fostering customer loyalty.",
        bulletPoints: [
          "Native and cross-platform app developmenT",
          "User-friendly interface design",
          "App performance optimization",
          "App store submission and support",
        ],
      },
      {
        title: "Cybersecurity Services",
        icon: shield,
        description:
          "We provide scalable cloud solutions that enhance collaboration and accessibility, ensuring your team can work efficiently from anywhere.",
        bulletPoints: [
          "Identify and evaluate vulnerabilities in your systems.",
          "Rapid prototyping and iteration",
          "Protect your network infrastructure from cyber threats",
          "Secure all devices accessing your network.",
        ],
      },
  ];

  export const aboutStats = [
    {
      title: "Happy Clients",
      count: "50+",
      ff: bungee.className,
    },
    {
      title: "Projects Completed",
      count: "100+",
    },
    {
      title: "Years Experience",
      count: "5+",
      ff: bungee.className,
    },
    {
      title: "Team Members",
      count: "15+",
    },
  ]

 export const baseText = [
    {
        text: "Web Development",
    },
    {
        text: "Digital Marketing", outline: bungee.className
    },
    {
        text: "Ui/UX Design",
    },
    {
        text: "SEO Optimization",
    },
    {
        text: "E-commerce", outline: bungee.className
    },
    {
      text: "Branding & Strategy",
  },
  {
    text: "App Development", outline: bungee.className
},
{
  text: "Cybersecurity Services",
},
]

export const awards = [
  {
    date: "February 2024",
    companyLogo: "/images/logos/logo--behance.png",
    category: "Best UX",
    link: "https://www.behance.net/",
  },
  {
    date: "March 2024",
    companyLogo: "/images/logos/logo--awwwards.png",
    category: "Site of the Day",
    link: "https://www.awwwards.com/",
  },
  {
    date: "May 2024",
    companyLogo: "/images/logos/logo--dribble.png",
    category: "Best Design",
    link: "https://dribbble.com/",
  },
  {
    date: "July 2024",
    companyLogo: "/images/logos/logo--pinterest.png",
    category: "Best UI",
    link: "https://www.pinterest.com/",
  },
];


export const faqs = [
  {
    question: "What is your primary focus as a web developer?",
    answer:
      "I specialize in front-end development, creating visually appealing and functional web applications. Currently, I’m enhancing my skills to become proficient in the MERN stack (MongoDB, Express, React, Node.js).",
  },
  {
    question: "What types of projects are you currently working on?",
    answer:
      "I’m currently working on various front-end projects that blend creativity and functionality, focusing on user experience and responsive design.",
  },
  {
    question: "What tools and technologies do you use?",
    answer:
      "I primarily work with HTML, CSS, JavaScript, and React for front-end development. As I transition into full-stack development, I’m learning MongoDB, Express, and Node.js.",
  },
  {
    question: "How do you approach web development projects?",
    answer:
      "My approach involves understanding client needs, brainstorming creative solutions, and implementing them while ensuring a user-friendly experience. I focus on both aesthetics and functionality.",
  },
  {
    question: "What are your long-term goals as a developer?",
    answer:
      "Yes, I’m passionate about open-source projects and actively seek opportunities to contribute. It’s a great way to collaborate with other developers and enhance my skills.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can contact me through the contact form on my website or email me directly at anasfarooq2006@gmail.com, I look forward to connecting!",
  },
];


type Link = { name: string; url?: string; email?: string; phone?: string };

export const footerNavLinks: { title: string; links: Link[] }[] = [
  {
    title: "About Us",
    links: [
      { name: "Home", url: "/" },
      { name: "Services", url: "#" },
      { name: "About", url: "#" },
      { name: "Portfolio", url: "#" },
      { name: "FAQs", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", url: "/web-development" },
      { name: "Responsive Design", url: "/Responsive-Design" },
      { name: "UI/UX Design", url: "/ui-ux-design" },
      { name: "E-commerce", url: "/e-commerce" },
      { name: "Digital Marketing", url: "/digital-marketing" },
      { name: "App Development", url: "/app-development" },
      { name: "Branding & Strategy", url: "/branding" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { name: "Email", email: "anasfarooq2006@gmail.com" },
      { name: "Phone", phone: "+92 317 965 7473" },
    ],
  },
];