'use client';

import { useRef } from 'react';
import { Monitor, Smartphone, Cloud, Palette, LineChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love.',
  },
  {
    icon: LineChart,
    title: 'Digital Strategy',
    description: 'Strategic consulting to drive digital transformation.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-8 transition-all duration-700 card-hover bg-secondary/30 backdrop-blur-sm border-primary/10 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/0 rounded-full blur opacity-30" />
                <service.icon className="relative h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-muted-foreground text-lg">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}