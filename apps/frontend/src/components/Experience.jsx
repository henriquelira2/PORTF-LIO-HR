import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Cidade Alta Transportes e Turismo LTDA - Rio Doce, Olinda",
    period: "2021-2022",
    position: "Jovem Aprendiz",
    description: "Assistente Administrativo",
  },
  {
    company: "Autarquia Territorial Distrito Estadual de Fernando de Noronha",
    period: "2023-2024",
    position: "Estagiario",
    description: "Desenvolvedor",
  },
];

const Experience = () => {
  return (
    <div className="p-8 " id="experiencia">
      <div>
        <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
          Experiência
        </h1>
        <motion.div className=" flex justify-around " initial="hidden" animate="visible">
          {experiences.map((experience, index) => (
            <Reveal>
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="max-w-[600px] mx-auto border border-blue-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-blue-700/70 flex flex-col  "
              >
                <h2 className="text-gray-100 text-2xl font-semibold">
                  {experience.company}
                </h2>
                <p className="text-gray-200 mt-4">{experience.period}</p>
                <p className="text-gray-200">{experience.position}</p>
                <p className="text-gray-300 ">{experience.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
