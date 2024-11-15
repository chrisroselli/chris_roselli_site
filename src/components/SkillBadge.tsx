import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  return (
    <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-[#be1e2d]">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#be1e2d] transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBadge;