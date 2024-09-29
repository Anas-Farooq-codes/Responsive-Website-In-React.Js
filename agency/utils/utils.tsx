import { desktop, growth, innovation } from "./icons";
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