import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce solution with real-time inventory management and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    client: 'RetailTech Inc.',
  },
  {
    title: 'Healthcare App',
    description:
      'Mobile application for patient care management, appointment scheduling, and medical records.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    client: 'MedCare Solutions',
  },
  {
    title: 'Financial Dashboard',
    description:
      'Real-time analytics dashboard for financial data visualization and reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'D3.js', 'AWS', 'Redux'],
    client: 'FinTech Global',
  },
  {
    title: 'Social Media Platform',
    description:
      'A next-generation social media platform with real-time messaging and content sharing.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
    client: 'SocialConnect Ltd.',
  },
  {
    title: 'IoT Dashboard',
    description:
      'IoT device management and monitoring dashboard for smart home solutions.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
    tags: ['Vue.js', 'Python', 'MQTT', 'InfluxDB'],
    client: 'SmartHome Technologies',
  },
  {
    title: 'Learning Management System',
    description:
      'Comprehensive LMS with video streaming, assessments, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'Redis'],
    client: 'EduTech Solutions',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Our Projects</h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest work and innovations
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
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
                  <p className="mt-2 text-sm text-primary font-medium">
                    {project.client}
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    {project.description}
                  </p>
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
    </div>
  );
}