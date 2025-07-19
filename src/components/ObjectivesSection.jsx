import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Avatar,
  useMediaQuery,
  Chip
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AttachMoney,
  School,
  LocalHospital,
  Restaurant,
  Build,
  People,
  Campaign,
} from '@mui/icons-material';

const ObjectivesSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [currentSlide, setCurrentSlide] = useState(0);

  const objectives = [
    {
      icon: AttachMoney,
      title: 'Economic Empowerment',
      description: 'Creating income-generating opportunities through sustainable agriculture and entrepreneurship programs that help families achieve financial independence.',
    },
    {
      icon: School,
      title: 'Education Access',
      description: 'Providing quality education through school construction, scholarships, and educational resources to ensure every child has the opportunity to learn.',
    },
    {
      icon: LocalHospital,
      title: 'Healthcare Improvement',
      description: 'Establishing affordable healthcare services and health education programs to improve community wellness and reduce preventable diseases.',
    },
    {
      icon: Restaurant,
      title: 'Food Security',
      description: 'Implementing sustainable farming practices and nutrition programs to ensure consistent access to nutritious food for all families.',
    },
    {
      icon: Build,
      title: 'Infrastructure Development',
      description: 'Building essential infrastructure including clean water systems, sanitation facilities, and renewable energy solutions.',
    },
    {
      icon: People,
      title: 'Women & Youth Empowerment',
      description: 'Providing leadership training, skills development, and microloans specifically designed for women and young entrepreneurs.',
    },
    {
      icon: Campaign,
      title: 'Community Advocacy',
      description: 'Advocating for policy changes and community rights to create systemic improvements in poverty reduction and social justice.',
    },
  ];

  // Auto-advance slideshow on mobile
  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % objectives.length);
      }, 2500);
      return () => clearInterval(timer);
    }
  }, [isMobile, objectives.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="objectives"
      component="section"
      className="section-padding"
      sx={{
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        position: 'relative',
        overflow: 'hidden',
        // Add keyframe animations
        '@keyframes rotate': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        '@keyframes pulse': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.05)' },
        },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-5">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: '#F8FAFC',
                fontWeight: 700,
                mb: 3,
                position: 'relative',
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
              Our Key Objectives
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#CBD5E1',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Seven strategic focus areas designed to create comprehensive and 
              sustainable change in rural communities
            </Typography>
          </motion.div>

          {/* Creative Honeycomb Layout for Desktop */}
          {!isMobile ? (
            <Box sx={{ maxWidth: '1000px', mx: 'auto', position: 'relative' }}>
              {/* Central Hub */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '600px',
                }}
              >
                {/* Center Circle */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Box
                    sx={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 10,
                      boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-5px',
                        left: '-5px',
                        right: '-5px',
                        bottom: '-5px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #22C55E, #10B981)',
                        zIndex: -1,
                        opacity: 0.3,
                        animation: 'pulse 2s infinite',
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        textAlign: 'center',
                        lineHeight: 1.2,
                      }}
                    >
                      7 KEY<br />OBJECTIVES
                    </Typography>
                  </Box>
                </motion.div>

                {/* Orbital Cards */}
                {objectives.map((objective, index) => {
                  const angle = (index * 360) / objectives.length - 90; // Start from top
                  const radius = 220;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={index}
                      initial={{ 
                        scale: 0, 
                        x: 0, 
                        y: 0,
                        opacity: 0,
                        rotate: -180 
                      }}
                      animate={{ 
                        scale: 1, 
                        x: x, 
                        y: y,
                        opacity: 1,
                        rotate: 0 
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.15,
                        ease: "easeOut" 
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      style={{
                        position: 'absolute',
                        transformOrigin: 'center',
                      }}
                    >
                      <Card
                        sx={{
                          width: '160px',
                          height: '160px',
                          borderRadius: '20px',
                          background: 'rgba(30, 41, 59, 0.95)',
                          border: '2px solid rgba(34, 197, 94, 0.3)',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)`,
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          },
                          '&:hover': {
                            borderColor: '#22C55E',
                            boxShadow: '0 12px 32px rgba(34, 197, 94, 0.4)',
                            '&::before': {
                              opacity: 1,
                            },
                          },
                        }}
                      >
                        <CardContent
                          sx={{
                            p: 2,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 2,
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 48,
                              height: 48,
                              background: 'linear-gradient(45deg, #22C55E, #10B981)',
                              mb: 1.5,
                              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                            }}
                          >
                            <objective.icon sx={{ fontSize: 24, color: 'white' }} />
                          </Avatar>
                          
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#F8FAFC',
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              lineHeight: 1.2,
                              textAlign: 'center',
                            }}
                          >
                            {objective.title}
                          </Typography>
                          
                          <Chip
                            label={`0${index + 1}`}
                            size="small"
                            sx={{
                              mt: 1,
                              bgcolor: 'rgba(34, 197, 94, 0.2)',
                              color: '#22C55E',
                              fontWeight: 600,
                              fontSize: '0.7rem',
                            }}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </Box>

              {/* Connecting Lines Animation */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '440px',
                  height: '440px',
                  border: '1px dashed rgba(34, 197, 94, 0.3)',
                  borderRadius: '50%',
                  animation: 'rotate 20s linear infinite',
                  zIndex: 1,
                }}
              />
            </Box>
          ) : (
            /* Mobile Slideshow */
            <Box sx={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: 'absolute', width: '100%' }}
                >
                  <Card
                    sx={{
                      height: '200px',
                      background: 'rgba(30, 41, 59, 0.9)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '16px',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(45deg, #22C55E, #10B981)',
                      },
                    }}
                  >
                    <CardContent 
                      sx={{ 
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center'
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          color: '#F8FAFC',
                          fontWeight: 600,
                          lineHeight: 1.3,
                          fontSize: '1.3rem',
                          mb: 2,
                        }}
                      >
                        {objectives[currentSlide].title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#CBD5E1',
                          lineHeight: 1.5,
                          fontSize: '1rem',
                          textAlign: 'center'
                        }}
                      >
                        {objectives[currentSlide].description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
              
              {/* Slide Indicators */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
                {objectives.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: index === currentSlide ? '#22C55E' : 'rgba(203, 213, 225, 0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* Bottom CTA */}
          <motion.div variants={cardVariants} className="text-center mt-5">
            <Box
              sx={{
                p: 4,
                mt: 6,
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
                borderRadius: '20px',
                border: '1px solid rgba(34, 197, 94, 0.2)',
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
                Comprehensive Approach to Sustainable Development
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#CBD5E1',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Our multi-faceted approach ensures that poverty reduction efforts are 
                holistic, sustainable, and community-driven. Each objective reinforces 
                the others, creating a powerful synergy for lasting change.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ObjectivesSection;
