import { StaticImageData } from "next/image";
import imageSm1 from "@/public/images/image--portfolio-sm-1.png";
import imageSm2 from "@/public/images/image--portfolio-sm-2.png";
import imageSm3 from "@/public/images/image--portfolio-sm-3.png";
import imageSm4 from "@/public/images/image--portfolio-sm-4.png";
import pixvaultImage1 from "@/public/images/pixvault--portfolio-1.png";
import pixvaultImage2 from "@/public/images/pixvault--portfolio-2.png";
import pixvaultImage3 from "@/public/images/pixvault--portfolio-3.png";
import codynerdsImage1 from "@/public/images/codynerds--portfolio-1.png";
import codynerdsImage2 from "@/public/images/codynerds--portfolio-2.png";
import codynerdsImage3 from "@/public/images/codynerds--portfolio-3.png";
import cinematrixImage1 from "@/public/images/cinematrix--portfolio-1.png";
import cinematrixImage2 from "@/public/images/cinematrix--portfolio-2.png";
import cinematrixImage3 from "@/public/images/cinematrix--portfolio-3.png";
import horizonImage1 from "@/public/images/horizon--portfolio-1.png";
import horizonImage2 from "@/public/images/horizon--portfolio-2.png";
import horizonImage3 from "@/public/images/horizon--portfolio-3.png";




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
        technologiesUsed: ["HTML", "CSS", "JavaScript", "Firebase", "Pexels (API)"],
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
          footer: "https://pixvault.netlify.app/",
        },
      },
      {
        id: 2,
        category: "Movie App",
        title: "Cinematrix",
        subtitle: "Cinematrix - The world's most popular movie app.",
        date: "June 2024",
        technologiesUsed: ["HTML", "CSS", "JavaScript", "Firebase", "TMDB (API)", "Postman"],
        previewImage: imageSm3,
        link: "movie-app",
        bgColor: "bg-[#97233F]",
        lessonsLearned: ["API Implementation", "DOM Manipulation", "Async/Await", "Promises", "Code Structure"],
        details: {
          paragraphs: [
            "Cinematrix is a movie app where you can check out all upcoming movies, trending movies of the week, and top-rated movies. You can also view cast details, director, release date, PG rating, and all the trailers for each movie. Moreover, you can search for any movie details you want. Additionally, there's a sidebar where you'll find all genre-related movies and language-sorted movies. And, yes, this website is fully responsive!",
            
          ],
          bulletPoints: [
            "Upcoming Movies: Stay updated with the latest releases and plan your movie nights in advance.",
            "Trending Movies: Discover what's hot in the world of cinema with our weekly trending movies section.",
            "Top Rated Movies: Explore the highest-rated movies curated just for you.",
            "Detailed Information: Get insights into each movie, including cast details, directors, release dates, PG ratings, and trailers.",
            "Search Functionality: Easily find any movie details you desire with our intuitive search feature.",
            "Genre and Language Sorting: Navigate through genre-related and language-sorted movies effortlessly.",
            "Fully Responsive: Enjoy a seamless viewing experience across all devices, from desktops to mobile phones.",
          ],
          images: [cinematrixImage1, cinematrixImage2, cinematrixImage3],
          footer: "https://cinematrix-cn.netlify.app",
        },
      },
      {
        id: 3,
        category: "Community Website",
        title: "Cody Nerds",
        subtitle: "Cody Nerds - Let's build our network strong",
        date: "April 2024",
        technologiesUsed: ["HTML", "CSS", "JavaScript", "Firebase"],
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
          images: [codynerdsImage2, codynerdsImage3, codynerdsImage1],
          footer: "https://cody-nerds.web.app/",
        },
      },
      {
        id: 4,
        category: "Weather App",
        title: "Horizon",
        subtitle: "Horizon - Your most reliable weather app.",
        date: "March 2024",
        technologiesUsed: ["HTML", "CSS", "JavaScript", "Open Weather (API)", "Postman"],
        previewImage: imageSm4,
        link: "Horizon",
        bgColor: "bg-[#6082B6]",
        lessonsLearned: ["API Implementation", "DOM Manipulation", "Async/Await", "Promises", "Code Structure"],
        details: {
          paragraphs: [
            "Horizon is a fully responsive weather app built with HTML, CSS, and JavaScript, leveraging the power of the OpenWeather API for real-time updates. The app allows users to effortlessly search for weather conditions in any city, providing detailed insights into current conditions, a 24-hour forecast, and a 5-day outlook. With features like air quality index, sunrise/sunset times, humidity levels, and more, Horizon ensures you have all the information you need to stay ahead of the weather.",
          ],
          bulletPoints: [
            "Search Functionality: Easily check the weather of any country by searching.",
            "Today's Highlights: Get a quick overview of the current weather conditions including air quality index, sunrise and sunset time, humidity, pressure, visibility, and feels like temperature.",
            "Current Weather: View detailed information about the current weather.",
            "24-Hour Weather Forecast: Check the weather forecast for the next 24 hours.",
            "5-Day Weather Forecast: Plan ahead with a 5-day weather forecast.",
          ],
          images: [horizonImage1, horizonImage2, horizonImage3],
          footer:
            "Live link:https://weahterapp-cn.netlify.app",
        },
      },
    ];

export default portfolios;