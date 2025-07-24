import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';

const Projects = () => {
  const projects = [
    {
      title: "Security Vulnerability Scanner",
      description: "A comprehensive web application security scanner that identifies common vulnerabilities like XSS, SQL injection, and CSRF. Features automated scanning, detailed reporting, and remediation suggestions.",
      technologies: ["Python", "Flask", "BeautifulSoup", "SQLAlchemy", "Cybersecurity"],
      github: "https://github.com/labibx025/security-scanner",
      demo: "#",
      status: "In Progress",
      category: "Cybersecurity",
      date: "2024"
    },
    {
      title: "Ethical Hacking Toolkit",
      description: "Collection of ethical hacking tools and scripts for penetration testing and security assessments. Includes network scanners, payload generators, and vulnerability assessment tools.",
      technologies: ["Python", "Bash", "Nmap", "Metasploit", "Wireshark"],
      github: "https://github.com/labibx025/ethical-hacking-toolkit",
      demo: "#",
      status: "Active",
      category: "Security Tools",
      date: "2024"
    },
    {
      title: "Bug Bounty Automation",
      description: "Automated reconnaissance and vulnerability discovery tool for bug bounty hunting. Streamlines the process of subdomain enumeration, port scanning, and vulnerability detection.",
      technologies: ["Go", "Docker", "APIs", "Automation", "Bash"],
      github: "https://github.com/labibx025/bug-bounty-automation",
      demo: "#",
      status: "Beta",
      category: "Bug Bounty",
      date: "2024"
    },
    {
      title: "Password Security Analyzer",
      description: "Tool to analyze password strength and detect common patterns. Includes breach detection, entropy calculation, and password policy recommendations.",
      technologies: ["Python", "Machine Learning", "Cryptography", "API"],
      github: "https://github.com/labibx025/password-analyzer",
      demo: "#",
      status: "Completed",
      category: "Security Tools",
      date: "2023"
    },
    {
      title: "Network Traffic Monitor",
      description: "Real-time network traffic analysis tool for detecting suspicious activities and potential intrusions. Features packet analysis and alert systems.",
      technologies: ["Python", "Scapy", "Flask", "JavaScript", "Charts.js"],
      github: "https://github.com/labibx025/network-monitor",
      demo: "#",
      status: "Active",
      category: "Network Security",
      date: "2023"
    },
    {
      title: "CTF Challenge Platform",
      description: "Web platform for hosting Capture The Flag competitions with various cybersecurity challenges. Includes scoring system and progress tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "JWT"],
      github: "https://github.com/labibx025/ctf-platform",
      demo: "#",
      status: "Completed",
      category: "Education",
      date: "2023"
    }
  ];

  const categories = ["All", "Cybersecurity", "Security Tools", "Bug Bounty", "Network Security", "Education"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Beta': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'In Progress': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Completed': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              My <span className="bg-tech-gradient bg-clip-text text-transparent">Projects</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Explore my collection of cybersecurity projects, ethical hacking tools, and security-focused applications. 
              Each project demonstrates practical skills in penetration testing, vulnerability assessment, and secure development.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 group hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                          <Tag className="h-4 w-4 ml-2" />
                          <span>{project.category}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;