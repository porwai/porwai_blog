"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

// Sample data - replace with actual data from your database later
const samplePublications = [
  {
    id: '1',
    title: 'Machine Learning Approaches for Advanced Natural Language Processing',
    abstract: 'This paper explores novel machine learning techniques for improving natural language processing tasks such as sentiment analysis and entity recognition.',
    authors: ['Porwai Witlikhit', 'Collaborator Name'],
    journal: 'Journal of Artificial Intelligence Research',
    year: 2023,
    doi: '10.1234/jair.2023.123',
    link: 'https://example.com/paper1',
  },
  {
    id: '2',
    title: 'Computational Methods for Analyzing Complex Systems',
    abstract: 'We present a new computational framework for analyzing and modeling complex systems with applications in various scientific domains.',
    authors: ['Porwai Witlikhit', 'Collaborator Name', 'Another Researcher'],
    journal: 'Computational Science Journal',
    year: 2022,
    doi: '10.1234/csj.2022.456',
    link: 'https://example.com/paper2',
  },
  {
    id: '3',
    title: 'Data-Driven Approaches to Scientific Discovery',
    abstract: 'This research investigates how data-driven methodologies can accelerate scientific discovery across multiple disciplines.',
    authors: ['Porwai Witlikhit'],
    journal: 'Data Science and Applications',
    year: 2021,
    doi: '10.1234/dsa.2021.789',
    link: 'https://example.com/paper3',
  },
];

export default function PortfolioSection() {
  const [selectedPublication, setSelectedPublication] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Academic Portfolio
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 h-1 w-20 bg-blue-600 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-gray-700 dark:text-gray-300"
          >
            Explore my published research papers and academic contributions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden
                        ${selectedPublication === pub.id ? 'ring-2 ring-blue-500' : ''}`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {pub.year}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {pub.journal}
                  </span>
                </div>
                
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                  {pub.title}
                </h3>
                
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {pub.abstract}
                </p>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Authors:</span>{' '}
                    {pub.authors.join(', ')}
                  </p>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  {pub.doi && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(`https://doi.org/${pub.doi.replace('10.1234/', '')}`, '_blank')}
                    >
                      DOI
                    </Button>
                  )}
                  {pub.link && (
                    <Button 
                      size="sm"
                      onClick={() => window.open(pub.link, '_blank')}
                    >
                      View Paper
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedPublication(selectedPublication === pub.id ? null : pub.id)}
                  >
                    {selectedPublication === pub.id ? 'Less Info' : 'More Info'}
                  </Button>
                </div>
                
                {selectedPublication === pub.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Abstract:</span>{' '}
                      {pub.abstract}
                    </p>
                    {pub.doi && (
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">DOI:</span>{' '}
                        {pub.doi}
                      </p>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
