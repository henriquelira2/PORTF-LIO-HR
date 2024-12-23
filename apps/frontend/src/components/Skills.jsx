import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJsBadge,
  DiGithubBadge,
  DiBootstrap,
  DiMysql,
} from "react-icons/di";
import { SiTypescript, SiExpo, SiPhp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icone: <DiHtml5 className="text-orange-600" /> },
      { name: "JavaScript", icone: <DiJsBadge className="text-yellow-500" /> },
      { name: "CSS", icone: <DiCss3 className="text-blue-500" /> },
      {
        name: "Bootstrap ",
        icone: <DiBootstrap className="text-purple-700" />,
      },
      { name: "PHP", icone: <SiPhp className="text-purple-600" /> },
      { name: "React", icone: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node Js", icone: <FaNodeJs className="text-green-500" /> },
      { name: "MYSQL", icone: <DiMysql className="text-blue-200" /> },
      { name: "TypeScript", icone: <SiTypescript className="text-blue-600" /> },
      { name: "Expo", icone: <SiExpo className="text-black" /> },
      { name: "ReactNative", icone: <DiHtml5 className="text-blue-500" /> },
      { name: "GitHub", icone: <DiGithubBadge className="text-gray-200" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 mt-20 items-center"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
       
        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-blue-950 p-6 rounded-lg bg-blue-950/20 shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icone}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
