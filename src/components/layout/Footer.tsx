import { Github, Facebook, Twitter, MessageCircle, Send, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/labibx025', label: 'GitHub' },
    { icon: Facebook, href: 'https://facebook.com/labibxashb0rn', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/ASHBORNx0', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://discord.com/0x_ashb0rn', label: 'Discord' },
    { icon: Send, href: 'https://t.me/labib_025', label: 'Telegram' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold bg-tech-gradient bg-clip-text text-transparent">
              Md. Labib Hasan
            </h3>
            <p className="text-muted-foreground">
              Cybersecurity Enthusiast & Developer passionate about ethical hacking, 
              bug bounty hunting, and creating secure digital solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>labibhasan754@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+880 1940 861 669</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Activities', 'Gallery', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                    <Icon className="h-4 w-4" />
                  </Button>
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                TryHackMe: <a href="https://tryhackme.com/p/0xashb0rn" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">0xashb0rn</a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Md. Labib Hasan. All rights reserved. Built with ❤️ using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;