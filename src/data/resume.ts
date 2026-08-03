export type Lang = 'pt' | 'en'

export interface Profile {
  name: string
  role: string
  email: string
  linkedin: string
  summary: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Job {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface EducationInfo {
  degree: string
  school: string
  period: string
  detail: string
}

export interface Language {
  name: string
  level: string
  /** 0–100, usado pelo ponteiro do manômetro */
  gauge: number
}

export interface Highlight {
  value: string
  label: string
}

export interface SectionMeta {
  ordinal: string
  title: string
}

export interface UiStrings {
  documentTitle: string
  navLinks: { href: string; label: string }[]
  langButton: { label: string; aria: string }
  heroKicker: string
  scrollAria: string
  sections: {
    about: SectionMeta
    skills: SectionMeta
    experience: SectionMeta
    education: SectionMeta
    contact: SectionMeta
  }
  gaugesTitle: string
  educationStamp: string
  contactTitle: string
  contactText: string
  contactEmailButton: string
  contactLinkedInButton: string
  linkedinAria: string
  footerNote: string
}

export interface SiteContent {
  profile: Profile
  highlights: Highlight[]
  skillGroups: SkillGroup[]
  jobs: Job[]
  education: EducationInfo
  languages: Language[]
  ui: UiStrings
}

const email = 'jair.frison@gmail.com'
const linkedin = 'https://www.linkedin.com/in/frisonjr'

/** Início da carreira em 2020: os "anos de experiência" se atualizam sozinhos. */
const yearsOfExperience = new Date().getFullYear() - 2020
const name = 'Jair Frison Júnior'

const pt: SiteContent = {
  profile: {
    name,
    role: 'Engenheiro de Software Sênior',
    email,
    linkedin,
    summary:
      `Engenheiro de Software Sênior orientado a resultados com mais de ${yearsOfExperience} anos de experiência na arquitetura e escalonamento de aplicações web e mobile de alto desempenho. Especialista no ecossistema JavaScript/TypeScript — React, React Native, Next.js e Node.js — com histórico comprovado de redução de débito técnico, otimização de performance do lado do cliente e design de bibliotecas de componentes reutilizáveis que aceleram o time-to-market. Apaixonado por orientar equipes multifuncionais, reforçar a qualidade do código e preencher a lacuna entre requisitos de negócios complexos e soluções técnicas robustas e acessíveis (a11y).`,
  },
  highlights: [
    { value: `${yearsOfExperience}+`, label: 'anos de experiência' },
    { value: '50k+', label: 'usuários atendidos' },
    { value: '40%', label: 'menos bugs de UI' },
    { value: '45%', label: 'carregamento mais rápido' },
  ],
  skillGroups: [
    {
      title: 'Linguagens',
      items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SASS'],
    },
    {
      title: 'Ecossistema & Frameworks',
      items: ['React.js', 'React Native', 'Next.js', 'Node.js', 'Python'],
    },
    {
      title: 'Arquitetura & Estado',
      items: [
        'Redux Toolkit',
        'Zustand',
        'Context API',
        'Component-Driven Architecture',
        'PWA',
        'Micro-frontends',
      ],
    },
    {
      title: 'Práticas de Engenharia',
      items: [
        'Core Web Vitals',
        'Acessibilidade (WCAG)',
        'APIs RESTful',
        'CI/CD',
        'Agile / Scrum',
        'TDD / Jest',
        'Code Reviews',
      ],
    },
  ],
  jobs: [
    {
      role: 'Engenheiro de Software',
      company: 'Extreme Digital Solutions — EDS',
      location: 'Brasil · Remoto',
      period: 'Jun 2025 — Presente',
      bullets: [
        'Trabalho em projetos de software de grande escala para organizações do setor público, com foco em transparência de dados, eficiência e automação inteligente.',
        'Projeto e implemento soluções de IA usando LLMs e NLP para automatizar fluxos de trabalho e analisar registros públicos, reduzindo os tempos de resposta de dias para minutos.',
        'Construo e mantenho um ecossistema de dados robusto: Elasticsearch para busca semântica em milhões de documentos, Django/PostgreSQL para APIs de alta disponibilidade e Airflow para orquestrar pipelines de dados complexos.',
        'Arquiteto soluções full-stack com backends Python e frontends web/mobile modernos em Next.js e React Native, combinando shadcn/ui e Tailwind CSS.',
      ],
    },
    {
      role: 'Engenheiro Frontend',
      company: 'ITA Frotas',
      location: 'Goiânia, Brasil',
      period: 'Fev 2024 — Mar 2026',
      bullets: [
        'Arquitetei soluções frontend escaláveis com React, React Native e Redux Toolkit/Zustand, acelerando a entrega de novas funcionalidades em 35% nas plataformas web e mobile.',
        'Liderei a criação de uma biblioteca de componentes de UI centralizada, padronizando a experiência do usuário e reduzindo bugs de UI em 40% em múltiplas squads.',
        'Otimizei fluxos de dados complexos do lado do cliente e integrações de API REST, reduzindo a latência percebida em 30% e garantindo rastreamento de frota em tempo real de alta fidelidade.',
        'Orientei desenvolvedores júnior/pleno através de pair programming e revisões rigorosas de código, estabelecendo melhores práticas de frontend.',
      ],
    },
    {
      role: 'Engenheiro Frontend',
      company: 'Omnisaúde',
      location: 'Goiânia, Brasil',
      period: 'Set 2021 — Dez 2023',
      bullets: [
        'Desenvolvi plataformas de saúde de missão crítica com React, React Native e TypeScript, atendendo mais de 50.000 usuários/pacientes com alta confiabilidade e zero downtime em implantações críticas.',
        'Projetei e implantei Progressive Web Apps (PWAs) com estratégias avançadas de renderização, melhorando as velocidades de carregamento móvel em 45%.',
        'Integrei serviços de telessaúde de terceiros nos fluxos de trabalho existentes dos pacientes, entregando um produto estável e centrado no usuário em 8 semanas.',
      ],
    },
    {
      role: 'Desenvolvedor de Software',
      company: 'Anexo',
      location: 'Goiânia, Brasil',
      period: 'Fev 2020 — Ago 2021',
      bullets: [
        'Desenvolvi aplicações web de gestão de recursos com React.js, Spring Boot e SQL, economizando 15 horas de trabalho manual por semana.',
        'Contribuí para o design de sistema full-stack, implementando APIs e microsserviços robustos para suportar requisitos complexos de frontend.',
      ],
    },
    {
      role: 'Estagiário em Desenvolvimento de Software',
      company: 'NovaescolaBrasil',
      location: 'Goiânia, Brasil',
      period: 'Jul 2019 — Fev 2020',
      bullets: [
        'Construí e mantive componentes internos de UI com React.js e scripts de backend com Node.js, melhorando a produtividade da equipe.',
        'Prestei suporte técnico de primeira linha e gerenciei tarefas de administração de banco de dados, com Git/GitHub para controle de versão.',
      ],
    },
  ],
  education: {
    degree: 'Bacharelado em Sistemas de Informação',
    school: 'Universidade Federal de Goiás (UFG)',
    period: 'Concluído',
    detail:
      'Engenharia Prática (NÍVEL 5 — Empresa Júnior): entrega de aplicativos web voltados para o cliente (Mar 2018 – Nov 2019), gerenciando todo o SDLC — requisitos, UX, implementação em React.js, testes e implantação.',
  },
  languages: [
    { name: 'Português', level: 'Nativo', gauge: 100 },
    { name: 'Inglês', level: 'Proficiência avançada — C1', gauge: 85 },
  ],
  ui: {
    documentTitle: 'Jair Frison Júnior · Engenheiro de Software',
    navLinks: [
      { href: '#sobre', label: 'Sobre' },
      { href: '#habilidades', label: 'Habilidades' },
      { href: '#experiencia', label: 'Experiência' },
      { href: '#formacao', label: 'Formação' },
      { href: '#contato', label: 'Contato' },
    ],
    langButton: { label: 'EN', aria: 'Switch site language to English' },
    heroKicker: '❖ Gabinete de Engenharia de Software ❖',
    scrollAria: 'Rolar para a seção Sobre',
    sections: {
      about: { ordinal: 'Artigo I', title: 'Sobre o Engenheiro' },
      skills: { ordinal: 'Artigo II', title: 'Maquinário & Habilidades' },
      experience: { ordinal: 'Artigo III', title: 'Registro de Expedições' },
      education: { ordinal: 'Artigo IV', title: 'Formação & Idiomas' },
      contact: { ordinal: 'Artigo V', title: 'Telégrafo & Correspondência' },
    },
    gaugesTitle: 'Medidores de Fluência',
    educationStamp: 'REGISTRADO',
    contactTitle: 'Vamos construir a próxima máquina juntos?',
    contactText:
      'Estou disponível para novos projetos, consultorias e boas conversas sobre engenharia de software. Acione um dos botões abaixo.',
    contactEmailButton: '✉ Enviar correspondência',
    contactLinkedInButton: 'LinkedIn',
    linkedinAria: 'Abrir perfil no LinkedIn em uma nova aba',
    footerNote: 'forjado a vapor com React, TypeScript e anime.js',
  },
}

const en: SiteContent = {
  profile: {
    name,
    role: 'Senior Software Engineer',
    email,
    linkedin,
    summary:
      `Results-driven Senior Software Engineer with ${yearsOfExperience}+ years of experience architecting and scaling high-performance web and mobile applications. Specialist in the JavaScript/TypeScript ecosystem — React, React Native, Next.js and Node.js — with a proven track record of reducing technical debt, optimizing client-side performance and designing reusable component libraries that accelerate time-to-market. Passionate about mentoring cross-functional teams, enforcing code quality and bridging the gap between complex business requirements and robust, accessible (a11y) technical solutions.`,
  },
  highlights: [
    { value: `${yearsOfExperience}+`, label: 'years of experience' },
    { value: '50k+', label: 'users served' },
    { value: '40%', label: 'fewer UI bugs' },
    { value: '45%', label: 'faster load times' },
  ],
  skillGroups: [
    {
      title: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SASS'],
    },
    {
      title: 'Ecosystem & Frameworks',
      items: ['React.js', 'React Native', 'Next.js', 'Node.js', 'Python'],
    },
    {
      title: 'Architecture & State',
      items: [
        'Redux Toolkit',
        'Zustand',
        'Context API',
        'Component-Driven Architecture',
        'PWA',
        'Micro-frontends',
      ],
    },
    {
      title: 'Engineering Practices',
      items: [
        'Core Web Vitals',
        'Accessibility (WCAG)',
        'RESTful APIs',
        'CI/CD',
        'Agile / Scrum',
        'TDD / Jest',
        'Code Reviews',
      ],
    },
  ],
  jobs: [
    {
      role: 'Software Engineer',
      company: 'Extreme Digital Solutions — EDS',
      location: 'Brazil · Remote',
      period: 'Jun 2025 — Present',
      bullets: [
        'Work on large-scale software projects for public-sector organizations, focused on data transparency, efficiency and intelligent automation.',
        'Design and implement AI solutions using LLMs and NLP to automate workflows and analyze public records, cutting response times from days to minutes.',
        'Build and maintain a robust data ecosystem: Elasticsearch for semantic search across millions of documents, Django/PostgreSQL for highly available APIs and Airflow to orchestrate complex data pipelines.',
        'Architect full-stack solutions with Python backends and modern web/mobile frontends built with Next.js and React Native, combining shadcn/ui and Tailwind CSS.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'ITA Frotas',
      location: 'Goiânia, Brazil',
      period: 'Feb 2024 — Mar 2026',
      bullets: [
        'Architected scalable frontend solutions with React, React Native and Redux Toolkit/Zustand, accelerating feature delivery by 35% across web and mobile platforms.',
        'Led the creation of a centralized UI component library, standardizing the user experience and reducing UI bugs by 40% across multiple agile squads.',
        'Optimized complex client-side data flows and REST API integrations, reducing perceived latency by 30% and ensuring high-fidelity real-time fleet tracking.',
        'Mentored junior/mid-level developers through pair programming and rigorous code reviews, establishing frontend best practices.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Omnisaúde',
      location: 'Goiânia, Brazil',
      period: 'Sep 2021 — Dec 2023',
      bullets: [
        'Developed mission-critical healthcare platforms with React, React Native and TypeScript, serving 50,000+ users/patients with high reliability and zero downtime during critical deployments.',
        'Designed and deployed Progressive Web Apps (PWAs) with advanced rendering strategies, improving mobile load speeds by 45%.',
        'Seamlessly integrated third-party telehealth services into existing patient workflows, delivering a stable, user-centered product within an 8-week deadline.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Anexo',
      location: 'Goiânia, Brazil',
      period: 'Feb 2020 — Aug 2021',
      bullets: [
        'Developed resource-management web applications with React.js, Spring Boot and SQL, saving 15 hours of manual work per week.',
        'Contributed to full-stack system design, implementing robust APIs and microservices to support complex frontend requirements.',
      ],
    },
    {
      role: 'Software Development Intern',
      company: 'NovaescolaBrasil',
      location: 'Goiânia, Brazil',
      period: 'Jul 2019 — Feb 2020',
      bullets: [
        'Built and maintained internal UI components with React.js and backend scripts with Node.js, improving team productivity.',
        'Provided first-line technical support and handled database administration tasks, using Git/GitHub for version control.',
      ],
    },
  ],
  education: {
    degree: 'B.Sc. in Information Systems',
    school: 'Federal University of Goiás (UFG)',
    period: 'Mar 2017 — Oct 2024',
    detail:
      'Hands-on Engineering (LEVEL 5 — Junior Enterprise): delivered client-facing web applications (Mar 2018 – Nov 2019), managing the entire SDLC — requirements, UX, React.js implementation, testing and deployment.',
  },
  languages: [
    { name: 'Portuguese', level: 'Native', gauge: 100 },
    { name: 'English', level: 'Advanced proficiency — C1', gauge: 85 },
  ],
  ui: {
    documentTitle: 'Jair Frison Júnior · Software Engineer',
    navLinks: [
      { href: '#sobre', label: 'About' },
      { href: '#habilidades', label: 'Skills' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#formacao', label: 'Education' },
      { href: '#contato', label: 'Contact' },
    ],
    langButton: { label: 'PT', aria: 'Mudar o idioma do site para Português' },
    heroKicker: '❖ Software Engineering Cabinet ❖',
    scrollAria: 'Scroll to the About section',
    sections: {
      about: { ordinal: 'Article I', title: 'About the Engineer' },
      skills: { ordinal: 'Article II', title: 'Machinery & Skills' },
      experience: { ordinal: 'Article III', title: 'Expedition Records' },
      education: { ordinal: 'Article IV', title: 'Education & Languages' },
      contact: { ordinal: 'Article V', title: 'Telegraph & Correspondence' },
    },
    gaugesTitle: 'Fluency Gauges',
    educationStamp: 'CERTIFIED',
    contactTitle: 'Shall we build the next machine together?',
    contactText:
      'I am available for new projects, consulting and good conversations about frontend engineering. Pull one of the levers below.',
    contactEmailButton: '✉ Send correspondence',
    contactLinkedInButton: 'LinkedIn',
    linkedinAria: 'Open LinkedIn profile in a new tab',
    footerNote: 'steam-forged with React, TypeScript and anime.js',
  },
}

export const content: Record<Lang, SiteContent> = { pt, en }
