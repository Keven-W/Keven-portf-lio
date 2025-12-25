export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress';
  statusText: string;
  image: string;
  github: string;
  live?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: 'Website para Clínica de Protése Dentária',
    description: 'Sistema completo para gestão de clínica odontológica com agendamento online, cadastro de pacientes e área administrativa.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    status: 'in-progress',
    statusText: 'Em Desenvolvimento',
    image: '',
    github: 'https://github.com/Keven-W/Keven-portf-lio',
    highlights: [
      'Sistema de Agendamento',
      'Dashboard Administrativo',
      'Gestão de Pacientes'
    ]
  }
];
