import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Download, Target, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const educationHistory = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University",
      period: "2022 - Present",
      status: "Current"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Karatoa Multimedia School and College",
      period: "2022",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sukhanpukur High School",
      period: "2019",
      status: "Completed"
    }
  ];

  const personalDetails = [
    { label: "Full Name", value: "Md. Labib Hasan" },
    { label: "Date of Birth", value: "November 22, 2004" },
    { label: "Nationality", value: "Bangladeshi" },
    { label: "Present Address", value: "Yksg 2, Daffodil Smart City, Birulia, Savar, Dhaka" },
    { label: "Permanent Address", value: "Shihipur, Sonatola, Bogura" }
  ];

  const futurePlans = {
    academic: [
      "Complete B.Sc. in Computer Science & Engineering",
      "Pursue advanced cybersecurity certifications (CISSP, CEH, OSCP)",
      "Master's degree in Cybersecurity or Information Security",
      "Research in AI-powered security solutions"
    ],
    career: [
      "Become a professional bug bounty hunter",
      "Contribute to open-source security projects",
      "Specialize in penetration testing and ethical hacking",
      "Build a cybersecurity consultancy firm"
    ]
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-background to-muted/30">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="bg-tech-gradient bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm a passionate cybersecurity enthusiast and developer from Bangladesh, 
                dedicated to making the digital world safer through ethical hacking and secure development practices.
              </p>
            </motion.div>

            {/* Personal Details */}
            <motion.div variants={itemVariants} className="mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personalDetails.map((detail, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                        <p className="text-foreground">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-background">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Educational <span className="bg-tech-gradient bg-clip-text text-transparent">Background</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {educationHistory.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                        </div>
                        <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>
                          {edu.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Future Plans Section */}
        <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Future <span className="bg-tech-gradient bg-clip-text text-transparent">Plans</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                My roadmap to becoming a cybersecurity expert and contributing to the security community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Academic Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {futurePlans.academic.map((plan, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{plan}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Career Aspirations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {futurePlans.career.map((plan, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{plan}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Button size="lg" className="bg-tech-gradient hover:opacity-90 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download Complete CV
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default About;