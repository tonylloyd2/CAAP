import React from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import {
  Visibility,
  TrackChanges,
  DateRange,
} from '@mui/icons-material';

const AboutSection = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="about"
      component="section"
      className="section-padding"
      sx={{
        backgroundColor: '#1E293B',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(45deg, rgba(34, 197, 94, 0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(34, 197, 94, 0.05) 25%, transparent 25%)',
          backgroundSize: '60px 60px',
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
              About CAAP
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#CBD5E1',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Community Action Against Poverty - Transforming lives through 
              sustainable development in rural Kenya
            </Typography>
          </motion.div>

          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 3, sm: 4 },
              mb: 5,
              alignItems: 'stretch'
            }}
          >
            {/* Mission Card */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '16px',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
                      <TrackChanges
                        sx={{
                          fontSize: { xs: 32, sm: 40 },
                          color: '#22C55E',
                          mr: 2,
                        }}
                      />
                      <Typography 
                        variant="h4" 
                        component="h3" 
                        sx={{ 
                          color: '#F8FAFC', 
                          fontWeight: 600,
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
                        }}
                      >
                        Our Mission
                      </Typography>
                    </Box>
                    
                    {/* Mobile: Shorter mission text */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          color: '#CBD5E1',
                          fontSize: '1rem',
                        }}
                      >
                        To empower rural communities in Kenya by tackling poverty through 
                        sustainable programs in education, healthcare, and economic empowerment.
                      </Typography>
                    </Box>
                    
                    {/* Desktop: Full mission text */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.7,
                          color: '#CBD5E1',
                          fontSize: '1.1rem',
                        }}
                      >
                        To empower rural communities in Kenya by tackling the root causes of poverty 
                        through sustainable development programs in education, healthcare, economic 
                        empowerment, and infrastructure, fostering self-reliance and improved quality of life.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            {/* Vision Card */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '16px',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
                      <Visibility
                        sx={{
                          fontSize: { xs: 32, sm: 40 },
                          color: '#22C55E',
                          mr: 2,
                        }}
                      />
                      <Typography 
                        variant="h4" 
                        component="h3" 
                        sx={{ 
                          color: '#F8FAFC', 
                          fontWeight: 600,
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
                        }}
                      >
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: { xs: 1.6, md: 1.7 },
                        color: '#CBD5E1',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      To foster communities where every rural community thrives with access to opportunities, 
                      resources, and dignity, free from the cycle of poverty.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>

          {/* Founded Information */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, sm: 4 },
                background: 'linear-gradient(135deg, #22C55E, #10B981)',
                color: 'white',
                borderRadius: '20px',
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
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  gap: { xs: 3, sm: 4 }
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
                    <DateRange sx={{ fontSize: { xs: 40, sm: 50 }, mr: { xs: 2, sm: 3 } }} />
                    <Box>
                      <Typography 
                        variant="h4" 
                        component="h3" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 1,
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
                        }}
                      >
                        Founded September 2020
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          opacity: 0.9,
                          fontSize: { xs: '1rem', sm: '1.25rem' }
                        }}
                      >
                        4+ Years of Impact in Rural Kenya
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Mobile: Shorter text */}
                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        opacity: 0.95,
                      }}
                    >
                      Since our establishment, we've been dedicated to creating lasting change 
                      in Bungoma County, Kenya. Our grassroots approach ensures every program 
                      is community-led and culturally appropriate.
                    </Typography>
                  </Box>
                  
                  {/* Desktop: Full text */}
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        opacity: 0.95,
                      }}
                    >
                      Since our establishment, we've been dedicated to creating lasting change 
                      in the communities of Chwele, Kabuchai, and Mt. Elgon in Bungoma County, 
                      Kenya. Our grassroots approach ensures that every program is community-led 
                      and culturally appropriate.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'center', flexShrink: 0 }}>
                  <Box
                    sx={{
                      width: { xs: 120, sm: 150, md: 180 },
                      height: { xs: 120, sm: 150, md: 180 },
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      border: '3px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      component="div" 
                      sx={{ 
                        fontWeight: 700, 
                        textAlign: 'center',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                      }}
                    >
                      4+
                      <Typography 
                        variant="body1" 
                        component="div" 
                        sx={{ 
                          mt: 1,
                          fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                      >
                        Years
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
