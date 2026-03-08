import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center pt-32 pb-10 relative mt-16 md:mt-20">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/50 to-orange-50/50 rounded-full blur-3xl opacity-70 transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50/50 to-purple-50/50 rounded-full blur-3xl opacity-70 transform -translate-x-1/4 translate-y-1/4"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-serif text-zinc-900 dark:text-zinc-100 leading-[1.1] tracking-tight mb-8">
          Diego López Aroca
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light tracking-wide mb-8 uppercase">
          Data Science & AI + Computer Engineering
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-12 max-w-2xl font-light">
          ¡Bienvenido a mi portfolio personal! Aquí encontrarás un resumen de mi trayectoria, habilidades y proyectos destacados.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:diegolopezaroca@gmail.com"
            className="flex items-center gap-2 px-6 py-3.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/10"
          >
            <Mail className="w-4 h-4" />
            Contactar
          </a>
          <a
            href="https://linkedin.com/in/diego-lopez-aroca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/DiegoLopezAroca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 shadow-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
