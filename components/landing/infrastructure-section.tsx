"use client";

import { useEffect, useState, useRef } from "react";

const skillCategories = [
  { 
    title: "Frontend Engineering", 
    description: "Next.js, React, React Native, TailwindCSS, Three.js",
    technologies: ["Next.js", "React", "React Native", "TailwindCSS", "Three.js"]
  },
  { 
    title: "Backend & Systems", 
    description: "Node.js, Go, Express, NestJS, Gin, Kafka",
    technologies: ["Node.js", "Go", "Express", "NestJS", "Gin", "Kafka"]
  },
  { 
    title: "Databases & Caching", 
    description: "PostgreSQL, Prisma ORM, MongoDB, Redis",
    technologies: ["PostgreSQL", "Prisma", "MongoDB", "Redis"]
  },
  { 
    title: "Cloud & DevOps", 
    description: "Docker, Kubernetes, AWS, Vercel, Render, CI/CD",
    technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Prometheus", "Grafana"]
  },
  { 
    title: "AI & Machine Learning", 
    description: "LLMs, LangChain, Vector Embeddings, RAG",
    technologies: ["LLMs", "LangChain", "RAG", "Vector Embeddings"]
  },
  { 
    title: "Core Languages", 
    description: "TypeScript, JavaScript, Go, C++",
    technologies: ["TypeScript", "JavaScript", "Go", "C++"]
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 \${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              What I do
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              My Skills
              <br />
              & Expertise.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I am a versatile engineer specializing in scalable system architecture, real-time distributed platforms, and seamless frontend experiences. 
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["System Architecture", "Distributed Systems", "DSA", "WebSockets", "Apache Kafka"].map(spec => (
                <span key={spec} className="px-3 py-1 bg-foreground/5 text-sm font-medium rounded-full">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Skill list */}
          <div
            className={`transition-all duration-700 delay-200 \${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10 rounded-2xl overflow-hidden bg-background">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between bg-foreground/5">
                <span className="text-sm font-mono text-muted-foreground">Tech Stack</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                </div>
              </div>

              {/* Categories */}
              <div>
                {skillCategories.map((category, index) => (
                  <div
                    key={category.title}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex flex-col justify-center transition-all duration-300 \${
                      activeCategory === index ? "bg-foreground/[0.03]" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span 
                        className={`w-2 h-2 mt-2 rounded-full shrink-0 transition-colors duration-300 \${
                          activeCategory === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-semibold text-lg">{category.title}</div>
                        <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{category.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
