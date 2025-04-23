"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="profile-page">
      {/* ---------- HERO / PROFILE ---------- */}
      <section
        id="profile"
        className="section px-4 py-12 md:py-16 lg:py-20"
      >
        {/* -------- Playful Name Caption -------- */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-center lg:mb-12">
          Por&nbsp;
          <br />
          Waiwitlikhit
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-center mb-4 lg:mb-12">
          (my first name is Pongsapak on passports, Por is a nickname!)
        </p>

        {/* ------ Portrait ------ */}
        <div
          className="max-w-xl mx-auto /* Limits width, centers block */
                     rounded-lg overflow-hidden shadow-lg" /* Styling */
        >
          <Image
            src="/llama_picture.jpeg"
            alt="Portrait described in caption" // Updated alt text slightly
            width={768} // Aspect ratio hint
            height={1024} // Aspect ratio hint
            quality={100}
            className="w-full h-auto block" // Responsive
            priority
          />
        </div>

        {/* -------- Image Caption -------- */}
        {/* Added caption paragraph below the image container */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          This is me at rainbow mountain, Peru February 2025! Almost died hiking in the cold but I fell in love with the country. <br />
           I now love Llamas! 
        </p>

      </section>

      {/* ---------------- About ---------------- */}
      {/* Keeping original structure from your first code block */}
      <section id="about" className="section min-h-screen flex items-center px-4"> {/* Added px-4 */}
        <div className="max-w-3xl mx-auto"> {/* Added mx-auto */}
          <h2 className="text-3xl font-serif mb-8">About Me</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
          Hi! I’m Por, a computer science student at Princeton with a minor in machine learning and data science. I’m currently working on building and applying text-to-speech systems that feel natural and responsive. At school, I’m also researching program auto-generation (e.g., Princeton Cursor) with Professor Aarti Gupta.
          <br /><br />
          I love traveling, Bossa Nova, and hiking/bouldering—and I’m a big fan of ETH Zurich too!          </p>
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      {/* Keeping original structure from your first code block */}
      <section id="projects" className="section min-h-screen px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl mb-12 text-center md:text-left">Projects</h2>
    <ul className="space-y-10 list-disc list-inside text-base font-sans text-muted-foreground leading-relaxed">
      <li>
        <span className="text-foreground font-medium">Real-time TTS Pipeline:</span> Building a fast and natural text-to-speech system using Orpheus and Whisper.
      </li>
      <li>
        <span className="text-foreground font-medium">Program Auto-generation (aka Cursor):</span> Research project with Professor Aarti Gupta on generating programs automatically from high-level goals.
      </li>
      <li>
        <span className="text-foreground font-medium">Instruction Tuning Pipeline:</span> Replicating and extending recent work on influence-based data selection for LLM tuning.
      </li>
    </ul>
  </div>
</section>
    </main>
  );
}