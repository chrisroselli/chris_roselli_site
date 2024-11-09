import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Rocket, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl text-[#be1e2d] animate-fade-in">
            Chris Roselli
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delay">
            Frontend Web Developer & UI/UX Enthusiast
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-delay-2">
            <a href="https://github.com/chrisroselli" className="hover:text-blue-400 transition-colors" target="_blank">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/chris-roselli-webdev" className="hover:text-blue-400 transition-colors" target="_blank">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:chrisroselli@gmail.com" className="hover:text-blue-400 transition-colors">
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
              Accomplished Front-End Web Developer with over 9 years of experience specializing in front-end development and team development. Currently working at Contractor Nation, where I help manage and maintain a portfolio of 500+ national lead-generating web properties. Expertise in modern JavaScript libraries/frameworks including React.js, Next.js, Vite, TypeScript. Backed with a strong foundation in HTML5, CSS3, and vanilla JS. Easily excited by UI/UX design and user experience. Always eager to learn and grow.

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
            <SkillBadge name="HTML" level={99} />
            <SkillBadge name="CSS" level={85} />
            <SkillBadge name="JavaScript" level={65} />
            <SkillBadge name="React" level={60} />
            <SkillBadge name="Next.js" level={60} />
            <SkillBadge name="TypeScript" level={40} />
            <SkillBadge name="Tailwind CSS" level={85} />
            <SkillBadge name="Git" level={25} />
            <SkillBadge name="Node.js" level={20} />
            <SkillBadge name="UI/UX" level={80} />
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
          <p>Chris Roselli | Frontend Web Developer & UI/UX Enthusiast</p>
        </div>
      </footer>
    </div>
  );
}

export default App;