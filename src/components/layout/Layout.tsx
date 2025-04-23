"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState('profile');
  
  const navItems = [
    { name: 'Profile', href: '#profile', id: 'profile' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout">
      <aside className="sidebar">
        <nav className="nav-container">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className={`nav-link font-serif ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="social-links">
          <a href="https://github.com/porwai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <span className="social-icon">GH</span>
          </a>
          <a href="https://www.linkedin.com/in/por-waiwitlikhit-7418b51ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span className="social-icon">IN</span>
          </a>
          <a href="https://x.com/PWaiwitlikhit" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <span className="social-icon">𝕏</span>
          </a>
        </div>
      </aside>
      
      <main className="content">
        {children}
      </main>
    </div>
  );
}
