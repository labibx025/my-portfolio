import { motion } from 'framer-motion';
import { Trophy, Users, BookOpen, Target, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';

const Activities = () => {
  const activities = [
    {
      title: "TryHackMe Labs Completion",
      description: "Completed over 50+ security challenges including web application security, network penetration testing, and digital forensics.",
      category: "Learning",
      icon: Target,
      date: "2024",
      achievements: ["Top 10% Worldwide", "50+ Rooms Completed", "Multiple Certifications"],
      link: "https://tryhackme.com/p/0xashb0rn"
    },
    {
      title: "Cybersecurity Workshop - DIU",
      description: "Organized and conducted cybersecurity awareness workshop for fellow students covering ethical hacking fundamentals and security best practices.",
      category: "Event",
      icon: Users,
      date: "2024",
      achievements: ["100+ Participants", "Workshop Organizer", "Positive Feedback"],
      link: "#"
    },
    {
      title: "Bug Bounty Research",
      description: "Active participation in bug bounty programs, focusing on web application security testing and vulnerability disclosure.",
      category: "Research",
      icon: BookOpen,
      date: "2023-2024",
      achievements: ["5+ Valid Reports", "CVE Discoveries", "Hall of Fame"],
      link: "#"
    },
    {
      title: "University Programming Contest",
      description: "Participated in multiple programming contests organized by Daffodil International University and achieved notable rankings.",
      category: "Competition",
      icon: Trophy,
      date: "2023",
      achievements: ["Top 20 Finalist", "Problem Solving", "Team Collaboration"],
      link: "#"
    }
  ];

  const achievements = [
    {
      title: "TryHackMe Streak",
      value: "90+ Days",
      description: "Consistent daily practice"
    },
    {
      title: "Security Tools Mastered",
      value: "15+",
      description: "Nmap, Metasploit, Burp Suite, etc."
    },
    {
      title: "Vulnerabilities Found",
      value: "25+",
      description: "In practice environments"
    },
    {
      title: "GitHub Contributions",
      value: "200+",
      description: "Open source contributions"
    }
  ];

  const timeline = [
    {
      year: "2024",
      events: [
        "Started Bug Bounty Hunting",
        "Completed Advanced Web Security Course",
        "Organized University Cybersecurity Workshop"
      ]
    },
    {
      year: "2023",
      events: [
        "Joined TryHackMe Platform",
        "First Programming Contest Participation",
        "Started Learning Ethical Hacking"
      ]
    },
    {
      year: "2022",
      events: [
        "Enrolled in CSE at DIU",
        "Started Programming Journey",
        "Built First Security Tool"
      ]
    }
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
              My <span className="bg-tech-gradient bg-clip-text text-transparent">Activities</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Discover my journey in cybersecurity through competitions, learning milestones, 
              workshop participation, and community involvement.
            </motion.p>
          </div>
        </section>

        {/* Achievements Stats */}
        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {achievement.value}
                      </div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Recent Activities
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {activities.map((activity, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <activity.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <Badge variant="secondary">{activity.category}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {activity.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-3">{activity.title}</CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {activity.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <div className="space-y-1">
                            {activity.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {activity.link !== "#" && (
                          <a 
                            href={activity.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:underline"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Details
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Journey Timeline
            </motion.h2>
            <div className="space-y-8">
              {timeline.map((period, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{period.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4">{period.year}</h3>
                        <div className="space-y-2">
                          {period.events.map((event, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                              <span className="text-muted-foreground">{event}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Activities;