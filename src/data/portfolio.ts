export type Language = "en" | "es";

export interface PortfolioProject {
  title: string;
  summary?: string;
  category?: string;
  status?: string;
  visual?: string;
  description: string;
  url?: string;
  productionUrl?: string;
  technologies: { name: string; source: string }[];
}

export interface PortfolioExperience {
  title: string;
  description: string;
  date: string;
  place: string;
}

export interface PortfolioContent {
  metadata: { title: string; description: string };
  navigation: {
    about: string;
    experience: string;
    projects: string;
    blog: string;
  };
  headings: {
    about: string;
    experience: string;
    projects: string;
    education: string;
    languages: string;
  };
  personal: { location: string; bio: string };
  education: {
    masters: string;
    bachelors: string;
    university: string;
    mastersDate: string;
    bachelorsDate: string;
    averageGrade: string;
    spanish: string;
    english: string;
  };
  actions: {
    videoPlayback: string;
    details: string;
    moreProjects: string;
    github: string;
    demo: string;
    language: string;
    theme: string;
    light: string;
    dark: string;
    system: string;
  };
  footer: string;
  alt: { externalLink: string; github: string; linkedin: string };
  experience: PortfolioExperience[];
  projects: PortfolioProject[];
}

const technologies = {
  react: { name: "React", source: "/icons/react.svg" },
  go: { name: "Golang", source: "/icons/go-gopher.svg" },
  postgresql: { name: "PostgreSQL", source: "/icons/postgresql.svg" },
  docker: { name: "Docker", source: "/icons/docker.svg" },
  digitalOcean: { name: "DigitalOcean", source: "/icons/digitalocean.svg" },
  typescript: { name: "TypeScript", source: "/icons/typescript.svg" },
  convex: { name: "Convex", source: "/icons/convex.svg" },
  mqtt: { name: "MQTT", source: "/icons/mqtt.svg" },
  cpp: { name: "C++", source: "/icons/cpp.svg" },
  kotlin: { name: "Kotlin", source: "/icons/kotlin.svg" },
  android: { name: "Android", source: "/icons/android.svg" },
  supabase: { name: "Supabase", source: "/icons/supabase.svg" },
  python: { name: "Python", source: "/icons/python.svg" },
  sqlite: { name: "SQLite", source: "/icons/sqlite.svg" },
  astro: { name: "Astro", source: "/icons/astro.svg" },
  tailwind: { name: "Tailwind CSS", source: "/icons/tailwindcss.svg" },
  google_cloud: { name: "Google Cloud", source: "/icons/google-cloud.svg" },
};

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    metadata: {
      title: "Abel Haro Armero | Portfolio",
      description:
        "Abel Haro Armero's personal portfolio: experience, projects, and technologies.",
    },
    navigation: {
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog",
    },
    headings: {
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      languages: "Languages",
    },
    personal: {
      location: "Altea / Valencia",
      bio: "Computer Engineer with a Master's Degree in Computer Engineering and Networks and Bachelor's Degree in Informatics Engineering from the Universitat Politècnica de València. I focus on backend development, cloud infrastructure, and maintainable system design. I enjoy turning real product needs into robust, well-engineered solutions while continuing to learn and explore new technologies.",
    },
    education: {
      masters: "Master's Degree in Computer Engineering and Networks",
      bachelors: "Bachelor's Degree in Informatics Engineering",
      university: "Universitat Politècnica de València",
      mastersDate: "September 2025 - July 2026",
      bachelorsDate: "September 2021 - July 2025",
      averageGrade: "Average grade: ",
      spanish: "Spanish - Native",
      english: "English - B2",
    },
    actions: {
      videoPlayback: "Video playback",
      details: "Project details",
      moreProjects: "More projects",
      github: "View on GitHub",
      demo: "View demo",
      language: "Change language",
      theme: "Change theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    footer: "All rights reserved.",
    alt: {
      externalLink: "External link",
      github: "GitHub icon",
      linkedin: "LinkedIn icon",
    },
    experience: [
      {
        title: "Internship at UPV's DISCA Department",
        description:
          "Developed an image-based object-defect detection system using convolutional neural networks (CNNs). Researched and experimented with different architectures and datasets to improve the model's accuracy and efficiency. Used NVIDIA Jetson devices to deploy the system on low-power hardware.",
        date: "October 2024 - July 2025",
        place: "Valencia, Spain",
      },
      {
        title: "Internship at SOLTECSIS S.L.",
        description:
          "Debugged and fixed issues during the migration of the open-source FWCloud project from JavaScript to TypeScript. Collaborated on refactoring the codebase to improve maintainability.",
        date: "July 2024",
        place: "Altea, Spain",
      },
    ],
    projects: [
      {
        title: "PicoProtocol",
        summary:
          "A 16-bit CPU with its own assembly language, built to emulate protocols.",
        category: "Digital design",
        status: "Under development",
        visual: "cpu",
        description:
          "Experimental project for Jane Street’s Protocol Emulator ASIC Competition. Designed in Verilog using Tiny Tapeout, with a 16-bit CPU, its own assembly language, SRAM and digital I/O. Includes a Python assembler, UART, SPI and I2C examples, and cocotb simulation tests. Protocol support and physical implementation are under development; I2C requires external interface circuitry.",
        url: "https://github.com/AbelHaro/protocol-emulator-asic-competition",
        technologies: [
          { name: "Verilog", source: "" },
          { name: "Python", source: "/icons/python-svgl.svg" },
        ],
      },
      {
        title: "Job Finder",
        summary:
          "Automating the search, ranking and preparation of job applications.",
        category: "Automation",
        status: "Under development",
        visual: "workflow",
        description:
          "Personal automation project in Python that collects and normalizes LinkedIn job listings, avoids duplicates, and stores data and processing status in SQLite through SQLAlchemy. Uses LangGraph to orchestrate LLM-based job ranking and tailored LaTeX/PDF CV generation. Integrates Telegram notifications, Pydantic data validation, and failure handling to resume pending tasks. (Under development)",
        url: "https://github.com/AbelHaro/job-finder",
        technologies: [technologies.python, technologies.sqlite],
      },
      {
        title: "Tracker",
        summary:
          "Keeping track of objects across video frames with SORT, ByteTrack and DeepSORT.",
        category: "Computer vision",
        status: "Under development",
        visual: "tracking",
        description:
          "Object tracking library developed in C++ with Python bindings. Implements SORT, ByteTrack and DeepSORT to associate detections across frames and maintain object identities; DeepSORT also uses appearance features to help match objects. Includes a YOLO and OpenCV integration example for video detection and tracking. (Under development)",
        url: "https://github.com/AbelHaro/tracker",
        technologies: [technologies.cpp, technologies.python],
      },
      {
        title: "URL Shortener",
        summary:
          "Short links, easy sharing. A React and Go application deployed on Google Cloud.",
        category: "Full stack",
        status: "Under development",
        visual: "links",
        description:
          "Web application for shortening URLs and sharing links easily. Built with React for the frontend and Go for the backend, using PostgreSQL to store shortened URLs and their destinations. The app lets users generate short links. It is deployed on Google Cloud and uses Coolify for deployment management and Docker for containerization. (Currently under development and improvement)",
        url: "https://github.com/AbelHaro/url-shortener",
        productionUrl: "https://url-shortener.abelharo.me",
        technologies: [
          technologies.react,
          technologies.go,
          technologies.postgresql,
          technologies.docker,
          technologies.google_cloud,
        ],
      },
      {
        title: "MQTT / LoRa Gateway",
        summary:
          "Connecting MQTT systems across remote areas without continuous IP connectivity.",
        category: "Embedded systems",
        status: "Master’s thesis",
        visual: "network",
        description:
          "Master's thesis project that designs and implements an MQTT↔AlLoRa↔MQTT gateway for remote environments without continuous IP connectivity. It includes a custom MQTT 3.1.1 broker built in MicroPython for LilyGo T3-S3 nodes and an AlLoRa bridge over LoRa. The broker was evaluated with stress tests and the gateway validated end to end, demonstrating transparent MQTT access to the LPWAN network.",
        technologies: [
          technologies.python,
          technologies.mqtt,
          technologies.docker,
        ],
      },
      {
        title: "Safe Art",
        summary: "Sensors and live alerts to monitor and protect works of art.",
        category: "IoT",
        status: "Academic project",
        visual: "sensors",
        description:
          "Project for the RISA (Sensor and Actuator Networks) course, consisting of an IoT sensing system for monitoring and protecting works of art. It includes sensor behaviour for collecting data and communicating with the platform, plus a web platform for real-time data visualization and alert management. Built with TypeScript, Convex, MQTT, C++, and React.",
        url: "https://github.com/AbelHaro/safe-art",
        technologies: [
          technologies.typescript,
          technologies.convex,
          technologies.mqtt,
          technologies.cpp,
          technologies.react,
        ],
      },
      {
        title: "DescubreUPV",
        description:
          "Mobile application that helps new students get to know the university, its facilities, and services. It includes an interactive map for exploring the campus and finding information about buildings and services. Built in Kotlin and uses Supabase as a backend to store and manage location and user information.",
        url: "https://github.com/AbelHaro/DADM-Proyecto",
        technologies: [
          technologies.kotlin,
          technologies.android,
          technologies.supabase,
        ],
      },
      {
        title: "Defect detection",
        summary:
          "Visual quality control with YOLO, optimized for NVIDIA Jetson.",
        category: "Computer vision",
        status: "Bachelor’s thesis",
        visual: "inspection",
        description:
          "System for detecting defects in objects from images using convolutional neural networks. It used Ultralytics for training and inference with YOLO models, optimized for NVIDIA Jetson hardware through the TensorRT SDK. The system enables real-time defect detection and image analysis to identify failures in industrial products.",
        url: "https://github.com/AbelHaro/TFG",
        technologies: [technologies.python],
      },
      {
        title: "Personal Portfolio",
        description:
          "Personal website built with Astro and Tailwind CSS, showcasing my experience, projects, and technical skills.",
        url: "https://github.com/AbelHaro/porfolio",
        technologies: [
          technologies.astro,
          technologies.typescript,
          technologies.tailwind,
        ],
      },
    ],
  },
  es: {
    metadata: {
      title: "Abel Haro Armero | Portafolio",
      description:
        "Portafolio personal de Abel Haro Armero: experiencia, proyectos y tecnologías.",
    },
    navigation: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      blog: "Blog",
    },
    headings: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      languages: "Idiomas",
    },
    personal: {
      location: "Altea / Valencia",
      bio: "Ingeniero Informático con un Máster en Ingeniería de Computadores y Redes y un Grado en Ingeniería Informática por la Universitat Politècnica de València. Me centro en el desarrollo backend, la infraestructura cloud y el diseño de sistemas mantenibles. Disfruto transformando necesidades reales de producto en soluciones robustas y bien diseñadas, mientras continúo aprendiendo y explorando nuevas tecnologías.",
    },
    education: {
      masters: "Máster en Ingeniería de Computadores y Redes",
      bachelors: "Grado en Ingeniería Informática",
      university: "Universitat Politècnica de València",
      mastersDate: "Septiembre 2025 - Julio 2026",
      bachelorsDate: "Septiembre 2021 - Julio 2025",
      averageGrade: "Nota media: ",
      spanish: "Español - Nativo",
      english: "Inglés - Competencia Profesional",
    },
    actions: {
      videoPlayback: "Reproducción del vídeo",
      details: "Detalles del proyecto",
      moreProjects: "Más proyectos",
      github: "Ver en GitHub",
      demo: "Ver demo",
      language: "Cambiar idioma",
      theme: "Cambiar tema",
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
    },
    footer: "Todos los derechos reservados.",
    alt: {
      externalLink: "Enlace externo",
      github: "Icono de GitHub",
      linkedin: "Icono de LinkedIn",
    },
    experience: [
      {
        title: "Prácticas en el Departamento DISCA de la UPV",
        description:
          "Desarrollo de un sistema de detección de defectos en objetos mediante imágenes, utilizando redes neuronales convolucionales (CNNs). Investigación y experimentación con diferentes arquitecturas y datasets para optimizar la precisión y eficiencia del modelo. Uso de dispositivos NVIDIA Jetson para la implementación del sistema en hardware de bajo consumo.",
        date: "Octubre 2024 - Julio 2025",
        place: "Valencia, España",
      },
      {
        title: "Prácticas en SOLTECSIS S.L.",
        description:
          "Depuración y corrección de errores durante la migración del proyecto de código abierto FWCloud de JavaScript a TypeScript. Colaboración en la refactorización del código base para mejorar la mantenibilidad.",
        date: "Julio 2024",
        place: "Altea, España",
      },
    ],
    projects: [
      {
        title: "PicoProtocol",
        summary:
          "Una CPU de 16 bits con ensamblador propio para emular protocolos.",
        category: "Diseño digital",
        status: "En desarrollo",
        visual: "cpu",
        description:
          "Proyecto experimental para la Protocol Emulator ASIC Competition de Jane Street. Diseñado en Verilog con Tiny Tapeout, incluye una CPU de 16 bits, lenguaje ensamblador propio, SRAM y entradas y salidas digitales. Incorpora un ensamblador en Python, ejemplos UART, SPI e I2C y pruebas de simulación con cocotb. El soporte de protocolos y la implementación física están en desarrollo; I2C requiere circuitería externa.",
        url: "https://github.com/AbelHaro/protocol-emulator-asic-competition",
        technologies: [
          { name: "Verilog", source: "" },
          { name: "Python", source: "/icons/python-svgl.svg" },
        ],
      },
      {
        title: "Job Finder",
        summary:
          "Automatización de la búsqueda, priorización y preparación de candidaturas.",
        category: "Automatización",
        status: "En desarrollo",
        visual: "workflow",
        description:
          "Proyecto personal de automatización en Python que recopila y normaliza ofertas de LinkedIn, evita duplicados y guarda los datos y su estado de procesamiento en SQLite mediante SQLAlchemy. Orquesta con LangGraph la priorización de ofertas mediante un LLM y la generación de CV personalizados en LaTeX/PDF. Integra notificaciones por Telegram, validación de datos con Pydantic y gestión de fallos para retomar tareas pendientes. (En desarrollo)",
        url: "https://github.com/AbelHaro/job-finder",
        technologies: [technologies.python, technologies.sqlite],
      },
      {
        title: "Tracker",
        summary:
          "Seguimiento de objetos entre fotogramas con SORT, ByteTrack y DeepSORT.",
        category: "Visión artificial",
        status: "En desarrollo",
        visual: "tracking",
        description:
          "Librería de seguimiento de objetos desarrollada en C++ con bindings para Python. Implementa SORT, ByteTrack y DeepSORT para asociar detecciones entre fotogramas y mantener la identidad de los objetos; DeepSORT también utiliza características de apariencia para facilitar la asociación. Incluye un ejemplo de integración con YOLO y OpenCV para detectar y seguir objetos en vídeo. (En desarrollo)",
        url: "https://github.com/AbelHaro/tracker",
        technologies: [technologies.cpp, technologies.python],
      },
      {
        title: "Acortador de URLs",
        summary:
          "Enlaces cortos, fáciles de compartir. Una aplicación en React y Go desplegada en Google Cloud.",
        category: "Full stack",
        status: "En desarrollo",
        visual: "links",
        description:
          "Aplicación web para acortar URLs y compartir enlaces de manera sencilla. Desarrollada con React para el frontend y Go para el backend, utilizando PostgreSQL para almacenar las URLs acortadas y sus correspondientes destinos. La aplicación permite a los usuarios generar enlaces cortos. Está desplegado en Google Cloud y utiliza Coolify para la gestión de despliegues y Docker para la contenedorización. (Actualmente en desarrollo y mejora)",
        url: "https://github.com/AbelHaro/url-shortener",
        productionUrl: "https://url-shortener.abelharo.me",
        technologies: [
          technologies.react,
          technologies.go,
          technologies.postgresql,
          technologies.docker,
          technologies.google_cloud,
        ],
      },
      {
        title: "Pasarela MQTT / LoRa",
        summary:
          "Conexión de sistemas MQTT en entornos remotos sin conectividad IP continua.",
        category: "Sistemas empotrados",
        status: "Trabajo Fin de Máster",
        visual: "network",
        description:
          "Trabajo Fin de Máster que diseña e implementa una pasarela MQTT↔AlLoRa↔MQTT para entornos remotos sin conectividad IP continua. Incluye un broker MQTT 3.1.1 propio desarrollado en MicroPython para nodos LilyGo T3-S3 y un puente AlLoRa sobre LoRa. El broker se evaluó mediante pruebas de estrés y la pasarela se validó extremo a extremo, demostrando un acceso MQTT transparente a la red LPWAN.",
        technologies: [
          technologies.python,
          technologies.mqtt,
          technologies.docker,
        ],
      },
      {
        title: "Safe Art",
        summary:
          "Sensores y alertas en tiempo real para monitorizar y proteger obras de arte.",
        category: "IoT",
        status: "Proyecto académico",
        visual: "sensors",
        description:
          "Proyecto para la asignatura RISA (Redes de Sensores y Actuadores) que consiste en el desarrollo de un sistema de sensorización IoT para la monitorización y protección de obras de arte. El sistema incluye el desarrollo del comportamiento del sensor para la toma de datos y comunicación con la plataforma, así como el desarrollo de una plataforma web para la visualización de datos en tiempo real y gestión de alertas. Utiliza TypeScript, Convex, MQTT, C++ y React.",
        url: "https://github.com/AbelHaro/safe-art",
        technologies: [
          technologies.typescript,
          technologies.convex,
          technologies.mqtt,
          technologies.cpp,
          technologies.react,
        ],
      },
      {
        title: "DescubreUPV",
        description:
          "Aplicación móvil para ayudar a los nuevos estudiantes a conocer la universidad, sus instalaciones y servicios. La aplicación cuenta con un mapa interactivo que permite a los usuarios explorar la universidad y encontrar información sobre diferentes edificios y servicios. Desarrollada en Kotlin y utiliza Supabase como backend para almacenar y gestionar la información de las localizaciones y los usuarios.",
        url: "https://github.com/AbelHaro/DADM-Proyecto",
        technologies: [
          technologies.kotlin,
          technologies.android,
          technologies.supabase,
        ],
      },
      {
        title: "Detección de defectos",
        summary:
          "Control de calidad visual con YOLO, optimizado para NVIDIA Jetson.",
        category: "Visión artificial",
        status: "Trabajo Fin de Grado",
        visual: "inspection",
        description:
          "Sistema para la detección de defectos en objetos a partir de imágenes, empleando redes neuronales convolucionales. Se utilizó el framework Ultralytics para el entrenamiento y la inferencia con modelos YOLO, optimizados para hardware NVIDIA Jetson mediante el SDK TensorRT. El sistema permite la detección de defectos en tiempo real y el análisis de imágenes para la identificación de fallos en productos industriales.",
        url: "https://github.com/AbelHaro/TFG",
        technologies: [technologies.python],
      },
      {
        title: "Portfolio Personal",
        description:
          "Sitio web personal desarrollado con Astro y Tailwind CSS, que muestra mi experiencia, proyectos y habilidades técnicas.",
        url: "https://github.com/AbelHaro/porfolio",
        technologies: [
          technologies.astro,
          technologies.typescript,
          technologies.tailwind,
        ],
      },
    ],
  },
};
