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
    title: "Safe Art - Sensorización IoT",
    description:
      "Proyecto para la asignatura RISA (Redes de Sensores y Actuadores) que consiste en el desarrollo de un sistema de sensorización IoT para la monitorización y protección de obras de arte. El sistema incluye el desarrollo del comportamiento del sensor para la toma de datos y comunicación con la plataforma, así como el desarrollo de una plataforma web para la visualización de datos en tiempo real y gestión de alertas. Utiliza Typescript, Convex, MQTT, C++ y React.",
    url: "https://github.com/AbelHaro/safe-art",
    technologies: [
      {
        name: "TypeScript",
        source: "/icons/typescript.svg",
      },
      {
        name: "Convex",
        source: "/icons/convex.svg",
      },
      {
        name: "MQTT",
        source: "/icons/mqtt.svg",
      },
      {
        name: "C++",
        source: "/icons/cpp.svg",
      },
      {
        name: "React",
        source: "/icons/react.svg",
      },
    ],
    date: "Enero 2026",
    image: undefined,
  },

  {
    title: "DescubreUPV",
    description:
      "Aplicación móvil para ayudar a los nuevos estudiantes a conocer la universidad, sus instalaciones y servicios. La aplicación cuenta con un mapa interactivo que permite a los usuarios explorar la universidad y encontrar información sobre diferentes edificios y servicios. Desarrollada en Kotlin y utiliza Supabase como backend para almacenar y gestionar la información de las localizaciones y los usuarios.",
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
    title: "Detección de defectos en objetos",
    description:
      "Sistema para la detección de defectos en objetos a partir de imágenes, empleando redes neuronales convolucionales. Se utilizó el framework Ultralytics para el entrenamiento y la inferencia con modelos YOLO, optimizados para hardware NVIDIA Jetson mediante el SDK TensorRT. El sistema permite la detección de defectos en tiempo real y el análisis de imágenes para la identificación de fallos en productos industriales.",
    url: "https://github.com/AbelHaro/TFG",
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
    description:
      "Sitio web personal desarrollado con Astro y Tailwind CSS, que muestra mi experiencia, proyectos y habilidades técnicas.",
    url: "https://github.com/AbelHaro/porfolio",
    technologies: [
      {
        name: "Astro",
        source: "/icons/astro.svg",
      },
      {
        name: "TypeScript",
        source: "/icons/typescript.svg",
      },
      {
        name: "Tailwind CSS",
        source: "/icons/tailwindcss.svg",
      },
    ],
    date: "Mayo 2024",
    image: undefined,
    production_url: "https://porfolio-red-sigma.vercel.app/",
  },
  // {
  //   title: "API para la gestión de comercio electrónico",
  //   description: "API para una plataforma de gestión de comercios electrónicos, que permite a los usuarios administrar productos, categorías, usuarios y pedidos. El objetivo del proyecto es aprender a desarrollar APIs RESTful utilizando Java y Spring Boot, implementando buenas prácticas de desarrollo y diseño de software.",
  //   url: "https://github.com/AbelHaro/ecommerce",
  //   technologies: [
  //     {
  //       name: "Java",
  //       source: "/icons/java.svg",
  //     },
  //     {
  //       name: "Spring Boot",
  //       source: "/icons/spring.svg",
  //     },
  //     {
  //       name: "PostgreSQL",
  //       source: "/icons/postgresql.svg",
  //     },
  //     {
  //       name: "kafka",
  //       source: "/icons/kafka.svg",
  //     },
  //   ],
  //   date: "Presente",
  //   image: undefined,
  // },
];
