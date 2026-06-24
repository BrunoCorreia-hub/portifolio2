import Finan from "../assets/img/finan.png";
import Burguer from "../assets/img/burguer.png";
import Tech from "../assets/img/tech.png";
import Chef from "../assets/img/receita.jpeg";

export const projects = [
    {
    id: 1,
    title: 'Finantrack',
    description: 'Sistema de controle financeiro pessoal.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    github: 'https://github.com/BrunoCorreia-hub/interface-finantrack.git',
    image: Finan,
  } ,
  {
    id: 2,
    title: 'DevBurger',
    description: 'Plataforma de vendas completa com carrinho e painel admin.',
    technologies: ['React', 'JavaScript', 'Styled Components', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/BrunoCorreia-hub/projeto-fullstack-devburger.git',
    image: Burguer,
  },
  {
    id: 3,
    title: 'TechStore',
    description: 'Loja virtual com sistema de filtra os produtos.',
    technologies: ['HMTL', 'CSS', 'JavaScript'],
    deploy: 'https://brunocorreia-hub.github.io/techstore/',
    github: 'https://github.com/BrunoCorreia-hub/techstore.git',
    image: Tech,
  },
  {
    id: 4,
    title: 'IA Master Chef',
    description: 'Aplicativo de gerar receitas utilizando IA.',
    technologies: ['React Native', 'JavaScript', 'Biblioteca de IA'],
    github: 'https://github.com/BrunoCorreia-hub/IA-MasterChef.git',
    image: Chef,
  }
]