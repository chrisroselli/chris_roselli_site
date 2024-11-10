import { Github, Linkedin, Mail, Code2, Palette, Rocket, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img src="images/raven.svg" alt="Raven Logo" className="w-32 h-32 right-12 relative mx-auto animate-fade-in"/>
          <h1 className="text-5xl md:text-6xl font-heading text-white animate-fade-in">
            Chris Roselli
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 my-6 animate-fade-in-delay">
            Frontend Web Developer & UI/UX Enthusiast
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-delay-2">
            <a href="https://github.com/chrisroselli" className="hover:text-[#be1e2d] transition-colors" target="_blank">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/chris-roselli-webdev" className="hover:text-[#be1e2d] transition-colors" target="_blank">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:chrisroselli@gmail.com" className="hover:text-[#be1e2d] transition-colors">
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
            <Code2 className="w-8 h-8 text-[#be1e2d]" />
            About Me
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-lg text-gray-300 leading-relaxed">
              An accomplished Front-End Web Developer with over 10 years of experience specializing in front-end development and team leadership. In my current role, I oversee our team's junior developers while creating and maintaining a portfolio of 500+ national lead-generating web properties. I have expertise in modern JavaScript libraries and frameworks including React.js, Next.js, Vite, and TypeScript, all backed by a strong foundation in HTML5, CSS3, and vanilla JS. Having worked as a graphic designer in a previous life, I bring a strong eye for UI/UX design in my development work. I am easily excited by emerging technologies and always eager to learn and grow.

            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Palette className="w-8 h-8 text-[#be1e2d]" />
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
            <SkillBadge name="Git" level={30} />
            <SkillBadge name="Webstorm" level={75} />
            <SkillBadge name="Neovim" level={60} />
            <SkillBadge name="UI/UX" level={75} />
            <SkillBadge name="Node.js" level={20} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Rocket className="w-8 h-8 text-[#be1e2d]" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Larry Janesky"
              description="Entrepreneurial business website"
              image="images/lj-site.jpg"
              tags={['React', 'Next.js', 'TypeScript', 'Tailwind']}
              link="https://larry-janesky-site.vercel.app"
            />
            <ProjectCard
              title="Treehouse tools"
              description="Docs application for web development team"
              image="images/th-tools.jpg"
              tags={['React', 'Next.js', 'TypeScript', 'MDX','Supabase', 'Tailwind']}
              link="https://www.treehousetools.dev"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>Chris Roselli | Frontend Web Developer & UI/UX Enthusiast</p>
        </div>
      </footer>
    </div>
  );
}

export default App;