import SQLiteIcon from "../components/icons/SQLite.astro";

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
        technologies: [{
            name: "SQLite",
            source: "/public/icons/SQLite.svg",
            },
        ],
        date: "junio 2024",
        image: "https://i.imgur.com/0ZsLc4L.png",
    },
];

type IconMappingType = {
    [key: string]: any;
};

export const technologyIcons: IconMappingType = {
    SQLite: SQLiteIcon,
};