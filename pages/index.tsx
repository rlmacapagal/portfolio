import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { PageInfo, Experience, Skill, Project, Social } from "@/typings";

import { GetStaticProps } from "next";

type Props = {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  social: Social[];
};

const inter = Inter({ subsets: ["latin"] });

const Home = ({ pageInfo, experiences, projects, skills, social }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Mech2Dev&apos;s Portfolio</title>
      </Head>
      <Header social={social} />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  /*
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills(); //need
  const projects: Project[] = await fetchProjects(); //need
  const social: Social[] = await fetchSocials(); //need
*/

  const pageInfo: PageInfo[] = [];
  const experiences: Experience[] = [];
  const skills: Skill[] = [
    {
      _id: "1",
      image: "/mySQL.png",
      progress: 30,
      title: "mySQL",
    },
    {
      _id: "2",
      image: "/css.png",
      progress: 70,
      title: "css",
    },
    {
      _id: "3",
      image: "/php.png",
      progress: 70,
      title: "PHP",
    },
    {
      _id: "4",
      image: "/nodejs.png",
      progress: 100,
      title: "node",
    },
    {
      _id: "5",
      image: "/redux.png",
      progress: 80,
      title: "redux",
    },
    {
      _id: "6",
      image: "/js.png",
      progress: 80,
      title: "javascript",
    },
    {
      _id: "7",
      image: "/native.png",
      progress: 50,
      title: "react native",
    },
    {
      _id: "8",
      image: "/docker.png",
      progress: 50,
      title: "docker",
    },
    {
      _id: "9",
      image: "/codeIgniter.png",
      progress: 50,
      title: "code Igniter",
    },
    {
      _id: "10",
      image: "/html.png",
      progress: 50,
      title: "html",
    },
    {
      _id: "11",
      image: "/aws.png",
      progress: 50,
      title: "aws",
    },
    {
      _id: "12",
      image: "/mongodb.png",
      progress: 70,
      title: "mongodb",
    },
    {
      _id: "13",
      image: "/express.png",
      progress: 80,
      title: "express",
    },
    {
      _id: "14",
      image: "/python.jpg",
      progress: 50,
      title: "python",
    },
    {
      _id: "15",
      image: "/git.png",
      progress: 70,
      title: "git",
    },
    {
      _id: "16",
      image: "/angular.png",
      progress: 50,
      title: "angular",
    },
    {
      _id: "17",
      image: "/ta.png",
      progress: 50,
      title: "tailwind",
    },
    {
      _id: "18",
      image: "/react.png",
      progress: 80,
      title: "react",
    },
  ];
  const projects: Project[] = [
    {
      _id: "1",
      title: "Adals School Management Software",
      image: "/adal.png",
      linkToBuild: "https://adal.onrender.com/management",
      summary:
        "An ERP software sytem for school management complete with admissions, enrollment, registration, HR, admininstration, library modules, etc.",
    },
    {
      _id: "2",
      title: "Multiple Piano and Drums Simulator",
      image: "/piano&drums.png",
      linkToBuild: "https://piano-drums-sim.onrender.com/",
      summary:
        "An online multiplayer piano and drums simulator showcasing knowledge of node.js and sockets",
    },
    {
      _id: "3",
      title: "Pacman vs Ghost",
      image: "/pacVsghost.png",
      linkToBuild: "https://pacvsghost.up.railway.app/",
      summary:
        "multiplayer pacman vs ghost javascript game run by node.js and sockets",
    },
    {
      _id: "4",
      title: "React Youtube Clone",
      image: "/ytClone.png",
      linkToBuild: "https://yt-clone-mech2dev.netlify.app/",
      summary:
        "A basic youtube clone made with React to showcase working with api's. Functional features are search, video focus, comments, likes",
    },
    {
      _id: "5",
      title: "Mobile Goals App",
      image: "/goalsApp.png",
      linkToBuild:
        "https://snack.expo.dev/@coolth/github.com-rlmacapagal-goals-react-native?platform=android",
      summary:
        "Simple goals list app made with React Native to showcase capability to build mobile apps.",
    },
  ]; //need

  const social: Social[] = [
    {
      _id: "1",
      title: "Github",
      url: "https://github.com/rlmacapagal",
    },
    {
      _id: "2",
      title: "Linkedin",
      url: "https://www.linkedin.com/in/louie-macapagal",
    },
  ]; //need

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      social,
    },
    revalidate: 10,
  };
};
