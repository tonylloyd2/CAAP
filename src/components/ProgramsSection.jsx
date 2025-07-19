import React from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  useMediaQuery,
} from '@mui/material';
import {
  AccountBalance,
  Grass,
  School as SchoolIcon,
  LocalHospital,
  Water,
  ArrowForward,
} from '@mui/icons-material';

const ProgramsSection = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const programs = [
    {
      icon: AccountBalance,
      title: 'Microfinance Initiatives',
      description: 'Providing small loans and financial literacy training to help community members start and grow sustainable businesses.',
      category: 'Economic Empowerment',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
      features: ['Micro-loans', 'Business Training', 'Financial Literacy', 'Mentorship'],
    },
    {
      icon: Grass,
      title: 'Agricultural Training',
      description: 'Teaching modern farming techniques, sustainable practices, and crop diversification to increase food security and income.',
      category: 'Food Security',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop',
      features: ['Modern Techniques', 'Crop Diversification', 'Equipment Access', 'Market Linkage'],
    },
    {
      icon: SchoolIcon,
      title: 'School Construction & Scholarships',
      description: 'Building educational infrastructure and providing scholarships to ensure every child has access to quality education.',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
      features: ['Infrastructure', 'Scholarships', 'Learning Materials', 'Teacher Training'],
    },
    {
      icon: LocalHospital,
      title: 'Healthcare Clinics',
      description: 'Establishing mobile and permanent healthcare facilities to provide essential medical services to remote communities.',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      features: ['Mobile Clinics', 'Preventive Care', 'Health Education', 'Emergency Services'],
    },
    {
      icon: Water,
      title: 'Water & Sanitation Projects',
      description: 'Installing clean water systems and sanitation facilities to improve health outcomes and quality of life.',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?w=400&h=300&fit=crop',
      features: ['Clean Water Access', 'Sanitation Systems', 'Hygiene Education', 'Maintenance Training'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="programs"
      component="section"
      className="section-padding"
      sx={{
        backgroundColor: '#0F172A',
        backgroundImage: `
          linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, transparent 100%),
          linear-gradient(45deg, rgba(16, 185, 129, 0.03) 0%, transparent 100%)
        `,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
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
              Our Programs
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
              Comprehensive programs designed to address multiple aspects of poverty 
              through innovative, community-centered approaches
            </Typography>
          </motion.div>

          {/* Programs Grid - Clean Professional Layout */}
          <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr', 
                  md: 'repeat(2, 1fr)', 
                  lg: 'repeat(3, 1fr)' 
                },
                gap: { xs: 3, md: 4, lg: 5 },
                justifyItems: 'center',
              }}
            >
              {programs.map((program, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    width: '100%',
                    maxWidth: '400px',
                  }}
                >
                <motion.div
                  variants={cardVariants}
                  whileHover={!isMobile ? {
                    y: -12,
                    scale: 1.03,
                    transition: { duration: 0.4, ease: "easeOut" },
                  } : {}}
                  animate={isMobile ? {
                    y: [0, -3, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.8,
                    }
                  } : {}}
                >
                  <Card
                    sx={{
                      height: '420px',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      background: 'rgba(15, 23, 42, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(34, 197, 94, 0.15)',
                      position: 'relative',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #22C55E, #10B981, #06B6D4)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        borderColor: 'rgba(34, 197, 94, 0.3)',
                        boxShadow: '0 20px 60px rgba(34, 197, 94, 0.15)',
                        '&::before': {
                          opacity: 1,
                        },
                        '& .program-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                      },
                    }}
                  >
                    {/* Icon Header */}
                    <Box
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))',
                        borderBottom: '1px solid rgba(34, 197, 94, 0.1)',
                      }}
                    >
                      <Box
                        className="program-icon"
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '16px',
                          background: 'linear-gradient(135deg, #22C55E, #10B981)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <program.icon sx={{ fontSize: 32, color: 'white' }} />
                      </Box>
                      
                      <Chip
                        label={program.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(34, 197, 94, 0.15)',
                          color: '#22C55E',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          borderRadius: '12px',
                        }}
                      />
                    </Box>

                    <CardContent 
                      sx={{ 
                        p: 3,
                        height: 'calc(100% - 120px)',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          color: '#F8FAFC',
                          fontWeight: 700,
                          mb: 2,
                          lineHeight: 1.2,
                          fontSize: '1.4rem',
                        }}
                      >
                        {program.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#94A3B8',
                          lineHeight: 1.6,
                          mb: 3,
                          flex: 1,
                          fontSize: '0.95rem',
                        }}
                      >
                        {program.description}
                      </Typography>

                      <Box sx={{ mt: 'auto' }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: '#22C55E', 
                            mb: 1.5, 
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          Key Features
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {program.features.slice(0, 3).map((feature, idx) => (
                            <Chip
                              key={idx}
                              label={feature}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                                color: '#22C55E',
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                borderRadius: '8px',
                                height: '24px',
                              }}
                            />
                          ))}
                          {program.features.length > 3 && (
                            <Chip
                              label={`+${program.features.length - 3} more`}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(148, 163, 184, 0.1)',
                                color: '#94A3B8',
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                borderRadius: '8px',
                                height: '24px',
                              }}
                            />
                          )}
                        </Box>

                        <Button
                          variant="outlined"
                          endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                          sx={{
                            borderColor: 'rgba(34, 197, 94, 0.3)',
                            color: '#22C55E',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            borderRadius: '12px',
                            textTransform: 'none',
                            width: '100%',
                            py: 1,
                            '&:hover': {
                              backgroundColor: 'rgba(34, 197, 94, 0.1)',
                              borderColor: '#22C55E',
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Call to Action */}
          <motion.div variants={cardVariants} className="text-center mt-5">
            <Box
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, #22C55E, #10B981)',
                borderRadius: '24px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  transform: 'translate(50%, -50%)',
                },
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Get Involved in Our Programs
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  opacity: 0.95,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Your support can help us expand these life-changing programs to reach more communities
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#15803D',
                  fontWeight: 700,
                  px: 4,
                  py: 2,
                  position: 'relative',
                  zIndex: 1,
                  '&:hover': {
                    background: 'white',
                  },
                }}
              >
                Support Our Programs
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProgramsSection;
