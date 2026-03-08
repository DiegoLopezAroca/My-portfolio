import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial user preference or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Trayectoria', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Formación', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      sections.forEach((section) => {
        if (!section) return;
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none"
    >
      <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-full px-6 py-3 pointer-events-auto flex items-center gap-6">
        <ul className="flex items-center gap-4 md:gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href 
                    ? 'text-purple-700 dark:text-purple-400' 
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button 
          onClick={toggleDarkMode}
          className="ml-2 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </motion.nav>
  );
}
