import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import {
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  VolunteerActivism,
  AttachMoney,
  Handshake,
  ArrowUpward,
} from '@mui/icons-material';

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #111827, #1F2937)',
        color: 'white',
        position: 'relative',
        pt: 6,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 30%)
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
          {/* Call to Action Section */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                mb: 6,
                background: {
                  xs: 'linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(16, 185, 129, 0.95))',
                  md: 'linear-gradient(135deg, #22C55E, #10B981)'
                },
                borderRadius: { xs: '16px', md: '24px' },
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: { xs: '200px', md: '400px' },
                  height: { xs: '200px', md: '400px' },
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  transform: 'translate(50%, -50%)',
                },
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, md: 2 },
                  position: 'relative',
                  zIndex: 1,
                  color: '#F8FAFC',
                  fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
                  lineHeight: { xs: 1.2, md: 1.3 },
                }}
              >
                Join the Fight Against Poverty
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: { xs: 3, md: 4 },
                  opacity: 0.95,
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: { xs: '100%', md: '600px' },
                  mx: 'auto',
                  color: '#CBD5E1',
                  fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: { xs: 1.5, md: 1.6 },
                  px: { xs: 1, md: 0 }
                }}
              >
                Every contribution, every volunteer hour, every partnership 
                brings us closer to our vision of poverty-free communities
              </Typography>
              <Box
                sx={{ 
                  position: 'relative', 
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: { xs: 2, sm: 3 },
                  flexWrap: 'wrap'
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<VolunteerActivism />}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#15803D',
                    fontWeight: 700,
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    width: { xs: '200px', sm: 'auto' },
                    borderRadius: { xs: '12px', md: '8px' },
                    '&:hover': {
                      background: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                    },
                  }}
                >
                  Volunteer
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AttachMoney />}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#15803D',
                    fontWeight: 700,
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    width: { xs: '200px', sm: 'auto' },
                    borderRadius: { xs: '12px', md: '8px' },
                    '&:hover': {
                      background: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                    },
                  }}
                >
                  Donate
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Handshake />}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#15803D',
                    fontWeight: 700,
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    width: { xs: '200px', sm: 'auto' },
                    borderRadius: { xs: '12px', md: '8px' },
                    '&:hover': {
                      background: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                    },
                  }}
                >
                  Partner
                </Button>
              </Box>
            </Paper>
          </motion.div>

          {/* Footer Content */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {/* About Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div variants={itemVariants}>
                <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 3, color: '#22C55E' }}>
                  CAAP
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3, opacity: 0.9, color: '#F8FAFC' }}>
                  Community Action Against Poverty is dedicated to transforming lives 
                  in rural Kenya through sustainable development programs that address 
                  the root causes of poverty.
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#86EFAC', fontWeight: 600 }}>
                  Founded September 2020
                </Typography>
              </motion.div>
            </Grid>

            {/* Contact Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 3, color: '#F8FAFC' }}>
                  Get in Touch
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Box className="d-flex align-items-center mb-2">
                    <LocationOn sx={{ mr: 2, color: '#22C55E' }} />
                    <Typography variant="body2" sx={{ color: '#CBD5E1' }}>
                      Bungoma County, Kenya<br />
                      Chwele, Kabuchai & Mt. Elgon
                    </Typography>
                  </Box>
                  <Box className="d-flex align-items-center mb-2">
                    <Email sx={{ mr: 2, color: '#22C55E' }} />
                    <Typography variant="body2" sx={{ color: '#CBD5E1' }}>info@caap.org</Typography>
                  </Box>
                  <Box className="d-flex align-items-center">
                    <Phone sx={{ mr: 2, color: '#22C55E' }} />
                    <Typography variant="body2" sx={{ color: '#CBD5E1' }}>+254 XXX XXX XXX</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Social & Links Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 3, color: '#F8FAFC' }}>
                  Connect With Us
                </Typography>
                
                {/* Logo */}
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <img 
                    src={logo} 
                    alt="CAAP Logo" 
                    style={{ 
                      height: '60px', 
                      width: 'auto',
                      filter: 'brightness(0) invert(1)', // Makes logo white
                    }} 
                  />
                </Box>
                
                <Box className="d-flex gap-2 mb-4">
                  <IconButton
                    sx={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: '#22C55E',
                      '&:hover': {
                        backgroundColor: '#22C55E',
                        color: 'white',
                      },
                    }}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: '#22C55E',
                      '&:hover': {
                        backgroundColor: '#22C55E',
                        color: 'white',
                      },
                    }}
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: '#22C55E',
                      '&:hover': {
                        backgroundColor: '#22C55E',
                        color: 'white',
                      },
                    }}
                  >
                    <Instagram />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: '#22C55E',
                      '&:hover': {
                        backgroundColor: '#22C55E',
                        color: 'white',
                      },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6, color: '#CBD5E1' }}>
                  Follow our journey as we work together to build stronger, 
                  more resilient communities across rural Kenya.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Bottom Footer */}
          <motion.div variants={itemVariants}>
            <Box className="d-flex flex-wrap justify-content-between align-items-center">
              <Typography variant="body2" sx={{ opacity: 0.7, color: '#CBD5E1' }}>
                © 2024 Community Action Against Poverty (CAAP). All rights reserved.
              </Typography>
              <Button
                onClick={scrollToTop}
                startIcon={<ArrowUpward />}
                sx={{
                  color: '#22C55E',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  },
                }}
              >
                Back to Top
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
