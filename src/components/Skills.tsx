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
    title: 'Idiomas',
    skills: ['Inglés (C1)', 'Euskera (B2)', 'Alemán (A2)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-zinc-100 tracking-tight">
            Expertise
          </h2>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-lg font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-medium tracking-wide rounded-full"
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
