'use client';

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiFlutter,
} from 'react-icons/si';

const about = {
  title: 'About me',
  description:
    "I'm a dedicated and results-oriented computer science professional with a passion for creating innovative software solutions. With a strong foundation in full-stack web development, I have honed my skills in technologies such as React.js, Node.js, Express.js, and PostgreSQL. \n I am a collaborative team player with excellent problem-solving and communication skills. I am eager to contribute my expertise to a dynamic and innovative team and make a meaningful impact. \n Let's connect and discuss how my skills can benefit your projects!",
  info: [
    { fieldName: 'Name', fieldValue: 'Falahyan' },
    { fieldName: 'Phone', fieldValue: '(+62) 851 7348 2407' },
    { fieldName: 'Email', fieldValue: 'falahyaniyan@gmail.com' },
    { fieldName: 'Nationality', fieldValue: 'Indonesian' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Language', fieldValue: 'Indonesia, English' },
  ],
};

const experience = {
  icon: 'blank',
  title: 'My Experience',
  description:
    "With a strong foundation in technical skills, I have successfully implemented solutions that enhance operational efficiency and user experience. My experience in web development, inventory management, and IT support has enabled me to contribute significantly to various projects. I am proficient with my technical skills and have a proven track record of delivering results. I am confident in my ability to leverage my skills and knowledge to contribute to your team's success.",
  items: [
    {
      company: 'PT. Tunas Dwipa Matra',
      position: 'Internship System Developer',
      duration: 'July 2022 - December 2022',
      description: [
        'Developed and implemented a custom module using Odoo Framework, optimizing workflows and enhancing operational efficiency for a motorcycle retail company, significantly improving daily operations.',
        'Analyzed key business challenges and tailored solutions that addressed inefficiencies, leading to a 25% reduction in manual processing time.',
        'Streamlined inventory management processes through automation, improving stock accuracy by 30% and reducing delivery errors.',
        'Improved user experience by designing intuitive interfaces, resulting in a 15% increase in system adoption and faster training for new employees.',
        'Collaborated with cross-functional teams to ensure seamless integration with existing systems, enhancing overall system performance and reliability.',
      ],
    },
    {
      company: 'Radar Lampung TV',
      position: 'Internship IT Support',
      duration: 'January 2022 - February 2022',
      description: [
        'Delivered technical support for hardware, software, and network issues, achieving a 95% first-contact resolution rate, significantly enhancing user satisfaction.',
        'Managed and maintained company-wide IT infrastructure, including servers, workstations, and mobile devices, ensuring minimal downtime and optimal system performance.',
        'Assisted in the installation, configuration, and troubleshooting of operating systems and software applications across Windows, macOS, and Linux platforms, ensuring seamless functionality.',
        'Provided end-user support for email, printers, remote access, and other IT-related issues, increasing productivity and reducing resolution times.',
        'Implemented proactive system monitoring and maintenance processes, resulting in a 20% reduction in technical incidents.',
      ],
    },
  ],
};

const education = {
  icon: 'blank',
  title: 'My Education',
  description:
    'I hold a Bachelor of Computer Science degree from Lampung University, graduating in August 2024 with a GPA of 3.41 / 4.0 .My academic journey included hands-on experience through projects like a web-based Supply Chain Management system and an anonymous confession platform. I further enhanced my skills with a Fullstack Web Developer certification from Binar Academy, gaining proficiency in React.js, Node.js, Express.js, PostgreSQL, user interface design, database management, security, and project management.',
  items: [
    {
      institution: 'Lampung University',
      degree: 'Bachelor Computer Science',
      duration: 'August 2019 - August 2024',
      gpa: '3.41 / 4.0',
      final_project: {
        title:
          'Web Based Supply Chain Management of Scrap Materials in Bandar Lampung City',
        project_duration: 'November 2023 - August 2024',
        description: [
          'Problem: Inefficient collection, processing, and distribution of scrap materials in Bandar Lampung hindered operational efficiency and sustainability.',
          'Result: Developed a full-stack SCM system that improved coordination, communication, and optimized the scrap material supply chain.',
          'Approach: Implemented a responsive front-end using React.js, developed a Node.js RESTful API, and integrated PostgreSQL for scalable database management.',
          'Quantification: The system handled up to 1,000 users simultaneously, significantly improving waste management efficiency and contributing to environmental sustainability.',
        ],
      },
    },
    {
      institution: 'Binar Academy',
      degree: 'Certified Fullstack Web Developer',
      duration: 'November 2023 - March 2024',
      gpa: '5.0 / 5.0',
      final_project: {
        title: 'Anonymous Confession Platform',
        project_duration: 'January 2024 - March 2024',
        description: [
          'Problem: Users feel insecure about sharing confessions publicly on social media, worrying about their identity being exposed.',
          'Result: Created a web-based platform allowing users to post and comment anonymously, leading to open, judgement-free discussions.',
          'Approach: Built with a React.js front-end, a Node.js back-end with Express.js, and PostgreSQL for scalable database management. Integrated JWT authentication for secure anonymous interactions.',
          'Quantification: Facilitated over 1.000 of posts and comments in testing, with plans to scale further for higher user engagement.',
        ],
      },
    },
  ],
};

const skills = {
  icon: 'blank',
  title: 'My Skills',
  description:
    'As a skilled computer science professional, I have a strong foundation in full-stack web development, utilizing technologies such as React.js, Node.js, Express.js, and PostgreSQL. I have a proven ability to design and develop user-friendly interfaces, implement robust back-end systems, and manage databases efficiently. My experience in projects like a Supply Chain Management system and an anonymous confession platform demonstrates my ability to apply my technical skills to solve real-world problems and create innovative solutions.',
  skillList: [
    {
      title: 'Techstacks',
      list: [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3 />, name: 'CSS3' },
        { icon: <FaReact />, name: 'React.js' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <SiPostgresql />, name: 'Postgresql' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiFlutter />, name: 'Flutter' },
      ],
    },
    {
      title: 'Tools',
      list: [
        { icon: <FaGithub />, name: 'GitHub' },
        { icon: <FaGit />, name: 'Git' },
        { icon: <FaDocker />, name: 'Docker' },
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea, ScroolArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: 'easeInOutExpo' },
      }}
    >
      <Tabs
        defaultValue="experience"
        className="container flex flex-col xl:flex-row gap-[60px] mx-auto mb-10"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        <div className="min-h[70vh] w-full">
          <TabsContent value="experience" className="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600xp] text-white/60 mx-auto xl:mx-0 text-justify">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-zinc-700 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-default">
                          {item.duration}
                        </span>
                        <h3 className="text-md max-w-[260px] min-h-[30px] text-center font-semibold lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent-default rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        <ul className="container ml-3">
                          {item.description.map((item, index) => {
                            return (
                              <li key={index} className="list-disc">
                                <p className="text-justify">{item}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600xp] text-white/60 mx-auto xl:mx-0 text-justify">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-zinc-700 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-default">
                          {item.duration}
                        </span>
                        <h3 className="text-md max-w-[260px] min-h-[30px] text-center font-semibold lg:text-left">
                          {item.degree}
                        </h3>
                        <h3 className="text-md max-w-[260px] min-h-[30px] text-center font-semibold lg:text-left">
                          GPA : {item.gpa}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent-default rounded-full"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h3 className="text-white/60 text-md self-start">
                            Final Project
                          </h3>
                          <h3 className="text-white text-md font-semibold">
                            {item.final_project.title}
                          </h3>
                          <h3 className="text-white/60 text-md self-start">
                            Desription
                          </h3>
                          <ul className="list-disc">
                            {item.final_project.description.map(
                              (desc, index) => {
                                return <li className="text-justify">{desc}</li>;
                              }
                            )}
                          </ul>
                        </div>
                        <ul className="container ml-3">
                          {/* {item.items.map((item, index) => {
                            return (
                              <li key={index} className="list-disc">
                                <p className="text-justify">{item}</p>
                              </li>
                            );
                          })} */}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[60px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {skills.skillList.map((skill, index) => {
                  return (
                    <div key={index}>
                      <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                      <ul className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
                        {skill.list.map((item, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[150px] bg-zinc-700 rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent-default transition-all duration-300">
                                      {item.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>{item.name}</TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
              </div>
              <p className="text-4xl font-semibold">Contact Info</p>
              <ul className="grid grid-cols-1 lg:grid-col-2">
                {about.info.map((item, index) => {
                  return (
                    <div key={index} className="grid grid-cols-2">
                      <p className="text-white/60 text-xl">{item.fieldName}</p>
                      <p className="text-xl font-semibold">{item.fieldValue}</p>
                    </div>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default Resume;
