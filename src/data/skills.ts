export type Skill = {
  id: string;
  name: string;
  percent: number;
  domains: string[];
};

export const skills: Skill[] = [
  {
    id: 'html',
    name: 'HTML',
    percent: 95,
    domains: [
      'Semântica e estrutura',
      'SEO e acessibilidade',
      'Formulários e validação',
      'HTML5 APIs'
    ]
  },
  {
    id: 'css',
    name: 'CSS / Flexbox',
    percent: 92,
    domains: [
      'Layouts responsivos',
      'Animações e transições',
      'Grid e Flexbox',
      'Mobile-first design'
    ]
  },
  {
    id: 'js',
    name: 'JavaScript',
    percent: 75,
    domains: [
      'Manipulação do DOM',
      'Fetch e consumo de APIs',
      'Event handling',
      'Requisições assíncronas'
    ]
  },
  {
    id: 'react',
    name: 'React',
    percent: 60,
    domains: [
      'Componentes funcionais',
      'Hooks (useState, useEffect)',
      'State management',
      'Props e composition'
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    percent: 30,
    domains: [
      'Form handlers',
      'Integração com MySQL',
      'Backend básico',
      'Processamento de dados'
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    percent: 15,
    domains: [
      'Modelagem básica',
      'Queries SELECT/INSERT',
      'Relacionamento de tabelas',
      'Estudos em andamento'
    ]
  },
  {
    id: 'node',
    name: 'Node.js',
    percent: 10,
    domains: [
      'APIs básicas',
      'Express (inicial)',
      'Estudos em andamento',
      'Backend fundamentals'
    ]
  },
  {
    id: 'git',
    name: 'Git',
    percent: 70,
    domains: [
      'Versionamento de código',
      'Branches e merges',
      'Push/Pull/Clone',
      'Resolução de conflitos'
    ]
  }
];
