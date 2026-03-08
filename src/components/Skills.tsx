import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Programación & Datos',
    skills: ['Python', 'SQL', 'R', 'Análisis de Datos'],
  },
  {
    title: 'Inteligencia Artificial',
    skills: ['Machine Learning', 'NLP', 'Reinforcement Learning', 'IA Generativa'],
  },
  {
    title: 'Automatización',
    skills: ['Automatización de procesos', 'Optimización', 'Modelos Algorítmicos'],
  },
  {
    title: 'Soft Skills',
    skills: ['Resolución de problemas', 'Comunicación', 'Trabajo en equipo', 'Adaptabilidad'],
  },
  {
    title: 'Idiomas',
    skills: ['Inglés (C1)', 'Euskera (B2)', 'Alemán (A2)'],
  },
];

export default function Skills() {
  return (
    <section className="py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 tracking-tight">
            Expertise
          </h2>
          <div className="h-px flex-1 bg-zinc-200 mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white border border-zinc-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-lg font-serif font-medium text-zinc-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 text-zinc-600 text-xs font-medium tracking-wide rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
