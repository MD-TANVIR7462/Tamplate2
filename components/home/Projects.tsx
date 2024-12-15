'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Healthcare App',
    description: 'Mobile application for patient care management and scheduling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Financial Dashboard',
    description: 'Real-time analytics dashboard for financial data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'D3.js', 'AWS'],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our latest work and innovations
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}