export interface Experience {
  title: string;
  description: string;
  date: string;
  place: string;
}

export const experience: Experience[] = [
  {
    title: "Prácticas en el Departamento DISCA de la UPV",
    description:
      "Desarrollo de un sistema de detección de defectos en objetos mediante imágenes, utilizando redes neuronales.",
    date: "Octubre 2024 - presente",
    place: "Valencia, España",
  },
  {
    title: "Prácticas en SOLTECSIS S.L.",
    description:
      "Depuración y corrección de errores durante la migración del proyecto de código abierto FWCloud de JavaScript a TypeScript.",
    date: "Julio 2024",
    place: "Altea, España",
  },
];
