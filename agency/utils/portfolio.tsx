import { StaticImageData } from "next/image";
import imageSm1 from "@/public/images/image--portfolio-sm-1.png";
import imageSm2 from "@/public/images/image--portfolio-sm-2.png";
import imageChat1 from "@/public/images/image--chat-1.png";
import imageTodo1 from "@/public/images/image--todo-1.png";
import imageWeather from "@/public/images/image--weather.png";
import pixvaultImage1 from "@/public/images/pixvault--portfolio-1.png";
import pixvaultImage2 from "@/public/images/pixvault--portfolio-2.png";
import pixvaultImage3 from "@/public/images/pixvault--portfolio-3.png";
import codynerdsImage1 from "@/public/images/codynerds--portfolio-1.png";
import codynerdsImage2 from "@/public/images/codynerds--portfolio-2.png";
import codynerdsImage3 from "@/public/images/codynerds--portfolio-3.png";



interface IPortfolio {
    id: number;
    title: string;
    category: string;
    subtitle: string;
    date: string;
    previewImage: StaticImageData;
    bgColor?: string;
    technologiesUsed?: string[];
    lessonsLearned?: string[];
    projectDetails?: string;
    link: string;
details: {
    paragraphs: string[];
    bulletPoints: string[];
    images: StaticImageData[];
    footer: string;
};

}

const portfolios: IPortfolio[] = [
    {
        id: 1,
        category: "Stock Media App",
        title: "PIXVAULT",
        subtitle: "PixVault - A large media stock library",
        date: "Sep 2024",
        technologiesUsed: ["HTML", "CSS", "JavaScript", "Firebase", "Pexels"],
        previewImage: imageSm1,
        link: "pixvault",
        bgColor: "bg-[#6fcf97]",
        lessonsLearned: ["API Implementation", "DOM Manipulation", "Async/Await", "Promises", "Code Structure"],
        details: {
          paragraphs: [
            "PIXVAULT is a free stock media platform, powered by Pexels, where users can explore and download high-quality photos and videos. It also features a unique color search functionality that allows users to discover media based on a specific color. The platform is fully responsive, providing a seamless experience across all devices.",
          ],
          bulletPoints: [
            "Search Photos and Videos: Explore a vast collection of stock media.",
            "Favorites: Save photos and videos to easily revisit them later.",
            "Color Search: Find media by selecting any color.",
            "Optimized for all devices (mobile, tablet, and desktop).",
          ],
          images: [pixvaultImage1, pixvaultImage2, pixvaultImage3],
          footer: "Try PIXVAULT: [Stock Media App] (https://www.example.com)",
        },
      },
      {
        id: 2,
        category: "Web Development",
        title: "Movie App",
        subtitle: "Redefining luxury with a modern touch",
        date: "May 2023",
        previewImage: imageWeather,
        link: "luxury-fashion-brand",
        bgColor: "bg-[#C6AFA2]",
        lessonsLearned: ["API Implementation", "DOM Manipulation", "Async/Await", "Promises", "Code Structure"],
        details: {
          paragraphs: [
            "We partnered with a high-end fashion brand to create a new identity that reflects luxury and elegance. Our branding strategy focused on minimalist design elements, sophisticated typography, and a monochrome color palette.",
            "The project also included the design of marketing collateral, including business cards, packaging, and a brand guideline document to ensure consistency across all platforms.",
          ],
          bulletPoints: [
            "Minimalist logo design",
            "Sophisticated typography",
            "Monochrome color palette",
            "Consistent brand guidelines",
          ],
          images: [imageSm1, imageSm1, imageSm1],
          footer: "Discover more: [Luxury Fashion Brand](https://www.example.com)",
        },
      },
      {
        id: 3,
        category: "Community Website",
        title: "Cody Nerds",
        subtitle: "Cody Nerds - Let's build our network strong",
        date: "April 2024",
        previewImage: imageSm2,
        link: "Cody-Nerds",
        bgColor: "bg-[#F0DB4F]",
        lessonsLearned: ["Parallax Effect", "UI/UX", "SEO Optimization", "Code Structure"],
        details: {
          paragraphs: [
            "Cody Nerds stands as a community hub for developers to connect, collaborate, and grow together. Our mission is to provide a platform where coding enthusiasts can showcase projects, share knowledge, and build lasting connections. Join us and be part of a vibrant community where innovation knows no bounds.",
            
          ],
          bulletPoints: [
            "User-Friendly Interface: Intuitive design for easy navigation.",
            "Engaging Hero Section: Captivating intro with a strong CTA to join.",
            "Community Benefits: Highlights networking, knowledge sharing, and resources.",
            "FAQ Section: Answers common questions about joining and community expectations.",
          ],
          images: [codynerdsImage3, codynerdsImage2, codynerdsImage1],
          footer: "Learn more about Cody Nerds: [Community](https://www.example.com)",
        },
      },
      {
        id: 4,
        category: "Weather App",
        title: "Finance Manager Desktop App",
        subtitle: "Managing finances with ease and precision",
        date: "March 2023",
        previewImage: imageTodo1,
        link: "Weather App",
        bgColor: "bg-[#F0DB4F]",
        lessonsLearned: ["API Implementation", "DOM Manipulation", "Async/Await", "Promises", "Code Structure"],
        details: {
          paragraphs: [
            "The Finance Manager desktop app is designed to help users manage their personal and business finances with ease. It offers features like expense tracking, budget planning, and financial reporting, all within a user-friendly interface.",
            "The design emphasizes clarity and ease of use, allowing users to quickly enter and categorize expenses, monitor budgets, and generate detailed financial reports. The app supports multiple accounts and provides insightful analytics to help users make informed financial decisions.",
          ],
          bulletPoints: [
            "Comprehensive expense tracking and budget planning",
            "Detailed financial reporting with customizable analytics",
            "User-friendly interface with support for multiple accounts",
            "Designed for both personal and business finance management",
          ],
          images: [imageSm1, imageSm1, imageSm1],
          footer:
            "Manage your finances: [Finance Manager](https://www.example.com)",
        },
      },
    ];

export default portfolios;