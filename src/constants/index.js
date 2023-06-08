import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  laravel,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Laravel Developer",
    company_name: "Hoogli",
    icon: laravel,
    iconBg: "#383E56",
    date: "Setembro 2022 - Janeiro 2023",
    points: [
      "Desenvolvi sistemas utilizando Laravel PHP.",
      "Desenvolvi landing pages usando HTML, CSS , Javascript e PHP (Laravel).",
      "Implementei sites responsivos usando Bootstrap.",
      "Participei de reviews de códigos.",
    ],
  },
  {
    title: "Attenaly",
    company_name: "Vtuber",
    icon: laravel,
    iconBg: "#E6DEDD",
    date: "Janeiro 2023 - Presente",
    points: [
      "Desenvolvi sistemas utilizando Laravel PHP.",
      "Desenvolvi landing pages usando HTML, CSS , Javascript e PHP (Laravel).",
      "Implementei sites responsivos usando Bootstrap.",
      "Participei de reviews de códigos.",
    ],
  },
  {
    title: "Bot Developer",
    company_name: "Vtuber",
    icon: typescript,
    iconBg: "#383E56",
    date: "Janeiro 2023 - Presente",
    points: [
      "Desenvolvi um bot para discord usando typescript.",
      "Desenvolvi um bot para twitch usando typescript.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Petcheckup",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "Agosto 2022 - Dezembro 2022",
    points: [
      "Desenvolvi sistemas utilizando Laravel PHP.",
      "Desenvolvi um sistema de pagamentos.",
      "Implementei responsividade usando Bootstrap.",
      "Participei de reviews de códigos.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Eu achava que era impossível fazer um site tão bonito quanto o nosso produto, mas o Lucas me provou o contrário.",
    name: "Attenaly",
    designation: "Vtuber",
    company: "Twitch",
    image: "https://static-cdn.jtvnw.net/jtv_user_pictures/2bf1a7a3-71fc-49fa-a0d4-cae41389a695-profile_image-70x70.png",
  },
  {
    testimonial:
      "Eu nunca conheci um desenvolvedor web que realmente se preocupa com o sucesso de seus clientes como Lucas faz.",
    name: "Arthur Porfilio",
    designation: "CEO",
    company: "Petcheckup",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Depois que o Lucas otimizou nosso site, nosso tráfego aumentou em 50%. Não podemos agradecer-lhes o suficiente!",
    name: "Lisa Silva",
    designation: "CEO",
    company: "Empresa Privada",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Conversor de moedas",
    description:
      "Um conversor de moedas simples na WEB que utiliza a 'API' do banco central para trazer os dados sobre as respectivas moedas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://media.discordapp.net/attachments/964537774399193158/1116181481908338708/conversor.png?width=598&height=656',
    source_code_link: "https://lucaseduardo122.github.io/conversor-moedas-simples/",
  },
  {
    name: "Attenaly",
    description:
      "Uma aplicação WEB feita para a comunidade de uma vtuber se divertir e ficar sempre por dentro das novidades.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://cdn.discordapp.com/attachments/680042924867846162/1077345090932068435/storepando.PNG',
    source_code_link: "",
  },
  {
    name: "Spacetime",
    description:
      "Uma landing page WEB para capsula do tempo feita para mostrar meu progresso como DEV até aqui!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://media.discordapp.net/attachments/964537774399193158/1116181459389136987/spacetime.png?width=1202&height=656',
    source_code_link: "https://lucaseduardo122.github.io/spacetime",
  },
];

export { services, technologies, experiences, testimonials, projects };
