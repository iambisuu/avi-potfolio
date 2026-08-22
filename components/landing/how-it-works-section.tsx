"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    number: "01",
    title: "SDE Intern",
    description: "Business Core Solutions (July 2026 - Aug 2026)",
    code: `Developed Flutter mobile workflows for temporary privileged-access requests. Integrated REST APIs for submission, validation, and status tracking with role-based emergency approval flows.`,
  },
  {
    number: "02",
    title: "Full Stack Developer",
    description: "Kaana AI Technologies (Dec 2025 - June 2026)",
    code: `Architected scalable Brand–Influencer marketplace. Implemented modular backend services with RBAC, integrated Exotel, and designed AI-powered influencer matching. Delivered cross-platform applications in Next.js and React Native.`,
  },
  {
    number: "03",
    title: "Full Stack Developer",
    description: "Sapphire Broking (Feb 2025 - Oct 2025)",
    code: `Integrated NSE and BSE exchange APIs in Go. Built scalable, low-latency backend services for high-frequency trading data workflows. Created high-performance trading dashboards using Next.js and TailwindCSS.`,
  }
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveStep((prev) => (prev + 1) % experiences.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Experience
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 \${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Work Experience
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {experiences.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group \${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div 
                          className="h-full bg-background w-0"
                          style={{
                            animation: 'progress 6s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/10 overflow-hidden rounded-xl">
              {/* Window header */}
              <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between bg-background/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-background/40">experience.ts</span>
              </div>

              {/* Code content */}
              <div className="p-8 font-mono text-sm min-h-[280px] bg-background/5">
                <pre className="text-background/70 whitespace-pre-wrap break-words">
                  {experiences[activeStep].code.split('. ').map((sentence, index, array) => (
                    <div 
                      key={`\${activeStep}-\${index}`} 
                      className="leading-loose code-line-reveal mb-2"
                      style={{ 
                        animationDelay: `\${index * 150}ms`,
                      }}
                    >
                      <span className="text-background/40 select-none mr-4">{(index + 1).toString().padStart(2, '0')}</span>
                      <span className="text-background/90">{sentence}{index !== array.length - 1 ? '.' : ''}</span>
                    </div>
                  ))}
                </pre>
              </div>

              {/* Status */}
              <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3 bg-background/5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-background/40">Active Instance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .code-line-reveal {
          opacity: 0;
          transform: translateY(8px);
          animation: lineReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
