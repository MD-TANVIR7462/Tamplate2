import { Card } from '@/components/ui/card';
import {
  Monitor,
  Smartphone,
  Cloud,
  Palette,
  LineChart,
  Code,
  Shield,
  Headphones,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description:
      'Custom web applications built with cutting-edge technologies, focusing on performance, scalability, and user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications for iOS and Android, delivering seamless experiences across devices.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and deployment solutions, ensuring reliability and optimal performance.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that users love, backed by thorough research and modern design principles.',
  },
  {
    icon: LineChart,
    title: 'Digital Strategy',
    description:
      'Strategic consulting to drive digital transformation and achieve business objectives.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description:
      'Tailored software solutions designed to address your specific business needs and challenges.',
  },
  {
    icon: Shield,
    title: 'Security',
    description:
      'Comprehensive security solutions to protect your applications and data from threats.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock technical support and maintenance to ensure your systems run smoothly.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <service.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}