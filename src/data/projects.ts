export interface Project {
  title: { en: string; es: string };
  description: { en: string; es: string };
  url?: string;
  image?: string;
  technologies: {
    name: string;
    source: string;
  }[];
  date: { en: string; es: string };
  production_url?: string;
}

export const projects: Project[] = [
  {
    title: {
      en: "DiscoverUPV",
      es: "DescubreUPV"
    },
    description: {
      en: "Mobile application to help new students get to know the university, its facilities, and services. The application features an interactive map that allows users to explore the university and find information about different buildings and services. Developed in Kotlin and uses Supabase as a backend to store and manage location and user information.",
      es: "Aplicación móvil para ayudar a los nuevos estudiantes a conocer la universidad, sus instalaciones y servicios. La aplicación cuenta con un mapa interactivo que permite a los usuarios explorar la universidad y encontrar información sobre diferentes edificios y servicios. Desarrollada en Kotlin y utiliza Supabase como backend para almacenar y gestionar la información de las localizaciones y los usuarios."
    },
    url: "https://github.com/AbelHaro/DADM-Proyecto",
    technologies: [
      { name: "Kotlin", source: "/icons/kotlin.svg" },
      { name: "Android", source: "/icons/android.svg" },
      { name: "Supabase", source: "/icons/supabase.svg" },
    ],
    date: {
      en: "May 2025",
      es: "Mayo 2025"
    },
    image: "/images/descubreupv.webp",
  },
  {
    title: {
      en: "Defect Detection in Objects using Neural Networks",
      es: "Detección de defectos en objetos mediante redes neuronales"
    },
    description: {
      en: "System for detecting defects in objects from images, using convolutional neural networks. The UltraLytics framework was used for training and inference with YOLO models, optimized for NVIDIA Jetson hardware using the TensorRT SDK. The system allows real-time defect detection and image analysis for identifying failures in industrial products.",
      es: "Sistema para la detección de defectos en objetos a partir de imágenes, empleando redes neuronales convolucionales. Se utilizó el framework UltraLytics para el entrenamiento y la inferencia con modelos YOLO, optimizados para hardware NVIDIA Jetson mediante el SDK TensorRT. El sistema permite la detección de defectos en tiempo real y el análisis de imágenes para la identificación de fallos en productos industriales."
    },
    url: undefined,
    technologies: [
      { name: "Python", source: "/icons/python.svg" },
    ],
    date: {
      en: "October 2024 - June 2025",
      es: "Octubre 2024 - Junio 2025"
    },
    image: undefined,
  },
  {
    title: {
      en: "Personal Portfolio",
      es: "Portfolio Personal"
    },
    description: {
      en: "Personal website developed with Astro and Tailwind CSS, showcasing my experience, projects, and technical skills.",
      es: "Sitio web personal desarrollado con Astro y Tailwind CSS, que muestra mi experiencia, proyectos y habilidades técnicas."
    },
    url: "https://github.com/AbelHaro/porfolio",
    technologies: [
      { name: "Astro", source: "/icons/astro.svg" },
      { name: "TypeScript", source: "/icons/typescript.svg" },
      { name: "Tailwind CSS", source: "/icons/tailwindcss.svg" },
    ],
    date: {
      en: "May 2024",
      es: "Mayo 2024"
    },
    image: undefined,
    production_url: "https://porfolio-red-sigma.vercel.app/"
  }
];
