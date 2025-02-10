'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'Visionary leader with 15+ years of tech industry experience.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Tech innovator specializing in scalable architecture.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    bio: 'Award-winning designer focused on user experience.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    bio: 'Full-stack expert with a passion for clean code.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Passionate experts driving innovation
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2  lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-secondary/20 backdrop-blur-sm border-primary/10">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
