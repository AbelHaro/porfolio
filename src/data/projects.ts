export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: {
    name: string;
    source: string;
  }[];
  date: string;
  production_url?: string;
}

export const projects: Project[] = [
  {
    title: "F1 Stats",
    description:
      "Una aplicación web que muestra las estadísticas históricas de los pilotos y constructores en la F1. Los datos almacenados en una base de datos SQLite se obtienen de una API creada con Express hosteada dentro de un contenedor en Render.com. El frontend está desarrollado con React y hosteado en Vercel.com. Ambos servicios de hosting estan configurados para desplegar automáticamente los cambios en el repositorio de GitHub.",
    url: "https://github.com/AbelHaro/F1",
    technologies: [
      {
        name: "SQLite",
        source: "/icons/sqlite.svg",
      },
      {
        name: "Express",
        source: "/icons/express.svg",
      },
      {
        name: "Docker",
        source: "/icons/docker.svg",
      },
      {
        name: "React",
        source: "/icons/react.svg",
      },
      {
        name: "JavaScript",
        source: "/icons/javascript.svg",
      },
    ],
    date: "Agosto 2024",
    image: "",
    production_url: "https://f1-sandy.vercel.app/",
  },
  {
    title: "Lector de Tarjetas RFID",
    description: `Proyecto IoT para desarrollar un sistema de control de acceso utilizando RFID y Bluetooth. El proyecto permite registrar usuarios y sus accesos mediante la lectura de una tarjeta RFID. El microcontrolador
        se comunica con el servidor a través de una API REST. El servidor almacena los registros en una base de datos
        y se visualizan en Ubidots.`,
    url: "https://github.com/AbelHaro/RFID-RC522-Key-Reading",
    technologies: [
      {
        name: "SQLite",
        source: "/icons/sqlite.svg",
      },
      {
        name: "Python",
        source: "/icons/python.svg",
      },
    ],
    date: "junio 2024",
    image: "https://i.imgur.com/0ZsLc4L.png",
  },
];
