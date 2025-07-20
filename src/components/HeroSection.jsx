import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Chip,
} from '@mui/material';
import {
  VolunteerActivism,
  School,
  ArrowForward,
} from '@mui/icons-material';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      id="home"
      component="section"
      className="hero-section position-relative d-flex align-items-center"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.95))',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="60" cy="60" r="5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center bottom, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, lg: 8 }}>
              <motion.div variants={itemVariants}>
                <Chip
                  label="Founded September 2020"
                  sx={{
                    mb: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    fontWeight: 600,
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  component="h1"
                  className="text-white mb-4"
                  sx={{
                    fontWeight: 700,
                    textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
                    lineHeight: 1.1,
                  }}
                >
                  Fighting Poverty,{' '}
                  <Box component="span" sx={{ color: '#86EFAC' }}>
                    Building Hope
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  className="text-white mb-4"
                  sx={{
                    fontWeight: 400,
                    opacity: 0.95,
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    textShadow: '0 1px 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Empowering rural communities in Bungoma, Kenya through sustainable 
                  development programs that address education, healthcare, and economic opportunities.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  className="text-white mb-5"
                  sx={{
                    fontWeight: 600,
                    opacity: 0.9,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  Community Action Against Poverty
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<VolunteerActivism />}
                  endIcon={<ArrowForward />}
                  sx={{
                    background: 'linear-gradient(45deg, #FFFFFF, #F3F4F6)',
                    color: '#15803D',
                    fontWeight: 700,
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #F3F4F6, #E5E7EB)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 35px rgba(255, 255, 255, 0.4)',
                    },
                  }}
                >
                  Join Our Mission
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<School />}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderWidth: '2px',
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="d-flex justify-content-center"
              >
                <Box
                  sx={{
                    width: { xs: 300, md: 400 },
                    height: { xs: 300, md: 400 },
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80%',
                      height: '80%',
                      background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(134, 239, 172, 0.2))',
                      borderRadius: '50%',
                      animation: 'pulse 4s ease-in-out infinite',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    className="text-white text-center"
                    sx={{
                      fontWeight: 700,
                      zIndex: 1,
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    CAAP
                    <Typography variant="body1" component="div" sx={{ mt: 1, opacity: 0.9 }}>
                      Since 2020
                    </Typography>
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Floating particles effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.5;
          }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
