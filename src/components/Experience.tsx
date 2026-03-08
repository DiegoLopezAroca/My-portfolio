import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Instructor de IA',
    company: 'Fundación Sabino Arana',
    period: 'Oct. 2025 - Nov. 2025',
    description: 'Diseño e impartición de cursos prácticos de inteligencia artificial dirigidos a trabajadores de la organización.',
    tags: ['IA Generativa', 'Formación', 'Comunicación'],
  },
  {
    role: 'Automatización de Análisis en Inversión Inmobiliaria',
    company: 'Negocio Familiar',
    period: '2024 - Actualidad',
    description: 'Desarrollo de herramientas para automatizar el análisis de datos en subastas. Optimización de procesos para mejorar la toma de decisiones en compra-venta. Aplicación de técnicas de análisis de datos e inteligencia artificial para identificar oportunidades de inversión.',
    tags: ['Python', 'Data Analysis', 'Automatización', 'Finanzas'],
  },
  {
    role: 'Secretario',
    company: 'Asociación Cultural "Peña El Revoque"',
    period: '2024 - Actualidad',
    description: 'Organización de fiestas patronales y eventos culturales del municipio. Gestión administrativa y coordinación de actividades bajo presión.',
    tags: ['Gestión', 'Organización', 'Voluntariado'],
  },
  {
    role: 'Instructor de IA',
    company: 'Talleres para adultos mayores',
    period: 'Mar. 2024 - Dic. 2024',
    description: 'Presentación en la XII Jornada Universitaria de Innovación Docente y Calidad. Proyecto reconocido por Innobasque como una buena práctica de innovación.',
    tags: ['IA', 'Educación', 'Innovación'],
  },
];

export default function Experience() {
  return (
    <section className="py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 tracking-tight">
            Trayectoria
          </h2>
          <div className="h-px flex-1 bg-zinc-200 mt-2"></div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group"
            >
              <div className="col-span-1 pt-1">
                <span className="text-zinc-400 text-sm font-medium tracking-wider uppercase">
                  {exp.period}
                </span>
              </div>
              <div className="col-span-3">
                <h3 className="text-2xl font-serif text-zinc-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-base text-zinc-500 font-medium mb-4">
                  {exp.company}
                </h4>
                <p className="text-zinc-600 leading-relaxed font-light mb-6 max-w-2xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
