import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const images = [
    {
      id: 1,
      src: "/placeholder.svg",
      alt: "Cybersecurity Workshop at DIU",
      title: "Cybersecurity Workshop",
      description: "Leading a cybersecurity workshop for university students",
      category: "Events",
      date: "2024"
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "TryHackMe Achievement Certificate",
      title: "TryHackMe Milestone",
      description: "Achieving top rankings in cybersecurity challenges",
      category: "Achievements",
      date: "2024"
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "Programming Contest Participation",
      title: "Programming Contest",
      description: "University programming competition team photo",
      category: "Competitions",
      date: "2023"
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Project Demonstration",
      title: "Security Scanner Demo",
      description: "Demonstrating vulnerability scanner project",
      category: "Projects",
      date: "2024"
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "Team Collaboration",
      title: "Team Project Work",
      description: "Working on cybersecurity project with team members",
      category: "Projects",
      date: "2024"
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Bug Bounty Recognition",
      title: "Bug Bounty Success",
      description: "Recognition for responsible vulnerability disclosure",
      category: "Achievements",
      date: "2024"
    },
    {
      id: 7,
      src: "/placeholder.svg",
      alt: "University Campus",
      title: "DIU Campus Life",
      description: "Student life at Daffodil International University",
      category: "Campus",
      date: "2023"
    },
    {
      id: 8,
      src: "/placeholder.svg",
      alt: "Seminar Attendance",
      title: "Tech Seminar",
      description: "Attending cybersecurity and technology seminars",
      category: "Events",
      date: "2023"
    }
  ];

  const categories = ['All', 'Events', 'Achievements', 'Competitions', 'Projects', 'Campus'];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
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
              Photo <span className="bg-tech-gradient bg-clip-text text-transparent">Gallery</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              A visual journey through my cybersecurity adventures, academic achievements, 
              project demonstrations, and memorable moments from my learning experience.
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  layout
                  className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedImage(image)}
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <ZoomIn className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {image.date}
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-200">
                      {image.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="aspect-video relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">
                    {selectedImage.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {selectedImage.date}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;