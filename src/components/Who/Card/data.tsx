import Raquel from "./../../../assets/images/time/raquel-fagundes.png";
import Beatriz from "./../../../assets/images/time/beatriz-goncalves.png";
import Carolina from "./../../../assets/images/time/carolina-leal.png";
import Mariana from "./../../../assets/images/time/mariana-morroni.png";
import Luiz from "./../../../assets/images/time/luiz-felipe.png";
import Thais from "./../../../assets/images/time/thais-moreira.png";

export type CardItems = {
  avatar: StaticImageData;
  name: string;
  info: string;
  bio: string;
};

export const cardPerson: CardItems[] = [
  {
    avatar: Raquel,
    name: "Raquel Fagundes Cotrim Santos",
    info: "Psicóloga | CRP 06/181741",
    bio: "Atendimento clínico com foco em adultos pelo olhar das Terapias Comportamentais Contextuais. Acredito em uma psicologia ética e responsável. Comprometida e sensível à humanidade e disposta a te ajudar a lidar com processos complexos, como os relacionados ao luto, ansiedade e autoconhecimento.",
  },
  {
    avatar: Beatriz,
    name: "Beatriz Gonçalves",
    info: "Psicóloga | CRP 06/181698",
    bio: "Atendimento clínico contemplado pelas Terapias Comportamentais Contextuais voltado para adolescentes, jovens adultos e adultos. Acredito no poder que uma postura ética e acolhedora pode trazer. A terapia, como lugar de mudança, requer uma postura ativa dos dois lados. Por isso, pensar em um plano individualizado, funcional e único é essencial.",
  },
  {
    avatar: Carolina,
    name: "Carolina Leal",
    info: "Psicóloga | CRP 06/181836",
    bio: "Atendimento de adolescentes, adultos e idosos pela Terapia Cognitivo Comportamental. Meu objetivo é proporcionar um ambiente acolhedor, para que possa expressar-se e, a partir disso, contribuir na ressignificação das demandas que causam sofrimento. Acredito na psicologia pautada na inclusão, respeito e compromisso ético respeitando a singularidade, mas sem tirá-lo do seu contexto histórico, político e social.",
  },
  {
    avatar: Mariana,
    name: "Mariana Morroni",
    info: "Psicóloga | CRP 06/181239",
    bio: "Atendimento clínico para jovens e adultos com enfoque nas terapias comportamentais contextuais. Meu objetivo como profissional é exercer uma psicologia ética, com muita responsabilidade, respeito e empatia. Ajudar pessoas sempre foi minha motivação diária e agora quero ajudar você a se autoconhecer, entender melhor suas emoções e comportamentos, para que lide melhor com aquilo que possa te gerar algum sofrimento e assim, melhore sua qualidade de vida.",
  },
  {
    avatar: Luiz,
    name: "Luiz Felipe Lima",
    info: "Psicólogo | CRP 06/181380",
    bio: "Psicólogo analista do comportamento e pesquisador. Atendimento de adultos e adolescentes pela perspectiva das terapias contextuais. Sou apaixonado pela minha profissão pois acredito na capacidade de mudar o mundo uma pessoa de cada vez.",
  },
  {
    avatar: Thais,
    name: "Thaís Moreira Duarte",
    info: "Psicóloga | CRP 06/180649",
    bio: "Atendimento clínico de adultos na abordagem terapia cognitivo-comportamental, posso auxiliar você em suas demandas e necessidades por meio de um atendimento estruturado, colaborativo, humanizado e acessível. Através do meu trabalho busco ajudar pessoas a entenderem suas histórias e aprenderem a lidar com suas emoções e comportamentos de forma mais empática.Trabalhar com pessoas é o que me motiva.",
  },
];
