import { desktop, growth, innovation, building } from "./icons";
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
      title: "Digital Strategy & Consulting",
      icon: growth,
      description:
        "Develop a robust digital strategy that aligns with your business goals. Our expert consultants will guide you through the process, ensuring your brand stays ahead in the digital landscape.",
      bulletPoints: [
        "Tailored digital strategies for your brand",
        "In-depth market and competitor analysis",
        "Expert guidance on emerging trends",
        "Alignment of digital initiatives with business goals",
      ],
    },
    {
      title: "UX/UI Design & Web Development",
      icon: desktop,
      description:
        "Create a seamless user experience with our expert UX/UI design and web development services. We craft visually stunning and highly functional websites that engage users and drive conversions.",
      bulletPoints: [
        "User-centered UX/UI design",
        "Responsive and accessible web development",
        "Custom website and application solutions",
        "Optimization for performance and speed",
      ],
    },
    {
      title: "Innovative Product Development",
      icon: innovation,
      description:
        "Transform your ideas into market-ready products. Our team specializes in creating innovative solutions that drive growth and give you a competitive edge.",
      bulletPoints: [
        "End-to-end product design and development",
        "Rapid prototyping and iteration",
        "Integration of cutting-edge technologies",
        "Focus on user needs and market demands",
      ],
    },
    {
        title: "Innovative Product Development",
        icon: building,
        description:
          "Transform your ideas into market-ready products. Our team specializes in creating innovative solutions that drive growth and give you a competitive edge.",
        bulletPoints: [
          "End-to-end product design and development",
          "Rapid prototyping and iteration",
          "Integration of cutting-edge technologies",
          "Focus on user needs and market demands",
        ],
      },
      {
        title: "Innovative Product Development",
        icon: innovation,
        description:
          "Transform your ideas into market-ready products. Our team specializes in creating innovative solutions that drive growth and give you a competitive edge.",
        bulletPoints: [
          "End-to-end product design and development",
          "Rapid prototyping and iteration",
          "Integration of cutting-edge technologies",
          "Focus on user needs and market demands",
        ],
      },
      {
        title: "Innovative Product Development",
        icon: innovation,
        description:
          "Transform your ideas into market-ready products. Our team specializes in creating innovative solutions that drive growth and give you a competitive edge.",
        bulletPoints: [
          "End-to-end product design and development",
          "Rapid prototyping and iteration",
          "Integration of cutting-edge technologies",
          "Focus on user needs and market demands",
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
      count: "04",
      ff: bungee.className,
    },
    {
      title: "Team Members",
      count: "05",
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
        text: "Ui/Ux Design",
    },
    {
        text: "SEO Optimization",
    },
    {
        text: "Graphic Designing", outline: bungee.className
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
