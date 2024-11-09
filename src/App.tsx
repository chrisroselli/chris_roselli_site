import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Rocket, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 animate-fade-in">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delay">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-delay-2">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:john@example.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-400" />
            About Me
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate frontend developer with 5 years of experience crafting beautiful and functional web experiences. 
              I specialize in React, TypeScript, and modern CSS frameworks, with a keen eye for design and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Palette className="w-8 h-8 text-blue-400" />
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillBadge name="React" level={90} />
            <SkillBadge name="TypeScript" level={85} />
            <SkillBadge name="Tailwind CSS" level={95} />
            <SkillBadge name="Next.js" level={80} />
            <SkillBadge name="Node.js" level={75} />
            <SkillBadge name="GraphQL" level={70} />
            <SkillBadge name="Git" level={85} />
            <SkillBadge name="UI/UX" level={88} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online store built with React and Redux"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
              tags={['React', 'Redux', 'Node.js']}
              link="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="Collaborative project management tool with real-time updates"
              image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
              tags={['React', 'Firebase', 'Tailwind']}
              link="https://github.com"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="Real-time weather tracking with interactive maps"
              image="https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80"
              tags={['React', 'APIs', 'Charts.js']}
              link="https://github.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="Modern portfolio site built with React and Tailwind"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              tags={['React', 'Tailwind', 'Vite']}
              link="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;