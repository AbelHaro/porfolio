export interface Project {
  title: string;
  description: string;
  url?: string;
  image?: string;
  technologies: {
    name: string;
    source: string;
  }[];
  date: string;
  production_url?: string;
}

export const projects: Project[] = [
  {
    title: "DescubreUPV",
    description: "Aplicación móvil para ayudar a los nuevos estudiantes a conocer la universidad, sus instalaciones y servicios. La aplicación cuenta con un mapa interactivo que permite a los usuarios explorar la universidad y encontrar información sobre diferentes edificios y servicios. Desarrollada en Kotlin y utiliza Supabase como backend para almacenar y gestionar la información de las localizaciones y los usuarios.",
    url: "https://github.com/AbelHaro/DADM-Proyecto",
    technologies: [
      {
        name: "Kotlin",
        source: "/icons/kotlin.svg",
      },
      {
        name: "Android",
        source: "/icons/android.svg",
      },
      {
        name: "Supabase",
        source: "/icons/supabase.svg",
      },
      
    ],
    date: "Mayo 2025",
    image: "/images/descubreupv.webp",
  },
  {
    title: "Detección de defectos en objetos mediante redes neuronales",
    description: "Sistema para la detección de defectos en objetos a partir de imágenes, empleando redes neuronales convolucionales. Se utilizó el framework UltraLytics para el entrenamiento y la inferencia con modelos YOLO, optimizados para hardware NVIDIA Jetson mediante el SDK TensorRT. El sistema permite la detección de defectos en tiempo real y el análisis de imágenes para la identificación de fallos en productos industriales.",
    url: undefined,
    technologies: [
      {
        name: "Python",
        source: "/icons/python.svg",
      },
    ],
    date: "Octubre 2024 - Junio 2025",
    image: undefined,
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web personal desarrollado con Astro y Tailwind CSS, que muestra mi experiencia, proyectos y habilidades técnicas.",
    url: "https://github.com/AbelHaro/porfolio",
    technologies: [
      {
        name: "Astro",
        source: "/icons/astro.svg",
      },
      {
        name: "TypeScript",
        source: "/icons/typescript.svg",
      }
      ,
      {
        name: "Tailwind CSS",
        source: "/icons/tailwindcss.svg",
      },
      
    ],
    date: "Mayo 2024",
    image: undefined,
    production_url: "https://porfolio-red-sigma.vercel.app/"
  }
];
