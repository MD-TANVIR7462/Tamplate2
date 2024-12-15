import Link from 'next/link';
import { Code2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">TechForge</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into exceptional digital experiences through innovative software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'Cloud Solutions',
                'UI/UX Design',
                'Consulting',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                123 Tech Street
                <br />
                Silicon Valley, CA 94025
              </p>
              <p className="text-sm text-muted-foreground">
                contact@techforge.com
                <br />
                +1 (555) 123-4567
              </p>
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map(({ icon: Icon, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechForge Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}