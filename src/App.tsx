import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import GithubRepos from './components/GithubRepos';
import Chatbot from './components/Chatbot';
import VoiceAssistant from './components/VoiceAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-zinc-900 font-sans selection:bg-purple-200 overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-6 md:px-12">
        <Hero />
        <Skills />
        <Experience />
        <GithubRepos />
        <Education />
      </main>
      
      <Chatbot />
      <VoiceAssistant />
    </div>
  );
}
