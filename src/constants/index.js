import {
    image,
    school,
    college,
    businesswebsol,
    ism2,
    backend,
    creator,
    web,
    javascript,
    typescript,
    sql,
    express,
    bootstrap,
    ecommerce,
    snapgram,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Competitive programmer",
      icon: image,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name:"MYSQL",
      icon: sql,
    },
    {
      name :"Bootstrap",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Business Web Solutions",
      icon: businesswebsol,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Worked as a Full stack web developer . Worked on developing various components of E-commerce website.",
        "Learned many new and advanced concepts of ReactJs like useContext Hook and Intersection Observer.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];

  const educationdetails = [
    {
      title: "Indian Institute of Technology(IIT ISM), Dhanbad",
      place: "Dhanbad,Jharkhand",
      icon: ism2,
      iconBg: "#383E56",
      date: "December 2021 - May 2025",
      points: [
        "Bachelor of Technology in Chemical Engineering.",
        "CGPA : (8.44/10)",
      ],
    },
    {
      title: "Narayana Junior College - 12th",
      place: "Hyderabad, Telangana",
      icon: college,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2021",
      points: [
        "Percentage : 98.2%",
      ],
    },
    {
      title: "Chavara Academy ,CBSE -10th",
      place: "Mavala, Adilabad, Telangana",
      icon: school,
      iconBg: "#383E56",
      date: "June 2018 - April 2019",
      points: [
        "Percentage : 90.6%",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E Commerce App",
      description:
        "Our e-commerce platform offers a seamless shopping experience where users can browse a wide range of products, just like on major online retail websites. With a user-friendly interface, secure payment options, and a vast catalog of items, our website ensures that customers can easily find and buy whatever they need.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Snapgram",
      description:
        "Snapgram is a dynamic social media app designed for sharing experiences through images. Whether capturing everyday life or special occasions, Snapgram provides a seamless and engaging platform for visual storytelling, connecting people through shared experiences.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
      ],
      image: snapgram,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,educationdetails};