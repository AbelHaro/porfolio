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
}

export const projects: Project[] = [
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
  {
    title: "Proyecto 2",
    description:
      "Descripción del proyecto 2 Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2Descripción del proyecto 2",
    url: "https://github.com/AbelHaro/RFID-RC522-Key-Reading",
    technologies: [
      {
        name: "Java",
        source: "/icons/java.svg",
      },
      {
        name: "React",
        source: "/icons/react.svg",
      },
      {
        name: "Astro",
        source: "/icons/astro.svg",
      },
      {
        name: "Typescript",
        source: "/icons/typescript.svg",
      },
    ],
    date: "Agosto 2024",
    image: "",
  },
];
