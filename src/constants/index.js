import skyscanner from "../assets/images/skyscanner.png"; //meta, shopify, starbucks,
import tcs from "../assets/images/tcs.png"
import {
  // car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
} from "../assets/icons/";
import java from "../assets/icons/java.svg";
import kotlin from "../assets/icons/kotlin.svg";
import php from "../assets/icons/php.svg";
import android from "../assets/icons/android.svg";
import mysql from "../assets/icons/mysql.svg";


export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  // {
  //     imageUrl: express,
  //     name: "Express",
  //     type: "Backend",
  // },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
      imageUrl: java,
      name: "JAVA",
      type: "OOPS",
  },
  {
    imageUrl: android,
    name: "Android",
    type: "Application",
},
  {
    imageUrl: kotlin,
    name: "Kotlin",
    type: "OOPS",
},
  // {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  // },
  // {
  //     imageUrl: mui,
  //     name: "Material-UI",
  //     type: "Frontend",
  // },
  // {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  // },
  // {
  //     imageUrl: nodejs,
  //     name: "Node.js",
  //     type: "Backend",
  // },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //     imageUrl: redux,
  //     name: "Redux",
  //     type: "State Management",
  // },
  // {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  // }
];

export const experiences = [
  {
    title: "Cybersecurity Security Analyst Job Simulation on Forage",
    company_name: "TCS",
    icon: tcs,
    iconBg: "#accbe1",
    date: "February 2024",
    points: [
      "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.",
      "Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives.",
      "Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively.",
    ],
  },
  {
    title: "Front-End Software Engineering virtual experience programme on Forage",
    company_name: "Skyscanner",
    icon: skyscanner,
    iconBg: "#fbc3bc",
    date: "March 2024",
    points: [
      "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.",
      "Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.",
      "Customised my application and ran automated tests to ensure it rendered properly.",
    ],
  },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#b7e4c7",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#a2d2ff",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "MovieLand 🎬",
    description:
      "Welcome to MovieLand, a simple and sleek web application built with Vite + ReactJS, leveraging the power of the OMDB API for a seamless movie search experience. Search for your favorite movies by title and explore detailed information, including title, year, and vibrant movie posters. 🎬 MovieLand is your go-to destination for discovering and learning more about the films you love. 🍿",
    link: "https://github.com/chiragjagani/MovieLand",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Thala for a Reason 🏏",
    description:
      'Explore the magic of "Thala" with this React app! Enter a string or number, and find out if it\'s a special "Thala" moment. The app checks for conditions like seven characters, the presence of 7, or specific keywords. Enjoy the result, play a related video, and share the magic! 🏏✨',
    link: "https://github.com/chiragjagani/thala-for-a-reason",
  },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "To-Do List with Local Storage 📝",
    description:
      "Create a minimalistic To-Do List web application using HTML, CSS, and JavaScript. The application allows users to add 📝, delete 🗑️, and mark tasks as completed ✅. Additionally, it utilizes local storage 🔄 to persist the tasks even after the page is refreshed or closed.",
    link: "https://github.com/chiragjagani/To-Do-List-With-Local-Storage",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Sushi Man 🍣",
    description:
      "Sushi Man offers a captivating front page design for a Japanese sushi ordering website. 🍣 This repository contains the HTML, CSS, and JavaScript implementation, enhanced with animations powered by the AOS (Animate On Scroll) library and follows the BEM (Block Element Modifier) methodology for a structured and maintainable codebase. 🎌 Dive into the world of sushi with style! 🌟🍱",
    link: "https://github.com/chiragjagani/sushiman",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Guess The Number Game 🎲",
    description:
      "This is a simple web-based Guess The Number Game implemented in JavaScript. 🔢 The game generates a random number between 1 and 100, and the user has to guess the correct number within a limited number of attempts. 🎮 It's a classic and entertaining project for beginners to practice their JavaScript skills. 💡 Let the guessing begin! 🌟",
    link: "https://github.com/chiragjagani/Guess-The-Number-Game",
  },
];
