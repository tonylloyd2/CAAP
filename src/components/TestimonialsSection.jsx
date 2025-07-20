import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Chip,
} from '@mui/material';
import {
  FormatQuote,
  ArrowBackIos,
  ArrowForwardIos,
  Star,
  Favorite,
  School,
  LocalHospital,
  Work,
} from '@mui/icons-material';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mary Wanjiku",
      role: "Beneficiary - Education Program",
      location: "Chwele, Bungoma County",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      quote: "Before CAAP's scholarship program, I couldn't afford to continue my education. Now I'm in my final year at university studying to become a teacher. I want to come back and help educate children in my community just like CAAP helped me.",
      impact: "University Education",
      category: "education",
      icon: School,
      color: "#22C55E",
      year: "2023"
    },
    {
      id: 2,
      name: "James Wekesa",
      role: "Small Business Owner",
      location: "Kabuchai, Bungoma County",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The microfinance program gave me the capital I needed to start my maize farming business. What started as a small loan has grown into a business that employs 5 people from my community. CAAP believed in me when no one else would.",
      impact: "5 Jobs Created",
      category: "economic",
      icon: Work,
      color: "#10B981",
      year: "2022"
    },
    {
      id: 3,
      name: "Dr. Sarah Naswa",
      role: "Community Health Worker",
      location: "Mt. Elgon, Bungoma County",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      quote: "CAAP's mobile clinic program has been a game-changer for our remote community. We've reduced child mortality by 40% and now have regular prenatal care for expecting mothers. The impact on our community's health is immeasurable.",
      impact: "40% Mortality Reduction",
      category: "healthcare",
      icon: LocalHospital,
      color: "#06B6D4",
      year: "2024"
    },
    {
      id: 4,
      name: "Grace Mukhwana",
      role: "Parent & Community Leader",
      location: "Chwele, Bungoma County",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "My three children now have access to clean water at school thanks to CAAP's infrastructure projects. As a mother, nothing makes me happier than knowing my children are safe and healthy while getting their education.",
      impact: "Clean Water Access",
      category: "infrastructure",
      icon: Favorite,
      color: "#8B5CF6",
      year: "2023"
    },
    {
      id: 5,
      name: "Samuel Barasa",
      role: "Volunteer & Donor",
      location: "Nairobi, Kenya",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "I've been supporting CAAP for two years now, and seeing the direct impact of my donations on real families in Bungoma keeps me motivated. This organization truly transforms lives, not just with money, but with genuine care and community involvement.",
      impact: "2 Years Supporting",
      category: "supporter",
      icon: Favorite,
      color: "#EF4444",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Box
      id="testimonials"
      component="section"
      className="section-padding"
      sx={{
        background: 'linear-gradient(135deg, #111827 0%, #1F2937 50%, #374151 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 40%)
          `,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-5">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: '#F8FAFC',
                fontWeight: 700,
                mb: 3,
                position: 'relative',
                fontSize: { xs: '2rem', md: '2.5rem' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(45deg, #22C55E, #10B981)',
                  borderRadius: '2px',
                },
              }}
            >
              Stories of Impact
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#CBD5E1',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Real voices from the communities we serve and the supporters who make our work possible
            </Typography>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div variants={itemVariants}>
            <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
              <AnimatePresence mode="wait" custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                >
                  <Card
                    sx={{
                      background: 'rgba(30, 41, 59, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: `2px solid ${currentTestimonial.color}20`,
                      borderRadius: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 32px ${currentTestimonial.color}15`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(45deg, ${currentTestimonial.color}, rgba(34, 197, 94, 0.8))`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                      {/* Quote Icon */}
                      <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <FormatQuote 
                          sx={{ 
                            fontSize: 48, 
                            color: currentTestimonial.color,
                            opacity: 0.7,
                          }} 
                        />
                      </Box>

                      {/* Quote Text */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#F8FAFC',
                          textAlign: 'center',
                          fontStyle: 'italic',
                          lineHeight: 1.7,
                          mb: 4,
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          fontWeight: 400,
                        }}
                      >
                        "{currentTestimonial.quote}"
                      </Typography>

                      {/* Person Info */}
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          flexDirection: { xs: 'column', sm: 'row' },
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 3
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar
                            src={currentTestimonial.image}
                            sx={{
                              width: 64,
                              height: 64,
                              border: `3px solid ${currentTestimonial.color}`,
                              boxShadow: `0 4px 16px ${currentTestimonial.color}30`,
                            }}
                          />
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                color: '#F8FAFC',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                              }}
                            >
                              {currentTestimonial.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: currentTestimonial.color,
                                fontWeight: 500,
                                mb: 0.5,
                              }}
                            >
                              {currentTestimonial.role}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#94A3B8',
                                fontSize: '0.9rem',
                              }}
                            >
                              {currentTestimonial.location}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Impact Badge */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-end' } }}>
                          <Chip
                            icon={<currentTestimonial.icon sx={{ fontSize: 18 }} />}
                            label={currentTestimonial.impact}
                            sx={{
                              background: `linear-gradient(45deg, ${currentTestimonial.color}, rgba(34, 197, 94, 0.8))`,
                              color: 'white',
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              mb: 1,
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: '#94A3B8',
                              fontSize: '0.8rem',
                            }}
                          >
                            Since {currentTestimonial.year}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  position: 'absolute',
                  left: { xs: -20, md: -60 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(34, 197, 94, 0.1)',
                  color: '#22C55E',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  '&:hover': {
                    background: 'rgba(34, 197, 94, 0.2)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ArrowBackIos />
              </IconButton>

              <IconButton
                onClick={nextTestimonial}
                sx={{
                  position: 'absolute',
                  right: { xs: -20, md: -60 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(34, 197, 94, 0.1)',
                  color: '#22C55E',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  '&:hover': {
                    background: 'rgba(34, 197, 94, 0.2)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </Box>

            {/* Dots Indicator */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: index === currentIndex ? '#22C55E' : 'rgba(203, 213, 225, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
                    '&:hover': {
                      backgroundColor: index === currentIndex ? '#22C55E' : 'rgba(34, 197, 94, 0.5)',
                    },
                  }}
                />
              ))}
            </Box>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-5">
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                mt: 6,
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
                borderRadius: '20px',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  color: '#F8FAFC',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Add Your Voice to Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                }}
              >
                Every contribution creates a story worth telling. Join our community of 
                changemakers and help us write the next chapter of hope in rural Kenya.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
