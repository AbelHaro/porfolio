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
      "Desarrollo de un sistema de detección de defectos en objetos mediante imágenes, utilizando redes neuronales convolucionales (CNNs). Investigación y experimentación con diferentes arquitecturas y datasets para optimizar la precisión y eficiencia del modelo. Uso de dispositivos NVIDIA Jetson para la implementación del sistema en hardware de bajo consumo.",
    date: "Octubre 2024 - Julio 2025",
    place: "Valencia, España",
  },
  {
    title: "Prácticas en SOLTECSIS S.L.",
    description:
      "Depuración y corrección de errores durante la migración del proyecto de código abierto FWCloud de JavaScript a TypeScript. Colaboración en la refactorización del código base para mejorar la mantenibilidad y escalabilidad. Implementación de pruebas unitarias y de integración para garantizar la calidad del software.",
    date: "Julio 2024",
    place: "Altea, España",
  },
];
