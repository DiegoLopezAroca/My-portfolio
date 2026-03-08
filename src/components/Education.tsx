import { motion } from 'motion/react';

const education = [
  {
    degree: 'Doble Grado en Ciencia de Datos e Inteligencia Artificial + Ingeniería Informática',
    institution: 'Universidad de Deusto',
    period: '2022 - Actualidad',
  },
  {
    degree: 'Bachillerato de Ciencias Tecnológicas',
    institution: 'IES Arrigorriaga',
    period: '2020 - 2022',
  },
  {
    degree: 'Educación Secundaria Obligatoria',
    institution: 'IES Arrigorriaga',
    period: '2016 - 2020',
  },
];

const certificates = [
  'Deusto Emprende – Programa Creaction!',
  'Participación en el programa IA generativa: uso eficaz y responsable',
  'Certificación de Socorrista (Cruz Roja y RFESS) + DESA',
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-zinc-100 tracking-tight">
            Formación
          </h2>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-8">Educación Académica</h3>
            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800"
                >
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="text-zinc-400 dark:text-zinc-500 text-xs font-medium tracking-wider uppercase mb-2">{edu.period}</div>
                  <div className="font-serif text-lg text-zinc-900 dark:text-zinc-100 mb-1">{edu.degree}</div>
                  <div className="text-zinc-500 dark:text-zinc-400 text-sm">{edu.institution}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-8">Certificaciones</h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]"
                >
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm font-light">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
