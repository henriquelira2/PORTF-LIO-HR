import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contato">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                Sobre <span>Mim</span>
              </h3>
              <p className="text-justify leading-7 w-11/12">
                Sou formado em Ciência da Computação pela Universidade Católica
                de Pernambuco, onde desenvolvi uma base sólida no
                desenvolvimento de software. Estou sempre em busca de
                aprendizado e novos desafios, com o objetivo de expandir
                continuamente meu conhecimento e contribuir para projetos
                inovadores.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7"></div>
          </div>
          <form
            action="https://getform.io/f/aroowqqb"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Vamos nos conectar !
            </p>
            <input
              type="text"
              id="name"
              placeholder="Seu Nome ..."
              name="name"
              className="mb-2 w-full rounded-md border border-blue-950 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Seu Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-blue-950 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Sua Mensagem ..."
              className="mb-2 w-full rounded-md border border-blue-950 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-blue-400 transition duration-300"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
