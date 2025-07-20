import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const impactData = [
    {
      id: 1,
      number: 15000,
      label: { xs: 'Lives Changed', md: 'Lives Transformed' },
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      suffix: '+'
    },
    {
      id: 2,
      number: 250,
      label: { xs: 'Kids in School', md: 'Children Educated' },
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      suffix: '+'
    },
    {
      id: 3,
      number: 12,
      label: { xs: 'Health Programs', md: 'Healthcare Programs' },
      icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
      suffix: ''
    },
    {
      id: 4,
      number: 8,
      label: { xs: 'Water Projects', md: 'Clean Water Projects' },
      icon: <WaterDropIcon sx={{ fontSize: 40 }} />,
      suffix: ''
    }
  ];

  const CounterCard = ({ item, index }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          const duration = 2000;
          const increment = item.number / (duration / 50);
          let current = 0;
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= item.number) {
              setCount(item.number);
              clearInterval(counter);
            } else {
              setCount(Math.floor(current));
            }
          }, 50);
          
          return () => clearInterval(counter);
        }, index * 200);
        
        return () => clearTimeout(timer);
      }
    }, [item.number, index]); // Removed isInView from dependencies

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.175, 0.885, 0.32, 1.275]
        }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Card
          sx={{
            height: '100%',
            textAlign: 'center',
            background: {
              xs: 'linear-gradient(135deg, rgba(34, 197, 94, 0.06) 0%, rgba(16, 185, 129, 0.09) 100%)',
              md: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)'
            },
            backdropFilter: 'blur(12px)',
            border: {
              xs: '1.5px solid rgba(34, 197, 94, 0.25)',
              md: '2px solid rgba(34, 197, 94, 0.08)'
            },
            borderRadius: { xs: 2, md: 4 },
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            mx: { xs: 0, sm: 0 },
            mb: { xs: 1.5, sm: 0 },
            minHeight: { xs: '80px', sm: '100px', md: '200px' },
            maxHeight: { xs: '100px', sm: '120px', md: 'none' },
            maxWidth: { xs: '100%', sm: 'none' },
            boxShadow: {
              xs: '0 2px 10px rgba(0, 0, 0, 0.1)',
              md: '0 8px 32px rgba(34, 197, 94, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06)'
            },
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: { xs: '0px', md: '4px' },
              background: 'linear-gradient(90deg, #22C55E, #10B981, #06B6D4)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover': {
              transform: { xs: 'translateY(-4px) scale(1.02)', md: 'translateY(-12px) scale(1.05)' },
              boxShadow: {
                xs: '0 8px 25px rgba(34, 197, 94, 0.2)',
                md: '0 20px 60px rgba(34, 197, 94, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1)'
              },
              border: {
                xs: '2px solid rgba(34, 197, 94, 0.4)',
                md: '2px solid rgba(34, 197, 94, 0.25)'
              },
              background: {
                xs: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.12) 100%)',
                md: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(34, 197, 94, 0.03) 100%)'
              },
              '&::before': {
                opacity: { xs: 0, md: 1 },
              },
              '& .impact-icon': {
                transform: { xs: 'none', md: 'scale(1.1) rotate(5deg)' },
                color: { xs: '#15803D', md: '#22C55E' }
              },
              '& .impact-number': {
                color: { xs: '#15803D', md: '#22C55E' },
                textShadow: { xs: 'none', md: '0 2px 8px rgba(34, 197, 94, 0.3)' }
              }
            }
          }}
        >
          <CardContent sx={{ 
            py: { xs: 1, md: 4 }, 
            px: { xs: 1.5, md: 3 },
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            justifyContent: { xs: 'flex-start', md: 'center' },
            alignItems: 'center',
            height: '100%',
            gap: { xs: 1.5, md: 0 }
          }}>
            <Box
              className="impact-icon"
              sx={{
                color: { xs: '#15803D', md: '#22C55E' },
                mb: { xs: 0, md: 2 },
                display: 'flex',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                '& svg': {
                  fontSize: { xs: 28, sm: 32, md: 48 }
                }
              }}
            >
              {item.icon}
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'row', md: 'column' },
              alignItems: { xs: 'center', md: 'center' },
              gap: { xs: 2, md: 0 },
              width: '100%'
            }}>
              <Typography
                variant="h3"
                className="impact-number"
                sx={{
                  fontWeight: { xs: 700, md: 'bold' },
                  color: { xs: '#15803D', md: '#15803D' },
                  mb: { xs: 0, md: 1 },
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '3.5rem' },
                  textShadow: { xs: '0 1px 2px rgba(21, 128, 61, 0.1)', md: 'none' },
                  minWidth: { xs: 'auto', md: 'auto' },
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  letterSpacing: { xs: 'normal', md: '-0.02em' }
                }}
              >
                {count.toLocaleString()}{item.suffix}
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  color: { xs: '#374151', md: '#6B7280' },
                  fontWeight: { xs: 600, md: 500 },
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '1.2rem' },
                  lineHeight: { xs: 1.2, md: 1.4 },
                  textAlign: { xs: 'left', md: 'center' },
                  flex: { xs: 1, md: 'none' },
                  letterSpacing: { xs: 'normal', md: '0.01em' }
                }}
              >
                {typeof item.label === 'object' ? item.label.xs : item.label}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 4, md: 8 },
        background: {
          xs: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          md: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
        },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322C55E' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: '#22C55E',
                mb: { xs: 1, md: 2 },
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Our Impact
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#94A3B8',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                px: { xs: 3, sm: 2, md: 0 }
              }}
            >
              {/* Mobile: shorter text, Desktop: full text */}
              <Box component="span" sx={{ display: { xs: 'block', md: 'none' } }}>
                Making a real difference in Bungoma County
              </Box>
              <Box component="span" sx={{ display: { xs: 'none', md: 'block' } }}>
                Measuring the difference we make in communities across Bungoma County
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Impact Metrics Grid */}
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
          {impactData.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
              <CounterCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          <Box textAlign="center" mt={{ xs: 5, md: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#22C55E',
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.3rem' },
                px: { xs: 3, sm: 2, md: 0 }
              }}
            >
              {/* Mobile: shorter text, Desktop: full text */}
              <Box component="span" sx={{ display: { xs: 'block', md: 'none' } }}>
                Building stronger communities together
              </Box>
              <Box component="span" sx={{ display: { xs: 'none', md: 'block' } }}>
                Together, we're building stronger communities and brighter futures
              </Box>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ImpactSection;