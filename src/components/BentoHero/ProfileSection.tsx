import React from 'react';
import { motion } from 'framer-motion';

interface ProfileSectionProps {
  name?: string;
  title?: string;
  location?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name = 'Wishant Bhajan',
  title = 'Full Stack Developer',
  location = 'Rotterdam, NL',
}) => {

  return (
    <motion.div
      className="profile-section h-full p-8 rounded-2xl backdrop-blur-md"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Image */}
      <motion.div
        className="mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div
          className="w-full aspect-square rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white">
            WB
          </div>
        </div>
      </motion.div>

      {/* Name & Title */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
        <p className="text-base text-slate-400 mb-1">{title}</p>
        <p className="text-sm text-slate-500 flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProfileSection;
