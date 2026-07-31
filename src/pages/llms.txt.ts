export const prerender = true;

const llmsTxt = `# Abel Haro Armero

> Personal portfolio of Abel Haro Armero, a computer engineer with a Master's Degree in Computer Engineering and Networks from the Universitat Politècnica de València (UPV). His focus includes backend development, cloud infrastructure, and maintainable systems.

## Main pages

- [Portfolio](https://abelharo.me/): Bilingual English/Spanish profile, education, professional experience, technical projects, and contact information.
- [Blog](https://abelharo.me/blog/): Reading reviews about development, technology, and other topics of interest.

## Contact and profiles

- Email: abelh2003@gmail.com
- University email: ahararm@upv.es
- [GitHub](https://github.com/AbelHaro)
- [LinkedIn](https://www.linkedin.com/in/abel-haro-armero-54bb6518a/)
- [CV in Spanish](https://abelharo.me/curriculum/abel_haro_armero_cv_es.pdf)
- [CV in English](https://abelharo.me/curriculum/abel_haro_armero_cv_en.pdf)

## Education

- Master's Degree in Computer Engineering and Networks, Universitat Politècnica de València (September 2025–July 2026). Average grade: 9.0.
- Bachelor's Degree in Computer Engineering, Universitat Politècnica de València (September 2021–July 2025). Average grade: 8.6.

## Experience

- Research internship at UPV's DISCA Department (October 2024–July 2025): developed an image-based object-defect detection system using convolutional neural networks and NVIDIA Jetson devices.
- Internship at SOLTECSIS S.L. (July 2024): debugged and supported the migration of the open-source FWCloud project from JavaScript to TypeScript.

## Selected projects

- [URL Shortener](https://github.com/AbelHaro/url-shortener): URL-shortening web app built with React, Go, PostgreSQL, Docker, DigitalOcean, and Dokploy. [Live site](https://url-shortener.abelharo.me).
- [Safe Art](https://github.com/AbelHaro/safe-art): IoT system for real-time monitoring and protection of artworks, built with TypeScript, Convex, MQTT, C++, and React.
- [DescubreUPV](https://github.com/AbelHaro/DADM-Proyecto): Kotlin mobile app that helps new students explore the university, with an interactive map and Supabase backend.
- [Object Defect Detection](https://github.com/AbelHaro/TFG): Real-time industrial defect-detection system using Python, Ultralytics YOLO, NVIDIA Jetson, and TensorRT.
- [Portfolio source code](https://github.com/AbelHaro/porfolio): This portfolio, built with Astro, TypeScript, and Tailwind CSS.

## Technical focus

Backend development, cloud infrastructure, distributed and maintainable systems, computer vision, IoT, TypeScript, JavaScript, Go, Python, React, Astro, PostgreSQL, Docker, MQTT, Kotlin, C++, Supabase, Convex, and NVIDIA Jetson.

## Languages

Spanish (native) and English (professional working proficiency).
`;

export function GET() {
  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
