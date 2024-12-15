'use client';

import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss how we can help your business grow
          </p>
        </div>

        <Card
          className={`mt-20 max-w-2xl mx-auto p-8 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={6}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}