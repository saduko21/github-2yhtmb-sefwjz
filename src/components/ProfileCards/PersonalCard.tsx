import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface PersonalCardProps {
  imageUrl: string;
  linkedinUrl: string;
}

export const PersonalCard: React.FC<PersonalCardProps> = ({ imageUrl, linkedinUrl }) => {
  return (
    <motion.a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300">
            <img
              src={imageUrl}
              alt="Cristian Geerken"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1.5"
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <Linkedin className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white">Cristian Geerken</h3>
          <p className="text-sm text-gray-400 mt-1 max-w-[200px]">Asesoría y Consultoría Integral Externa - Especialista en Desarrollo Organizativo e Innovaciones Tecnológicas</p>
        </div>
      </div>
    </motion.a>
  );
};