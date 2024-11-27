import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProfileCardProps {
  title: string;
  summary: {
    strengths: number;
    skills: number;
    weaknesses: number;
  };
  onClick: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ title, summary, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
        <ArrowRight className="w-5 h-5 text-blue-400" />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{summary.strengths}</div>
          <div className="text-xs text-gray-400">Fortalezas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{summary.skills}</div>
          <div className="text-xs text-gray-400">Habilidades</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-400">{summary.weaknesses}</div>
          <div className="text-xs text-gray-400">Debilidades</div>
        </div>
      </div>
    </motion.div>
  );
};