import Project1 from './assets/travelist.png';
import Project2 from './assets/sugi.jpeg';
import Project3 from './assets/map.png';
import Project4 from './assets/joilmills.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/sdkd.jpeg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonials',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Frontend Development',
    title: 'React & Vue & Angular',
    description:
      'Building the front-end of web applications and websites. Responsible for creating the UI, which determines the look and function of each part of your app or site.',
  },
  {
    id: 2,
    name: ' Backend Development ',
    title: ' NodeJs & Python ',
    description:
      'Build and maintain the mechanisms that process data and perform actions on websites. Designed data storage, security, and other server-side functions.',
  },
  {
    id: 3,
    name: ' DevOps ',
    title: ' Docker & CI/CD ',
    description:
      'Increase the efficiency, speed, and security of software development and delivery compared to traditional processes.',
  },
  // {
  //   id: 4,
  //   name: ' Advertising ',
  //   title: ' Google Ads ',
  //   description:
  //     ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  // },
  // {
  //   id: 5,
  //   name: ' Music Writing ',
  //   title: ' Sound Track ',
  //   description:
  //     'Music copying, writing, creating, transcription and composition services.',
  // },
];

export const skills = [
  {
    id: 1,
    name: 'React/Vue',
    percentage: 90,
    description:
      'Design component, router, data management, optimize website, SEO, CSR/SSR, ...',
  },

  {
    id: 2,
    name: 'HTML/CSS/JS',
    percentage: 85,
    description:
      'Responsive for multi-device, Semantic HTML, Animation, Tailwind/Bootstrap, ES6, ...',
  },

  {
    id: 3,
    name: 'NodeJs/Python',
    percentage: 80,
    description:
      'RestfulAPI, TypeORM, Authentication, Validation, Redis, Logger, ...',
  },

  {
    id: 4,
    name: 'PgSQL/MySQL',
    percentage: 75,
    description:
      'Database design, query optimization, data modeling, and performance tuning.',
  },

  {
    id: 5,
    name: 'Git',
    percentage: 90,
    description:
      'Manage source code repositories, branching strategies and release cycles.',
  },

  {
    id: 6,
    name: 'Soft Skills',
    percentage: 85,
    description:
      'Work independently, communication, estimation, time management, logical ability.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'e-commerce',
    title: 'Travelist',
    description:
      'An e-commerce website for booking Flight and Hotel in Japan.',
  },
  {
    id: 2,
    img: Project2,
    category: 'e-commerce',
    title: 'Sugi Drug Store',
    description:
      'A website to run an advertising campaign for Sugi Drug Store.',
  },
  {
    id: 3,
    img: Project3,
    category: 'statistics',
    title: 'Tempo Research',
    description:
      'Data statistics website in Japan and visualize datasets by Google map.',
  },
  {
    id: 4,
    img: Project4,
    category: 'admin',
    title: 'Joilmills',
    description:
      'Website to management employees, company, stores, devices.',
  },
  {
    id: 5,
    img: Project5,
    category: 'admin',
    title: 'Aston',
    description:
      'Website to management employees, create the survey and the hierarchical tree in the organization.',
  },
  {
    id: 6,
    img: Project6,
    category: 'admin',
    title: 'SDKD',
    description:
      'Management devices, stations and adjust traffic lights to prevent a traffic jam on the road.',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Ho Chi Minh City University of Technology',
    subtitle: 'Computer Science',
    date: '2016 - 2020',
    description:
      'Learning a lot of things about Information Technologies, knowledge about OS, Data Structure and Algorithm, team work, presentation skills, ...',
    category: 'education',
  },

  // {
  //   id: 2,
  //   title: 'Lviv National Academy of Arts',
  //   subtitle: 'Faculty of Design',
  //   date: '2012 - 2014',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   category: 'education',
  // },

  // {
  //   id: 3,
  //   title: 'IT Future',
  //   subtitle: 'High School',
  //   date: '2010 - 2012',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   category: 'education',
  // },

  {
    id: 4,
    title: 'Zigexn Ventura',
    subtitle: 'Fullstack Developer',
    date: '2023 - PRESENT',
    description:
      'Writing documentation. Optimized pages for speed. Reviewing code for team. Received feedback and gave the best solutions to customers.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Ominext Group',
    subtitle: 'Frontend Developer',
    date: '2022 - 2023',
    description:
      'Key member of the team to build the UI, code review and break tasks for junior developer. Helped back-end developers with coding and troubleshooting.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Hybrid Technologies VN',
    subtitle: 'Fullstack Developer',
    date: '2020 - 2022',
    description:
      'Implemented websites, mobile applications, and landing pages from concept through deployment. Collaborated with product team members to implement new feature developments.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
