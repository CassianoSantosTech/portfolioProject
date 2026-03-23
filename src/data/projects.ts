import type { TranslationKey } from '@/contexts/ContextLanguage';

export type ProjectType = 'Backend project' | 'Extension project' | 'Run frontend';

export interface Project {
    readonly nameKey: TranslationKey | null;
    readonly name: string;
    readonly description: string;
    readonly sourceLink: string;
    readonly demoLink?: string;
    readonly img: string;
    readonly type: ProjectType;
}

export interface PlaceholderProject {
    readonly img: string;
    readonly disabled: true;
}

export const projects: readonly Project[] = [
    {
        nameKey: null,
        name: "Greencycle API",
        description: "API contruída para gerenciar plataforma gestão de resíduos sólidos usando JAVA 21. Mais informações no README do projeto!",
        sourceLink: "https://github.com/CassianoSantosTech/greecycle-fiap",
        demoLink: "https://github.com/CassianoSantosTech/greecycle-fiap",
        img: '/bay-leaf-96.png',
        type: "Backend project",
    },
    {
        nameKey: null,
        name: "Dev Task & Time Tracker",
        description: "Organize your daily tasks and track the time spent on each one.",
        sourceLink: "https://github.com/CassianoSantosTech/dev-task-tracker",
        demoLink: "https://chromewebstore.google.com/detail/Dev%20Task%20%26%20Time%20Tracker/bjchfgehhcaeonecaopcmbaomdndmlca",
        img: '/dev_track_icon_128.png',
        type: "Extension project",
    },
    {
        nameKey: 'personalPage',
        name: "Personal Portfolio",
        description: "Página construída para passar as principais informações pessoais de forma genérica, podendo facilmente ser ajustado para uma outra pessoa. Linguagens e tecnologias utilizadas: TypeScript e ReactJS!",
        sourceLink: "https://github.com/CassianoSantosTech/portfolioProject",
        demoLink: "https://cassianosantos-dev.vercel.app/",
        img: '/face-id-96.png',
        type: "Run frontend",
    },
];

export const placeholders: readonly PlaceholderProject[] = [
    { img: '/soon.png', disabled: true },
    { img: '/soon.png', disabled: true },
    { img: '/soon.png', disabled: true },
];
