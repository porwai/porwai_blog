"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const skills = [
    { name: 'Research', level: 90 },
    { name: 'Data Analysis', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Web Development', level: 75 },
    { name: 'Scientific Writing', level: 85 },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 h-1 w-20 bg-blue-600 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I am a passionate researcher and developer with a focus on creating innovative solutions 
                through technology and academic research. My work spans multiple disciplines, combining 
                theoretical knowledge with practical applications.
              </p>
              <p>
                With a background in [Your Field], I've published several papers exploring [Your Research Focus]. 
                My approach combines rigorous methodology with creative problem-solving to address complex challenges.
              </p>
              <p>
                Beyond research, I'm dedicated to translating academic insights into real-world applications 
                that can make a meaningful impact in society and industry.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <p className="text-sm text-blue-600 dark:text-blue-400">2018 - 2022</p>
                  <h5 className="text-lg font-medium text-gray-900 dark:text-white">Ph.D. in [Your Field]</h5>
                  <p className="text-gray-700 dark:text-gray-300">[Your University]</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <p className="text-sm text-blue-600 dark:text-blue-400">2016 - 2018</p>
                  <h5 className="text-lg font-medium text-gray-900 dark:text-white">Master's in [Your Field]</h5>
                  <p className="text-gray-700 dark:text-gray-300">[Your University]</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <p className="text-sm text-blue-600 dark:text-blue-400">2012 - 2016</p>
                  <h5 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor's in [Your Field]</h5>
                  <p className="text-gray-700 dark:text-gray-300">[Your University]</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Research Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Data Science', 'Natural Language Processing', 
                  'Computer Vision', 'Scientific Computing', 'Web Technologies'].map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 
                              rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
