import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import GithubRepos from './components/GithubRepos';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-purple-200 dark:selection:bg-purple-900 overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 md:px-12">
        <Hero />
        <Skills />
        <Experience />
        <GithubRepos />
        <Education />
      </main>
    </div>
  );
}
