"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Cyted - AI Visibility",
    description: "AI platform evaluating brand presence across multiple LLMs • React, Next.js, Node.js",
    image: "/sapphire.png",
    slug: "cyted-ai-visibility",
  },
  {
    number: "02",
    title: "StockFlow",
    description: "Distributed real-time stock market platform with low-latency workflows • Go, Kafka, WebSockets",
    image: "/delhiwalahalwai.png",
    slug: "stockflow-trading-platform",
  },
  {
    number: "03",
    title: "Workpunkt",
    description: "Production-grade student management SaaS with role-based workflows • Next.js, PostgreSQL",
    image: "/sapphire.png",
    slug: "workpunkt-saas",
  },
  {
    number: "04",
    title: "Influmojo",
    description: "Full-stack brand–influencer marketplace for web & mobile • React Native, Next.js",
    image: "/delhiwalahalwai.png",
    slug: "influmojo-marketplace",
  },
  {
    number: "05",
    title: "Sapphire Broking",
    description: "High-performance trading dashboards & financial APIs • Go, Next.js",
    image: "/sapphire.png",
    slug: "sapphire-broking-systems",
  },
  {
    number: "06",
    title: "StudySync",
    description: "Real-time learning and collaboration platform • Socket.IO, Next.js",
    image: "/delhiwalahalwai.png",
    slug: "studysync-learning",
  },
  {
    number: "07",
    title: "Vanik",
    description: "Agricultural AI platform with RAG capabilities & vector embeddings • LLMs, LangChain",
    image: "/sapphire.png",
    slug: "vanik-ai",
  },
  {
    number: "08",
    title: "CityCare",
    description: "Healthcare management dashboard for hospital workflows • Next.js, Node.js",
    image: "/delhiwalahalwai.png",
    slug: "citycare-dashboard",
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `\${index * 100}ms` }}
    >
      <Link href={`/blogs/\${feature.slug}`} className="block">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10 hover:bg-foreground/5 transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12 rounded-3xl">
          {/* Number */}
          <div className="shrink-0">
            <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
          </div>
          
          {/* Content */}
          <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            {/* Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[320px] aspect-video relative overflow-hidden rounded-xl border border-foreground/10 group-hover:scale-105 transition-transform duration-700">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Selected Work
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            My featured
            <br />
            <span className="text-muted-foreground">projects</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
