'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const features = [
  'Innovative Solutions',
  'Expert Team',
  'Agile Development',
  'Quality Assurance',
  '24/7 Support',
  'Timely Delivery',
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div
            className={`relative h-[600px] transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a team of passionate developers, designers, and strategists
              dedicated to creating exceptional digital experiences that drive
              business growth.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}