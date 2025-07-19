import React from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  Nature,
  Diversity1,
  Handshake,
  Visibility,
  TrendingUp,
} from '@mui/icons-material';

const CoreValuesSection = () => {
  const values = [
    {
      icon: Nature,
      title: 'Sustainability',
      description: 'Environmental and economic sustainability in all our programs, ensuring long-term positive impact for future generations.',
      color: '#22C55E',
    },
    {
      icon: Diversity1,
      title: 'Inclusivity',
      description: 'Serving all community members without discrimination, embracing diversity and ensuring equal opportunities for everyone.',
      color: '#10B981',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Partnering with local organizations, government, and international partners to maximize our collective impact.',
      color: '#15803D',
    },
    {
      icon: Visibility,
      title: 'Transparency',
      description: 'Maintaining full accountability in our operations, finances, and impact reporting to build trust with our communities.',
      color: '#86EFAC',
    },
    {
      icon: TrendingUp,
      title: 'Empowerment',
      description: 'Fostering community-led development that builds local capacity and ensures sustainable self-reliance.',
      color: '#22C55E',
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="values"
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
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}>
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
              Our Core Values
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#CBD5E1',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              The fundamental principles that guide every decision and action 
              in our mission to fight poverty
            </Typography>
          </motion.div>

          {/* Values Layout - Flexbox two-row layout */}
          <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
            {/* First Row - 3 items */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'center',
                mb: 3,
              }}
            >
              {values.slice(0, 3).map((value, index) => (
                <Box key={index} sx={{ flex: '1 1 300px', maxWidth: '320px' }}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    style={{ height: '100%' }}
                  >
                    <Card
                      sx={{
                        height: '200px',
                        background: 'rgba(30, 41, 59, 0.9)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        borderRadius: '12px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: `linear-gradient(45deg, ${value.color}, rgba(34, 197, 94, 0.8))`,
                        },
                        '&:hover': {
                          boxShadow: `0 8px 25px ${value.color}40`,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${value.color}08, ${value.color}03)`,
                            zIndex: 1,
                          },
                        },
                      }}
                    >
                      <CardContent 
                        sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'center', 
                          textAlign: 'center',
                          p: 2.5,
                          position: 'relative',
                          zIndex: 2,
                          height: '100%',
                        }}
                      >
                        <Box sx={{ mb: 1.5 }}>
                          <Avatar
                            sx={{
                              width: 48,
                              height: 48,
                              background: `linear-gradient(45deg, ${value.color}, rgba(34, 197, 94, 0.8))`,
                              mb: 1,
                              boxShadow: `0 4px 12px ${value.color}30`,
                            }}
                          >
                            <value.icon sx={{ fontSize: 24, color: 'white' }} />
                          </Avatar>
                        </Box>
                        
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            color: '#F8FAFC',
                            fontWeight: 600,
                            mb: 1,
                            lineHeight: 1.2,
                            fontSize: '1.1rem',
                          }}
                        >
                          {value.title}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#CBD5E1',
                            lineHeight: 1.4,
                            fontSize: '0.85rem',
                            textAlign: 'center',
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>

            {/* Second Row - 2 items centered */}
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {values.slice(3, 5).map((value, index) => (
                <Box key={index + 3} sx={{ flex: '1 1 300px', maxWidth: '320px' }}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    style={{ height: '100%' }}
                  >
                    <Card
                      sx={{
                        height: '200px',
                        background: 'rgba(30, 41, 59, 0.9)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        borderRadius: '12px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: `linear-gradient(45deg, ${value.color}, rgba(34, 197, 94, 0.8))`,
                        },
                        '&:hover': {
                          boxShadow: `0 8px 25px ${value.color}40`,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${value.color}08, ${value.color}03)`,
                            zIndex: 1,
                          },
                        },
                      }}
                    >
                      <CardContent 
                        sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'center', 
                          textAlign: 'center',
                          p: 2.5,
                          position: 'relative',
                          zIndex: 2,
                          height: '100%',
                        }}
                      >
                        <Box sx={{ mb: 1.5 }}>
                          <Avatar
                            sx={{
                              width: 48,
                              height: 48,
                              background: `linear-gradient(45deg, ${value.color}, rgba(34, 197, 94, 0.8))`,
                              mb: 1,
                              boxShadow: `0 4px 12px ${value.color}30`,
                            }}
                          >
                            <value.icon sx={{ fontSize: 24, color: 'white' }} />
                          </Avatar>
                        </Box>
                        
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            color: '#F8FAFC',
                            fontWeight: 600,
                            mb: 1,
                            lineHeight: 1.2,
                            fontSize: '1.1rem',
                          }}
                        >
                          {value.title}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#CBD5E1',
                            lineHeight: 1.4,
                            fontSize: '0.85rem',
                            textAlign: 'center',
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Values Statement */}
          <motion.div variants={itemVariants} className="text-center">
            <Box
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, #22C55E, #10B981)',
                borderRadius: '20px',
                maxWidth: '900px',
                mx: 'auto',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
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
                  color: 'white',
                  fontWeight: 700,
                  mb: 2,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                Values-Driven Impact
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                  position: 'relative',
                  zIndex: 2,
                  fontWeight: 400,
                }}
              >
                These core values are not just words on paper – they are the foundation 
                of every program we implement, every partnership we form, and every 
                decision we make in our journey toward poverty eradication.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CoreValuesSection;
