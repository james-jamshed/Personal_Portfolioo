import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Craving',
        description: "Craving is a food delivery app that connects users with local restaurants for quick, convenient meal delivery. Browse diverse menus, place orders effortlessly, and enjoy fresh, delicious food delivered straight to your door..",
        tools: ['Javascript', 'React', 'Swiggy API', 'TailwindCss', 'React hooks', 'firebase',],
        role: 'Fronted Developer',
        code: 'https://github.com/james-jamshed/Craving',
        demo: 'https://craving-iota.vercel.app/',
        image: crefin,
    },
    
    {
        id: 2,
        name: 'Netflix_GPT',
        description: 'Netflix-GPT is a streaming-inspired platform combining the classic Netflix interface with a powerful AI-driven search feature. In addition to browsing movies, users can utilize GPT-based search to find films related to specific themes or topics, enhancing the search experience by connecting users to content in a more personalized and insightful way. This project merges modern UI with intelligent search, creating a unique and interactive movie discovery tool.',
        tools: ['React', 'Tailwind CSS', "Open AI", "NestJS",  "Form-Validation", "Firebase", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: 'https://github.com/james-jamshed/netflix-gpt',
        demo: 'https://wetflixgpt.netlify.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Portfolio',
        description: "Hi, I'm Jamshed Alam, a passionate full-stack developer specializing in building dynamic, user-friendly web applications. With expertise in JavaScript, React, and Next.js, I love solving complex problems and creating innovative digital experiences. Explore my projects to see how I blend creativity and code to bring ideas to life.",
        tools: ['React', 'Tailwind CSS', "DEV API", "NestJS",  "Email validation", "Telegram bot", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: 'https://github.com/james-jamshed/Personal_Portfolioo',
        demo: 'https://jamshedalam.in',
        image: travel,
    },
      {
        id: 4,
        name: 'DevTinder',
        description: "DevTinder is a full-stack matchmaking web application designed to connect developers based on tech preferences, skills, and goals. Inspired by the Tinder experience, it features real-time 1-on-1 chat using Socket.IO, smooth user authentication, and a responsive UI built with Tailwind CSS. Users can match, message, and connect instantly, making it ideal for networking, collaboration, and team formation.",
        tools: ['React', 'Tailwind CSS', "Nodejs", "MongoDB",  "Expressjs", "Payment Gateway", "Socket.io,AWS"],
        role: 'Full Stack Developer',
        code: 'https://github.com/james-jamshed/devTinder-web',
        demo: 'http://16.171.139.69',
        image: travel,
    },
        {
        id: 5,
        name: 'AiTrip_Planner',
        description: "AI Trip Planner is a smart, full-stack web application that helps users plan personalized travel itineraries based on preferences like location, duration, budget, and travel type (solo, family, couple). It leverages the OpenAI API to generate intelligent, tailored travel suggestions and uses the Google Maps API for real-time location visualization and routing. Firebase handles user authentication and storage, ensuring a secure and seamless experience.",
        tools: ['React', 'Tailwind CSS', "Google MAP", "Google Cloud",  "Email validation", "GPT 4.0", "Firebase"],
        role: 'Full Stack Developer',
        code: 'https://github.com/james-jamshed/AI_TRIP_PLANNER',
        demo:  'https://aitripplannerr.netlify.app/',
        image: realEstate,
    },
    // {
    //     id: 3,
    //     name: '',
    //     description: '',
    //     tools: [''],
    //     code: '',
    //     role: '',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: '',
    //     description: "",
    //     tools: [''],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: '',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },