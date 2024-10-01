import { StaticImageData } from "next/image";
import imageSm1 from "@/public/images/image--portfolio-sm-1.png";
import imageChat1 from "@/public/images/image--chat-1.png";
import imageTodo1 from "@/public/images/image--todo-1.png";
import imageWeather from "@/public/images/image--weather.png";


interface IPortfolio {
    id: number;
    title: string;
    category: string;
    subtitle: string;
    date: string;
    previewImage: StaticImageData;
    bgColor?: string;
    technologiesUsed?: string[];
    client?: string;
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
        category: "UI/UX Design",
        title: "SnippetMaster",
        subtitle: "Effortlessly manage and share your code snippets",
        date: "June 2023",
        technologiesUsed: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        previewImage: imageSm1,
        link: "snippetmaster",
        bgColor: "bg-[#C6AFA2]",
        client: "Clean Code Inc.",
        details: {
          paragraphs: [
            "SnippetMaster is an app designed for developers to easily save, manage, and share their code snippets. The app offers full CRUD functionality, allowing users to create, read, update, and delete snippets as needed. Additionally, users can explore and save snippets shared by other creators.",
            "The UI/UX design focused on creating a clean and intuitive interface that allows developers to quickly access their snippets, search for new ones, and manage their collections efficiently. The app supports tagging and categorizing snippets, making it easier to find the right piece of code when needed.",
          ],
          bulletPoints: [
            "Full CRUD functionality for snippet management",
            "User-friendly interface with tagging and categorization",
            "Ability to save and explore snippets from other creators",
            "Responsive design for both desktop and mobile",
          ],
          images: [imageSm1, imageSm1, imageSm1],
          footer: "Try SnippetMaster: [SnippetMaster App](https://www.example.com)",
        },
      },
      {
        id: 2,
        category: "Branding",
        title: "Luxury Fashion Brand",
        subtitle: "Redefining luxury with a modern touch",
        date: "May 2023",
        previewImage: imageWeather,
        link: "luxury-fashion-brand",
        bgColor: "bg-[#6fcf97]",
        client: "Elegance Fashion",
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
        category: "Web Development",
        title: "ChatApp",
        subtitle: "A desktop messaging app for seamless communication",
        date: "April 2023",
        previewImage: imageChat1,
        link: "chatapp",
        bgColor: "bg-[#E4E7D8]",
        client: "Tech Solutions Ltd.",
        details: {
          paragraphs: [
            "ChatApp is a desktop messaging application similar to WhatsApp, designed for seamless communication across devices. The app supports real-time messaging, file sharing, and group chats, making it a comprehensive tool for both personal and professional use.",
            "Our team focused on delivering a highly responsive and intuitive user experience, with features like message encryption, notifications, and quick replies. The app is optimized for performance, ensuring fast and reliable communication even with large groups.",
          ],
          bulletPoints: [
            "Real-time messaging with file sharing capabilities",
            "Group chat support with notifications and quick replies",
            "End-to-end encryption for secure communication",
            "Optimized performance for desktop environments",
          ],
          images: [imageSm1, imageSm1, imageSm1],
          footer: "Learn more about ChatApp: [ChatApp](https://www.example.com)",
        },
      },
      {
        id: 4,
        category: "UI/UX Design",
        title: "Finance Manager Desktop App",
        subtitle: "Managing finances with ease and precision",
        date: "March 2023",
        previewImage: imageTodo1,
        link: "finance-manager",
        bgColor: "bg-[#F0DB4F]",
        client: "Money Matters Inc.",
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