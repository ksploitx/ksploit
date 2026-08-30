"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/experience";
import { TECH_ICON_MAP } from "@/data/skillIcons";
import { getImagePath } from "@/utils/basePath";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Section Header — mirrors Projects section exactly */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-muted tracking-widest">
            // SECTION_02B
          </span>
          <div className="flex items-center justify-between mt-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              WORK_EXPERIENCE
            </h2>
            <span className="hidden md:block font-mono text-xs text-accent/50">
              [{experience.length} ROLE{experience.length !== 1 ? "S" : ""} LOGGED]
            </span>
          </div>
        </motion.div>
      </div>

      {/* Experience Entries */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="exp-card group">
                {/* Card Header */}
                <div className="exp-card-header">
                  {/* Logo */}
                  {entry.logoUrl && (
                    <div className="exp-company-logo flex-shrink-0">
                      <Image
                        src={getImagePath(entry.logoUrl)}
                        alt={`${entry.company} logo`}
                        width={48}
                        height={48}
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Left: codename + title + company */}
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-accent text-xs glow-green tracking-widest">
                      {entry.codename}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-1 mb-1 group-hover:text-accent transition-colors duration-300">
                      {entry.title}
                    </h3>
                    <p className="font-mono text-sm text-accent-cyan">
                      {entry.company}
                    </p>
                  </div>

                  {/* Right: duration + location */}
                  <div className="exp-card-meta">
                    <span className="exp-meta-pill">
                      <Calendar size={12} className="flex-shrink-0" />
                      {entry.duration}
                    </span>
                    <span className="exp-meta-pill">
                      <MapPin size={12} className="flex-shrink-0" />
                      {entry.location}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="exp-card-divider" />

                {/* Bullet Points */}
                <ul className="exp-bullets">
                  {entry.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bulletIndex}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{
                        delay: index * 0.1 + bulletIndex * 0.06,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="exp-bullet-item"
                    >
                      <span className="exp-bullet-dot" aria-hidden="true" />
                      <span className="text-muted-light text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                {entry.tech.length > 0 && (
                  <div className="exp-card-footer">
                    <div className="flex flex-wrap gap-2">
                      {entry.tech.map((t) => {
                        const iconUrl = TECH_ICON_MAP[t] ?? null;
                        return (
                          <span key={t} className="tech-pill">
                            {iconUrl ? (
                              <Image
                                src={iconUrl}
                                alt={`${t} icon`}
                                width={20}
                                height={20}
                                className="tech-pill-icon"
                                unoptimized
                              />
                            ) : (
                              <span className="w-2.5 h-2.5 bg-accent-cyan/60 inline-block flex-shrink-0" />
                            )}
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
