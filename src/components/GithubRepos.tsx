import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Star, Circle } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DiegoLopezAroca/repos?sort=updated&per_page=6');
        if (response.ok) {
          const data = await response.json();
          setRepos(data.filter((r: any) => !r.fork).slice(0, 4));
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return null;

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
            The Codebase
          </h2>
          <div className="h-px flex-1 bg-zinc-200 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {repos.map((repo, index) => (
            <motion.a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block p-8 bg-white border border-zinc-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium text-zinc-900 group-hover:text-purple-600 transition-colors">
                  {repo.name}
                </h3>
                <Github className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[2.5rem]">
                {repo.description || 'Sin descripción disponible.'}
              </p>
              <div className="flex items-center gap-6 text-xs text-zinc-500 font-medium">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <Circle className="w-3 h-3 fill-zinc-300 text-zinc-300" />
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
