import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="group bg-gray-800/50 rounded-xl overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
          {title}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="tex--[#be1e2d] hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </h3>
        <p className="text-[#be1e2d] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-500/10 text-[#be1e2d] font-bold rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;