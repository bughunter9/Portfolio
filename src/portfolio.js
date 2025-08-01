﻿/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Manroop Singh",
  title: "Hey, This is Manroop Singh",
  subTitle: emoji(
    "A passionate Frontend Developer and AI enthusiast 🚀 with experience in building applications using Next.js, TypeScript, and React Native. Currently exploring AI development — integrating LLMs with Frontend and implementing AI Agents"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uvT5hC2tQApdiSj83COdVfoHZYenIyiV/view?usp=drivesdk",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/bughunter9",
  linkedin: "https://www.linkedin.com/in/manroop-parmar/",
  // instagram: "https://www.instagram.com/the.manroop.parmar/",
  gmail: "manroopparmar120@gmail.com",
  // facebook: "https://www.facebook.com/manroop.singh.73997/",
  medium: "https://medium.com/@manroopparmar120",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "More About Me ",
  subTitle: "FRONTEND DEVELOPER",
  skills: [
    emoji(
      "⚡ Building high-performance, scalable, and production-ready web apps optimized for Core Web Vitals"
    ),
    emoji(
      "⚡ Integrate LLMs and AI Agents seamlessly with frontend interfaces to deliver intelligent, interactive user experiences"
    ),
    emoji(
      "⚡ AI Agents trained over LangGraph and custom tools for precise response"
    ),
    emoji("⚡ Skilled in leveraging AWS Cloud Services"),
    emoji(
      "⚡ Deployment with services like AWS ECS / Vercel / Heroku / Netlify"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "solidity",
    //   fontAwesomeClassname: "fab fa-stack-overflow"
    // },
    // {
    //   skillName: "ether",
    //   fontAwesomeClassname: "fab fa-ethereum"
    // },
    // {
    //   skillName: "django",
    //   fontAwesomeClassname: "fas fa-snowflake"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "github",
    //   fontAwesomeClassname: "fab fa-github"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    // {
    //   skillName: "stripe",
    //   fontAwesomeClassname: "fab fa-stripe-s"
    // }
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Thapar University",
      logo: require("./assets/images/thaparlogo.png"),
      subHeader: "BTech in Electronics and Communication",
      duration: "July 2019 - June 2023",
      desc: "Core member at Multiple Clubs",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "MGN Public School",
      logo: require("./assets/images/mgnlogo.png"),
      subHeader: "",
      duration: "2006 - 2019",
      desc: "Ranked among Top 5% for Grade 12",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
    {
      Stack: "AI",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer 2",
      company: "ProcDNA",
      // companylogo: require("./assets/images/dsc.png"),
      date: "July 2024 – Present",
      desc: "",
    },
    {
      role: "Software Developer 1",
      company: "ProcDNA",
      // companylogo: require("./assets/images/iete.png"),
      date: "July 2023 – June 2024",
      desc: "",
    },
    {
      role: "Technical Analyst",
      company: "ProcDNA",
      // companylogo: require("./assets/images/tmc.png"),
      date: "January 2023- June 2023",
      desc: "",
    },
    {
      role: "Intern | Developer",
      company: "Web Wizards",
      // companylogo: require("./assets/images/msc.png"),
      date: "January 2022 – March 2022",
      desc: "",
    },
  ],
};

// const workExperiences = {
//   viewExperiences: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Developer | Content Writer",
//       company: "Developer Student Clubs",
//       companylogo: require("./assets/images/dsc.png"),
//       date: "July 2020 – Present",
//       desc: "DSC TIET powered by the Google Developers, is a Club housing the best game and web developers of Thapar, and open for budding Tech Enthusiasts.",
//       // descBullets: [
//       //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       // ]
//     },
//     {
//       role: "Core Mentor",
//       company: "IETE",
//       companylogo: require("./assets/images/iete.png"),
//       date: "July 2020 – Present",
//       desc: "The Institution of Electronics and Telecommunication Engineers, is a Club housing the Arduino and IOT Enthusiasts majorly among other domains, where you get to learn in real time from projects with real world applications.",
//     },
//     {
//       role: "Technical Assistant",
//       company: "Thapar Toastmasters",
//       companylogo: require("./assets/images/tmc.png"),
//       date: "Feb 2020 – Present",
//       desc: "Thapar Toastmasters Club, is a club unique in itself. It has the best Orators of Thapar Campus and aims at making students better, by letting them overpower and conquer their stage fears.",
//     },
//     {
//       role: "Team Member",
//       company: "Microsoft Student Chapter",
//       companylogo: require("./assets/images/msc.png"),
//       date: "August 2020 – October 2020",
//       desc: "Microsoft Chapter is a club of like minded tech geeks, where students learn to grow together and get to dive deep into the world of CP.",
//     },
//     {
//       role: "Technical Affairs | Member",
//       company: "Unsaid Talks",
//       companylogo: require("./assets/images/ut.png"),
//       date: "August 2020 – Present",
//       desc: "Unsaid Talks is a Society which provides you with the platform where you get to interview your seniors placed in MNC's and other startups, getting to know about their journey.",
//     },
//     {
//       role: "Publicity | Content Writer",
//       company: "Saturnalia",
//       companylogo: require("./assets/images/sat.png"),
//       date: "October 2019 – December 2019",
//       desc: "Saturnalia is the Fest manager of TIET. Multiple fun events are organised every year by Sat majorly for the Freshers to provide them with an experience of ultimate enjoyment which one can never forget.",
//     },
//   ],
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  //By adding this token number and email disappears
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "bughunter9", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const depProjects = {
  viewProjects: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Graph Visualizer",
      company: "NPM Package",
      companylogo: require("./assets/images/ad.webp"),
      link: "https://www.npmjs.com/package/react-graph-visualizer",
      desc: "Visualize your nodes and edges with my custom package",
    },
    {
      role: "React PDF Wrapper",
      company: "NPM Package",
      companylogo: require("./assets/images/ad.webp"),
      link: "https://www.npmjs.com/package/react-pdf-wrapper",
      desc: "Wrap your content and generate custom PDFs for users from Frontend",
    },
    {
      role: "Your personal chatbot",
      company: "AI Agent",
      companylogo: require("./assets/images/ad.webp"),
      link: "https://ai-bot-ten-olive.vercel.app/",
      desc: "AI Agent made using Next, Clerk, Convex powered by Gemini API and LangGraph.",
    },
    {
      role: "Real Time Chat App",
      company: "Chat-Rooms",
      // companylogo: require("./assets/images/cha.webp"),
      link: "https://nervous-roentgen-84aef0.netlify.app/",
      desc: "Chatting Application made using Node, Socket and React.",
    },
    {
      role: "An Ecommerce Clothing Brand",
      company: "Calvin",
      // companylogo: require("./assets/images/ecomm.webp"),
      link: "https://happy-albattani-71e81b.netlify.app/",
      desc: "Clothing Website for Men-Women , made with React, Redux, GraphQL and Nodejs. ",
    },
    {
      role: "Check Global Covid Stats",
      company: "Covid Tracker",
      // companylogo: require("./assets/images/cov.webp"),
      link: "https://covid-tracke.herokuapp.com/",
      desc: "Track Down Covid Statistics, for any country across the globe with this application made using React, Chartjs and Material-UI.",
    },
    {
      role: "Your very own Google",
      company: "Google 2.O",
      // companylogo: require("./assets/images/not.webp"),
      link: "https://google-omega.vercel.app/",
      desc: "Google 2.O built with Next.js and efficiently designed with the Tailwind technology.",
    },

    {
      role: "Progressive Web Application",
      company: "Weather",
      // companylogo: require("./assets/images/logo.webp"),
      link: "https://dazzling-ardinghelli-fc3562.netlify.app/",
      desc: "Check Weather for any City accross the Globe with this PWA app made using OpenWeatherMap API.",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Smart India Hackathon Runner-Up",
      subtitle: "National Level Hackathon",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1fGEDijg07baEavoUp9yqNV0qqkB6Y2u1/view?usp=drivesdk",
        },
      ],
    },
    {
      title: "AWS Certified Developer Associate",
      subtitle: "",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1vZpU78goaCzLKZU-H6hAufRdmzg4yKw6/view?usp=drivesdk",
        },
      ],
    },
    {
      title: "ProcDNA",
      subtitle: "Received 2 Firm Contribution Awards at ProcDNA",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [],
    },
    {
      title: "Namaste Frontend System Design Course",
      subtitle:
        "All about Scalability, Security, Caching, Performant Frontend Applications",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [],
    },
    {
      title: "Arithmania Runner-Up",
      subtitle:
        "Flagship event of Elementos, consisting of Aptitude and Logic based rounds, organised by IETE TIET",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [],
    },
    {
      title: "Udemy Courses",
      subtitle: "Udemy Certificates",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "App Development",
          url: "https://drive.google.com/file/d/1ALxXdUgASvcFozCJiHOQUY9iffJRvpy0/view?usp=sharing",
        },
        {
          name: "Blockchain",
          url: "https://drive.google.com/file/d/1kUPPdoTUiZV6N-ajWRwWSPGuMn8G-KAv/view?usp=sharing",
        },
        {
          name: "Web Development",
          url: "https://drive.google.com/file/d/1a22WKR9X1rbzH8-ReFFfZLTOPH7KYDOH/view?usp=sharing",
        },
        {
          name: "React",
          url: "https://drive.google.com/file/d/1kfc8OjfLj4gdrLAx0TpT6vY8DLpAIQnK/view?usp=sharing",
        },
        {
          name: "PostgreSQL",
          url: "https://drive.google.com/file/d/1HJVqJZ2iv0t8FNl6zAFD9q74MeGTps_Q/view?usp=sharing",
        },
        {
          name: "Redux-Hooks",
          url: "https://drive.google.com/file/d/1TAXGROTN3CHcRxykpbyiuPaeSnlpY5-T/view?usp=sharing",
        },
        {
          name: "Python",
          url: "https://drive.google.com/file/d/1GtYqq14opoKFGtXKdRF3XAOWDejUT7b_/view?usp=sharing",
        },
        {
          name: "SEO",
          url: "https://drive.google.com/file/d/1YefIvaM4opFP61PtfY_QCjPtToYu8mOQ/view?usp=sharing",
        },
        {
          name: "Video Editing",
          url: "https://drive.google.com/file/d/1_fHAB1kM3oB6UFN-tTeGAkt25gMJW244/view?usp=sharing",
        },
        {
          name: "Arduino",
          url: "https://drive.google.com/file/d/1xZZFftIHQCN3JBeICJz-wZM4zqCuvszy/view?usp=sharing",
        },
      ],
    },
  ],
};

// Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9855802510",
  email_address: "manroopparmar120@gmail.com",
};

//Twitter Section

const twitterDetails = {
  //   userName : "twitter"//Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  depProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
};
