'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';


const carouselImages = [
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
];

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30} );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background Carousel */}
      <div className="absolute inset-0 opacity-20">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {carouselImages.map((src, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] relative min-h-screen">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <Code2 className="h-16 w-16 text-primary animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-glow">
              Transforming Ideas
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/40">
              Into Digital Reality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            We craft exceptional digital experiences through innovative software solutions,
            helping businesses thrive in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}